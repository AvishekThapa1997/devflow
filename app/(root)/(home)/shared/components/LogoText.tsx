import { cn } from '@app/(root)/utils';
import { BaseProps } from '@app/(root)/types';
import React from 'react';

export default function LogoText({ className }: BaseProps) {
  return (
    <p
      className={cn(
        'h2-bold font-spaceGrotesk capitalize text-dark-100 dark:text-light-900 max-sm:hidden',
        className,
      )}
    >
      dev <span className='capitalize text-primary-500'>overflow</span>
    </p>
  );
}
