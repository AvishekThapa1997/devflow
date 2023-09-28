import React from 'react';
import SearchBox from './shared/components/SearchBox';
import FilterDropdown from './shared/components/FilterDropdown';
import { homePageFilters } from '../constants/filter';
import FilterTag from './components/FilterTag';
import { PageParams } from '../types';
import Questions from './components/Questions';
import LinkButton from './shared/components/AskQuestion';

interface HomePageSearchParam {
  filter: string;
}

export default function HomePage({
  searchParams: { filter },
}: PageParams<HomePageSearchParam>) {
  const currentFilter = filter as string;
  return (
    <section className='no-scrollbar h-full overflow-y-auto'>
      <div className='flex flex-col-reverse justify-between sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-text-dark100_light900'>All Questions</h1>
        <LinkButton
          href='/'
          title='ask a question'
        />
      </div>
      <div className='mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
        <SearchBox placeholder='Search question' />
        <FilterDropdown
          filters={homePageFilters}
          className='sm:basis-60'
        />
      </div>
      <div className='mt-6 hidden md:block'>
        <FilterTag
          filters={homePageFilters}
          activeFilter={currentFilter}
        />
      </div>
      <div className='mt-8'>
        <Questions />
      </div>
    </section>
  );
}
