import React from 'react';
import Image from 'next/image';
import { BaseProps } from '@app/(root)/types';
import { cn } from '@app/(root)/utils';

export default function LogoImage({ className = '' }: BaseProps) {
  return (
    <Image
      src='/assets/images/site-logo.svg'
      width={23}
      height={23}
      alt='DevFlow'
      className={cn(className)}
    />
  );
}
