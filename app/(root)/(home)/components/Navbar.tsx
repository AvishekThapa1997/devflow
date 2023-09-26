import React from 'react';
import { SignedIn, UserButton } from '@clerk/nextjs';
import ThemeMenu from './ThemeMenu';
import MobileNavbar from './MobileNavbar';
import LogoImage from './LogoImage';
import LogoText from './LogoText';
import NavbarLogo from './NavbarLogo';
import SearchBox from './SearchBox';

export default function Navbar() {
  return (
    <nav className='flex-between background-light900_dark200 h-full w-full gap-5 p-4 shadow-light-300 dark:shadow-none sm:px-6'>
      <div>
        <NavbarLogo>
          <LogoImage />
          <LogoText />
        </NavbarLogo>
      </div>

      <div className='mx-auto basis-1/2 -translate-x-10 max-lg:hidden'>
        <SearchBox />
      </div>
      <div className='flex items-center justify-end gap-5'>
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
        <MobileNavbar />
      </div>
    </nav>
  );
}
