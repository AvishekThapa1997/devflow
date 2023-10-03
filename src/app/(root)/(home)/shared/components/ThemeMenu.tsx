'use client';

import { themes } from '@app/(root)/constants';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@root/components/ui/menubar';
import useTheme from '@root/hooks/useTheme';
import Image from 'next/image';

export default function ThemeMenu() {
  const { mode, updateTheme } = useTheme();

  const imageData =
    mode === 'light'
      ? { icon: 'sun.svg', alt: 'sun' }
      : { icon: 'moon.svg', alt: 'moon' };

  return (
    <Menubar className='relative border-none bg-transparent'>
      <MenubarMenu>
        <MenubarTrigger className='focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200 cursor-pointer'>
          <Image
            src={`/assets/icons/${imageData.icon}`}
            alt={imageData.alt}
            width={20}
            height={20}
            className='active-theme'
          />
        </MenubarTrigger>
        <MenubarContent className='dark:border-dark-400 dark:bg-dark-300 absolute right-[-3rem] mt-1 min-w-[120px] rounded border py-2'>
          {themes.map(({ icon, label, value }) => {
            const isActiveTheme = value === mode;
            return (
              <MenubarItem
                key={value}
                className='flex-start dark:focus:bg-dark-400 cursor-pointer gap-4 px-2.5 py-2'
                onClick={(e) => {
                  updateTheme(value);
                }}
              >
                <Image
                  src={icon}
                  alt={value}
                  width={16}
                  height={16}
                  className={isActiveTheme ? 'active-theme' : ''}
                />
                <p
                  className={`body-semibold text-light-500 capitalize tracking-wider ${
                    isActiveTheme ? 'text-primary-500' : 'text-dark100_light900'
                  }`}
                >
                  {label}
                </p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
