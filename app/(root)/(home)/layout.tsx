import React from 'react';
import Navbar from './components/Navbar';
import { BaseProps } from '@app/(root)/types';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

export default function HomeLayout({ children }: BaseProps) {
  return (
    <div className='h-full'>
      <div className='nav-container min-h-[4rem]'>
        <Navbar />
      </div>
      <div className='content-container flex'>
        <div className='hidden sm:block lg:w-72'>
          <LeftSidebar />
        </div>
        <div className='flex-1 xl:flex-[7]'>
          <section className='flex flex-col px-6 pb-6 pt-6 max-md:pb-14 sm:px-14'>
            <div className='mx-auto w-full max-w-5xl'>{children}</div>
          </section>
        </div>
        <div className='hidden xl:block xl:flex-[3]'>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
