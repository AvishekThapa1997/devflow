'use server';
import {
  GetQuestionsParams,
  Question,
  Result,
  Tag,
} from '@src/app/(root)/types';
import tryCatchWrapper from '@src/app/(root)/utils/try-catch-util';
import { prismaClient } from '@src/lib/prisma-client';
import { revalidatePath } from 'next/cache';

async function createQuestion(questionDto: Question): Promise<Result<string>> {
  const { title, explanation, tags } = questionDto;
  const { error, data } = await tryCatchWrapper(async () => {
    const question = await prismaClient.question.create({
      data: {
        title,
        explanation,
        author: {
          connect: { id: '8e50c7e5-504e-47ca-b001-75d40447d974' },
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
    revalidatePath('/');
    return question.id;
  });
  return { error: error?.message, data };
}

async function getQuestions(
  params: GetQuestionsParams,
): Promise<Result<Question[]>> {
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
  return { error: error?.message, data };
}
export { createQuestion, getQuestions };
