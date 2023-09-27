import React from 'react';
import Image from 'next/image';
import { Input } from '@app/(root)/components/ui/input';
/* max-w-xl */
interface SearchBoxProps {
  placeholder: string;
}
export default function SearchBox({ placeholder }: SearchBoxProps) {
  return (
    <div className='relative w-full'>
      <div className='background-light800_darkgradient relative flex items-center rounded-lg px-4 py-0.5 shadow-sm dark:shadow-none'>
        <Image
          src='/assets/icons/search.svg'
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
