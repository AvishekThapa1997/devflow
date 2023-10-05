import Image from 'next/image';
import { Button } from '@app/(root)/components/ui/button';
import React from 'react';

export default function SignInButton() {
  return (
    <Button className='small-medium btn-secondary flex min-h-[40px] w-full  gap-2  rounded-lg px-4 py-3'>
      <Image
        src='/assets/icons/account.svg'
        alt='sign-in'
        height={20}
        width={20}
        className='invert-colors block max-sm:hidden lg:hidden'
      />
      <span className='primary-text-gradient hidden max-sm:block lg:block'>
        Sign In
      </span>
    </Button>
  );
}
