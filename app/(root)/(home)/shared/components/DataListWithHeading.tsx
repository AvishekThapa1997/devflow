import { cn } from '@app/(root)/utils';
import { BaseProps } from '@app/(root)/types';
import React from 'react';

interface DataListWithHeadingProps extends BaseProps {
  heading: string;
  children: React.ReactNode;
}

export default function DataListWithHeading({
  heading,
  children,
  className,
}: DataListWithHeadingProps) {
  return (
    <section className={cn('pb-6', className)}>
      <h3 className='h3-bold text-dark200_light900 capitalize'>{heading}</h3>
      <div className='mt-4'>{children}</div>
    </section>
  );
}
