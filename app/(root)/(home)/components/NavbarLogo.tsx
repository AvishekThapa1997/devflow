import React from 'react';
import Link from 'next/link';
import { BaseProps } from '@app/(root)/types';

export default function NavbarLogo({ children }: BaseProps) {
  return (
    <Link
      href='/'
      className='flex items-center gap-2'
    >
      {children}
    </Link>
  );
}
