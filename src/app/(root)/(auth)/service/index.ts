import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
// import UnauthorizedError from '@src/errors/unauthorized-error';

async function isUserLoggedIn() {
  const { userId }: { userId: string | null } = auth();
  if (!userId) {
    return redirect('/sign-in');
  }
  return userId as string;
}

export { isUserLoggedIn };
