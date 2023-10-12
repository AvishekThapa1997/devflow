import { auth } from '@clerk/nextjs';
import UnauthorizedError from '@src/errors/unauthorized-error';

async function isUserLoggedIn() {
  const { userId }: { userId: string | null } = auth();
  if (!userId) {
    throw new UnauthorizedError();
  }
  return userId;
}

export { isUserLoggedIn };
