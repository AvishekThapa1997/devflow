'use server';
import { QuestionDto } from '@src/dto/question-dto';
import * as questionService from '../service/index';

async function createQuestion(questionDto: QuestionDto) {
  return questionService.createQuestion(questionDto);
}

export { createQuestion };
