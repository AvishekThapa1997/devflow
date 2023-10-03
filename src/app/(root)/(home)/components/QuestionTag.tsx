import { Tag } from '@app/(root)/types';
import React from 'react';

interface Props {
  tags: Tag[];
}
export default function QuestionTag({ tags }: Props) {
  return <div>{JSON.stringify(tags)}</div>;
}
