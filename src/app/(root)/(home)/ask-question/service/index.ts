'use server';
import tryCatchWrapper from '@src/app/(root)/utils/try-catch-util';
import { QuestionDto } from '@src/dto/question-dto';
import { TagDto } from '@src/dto/tag-dto';
import { prismaClient } from '@src/lib/prisma-client';

async function createQuestion(
  questionDto: QuestionDto,
): Promise<QuestionDto | undefined | any> {
  const { title, explanation, tags } = questionDto;
  const { error, data: questionDtoResult } = await tryCatchWrapper(async () => {
    const question = await prismaClient.question.create({
      data: {
        title,
        explanation,
        author: {
          connect: { id: '4ab1b53a-ec2c-4e1a-b80a-deafb96519fe' },
        },
        tags: {
          create: tags.map((tag) => {
            const name = typeof tag === 'string' ? tag : tag.name;
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
    //   tags.map((tag) => {
    //     const name = typeof tag === 'string' ? tag : tag.name;
    //     return prismaClient.tag.upsert({
    //       where: { name },
    //       update: {},
    //       create: {
    //         name,
    //       },
    //     });
    //   }),
    // );
    // console.log(createdTagsResult);
    // @ts-ignore
    // const createdTags = createdTagsResult.map(({ value }) => value);
    // const updatedQuestion = await prismaClient.question.update({
    //   where: {
    //     id: question.id,
    //   },
    //   data: {
    //     tags: {
    //       set: createdTags,
    //     },
    //   },
    //   include: {
    //     author: true,
    //     tags: {
    //       include: {
    //         tag: true,
    //       },
    //     },
    //   },
    // });
    const questionDto: QuestionDto = {
      id: question.id,
      title: question.title,
      explanation: question.explanation,
      tags: question.tags.map((tag) => {
        const tagDto: TagDto = {
          id: tag.tagId,
          name: tag.tag.name,
        };
        return tagDto;
      }),
      author: question.author,
    };
    return questionDto;
  });
  return { error: error?.message, questionDtoResult };
}

export { createQuestion };
