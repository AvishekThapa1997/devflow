import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/', '/community'],
  afterAuth(auth, req, evt) {
    const path = req.url;
    if (auth.isApiRoute && path.includes('webhook')) {
      return NextResponse.next();
    }
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: path });
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
