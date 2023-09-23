import Link from 'next/link';

import React from 'react';

const links = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/about',
    label: 'about',
  },
  {
    path: '/contact',
    label: 'contact',
  },
  {
    path: '/project/list',
    label: 'Projects',
  },
];
export default function Navbar() {
  return (
    <nav className='flex justify-between px-6 py-4 shadow'>
      <h1>NextJs </h1>
      <ul className='flex items-center gap-6 capitalize'>
        {links.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
