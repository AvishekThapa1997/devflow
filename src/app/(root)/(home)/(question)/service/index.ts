import 'server-only';
import {
  Answer,
  GetAnswerParams,
  GetQuestionsParams,
  Question,
  ServerActionResult,
  Tag,
} from '@src/app/(root)/types';
import tryCatchWrapper from '@src/app/(root)/utils/try-catch-util';
import { prismaClient } from '@src/lib/prisma-client';
import { getUserFromAuthProviderId } from '../../user/service';
import UnauthorizedError from '@src/errors/unauthorized-error';
import NotFoundError from '@src/errors/not-found-error';

async function createQuestion(
  questionDto: Question,
  authProviderId: string,
): Promise<ServerActionResult<string>> {
  const { title, explanation, tags } = questionDto;
  const { error, data } = await tryCatchWrapper(async () => {
    const { error: noUserFoundError, data: user } =
      await getUserFromAuthProviderId(authProviderId);
    if (noUserFoundError || !user) {
      throw new UnauthorizedError();
    }
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

async function getQuestionDetails(
  questionId: string,
): Promise<ServerActionResult<Question>> {
  const { error, data } = await tryCatchWrapper(async () => {
    const question = await prismaClient.question.findUnique({
      where: {
        id: questionId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            username: true,
            email: true,
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
    });
    if (!question) {
      throw new NotFoundError(`Question with id ${questionId} not found`);
    }
    return {
      ...question,
      tags: question.tags.map(
        (tag) => ({ id: tag.tag.id, name: tag.tag.name }) as Tag,
      ),
    } as Question;
  });
  if (error) {
    return { statusCode: error.statusCode, error: error.message };
  }
  return { statusCode: 200, data };
}

async function postAnswer(
  answer: Answer,
  authProviderId: string,
): Promise<ServerActionResult<string>> {
  const { error, data } = await tryCatchWrapper(async () => {
    const { error: userError, data: user } =
      await getUserFromAuthProviderId(authProviderId);
    if (userError) {
      throw userError;
    }
    if (!user) {
      throw new UnauthorizedError();
    }
    const { data: question, error: questionError } = await getQuestionDetails(
      answer.question?.id ?? '',
    );
    if (questionError) {
      throw questionError;
    }
    if (!question) {
      throw new NotFoundError(`Question not found`);
    }
    const answerCreated = await prismaClient.answer.create({
      data: {
        content: answer.content,
        question: {
          connect: {
            id: answer.question?.id,
          },
        },
        author: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    return answerCreated.id;
  });
  if (error) {
    return { statusCode: error.statusCode, error: error.message };
  }
  return { statusCode: 201, data };
}

async function getAnswers(
  params: GetAnswerParams,
  authProviderId?: string,
): Promise<ServerActionResult<Answer[]>> {
  const { questionId } = params;
  const { error, data } = await tryCatchWrapper(async () => {
    let userId: string = '';
    const question = await getQuestionDetails(questionId);
    if (authProviderId) {
      const { data } = await getUserFromAuthProviderId(authProviderId);
      userId = data?.id ?? '';
    }

    if (!question) {
      throw new NotFoundError(`Question not found.`);
    }
    const answers = await prismaClient.answer.findMany({
      where: {
        questionId,
      },
      select: {
        id: true,
        content: true,
        createdAt: true,
        downvote: true,
        upvote: true,
        author: {
          select: {
            id: true,
            name: true,
            username: true,
            profilePictureUrl: true,
          },
        },
        votes: {
          select: {
            flag: true,
            userId: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return answers.map(
      (answer) =>
        ({
          id: answer.id,
          content: answer.content,
          author: answer.author,
          createdAt: answer.createdAt,
          downvote: answer.downvote,
          upvote: answer.upvote,
          ...(userId
            ? {
                ...(answer.votes.some(
                  (answer) => answer.userId === userId && answer.flag === -1,
                )
                  ? { hasDownvoted: true, hasUpvoted: false }
                  : answer.votes.some(
                      (answer) => answer.userId === userId && answer.flag === 1,
                    )
                  ? { hasDownvoted: false, hasUpvoted: true }
                  : { hasDownvoted: false, hasUpvoted: false }),
              }
            : { hasDownvoted: false, hasUpvoted: false }),
        }) as Answer,
    );
  });
  if (error) {
    return { statusCode: error.statusCode, error: error.message };
  }
  console.log(data);
  return { statusCode: 200, data };
}

export {
  createQuestion,
  getQuestions,
  getQuestionDetails,
  postAnswer,
  getAnswers,
};
