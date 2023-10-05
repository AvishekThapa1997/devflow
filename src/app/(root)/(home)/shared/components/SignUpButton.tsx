import Image from 'next/image';
import { Button } from '@app/(root)/components/ui/button';
import React from 'react';

export default function SignUpButton() {
  return (
    <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 flex min-h-[40px] w-full gap-2 rounded-lg px-4 py-3'>
      <Image
        src='/assets/icons/sign-up.svg'
        alt='sign-up'
        height={20}
        width={20}
        className='invert-colors block max-sm:hidden lg:hidden'
      />
      <span className='hidden max-sm:block lg:block'>Sign Up</span>
    </Button>
  );
}
