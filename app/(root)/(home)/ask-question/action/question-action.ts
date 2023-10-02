'use server';
import { executeWithTransaction } from '@app/(root)/utils/db-util';
import { Question, Tag } from '../../model';
import mongoose from 'mongoose';
import { QuestionDto } from '../../dto/question-dto';
import tryCatchWrapper from '@app/(root)/utils/try-catch-util';

async function createQuestion(
  questionDto: QuestionDto,
): Promise<QuestionDto | undefined | any> {
  return await tryCatchWrapper(async () => {
    const { title, explanation, tags } = questionDto;
    const question = await executeWithTransaction(async (session) => {
      const _question = await Question.default.create(
        [
          {
            title,
            explanation,
            author: new mongoose.mongo.ObjectId('65197c5d069fabc42b2e118b'),
          },
        ],
        { session },
      );
      const question = _question[0];
      const tagCreatedResults = await Promise.allSettled<typeof Tag.default>(
        tags.map((tag) => {
          const name = typeof tag === 'string' ? tag : tag.name;
          return Tag.default.findOneAndUpdate(
            { name },
            {
              $setOnInsert: {
                name,
              },
              $push: {
                questions: question._id,
              },
            },
            { upsert: true, new: true, session },
          );
        }),
      );
      // @ts-ignore
      const createdTags = tagCreatedResults.map((res) => res.value);
      question.tags = createdTags;
      await question.save();
      return question.mapToDto();
    });
    return question;
  });

  // try {
  //   const { title, explanation, tags } = questionDto;
  //   const question = await executeWithTransaction(async (session) => {
  //     const _question = await Question.default.create(
  //       [
  //         {
  //           title,
  //           explanation,
  //           author: new mongoose.mongo.ObjectId('65197c5d069fabc42b2e118b'),
  //         },
  //       ],
  //       { session },
  //     );
  //     const question = _question[0];
  //     const tagCreatedResults = await Promise.allSettled<typeof Tag.default>(
  //       tags.map((tag) => {
  //         const name = typeof tag === 'string' ? tag : tag.name;
  //         return Tag.default.findOneAndUpdate(
  //           { name },
  //           {
  //             $setOnInsert: {
  //               name,
  //             },
  //             $push: {
  //               questions: question._id,
  //             },
  //           },
  //           { upsert: true, new: true, session },
  //         );
  //       }),
  //     );
  //     // @ts-ignore
  //     const createdTags = tagCreatedResults.map((res) => res.value);
  //     question.tags = createdTags;
  //     await question.save();
  //     return question.mapToDto();
  //   });
  //   return question;
  // } catch (err) {
  //   console.error(err);
  // }
}

export { createQuestion };
