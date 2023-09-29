'use client';
import React from 'react';
import { BaseProps } from '@app/(root)/types';
import { cn } from '@app/(root)/lib/utils';
interface TagProps extends BaseProps {
  tag: string;
}

export default function Tag({ tag, className }: TagProps) {
  return (
    <div
      className={cn(
        'body-medium body-semibold rounded-md border-none bg-light-800 px-4 py-2 text-sm font-light capitalize tracking-widest text-dark-500 transition-[background-color] hover:bg-slate-200 dark:bg-dark-300 dark:text-light-700 dark:hover:bg-slate-900',
        className,
      )}
    >
      {tag}
    </div>
  );
}
