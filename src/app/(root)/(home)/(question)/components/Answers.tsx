import React from 'react';
import FilterDropdown from '../../shared/components/FilterDropdown';
import { answerFilters } from '@src/app/(root)/constants/filter';
import { Answer } from '@src/app/(root)/types';
import AnswerItem from './AnswerItem';

interface Props {
  questionId: string;
  answers: Answer[];
}

export default function Answers({ questionId, answers }: Props) {
  return (
    <div className='my-10'>
      <div className='flex items-center justify-between'>
        <h3 className='primary-text-gradient'>{answers.length} Answers </h3>
        <FilterDropdown
          filters={answerFilters}
          className='mr-2 md:block'
        />
      </div>
      {answers.length > 0
        ? answers.map((answer) => (
            <AnswerItem
              key={answer.id}
              answer={answer}
            />
          ))
        : null}
    </div>
  );
}
