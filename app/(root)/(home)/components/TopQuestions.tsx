import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const topQuestions = [
  {
    id: 1,
    title: 'How do i use express as a custom server in NextJS',
  },
  {
    id: 2,
    title: 'Cascading Deletes in SQLAlchemy',
  },
  {
    id: 3,
    title: 'How to Perfectly Center a Div with Tailwind CSS?',
  },
  {
    id: 4,
    title:
      'Best practices for data fetching in Next.js application with Server-Side Rendering (SSR)?',
  },
  {
    id: '5',
    title: 'Reduc Toolkit Not Updating State as Expected',
  },
];
export default function TopQuestions() {
  return (
    <div className='flex flex-col gap-4'>
      {topQuestions.map(({ id, title }) => {
        return (
          <Link
            key={id}
            href={`/question/${id}`}
            className='flex items-center justify-between gap-4'
          >
            <span
              className='body-medium light text-dark500_light700
            '
            >
              {title}
            </span>
            <Image
              src='/assets/icons/chevron-right.svg'
              alt='chevron right'
              height={20}
              width={20}
              className='invert-colors'
            />
          </Link>
        );
      })}
    </div>
  );
}
