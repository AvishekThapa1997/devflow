import React from 'react';
import Image from 'next/image';
import { cn } from '@app/(root)/utils';
import Link from 'next/link';
import QuestionPostDate from '../../components/QuestionPostDate';


interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyle?: string;
  isAuthor?: boolean;
}

export default function IconLabel({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyle = '',
  isAuthor = false,
}: Props) {
  const imageStyle = {
    'cursor-pointer rounded': isAuthor,
  };
  const titleStyle = {
    'hidden sm:mt-[0.5px] sm:block': isAuthor,
  };
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        height={16}
        width={16}
        className={cn('object-contain', imageStyle)}
      />

      <p
        className={cn(
          'small-medium text-dark400_light800 flex items-center gap-2',
          textStyle,
        )}
      >
        <span>{value}</span>
        {href ? (
          isAuthor ? (
            <QuestionPostDate
              date={title}
              className={cn(titleStyle)}
            />
          ) : (
            <span className={cn(titleStyle)}>
              <i>{title}</i>
            </span>
          )
        ) : (
          <span className={cn(titleStyle)}>{title}</span>
        )}
      </p>
    </>
  );
  if (href) {
    return (
      <Link
        href={href}
        className='flex items-center gap-3'
      >
        {metricContent}
      </Link>
    );
  }
  return <div className='flex items-center gap-2'>{metricContent}</div>;
}
