import { authMiddleware, clerkClient, redirectToSignIn } from '@clerk/nextjs';
import tryCatchWrapper from './app/(root)/utils/try-catch-util';
import { prismaClientEdge } from './lib/prisma-client';

export default authMiddleware({
  publicRoutes: ['/', '/community'],
  async afterAuth(auth, req, evt) {
    const userId = auth.userId;
    if (!userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    await tryCatchWrapper(async () => {
      const user = await clerkClient.users.getUser(userId as string);
      if (user) {
        await prismaClientEdge.user.upsert({
          where: {
            authProviderId: userId!,
          },
          update: {},
          create: {
            email: user.emailAddresses[0].emailAddress,
            name: `${user.firstName} ${user.lastName}`,
            username: user.username ?? '',
            authProviderId: user.id,
          },
        });
      }
    });
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
