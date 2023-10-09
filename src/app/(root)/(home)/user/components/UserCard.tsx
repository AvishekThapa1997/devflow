import { Card, CardContent } from '@src/app/(root)/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RenderTag from '../../shared/components/RenderTag';
import Tag from '../../shared/components/Tag';

interface Props {
  id: string;
  username: string;
  name: string;
  authProviderId: string;
  email: string;
  profilePictureUrl: string;
  bio?: string | null;
  location?: string | null;
  portfolioWebsite?: string | null;
  reputation?: number | null;
  createdAt?: Date | null;
}
export default function UserCard({
  id,
  authProviderId,
  profilePictureUrl,
  name,
  username,
}: Props) {
  return (
    <Link
      href={`/profile/${authProviderId}`}
      className='w-full shadow-light-100'
    >
      <Card>
        <CardContent className='p-0'>
          <article className='flex flex-col items-center p-6'>
            <Image
              src={profilePictureUrl}
              alt={username}
              width={100}
              height={100}
              className='rounded-full'
            />
            <div className='mt-4 text-center'>
              <h3 className='h3-bold text-dark200_light900 line-clamp-1'>
                {name}
              </h3>
              <p className='body-regular text-dark500_light500 mt-2'>
                {username}
              </p>
            </div>
            <div className='mt-4'>
              <RenderTag>
                {['tag1', 'tag2', 'tag3'].map((tag) => {
                  return (
                    <Tag
                      key={tag}
                      tag={tag}
                      className='flex items-center justify-between gap-2 py-2 text-xs'
                    />
                  );
                })}
              </RenderTag>
            </div>
          </article>
        </CardContent>
      </Card>
    </Link>
  );
}
