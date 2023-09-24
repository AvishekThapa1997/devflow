import { UserButton } from '@clerk/nextjs';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
