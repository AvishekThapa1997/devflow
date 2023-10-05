import React from 'react';
import QuestionCard from './QuestionCard';
import NoQuestionResult from '../shared/components/NoQuestionResult';
import { getQuestions } from '../ask-question/service';

interface Props {
  filter?: string;
}

export default async function Questions({ filter = '' }: Props) {
  const { data: questions } = await getQuestions({});
  if (!questions || questions.length === 0) {
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
