'use client';
import React from 'react';
import Image from 'next/image';
import { Input } from '@app/(root)/components/ui/input';
import { BaseProps } from '@app/(root)/types';
/* max-w-xl */

interface SearchBoxProps extends BaseProps {
  placeholder: string;
  iconPosition?: 'left' | 'right';
  imgSrc?: string;
  route?: string;
}
export default function SearchBox({
  placeholder,
  iconPosition = 'left',
  imgSrc = '/assets/icons/search.svg',
}: SearchBoxProps) {
  return (
    <div className='relative w-full'>
      <div className='background-light800_darkgradient relative flex items-center rounded-lg px-4 py-0.5 shadow-sm dark:shadow-none'>
        <Image
          src={imgSrc}
          alt='search'
          height={24}
          width={24}
          className='cursor-pointer'
        />
        <Input
          type='text'
          placeholder={placeholder}
          className='paragraph-regular text-dark400_light700 no-focus border-none border-transparent bg-transparent shadow-none outline-none 
          focus-within:border-transparent'
        />
      </div>
    </div>
  );
}
