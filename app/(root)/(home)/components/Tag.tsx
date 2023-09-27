import React from 'react';
import Link from 'next/link';
import { BaseProps } from '@app/(root)/types';
import { cn } from '@app/(root)/lib/utils';
import { Badge } from '@app/(root)/components/ui/badge';
interface TagProps extends BaseProps {
  tag: string;
  id: string;
}

export default function Tag({ tag, id, className }: TagProps) {
  return (
    <Link
      className={cn(className)}
      href={`/tags/${id}`}
    >
      <Badge className='subtle-medium background-light800_dark300 text-dark500_light700 rounded-md border-none px-4 py-2 uppercase tracking-widest'>
        {tag}
      </Badge>
    </Link>
  );
}
