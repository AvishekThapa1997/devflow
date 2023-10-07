'use server';

import tryCatchWrapper from '@src/app/(root)/utils/try-catch-util';
import { prismaClient } from '@src/lib/prisma-client';

async function getUserFromAuthProviderId(authProviderId: string) {
  const { error, data } = await tryCatchWrapper(async () => {
    return prismaClient.user.findUnique({
      where: {
        authProviderId,
      },
    });
  });
  return { error, data };
}

export { getUserFromAuthProviderId };
