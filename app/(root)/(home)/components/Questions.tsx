import React from 'react';
import QuestionCard from './QuestionCard';
import { Question } from '@app/(root)/types';
import NoQuestionResult from '../shared/components/NoQuestionResult';

const questions: Question[] = [
  {
    id: '1',
    title: 'Cascading Deletes in SQLAlchemy?',
    tags: [
      { id: '1', name: 'python' },
      { id: '2', name: 'sql' },
    ],
    voteCount: 0,
    views: 1,
    author: {
      id: '1',
      name: 'John Doe',
    },
    createdAt: '2023-09-28T16:48:09Z',
    answers: [],
  },
  {
    id: '2',
    title: 'How to center a div?',
    tags: [
      { id: '1', name: 'css' },
      { id: '2', name: 'frontend' },
    ],
    voteCount: 0,
    views: 1,
    author: {
      id: '1',
      name: 'John Doe',
    },
    createdAt: '2023-09-28T16:48:09Z',
    answers: [],
  },
];

interface Props {
  filter?: string;
}

export default function Questions({ filter = '' }: Props) {
  if (questions.length === 0) {
    return (
      <NoQuestionResult
        title="there's no question to show"
        description='Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from.
          Get involved! 💡'
        link='/'
        linkTitle='ask a question'
      />
    );
  }
  return (
    <div className='flex flex-col gap-4'>
      {questions.map((question) => {
        return (
          <QuestionCard
            key={question.id}
            {...question}
          />
        );
      })}
    </div>
  );
}
