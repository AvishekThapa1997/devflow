import React from 'react';
import QuestionForm from './components/QuestionForm';

export default function Question() {
  return (
    <div className='px-2'>
      <h1 className='h1-bold text-dark100_light900'>Ask a question</h1>
      <div className='mt-8'>
        <QuestionForm />
      </div>
    </div>
  );
}
