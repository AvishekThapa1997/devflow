'use client';
import React from 'react';
import { sidebarLinks } from '@app/(root)/constants';
import Link from 'next/link';
import Image from 'next/image';
import { SheetClose } from '@app/(root)/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@app/(root)/lib/utils';

export default function NavbarContent() {
  const pathName = usePathname();
  return (
    <section className='flex h-full flex-col gap-6 pt-16'>
      {sidebarLinks.map(({ imgURL, label, route }) => {
        const isActive = route === pathName;
        return (
          <SheetClose
            key={route}
            asChild
          >
            <Link
              href={route}
              className={cn(
                'flex items-center justify-start gap-4 rounded-lg bg-transparent p-4 transition-[background-color] hover:bg-slate-100 hover:dark:bg-slate-900',
                {
                  'primary-gradient  text-light-900': isActive,
                  'text-dark300_light900': !isActive,
                },
              )}
            >
              <Image
                src={imgURL}
                alt={label}
                height={20}
                width={20}
                className={cn({
                  'invert-colors': !isActive,
                })}
              />
              <p
                className={cn({
                  'base-bold': isActive,
                  'base-medium': !isActive,
                })}
              >
                {label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
}
