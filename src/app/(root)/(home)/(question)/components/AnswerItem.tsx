import { Answer } from '@src/app/(root)/types';
import { timeAgo } from '@src/app/(root)/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import VotingAction from './VotingAction';
import ParseHTML from '../../shared/components/ParseHTML';

interface Props {
  answer: Answer;
}
export default function AnswerItem({ answer }: Props) {
  return (
    <article className='light-border border-b py-10'>
      <div className='flex items-center justify-between'>
        <div className='mb-8 flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center sm:gap-2'>
          <Link
            href={`/profile/${answer.author?.id}`}
            className='flex flex-1 items-start gap-4 sm:items-center'
          >
            <Image
              src={answer.author?.profilePictureUrl!}
              alt={answer.author?.username!}
              height={20}
              width={20}
              className='rounded-full object-cover max-sm:mt-0.5'
            />
            <div className='flex flex-col items-center sm:flex-row'>
              <p className='body-semibold text-dark300_light700 m-0'>
                {answer.author?.name}
              </p>
              <p className='small-regular text-light400_light500 line-clamp-1 max-sm:hidden'>
                &nbsp;&nbsp;answered&nbsp;
                {timeAgo(answer.createdAt!)}
              </p>
            </div>
          </Link>
          <VotingAction />
        </div>
      </div>
      <ParseHTML data={answer.content} />
    </article>
  );
}
