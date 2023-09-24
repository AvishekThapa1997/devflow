// import Link from 'next/link';
import React from 'react';
import ExampleClient from './components/ExampleClient';
// import ExampleServer from './components/ExampleServer';

export default function Home() {
  console.log('Where do I render');
  return (
    <div>
      {/* <div>
        <Link href='/server'>Server</Link>
      </div>
      <div>
        <Link href='/client'>Client</Link>
      </div> */}
      <ExampleClient />
      {/* <ExampleServer /> */}
    </div>
  );
}
