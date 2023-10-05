import { cn, timeAgo } from '@app/(root)/utils';
import { BaseProps } from '@app/(root)/types';
import React from 'react';

interface Props extends BaseProps {
  date: string | Date;
}
export default function QuestionPostDate({ date, className }: Props) {
  return (
    <span
      className={cn(
        'subtle-regular text-dark400_light700 line-clamp-1',
        className,
      )}
    >
      <i>asked {timeAgo(date)}</i>
    </span>
  );
}
