'use server';
import { Question } from '@src/app/(root)/types';
import * as questionService from '../service/index';
import { revalidatePath } from 'next/cache';

async function createQuestion(question: Question) {
  const questionCreated = await questionService.createQuestion(question);
  revalidatePath('/');
  return questionCreated;
}

export { createQuestion };
