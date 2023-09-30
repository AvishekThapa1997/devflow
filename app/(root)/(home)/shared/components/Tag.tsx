'use client';
import React from 'react';
import { BaseProps } from '@app/(root)/types';
import { cn } from '@app/(root)/lib/utils';
import Image from 'next/image';
interface TagProps extends BaseProps {
  tag: string;
  iconUrl?: string;
  iconAlt?: string;
  onIconClick?: () => void;
}

export default function Tag({ tag, iconUrl, iconAlt, onIconClick,className }: TagProps) {
  return (
    <div
      className={cn(
        'body-medium body-semibold rounded-md border-none bg-light-800 px-4 py-2 text-sm font-light capitalize tracking-widest text-dark-500 transition-[background-color] hover:bg-slate-200 dark:bg-dark-300 dark:text-light-700 dark:hover:bg-slate-900',
        className,
      )}
    >
      <span>{tag}</span>
      {iconUrl ? (
        <Image
          src={iconUrl!}
          height={12}
          width={12}
          alt={iconAlt!}
          className='cursor-pointer object-contain invert-0 dark:invert'
          onClick={(e) => onIconClick?.()}
        />
      ) : null}
    </div>
  );
}
