import React from 'react';
import Navbar from './components/Navbar';
import { BaseProps } from '@app/(root)/types';
import LeftSidebar from './components/LeftSidebar';

export default function HomeLayout({ children }: BaseProps) {
  return (
    <div className='h-full'>
      <div className='min-h-[10vh]'>
        <Navbar />
      </div>
      <div className='flex min-h-[90vh]'>
        <LeftSidebar />
        <div className='h-full flex-1'>
          <section className='flex h-full flex-1 flex-col px-6 pb-6 pt-6 max-md:pb-14 sm:px-14'>
            <div className='mx-auto w-full max-w-5xl'>{children}</div>
          </section>
        </div>
      </div>
    </div>
  );
}
