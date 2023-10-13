'use server';
import { Answer, Question } from '@src/app/(root)/types';
import * as questionService from '../service/index';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { isUserLoggedIn } from '@src/app/(root)/(auth)/service';

async function createQuestion(question: Question) {
  const authProviderId = await isUserLoggedIn();
  const questionCreated = await questionService.createQuestion(
    question,
    authProviderId,
  );
  if (questionCreated.statusCode === 401) {
    return redirect('/sign-in');
  }
  revalidatePath('/');
  revalidatePath('/tags');
  return questionCreated;
}

async function postAnswer(answer: Answer) {
  const authProviderId = await isUserLoggedIn();
  return questionService.postAnswer(answer, authProviderId);
}

export { createQuestion, postAnswer };
