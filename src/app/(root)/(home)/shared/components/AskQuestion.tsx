import { Button } from '@app/(root)/components/ui/button';
import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  title: string;
}

export default function LinkButton({ href, title }: Props) {
  return (
    <Link
      href={href}
      className='text-end'
    >
      <Button className='primary-gradient px-4 py-3 capitalize text-light-900'>
        {title}
      </Button>
    </Link>
  );
}
