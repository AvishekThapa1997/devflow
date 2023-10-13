import 'server-only';

import {
  PaginationParams,
  ServerActionResult,
  User,
} from '@src/app/(root)/types';
import tryCatchWrapper from '@src/app/(root)/utils/try-catch-util';
import { prismaClient } from '@src/lib/prisma-client';

async function getUserFromAuthProviderId(authProviderId: string) {
  const { error, data } = await tryCatchWrapper(async () => {
    return prismaClient.user.findUnique({
      where: {
        authProviderId,
      },
    });
  });
  return { error, data };
}

async function getAllUsers(
  params: PaginationParams,
): Promise<ServerActionResult<User[]>> {
  const { page = 1, pageSize = 20, filter, searchQuery } = params;
  console.log(searchQuery, filter);
  const { error, data } = await tryCatchWrapper(async () => {
    const users = await prismaClient.user.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return users.map((user) => {
      const _user: User = {
        id: user.id,
        email: user.email,
        authProviderId: user.authProviderId,
        name: user.name,
        username: user.username,
        profilePictureUrl: user.profilePictureUrl,
        bio: user.bio,
        portfolioWebsite: user.portfolioWebsite,
        location: user.location,
        reputation: user.reputation,
      };
      return _user;
    });
  });
  if (error) {
    return { error: error.message, statusCode: error.statusCode };
  }
  return { data, statusCode: 200 };
}

export { getUserFromAuthProviderId, getAllUsers };
