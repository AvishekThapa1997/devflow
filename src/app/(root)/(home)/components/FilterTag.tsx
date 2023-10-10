import { cn } from '@app/(root)/utils';
import { BaseProps, Filter } from '@app/(root)/types';
import React from 'react';
import RenderTag from '../shared/components/RenderTag';
import LinkTag from '../shared/components/LinkTag';


interface Props extends BaseProps {
  filters: Filter[];
  activeFilter?: string;
}
export default function FilterTag({ filters, className, activeFilter }: Props) {
  return (
    <RenderTag className={className}>
      {filters.map(({ name, value }) => {
        const isActive = activeFilter === value;
        const activeTagStyle = {
          'dark:text-primary-500 text-primary-500 !bg-primary-100 dark:!bg-slate-800':
            isActive,
        };
        return (
          <LinkTag
            tag={name}
            href={`/?filter=${value}`}
            key={value}
            replace={!!activeFilter}
            className='capitalize'
            tagStyle={cn(activeTagStyle)}
          />
        );
      })}
    </RenderTag>
  );
}
