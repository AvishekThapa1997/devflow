import React from 'react';
import Tag from './Tag';

const popularTags = [
  {
    id: 1,
    name: 'javascript',
    totalQuestion: 2,
  },

  {
    id: 2,
    name: 'react',
    totalQuestion: 3,
  },

  {
    id: 3,
    name: 'angular',
    totalQuestion: 1,
  },
  {
    id: 4,
    name: 'vue',
    totalQuestion: 1,
  },
  {
    id: 5,
    name: 'nextjs',
    totalQuestion: 2,
  },
];
export default function PopularTags() {
  return (
    <div className='flex flex-col gap-4'>
      {popularTags.map(({ id, name, totalQuestion }) => {
        return (
          <div
            key={id}
            className='body-medium flex items-center justify-between'
          >
            <Tag
              tag={name}
              id={id.toString()}
            />
            <p className='small-medium text-dark500_light700'>
              {totalQuestion}
            </p>
          </div>
        );
      })}
    </div>
  );
}
