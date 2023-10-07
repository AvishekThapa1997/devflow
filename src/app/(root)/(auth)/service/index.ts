import { auth } from '@clerk/nextjs';

async function isUserLoggedIn() {
  const { userId }: { userId: string | null } = auth();
  return userId;
}

export { isUserLoggedIn };
