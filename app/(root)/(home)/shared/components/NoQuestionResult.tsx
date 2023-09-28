import React from 'react';
import Image from 'next/image';
import LinkButton from './AskQuestion';

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

export default function NoQuestionResult({
  title,
  description,
  link,
  linkTitle,
}: Props) {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Image
        src='/assets/images/light-illustration.png'
        width={270}
        height={200}
        alt='No result illustration'
        className='block dark:hidden'
      />
      <Image
        src='/assets/images/dark-illustration.png'
        width={270}
        height={200}
        alt='No result illustration'
        className='hidden dark:block'
      />
      <div className='mt-2 max-w-sm text-center'>
        <h2 className='h2-bold text-dark200_light900 capitalize'>{title}</h2>
        <p className='body-regular text-dark500_light700 my-4'>{description}</p>
        <LinkButton
          href={link}
          title={linkTitle}
        />
      </div>
    </div>
  );
}
