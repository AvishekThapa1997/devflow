import React from 'react';
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
  title: 'DevFlow',
  description:
    'Discover a world of knowledge and expertise at our online community. Join us for answers, discussions, and insights on everything from coding conundrums to technology trends. Unlock the power of collective wisdom at DevFlow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: 'primary-gradient',
            footerActionLink:
              'primary-text-gradient font-semibold tracking-wide hover:text-black',
          },
        }}
      >
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <main>{children}</main>
        </body>
      </ClerkProvider>
    </html>
  );
}
