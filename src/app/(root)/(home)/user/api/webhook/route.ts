import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { prismaClient } from '@src/lib/prisma-client';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local',
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svixId = headerPayload.get('svix-id');
  const svixTimestamp = headerPayload.get('svix-timestamp');
  const svixSignature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new SVIX instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    return new Response('Error occured', {
      status: 400,
    });
  }

  // Get the ID and type
  const eventType = evt.type;

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const user = evt.data;
    await prismaClient.user.upsert({
      where: {
        authProviderId: user.id!,
      },
      update: {
        email: user.email_addresses[0].email_address,
        name: `${user.first_name} ${user.last_name ?? ''}`,
        username: user.username ?? '',
        authProviderId: user.id,
        profilePictureUrl: user.image_url,
      },
      create: {
        email: user.email_addresses[0].email_address,
        name: `${user.first_name} ${user.last_name ?? ''}`,
        username: user.username ?? '',
        authProviderId: user.id,
        profilePictureUrl: user.image_url,
      },
    });
  }

  if (eventType === 'user.deleted') {
    const user = evt.data;
    prismaClient.user.delete({
      where: {
        authProviderId: user.id,
      },
    });
  }
  return new Response('', { status: 201 });
}
