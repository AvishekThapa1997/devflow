import React from 'react';
import TagCard from './TagCard';

interface Props {
  tags: Array<{
    id?: string;
    name: string;
    noOfQuestion?: number;
    description?: string;
  }>;
}
export default function TagCardList({ tags }: Props) {
  return (
    <div className='flex flex-wrap gap-2'>
      {tags.map(({ id, name, description, noOfQuestion }) => {
        return (
          <TagCard
            key={id}
            id={id!}
            name={name}
            description={description}
            noOfQuestion={noOfQuestion}
          />
        );
      })}
    </div>
  );
}
