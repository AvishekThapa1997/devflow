import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, UserButton } from '@clerk/nextjs';
import ThemeMenu from './ThemeMenu';

function Navlogo() {
  return (
    <Link
      href='/'
      className='flex items-center gap-2'
    >
      <Image
        src='/assets/images/site-logo.svg'
        width={23}
        height={23}
        alt='DevFlow'
      />
      <p className='h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 capitalize max-sm:hidden'>
        dev <span className='text-primary-500 capitalize'>overflow</span>
      </p>
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className='flex-between background-light900_dark200 shadow-light-300 w-full gap-5 p-4 dark:shadow-none sm:px-6'>
      <Navlogo />
      {/* SEARCH BOX */}
      <div>search box</div>
      <div className='flex-between gap-5'>
        <ThemeMenu />
        <SignedIn>
          <UserButton
            afterSignOutUrl='/'
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              },
              variables: {
                colorPrimary: '#ff7000',
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
