import React from 'react';
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';
import ThemeProvider from './context/ThemeProvider';

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
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',

              footerActionLink:
                'primary-text-gradient font-semibold tracking-wide hover:text-black',
            },
            variables: {
              colorPrimary: '#FF7000',
            },
          }}
        >
          <ThemeProvider>
            <main className='background-light850_dark100 relative h-screen overflow-hidden'>
              {children}
            </main>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
