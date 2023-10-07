'use server';
import { Question } from '@src/app/(root)/types';
import * as questionService from '../service/index';

async function createQuestion(question: Question) {
  return questionService.createQuestion(question);
}

export { createQuestion };
