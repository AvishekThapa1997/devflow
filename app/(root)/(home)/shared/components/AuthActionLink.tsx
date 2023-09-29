import { cn } from '@app/(root)/lib/utils';
import { BaseProps } from '@app/(root)/types';
import Link from 'next/link';
import React from 'react';

interface AuthActionLinkProps extends BaseProps {
  href: string;
}
export default function AuthActionLink({
  className,
  children,
  href,
}: AuthActionLinkProps) {
  return (
    <Link
      href={href}
      className={cn('w-full', className)}
    >
      {children}
    </Link>
  );
}
