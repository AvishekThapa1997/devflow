import React from 'react';
import QuestionCard from './QuestionCard';
import NoResult from '../shared/components/NoResult';
import { getQuestions } from '../(question)/service';

interface Props {
  filter?: string;
}

export default async function Questions({ filter = '' }: Props) {
  const { data: questions } = await getQuestions({});
  if (!questions || questions.length === 0) {
    return (
      <NoResult
        title="there's no question to show"
        description='Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from.
          Get involved! 💡'
        link='/ask-question'
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
