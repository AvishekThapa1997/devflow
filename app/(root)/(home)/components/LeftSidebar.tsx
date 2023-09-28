import React from 'react';
import NavbarContent from './NavbarContent';
import { SignedOut } from '@clerk/nextjs';
import AuthActionLink from './AuthActionLink';
import SignUpButton from './SignUpButton';
import SignInButton from './SignInButton';

export default function LeftSidebar() {
  return (
    <aside className='background-light900_dark200 h-full flex-col justify-between overflow-y-auto border-r p-6 px-4 pb-6 shadow-light-300 dark:shadow-none sm:flex'>
      <NavbarContent />
      <SignedOut>
        <div className='flex flex-col gap-2 pb-6'>
          <AuthActionLink href='/sign-in'>
            <SignInButton />
          </AuthActionLink>
          <AuthActionLink href='/sign-up'>
            <SignUpButton />
          </AuthActionLink>
        </div>
      </SignedOut>
    </aside>
  );
}
