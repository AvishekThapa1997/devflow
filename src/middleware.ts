import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
// import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/community',
    '/jobs',
    '/question/:id',
    '/tags',
    '/tags/:id',
    '/profile/:id',
    /.*\/api\/webhook$/,
  ],
  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
