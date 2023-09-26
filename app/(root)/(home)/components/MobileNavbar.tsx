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
import Link from 'next/link';
import { Button } from '@app/(root)/components/ui/button';
import NavbarContent from './NavbarContent';

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
        className='max-w-xs'
      >
        <NavbarLogo>
          <LogoImage />
          <LogoText className='max-sm:block' />
        </NavbarLogo>
        <SheetClose asChild>
          <NavbarContent />
        </SheetClose>
        <div className='mt-4 flex flex-col gap-2'>
          <SignedOut>
            <SheetClose asChild>
              <Link
                href='/sign-in'
                className='w-full'
              >
                <Button className='small-medium btn-secondary  min-h-[40px] w-full rounded-lg px-4 py-3'>
                  <span className='primary-text-gradient'>Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href='/sign-up'
                className='w-full'
              >
                <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[40px] w-full rounded-lg px-4 py-3'>
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
}
