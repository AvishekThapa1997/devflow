'use server';

import tryCatchWrapper from '@app/(root)/utils/try-catch-util';
import { UserDto } from '../../../../../dto/user-dto';

async function createUser(userDto: UserDto) {
  const { error, data: userId } = await tryCatchWrapper(async () => {
    const user = await User.default.findOneAndUpdate(
      { authProviderId: userDto.authProviderId },
      {
        $setOnInsert: {
          ...userDto,
        },
      },
      { upsert: true, new: true },
    );
    return user._id.toString();
  });
  return { error, userId };
}

async function getUserFromAuthProviderId(authProviderId: string) {
  return tryCatchWrapper(() => User.default.findOne({ authProviderId }));
}

export { createUser, getUserFromAuthProviderId };
