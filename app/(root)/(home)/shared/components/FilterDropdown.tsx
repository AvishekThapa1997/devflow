'use client';
import { cn } from '@app/(root)/lib/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@root/components/ui/select';
import { BaseProps, Filter as FilterType } from '@app/(root)/types';
import React from 'react';

interface FilterDropdownProps extends BaseProps {
  filters: FilterType[];
}
export default function FilterDropdown({ filters, className }: FilterDropdownProps) {
  return (
    <div className={cn('block md:hidden', className)}>
      <Select>
        <SelectTrigger className='body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 focus-visible:outline-none'>
          <div className='line-clamp-1 flex-1 text-left'>
            <SelectValue placeholder='Select a filter' />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map(({ name, value }) => {
              return (
                <SelectItem
                  key={value}
                  value={value}
                  className='cursor-pointer capitalize'
                >
                  {name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
