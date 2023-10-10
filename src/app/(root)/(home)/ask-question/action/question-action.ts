'use server';
import { Question } from '@src/app/(root)/types';
import * as questionService from '../service/index';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function createQuestion(question: Question) {
  const questionCreated = await questionService.createQuestion(question);
  if (questionCreated.statusCode === 401) {
    return redirect('/sign-in');
  }
  revalidatePath('/');
  return questionCreated;
}

export { createQuestion };
