import React from 'react';

import { getAllTags } from './service';
import TagCardList from './components/TagCardList';

import { tagFilters } from '../../constants/filter';
import SearchBox from '../shared/components/SearchBox';
import FilterDropdown from '../shared/components/FilterDropdown';
import NoResult from '../shared/components/NoResult';

export default async function page() {
  const { data: tags } = await getAllTags({});
  return (
    <>
      <h1 className='h1-bold text-text-dark100_light900'>All Tags</h1>
      <div className='mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
        <SearchBox placeholder='Search for tags' />
        <FilterDropdown
          filters={tagFilters}
          className='sm:basis-60'
        />
      </div>
      <div className='mt-12 pb-16'>
        {Array.isArray(tags) && tags.length > 0 ? (
          <TagCardList tags={tags} />
        ) : (
          <NoResult
            title='No Tags Found'
            description='It looks like there are no tags found.'
            link='/ask-question'
            linkTitle='Ask a question'
          />
        )}
      </div>
    </>
  );
}
