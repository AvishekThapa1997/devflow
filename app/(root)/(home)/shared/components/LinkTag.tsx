import { cn } from '@app/(root)/lib/utils';
import { BaseProps } from '@app/(root)/types';
import Link from 'next/link';
import React, { ComponentProps } from 'react';
import Tag from './Tag';

interface Props extends BaseProps, ComponentProps<typeof Link> {
  tag: string;
  tagStyle?: string;
}

export default function LinkTag({
  tag,
  className,
  href,
  tagStyle = '',
  ...linkProps
}: Props) {
  return (
    <Link
      className={cn(className)}
      href={href}
      {...linkProps}
    >
      <Tag
        tag={tag}
        className={cn(tagStyle)}
      />
    </Link>
  );
}
