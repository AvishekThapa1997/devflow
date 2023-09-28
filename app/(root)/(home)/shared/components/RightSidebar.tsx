import React from 'react';
import DataListWithHeading from './DataListWithHeading';
import TopQuestions from './TopQuestions';
import PopularTags from './PopularTags';

export default function RightSidebar() {
  return (
    <aside className='background-light900_dark200 light-border custom-scrollbar flex h-full flex-col gap-2 overflow-y-auto border-l p-4 pb-6 shadow-light-300 dark:shadow-none'>
      <DataListWithHeading heading='top questions'>
        <TopQuestions />
      </DataListWithHeading>
      <DataListWithHeading
        heading='popular 
      tags'
      >
        <PopularTags />
      </DataListWithHeading>
    </aside>
  );
}
