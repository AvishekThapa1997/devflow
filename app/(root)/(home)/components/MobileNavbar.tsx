import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@app/(root)/components/ui/sheet';
import Image from 'next/image';
import LogoImage from './LogoImage';
import LogoText from './LogoText';
import NavbarLogo from './NavbarLogo';
import { SignedOut } from '@clerk/nextjs';
import NavbarContent from './NavbarContent';
import AuthActionLink from './AuthActionLink';
import SignUpButton from './SignUpButton';
import SignInButton from './SignInButton';

export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className='cursor-pointer'
      >
        <Image
          src='/assets/icons/hamburger.svg'
          width={36}
          height={36}
          alt='Menu'
          className='invert-colors sm:hidden'
        />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='max-w-xs overflow-y-auto'
      >
        <NavbarLogo>
          <LogoImage />
          <LogoText className='max-sm:block' />
        </NavbarLogo>
        <div className='flex h-full flex-col justify-between py-4'>
          <SheetClose asChild>
            <NavbarContent isShownForMobileNav />
          </SheetClose>
          <div className='flex flex-col gap-2'>
            <SignedOut>
              <SheetClose asChild>
                <AuthActionLink href='/sign-in'>
                  <SignInButton />
                </AuthActionLink>
              </SheetClose>
              <SheetClose asChild>
                <AuthActionLink href='/sign-up'>
                  <SignUpButton />
                </AuthActionLink>
              </SheetClose>
            </SignedOut>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
