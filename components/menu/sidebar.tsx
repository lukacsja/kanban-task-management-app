'use client';

import React from 'react';
import Image from 'next/image';
import { useMenu } from '@/context/menu-context';
import MenuItems from './menu-items';

const Sidebar = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  return (
    <div className='hidden dark:bg-grayDark md:flex'>
      {isMenuOpen ? (
        <div className='flex h-full min-w-[260px] gap-14 border-r border-grayLightLines py-8 pl-8 pr-6 dark:border-grayDarkLines md:w-[260px] lg:w-[300px] lg:min-w-[300px]'>
          <MenuItems />
        </div>
      ) : (
        <button
          className='absolute bottom-8 hidden h-12 w-14 items-center justify-center rounded-r-3xl bg-purpleMain md:flex'
          onClick={() => setIsMenuOpen(true)}
        >
          <Image
            src='/icons/icon-show-sidebar.svg'
            alt='show sidebar'
            width={16}
            height={10}
          />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
