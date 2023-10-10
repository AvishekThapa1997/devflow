import { ServerActionResult, Tag } from '@src/app/(root)/types';
import tryCatchWrapper from '@src/app/(root)/utils/try-catch-util';
import { prismaClient } from '@src/lib/prisma-client';

async function getAllTags(params: any): Promise<ServerActionResult<Tag[]>> {
  const { error, data } = await tryCatchWrapper(async () => {
    const tags = await prismaClient.tag.findMany({
      include: {
        _count: true,
      },
    });
    console.log(tags);
    const tagResult = tags.map((tag) => {
      return {
        name: tag.name,
        id: tag.id,
        noOfQuestion: tag._count.questions ?? 0,
      } as Tag;
    });
    return tagResult;
  });
  if (error) {
    return { error: error.message, statusCode: error.statusCode };
  }
  return { statusCode: 200, data };
}

export { getAllTags };
