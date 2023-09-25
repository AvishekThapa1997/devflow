import React from 'react';
import Navbar from './components/Navbar';
import { BaseProps } from '@app/(root)/types';

export default function HomeLayout({ children }: BaseProps) {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div>Left Side Bar</div>
        <div>
          Right Side Bar
          <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-6 max-md:pb-14 sm:px-14'>
            <div className='mx-auto w-full max-w-5xl'>{children}</div>
          </section>
        </div>
      </div>
    </>
  );
}
