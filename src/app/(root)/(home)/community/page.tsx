import React from 'react';
import SearchBox from '../shared/components/SearchBox';
import FilterDropdown from '../shared/components/FilterDropdown';
import { userFilters } from '../../constants/filter';
import UserCardList from '../user/components/UserCardList';

export default async function CommunityPage() {
  return (
    <section className='no-scrollbar h-full'>
      <h1 className='h1-bold text-text-dark100_light900'>All Questions</h1>
      <div className='mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
        <SearchBox placeholder='Search for amazing friends' />
        <FilterDropdown
          filters={userFilters}
          className='sm:basis-60'
        />
      </div>
      <div className='mt-12'>
        <UserCardList />
      </div>
    </section>
  );
}
