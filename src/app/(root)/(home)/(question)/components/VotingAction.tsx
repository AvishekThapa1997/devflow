'use client';
import { formatNumberWithExtension } from '@src/app/(root)/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  id?: string;
  upVote?: () => void;
  downVote?: () => void;
  upvotes?: number;
  downvotes?: number;
  hasUpvoted?: boolean;
  hasDownvoted?: boolean;
  hasSaved?: boolean;
}
export default function VotingAction({
  id,
  upVote,
  downVote,
  upvotes,
  downvotes,
  hasUpvoted,
  hasDownvoted,
  hasSaved,
}: Props) {
  return (
    <div className='gap6 flex items-center gap-6'>
      <div className='flex items-center gap-4'>
        <div className='flex-center gap-1'>
          <Image
            src={
              hasUpvoted
                ? '/assets/icons/upvoted.svg'
                : '/assets/icons/upvote.svg'
            }
            alt='upvote'
            width={18}
            height={18}
            className='cursor-pointer'
            onClick={() => {}}
          />
          <p className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
            <span className='subtle-medium text-dark400_light900'>
              {formatNumberWithExtension(upvotes ?? 0)}
            </span>
          </p>
        </div>
        <div className='flex-center gap-1'>
          <Image
            src={
              hasDownvoted
                ? '/assets/icons/downvoted.svg'
                : '/assets/icons/downvote.svg'
            }
            alt='downvote'
            width={18}
            height={18}
            className='cursor-pointer'
            onClick={() => {}}
          />
          <p className='flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1'>
            <span className='subtle-medium text-dark400_light900'>
              {formatNumberWithExtension(downvotes ?? 0)}
            </span>
          </p>
        </div>
      </div>
      <div>
        <Image
          src={
            hasSaved
              ? '/assets/icons/star-filled.svg'
              : '/assets/icons/star-red.svg'
          }
          width={18}
          height={18}
          alt='star'
          className='cursor-pointer'
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
