import Link from 'next/link';
import React from 'react';
import { Button } from '../components/ui/button';
import SearchBox from './components/SearchBox';
import FilterDropdown from './components/FilterDropdown';
import { homePageFilters } from '../constants/filter';
import FilterTag from './components/FilterTag';
import { PageParams } from '../types';

interface HomePageSearchParam {
  filter: string;
}
export default function HomePage({
  searchParams: { filter },
}: PageParams<HomePageSearchParam>) {
  const currentFilter = filter as string;
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
      <div className='mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
        <SearchBox placeholder='Search question' />
        <FilterDropdown
          filters={homePageFilters}
          className='basis-60'
        />
      </div>
      <div className='mt-6 hidden md:block'>
        <FilterTag
          filters={homePageFilters}
          activeFilter={currentFilter}
        />
      </div>
    </section>
  );
}
