import { PageParams } from '@src/app/(root)/types';
import React from 'react';
import { getQuestionDetails } from '../../../service';
import Link from 'next/link';
import Image from 'next/image';
import IconLabel from '@src/app/(root)/(home)/shared/components/IconLabel';
import { formatNumberWithExtension, timeAgo } from '@src/app/(root)/utils';
import { notFound } from 'next/navigation';
import ParseHTML from '@src/app/(root)/(home)/shared/components/ParseHTML';
import RenderTag from '@src/app/(root)/(home)/shared/components/RenderTag';
import LinkTag from '@src/app/(root)/(home)/shared/components/LinkTag';
import { Metadata } from 'next';
import AnswerForm from '../../../components/AnswerForm';
import { Button } from '@src/app/(root)/components/ui/button';
interface Props {
  id: string;
}

export async function generateMetadata({
  params,
}: PageParams<Props>): Promise<Metadata> {
  const id = params.id as string;
  const { data: question } = await getQuestionDetails(id);
  if (!question) {
    return notFound();
  }
  return {
    title: question.title,
    icons: question.author?.profilePictureUrl,
  };
}
export default async function QuestionDetailsPage({
  params,
}: PageParams<Props>) {
  const id = params.id as string;
  const { data: question } = await getQuestionDetails(id);
  if (!question) {
    return notFound();
  }
  return (
    <>
      <div className='flex w-full flex-col'>
        <div className='flex flex-col'>
          <div>{/* Question Voting Action */}</div>
          <Link
            href={`/profile/${question?.author?.id}`}
            className='flex items-center justify-start gap-2'
          >
            <Image
              src={question?.author?.profilePictureUrl ?? ''}
              className='rounded-full'
              height={22}
              width={22}
              alt={question?.author?.username ?? ''}
            />
            <p className='paragraph-semibold text-dark300_light700'>
              {question?.author?.name}
            </p>
          </Link>
        </div>
        <h2 className='h2-semibold text-dark200_light900 mt-3.5'>
          {question?.title}
        </h2>
      </div>
      <div className='mb-8 mt-4 flex flex-wrap gap-4'>
        <IconLabel
          imgUrl='/assets/icons/clock.svg'
          alt='clock icon'
          value={` asked ${timeAgo(question.createdAt!)}`}
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
          value={formatNumberWithExtension(question.views ?? 0)}
          title='Views'
        />
      </div>
      <ParseHTML data={question.explanation} />
      {question.tags.length > 0 ? (
        <RenderTag className='mt-4'>
          {question.tags.map((tag) => (
            <LinkTag
              href={`/tags/${tag.id}`}
              key={tag.id}
              tag={tag.name}
            />
          ))}
        </RenderTag>
      ) : null}
      <div className='mt-6'>
        <div className='mb-2 flex flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-2'>
          <h4 className='paragraph-semibold text-dark400_light800'>
            Write your answer here
          </h4>
          <Button className='btn light-border-2 gap-1.5 rounded-md px-4 py-2.5 text-primary-500 shadow-none dark:text-primary-500'>
            <Image
              src='/assets/icons/stars.svg'
              alt='start'
              width={12}
              height={12}
              className='object-contain'
            />
            <span>Generate an AI Answer</span>
          </Button>
        </div>
        <AnswerForm />
      </div>
    </>
  );
}
