import Link from 'next/link';
import React from 'react';
import { Button } from '../components/ui/button';
import SearchBox from './components/SearchBox';
import Filters from './components/Filters';

export default function HomePage() {
  return (
    <section>
      <div className='flex flex-col-reverse justify-between sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-text-dark100_light900'>All Questions</h1>
        <Link
          href='/ask-question'
          className='text-end'
        >
          <Button className='primary-gradient px-4 py-3 capitalize text-light-900'>
            ask a question
          </Button>
        </Link>
      </div>
      <div className='mt-8 flex justify-between gap-4 sm:items-center'>
        <SearchBox placeholder='Search question' />
        <Filters filters={['filter-1', 'filter-2']} />
      </div>
    </section>
  );
}
