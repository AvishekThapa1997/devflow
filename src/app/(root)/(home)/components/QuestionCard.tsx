import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@app/(root)/components/ui/card';
import { User, Tag } from '@app/(root)/types';
import React from 'react';
import QuestionPostDate from './QuestionPostDate';
import Link from 'next/link';
import LinkTag from '../shared/components/LinkTag';
import IconLabel from '../shared/components/IconLabel';
import { formatNumberWithExtension } from '@app/(root)/utils';
import RenderTag from '../shared/components/RenderTag';

interface Props {
  id?: string;
  title: string;
  explanation: string;
  views?: number;
  upvotes?: number;
  downvotes?: number;
  tags: Tag[];
  author?: Partial<User>;
  createdAt?: Date;
}

export default function QuestionCard({
  id,
  title,
  tags,
  author,
  views,
  upvotes,
  createdAt,
}: Props) {
  return (
    <Card className='card-wrapper'>
      <CardHeader>
        <QuestionPostDate
          date={createdAt!}
          className='sm:hidden'
        />
        <Link href={`/questions/${id}`}>
          <CardTitle className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1'>
            {title}
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        {tags.length > 0 ? (
          <RenderTag>
            {tags.map((tag) => (
              <LinkTag
                href={`/tags/${tag.id}`}
                key={tag.id}
                tag={tag.name}
              />
            ))}
          </RenderTag>
        ) : null}
        <div className='mt-4'>
          <div className='md:flex-between flex flex-col gap-4 md:flex-row'>
            <div>
              <IconLabel
                imgUrl={'/assets/icons/avatar.svg'}
                alt={author?.name!}
                value={author?.name!}
                title={createdAt?.toString()!}
                href={`/profile/${author?.id}`}
                textStyle='body-medium text-dark400_light700'
                isAuthor
              />
            </div>
            <div className='flex items-center gap-2'>
              <IconLabel
                imgUrl='/assets/icons/like.svg'
                alt='upvotes'
                value={formatNumberWithExtension(upvotes ?? 0)}
                title='votes'
              />
              <IconLabel
                imgUrl='/assets/icons/message.svg'
                alt='message'
                value={formatNumberWithExtension(0)}
                title='answers'
              />
              <IconLabel
                imgUrl='/assets/icons/eye.svg'
                alt='eye'
                value={formatNumberWithExtension(views ?? 0)}
                title='Views'
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
