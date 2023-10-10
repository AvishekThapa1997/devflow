import React from 'react';
import SearchBox from '../shared/components/SearchBox';
import FilterDropdown from '../shared/components/FilterDropdown';
import { tagFilters } from '../../constants/filter';
import NoResult from '../shared/components/NoResult';
import { getAllTags } from './service';
import TagCardList from './components/TagCardList';

export default async function page() {
  const { data: tags } = await getAllTags({});
  console.log(tags);
  return (
    <section className='no-scrollbar h-full'>
      <h1 className='h1-bold text-text-dark100_light900'>All Tags</h1>
      <div className='mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
        <SearchBox placeholder='Search for tags' />
        <FilterDropdown
          filters={tagFilters}
          className='sm:basis-60'
        />
      </div>
      <div className='mt-12'>
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
    </section>
  );
}
