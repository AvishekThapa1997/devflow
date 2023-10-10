import 'server-only';
import { isUserLoggedIn } from '@src/app/(root)/(auth)/service';
import {
  GetQuestionsParams,
  Question,
  ServerActionResult,
  Tag,
} from '@src/app/(root)/types';
import tryCatchWrapper from '@src/app/(root)/utils/try-catch-util';
import { prismaClient } from '@src/lib/prisma-client';
import { getUserFromAuthProviderId } from '../../user/service';

async function createQuestion(
  questionDto: Question,
): Promise<ServerActionResult<string>> {
  const { title, explanation, tags } = questionDto;
  const authProviderId = await isUserLoggedIn();
  if (!authProviderId) {
    return { statusCode: 401 };
  }
  const { error: noUserFoundError, data: user } =
    await getUserFromAuthProviderId(authProviderId);
  if (noUserFoundError || !user) {
    return { statusCode: 401 };
  }
  const { error, data } = await tryCatchWrapper(async () => {
    const question = await prismaClient.question.create({
      data: {
        title,
        explanation,
        author: {
          connect: { id: user.id },
        },
        tags: {
          create: tags.map((tag) => {
            const name = tag.name;
            return {
              tag: {
                connectOrCreate: {
                  where: {
                    name,
                  },
                  create: {
                    name,
                  },
                },
              },
            };
          }),
        },
      },
      include: {
        author: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
    return question.id;
  });
  if (error) {
    return { error: error.message, statusCode: error.statusCode };
  }
  return { statusCode: 201, data };
}

async function getQuestions(
  params: GetQuestionsParams,
): Promise<ServerActionResult<Question[]>> {
  const { error, data } = await tryCatchWrapper(async () => {
    const questions = await prismaClient.question.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            profilePictureUrl: true,
          },
        },
        tags: {
          select: {
            tag: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    const questionsDtos: Question[] = questions.map((question) => {
      const questionDto: Question = {
        id: question.id,
        title: question.title,
        explanation: question.explanation,
        tags: question.tags.map((tag) => {
          const _tag: Tag = {
            id: tag.tag.id,
            name: tag.tag.name,
            noOfQuestion: question.tags.length,
          };
          return _tag;
        }),
        author: question.author,
        downvotes: question.downvotes,
        upvotes: question.upvotes,
        views: question.views,
        createdAt: question.createdAt,
      };
      return questionDto;
    });
    return questionsDtos;
  });
  if (error) {
    return { error: error.message, statusCode: error.statusCode };
  }
  return { statusCode: 200, data };
}
export { createQuestion, getQuestions };
