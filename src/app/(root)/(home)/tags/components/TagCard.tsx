import { Card, CardContent } from '@src/app/(root)/components/ui/card';
import Link from 'next/link';
import React from 'react';
import Tag from '../../shared/components/Tag';

interface Props {
  id: string;
  name: string;
  noOfQuestion?: number;
  description?: string;
}
export default function TagCard({
  id,
  name,
  description,
  noOfQuestion,
}: Props) {
  return (
    <Link href={`/tags/${id}`}>
      <Card className='overflow-hidden'>
        <CardContent className='background-light900_dark200 py- p-0 px-4 py-2'>
          <article className='flex w-full flex-col gap-4'>
            <div>
              <Tag
                tag={name}
                className='w-fit px-4 py-2'
              />
            </div>
            <p className='small-medium text-dark500_light500'>
              <span className='body-semibold primary-text-gradient mr-2.5'>
                {noOfQuestion}+
              </span>
              <span> Questions</span>
            </p>
          </article>
        </CardContent>
      </Card>
    </Link>
  );
}
