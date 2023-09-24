import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>AuthLayout</p>
      {children}
    </div>
  );
}
