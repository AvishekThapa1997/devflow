'use client';
import React from 'react';
import ExampleServer from './ExampleServer';
export default function ExampleClient() {
  return (
    <>
      <div>
        <p>This is an example of client component</p>
      </div>
      <ExampleServer />
    </>
  );
}
