import React, { useEffect } from 'react';

export default async function ExampleServer() {
  console.log("I'm a server component");
  useEffect(() => {
    console.log('USE EFFECT');
  }, []);
  //   const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(
  //     (response) => {
  //       console.log('Where am i fetched');
  //       return response.json();
  //     },
  //   );

  console.count();
  return (
    <div>
      <p>This is an example of server component</p>
    </div>
  );
}
