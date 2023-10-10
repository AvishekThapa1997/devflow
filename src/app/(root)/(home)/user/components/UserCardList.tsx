import { Link } from 'lucide-react';
import { getAllUsers } from '../service';
import UserCard from './UserCard';

export default async function UserCardList() {
  const { data: users } = await getAllUsers({});

  return (
    <>
      {users && users.length > 0 ? (
        <div className='grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3'>
          {users.map(({ id, username, profilePictureUrl, ...user }) => (
            <UserCard
              key={id}
              id={id!}
              username={username!}
              profilePictureUrl={profilePictureUrl ?? ''}
              {...user}
            />
          ))}
        </div>
      ) : (
        <div className='paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center'>
          <p>No Users found</p>
          <Link
            href='/sign-up'
            className='mt-1 font-bold text-accent-blue'
          >
            Join to be the first
          </Link>
        </div>
      )}
    </>
  );
}
