import React from 'react';
import Navbar from './shared/components/Navbar';
import { BaseProps } from '@app/(root)/types';
import LeftSidebar from './shared/components/LeftSidebar';
import RightSidebar from './shared/components/RightSidebar';

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
          <section className='flex h-full flex-col p-6 sm:px-12'>
            <div className='content-container mx-auto h-full w-full max-w-5xl'>
              {children}
            </div>
          </section>
        </div>
        <div className='hidden xl:block xl:flex-[3]'>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
