import { cn } from '@app/(root)/utils';
import React from 'react';
import { BaseProps } from '@app/(root)/types';

interface Props extends BaseProps {
  horizontal?: boolean;
}

export default function RenderTag({
  children,
  className = '',
  horizontal = true,
}: Props) {
  const tagContainerStyle = {
    'flex-row': horizontal,
    'flex-col': !horizontal,
  };
  return (
    <div className={cn('flex gap-2', className, tagContainerStyle)}>
      {children}
    </div>
  );
}
