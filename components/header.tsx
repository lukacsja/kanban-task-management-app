'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { currentBoards } from '@/lib/data';
import { useTheme } from '@/context/theme-context';
import { useMenu } from '@/context/menu-context';

const Header = () => {
  const { theme } = useTheme();
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <header className='flex h-16 w-full items-center justify-between gap-4 bg-white px-4 dark:bg-grayDark md:h-[81px] md:px-8 lg:h-[97px]'>
      <div className='flex gap-4'>
        <Link href='/' className='flex items-center justify-center'>
          <Image
            className='hidden md:flex'
            src={
              theme === 'light'
                ? '/icons/logo-dark.svg'
                : '/icons/logo-light.svg'
            }
            alt='kanban logo'
            width={152}
            height={25}
          />
        </Link>
        <Link href='/'>
          <Image
            className='md:hidden'
            src='/icons/logo-mobile.svg'
            alt='kanban logo'
            width={25}
            height={25}
          />
        </Link>
        <div className='flex gap-2'>
          <button
            aria-label='toggle menu'
            onClick={toggleMenu}
            className='flex items-center justify-center gap-2'
          >
            <span className='text-heading-l text-grayDarkest dark:text-white'>
              {currentBoards[0]}
            </span>
            <Image
              src='/icons/icon-chevron-down.svg'
              alt='toggle mobile menu'
              width={8}
              height={4}
              className={`md:hidden ${isMenuOpen ? '' : 'rotate-180'} transition-all duration-300`}
            />
          </button>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <button
          aria-label='add task'
          className='flex h-8 w-12 items-center justify-center rounded-3xl bg-purpleMain md:h-12 md:w-[164px]'
        >
          <Image
            src='/icons/icon-add-task-mobile.svg'
            alt='add task'
            width={12}
            height={12}
            className='md:hidden'
          />
          <span className='text-heading-m hidden text-white md:flex'>
            + Add New Task
          </span>
        </button>
        <button
          aria-label='more options'
          className='flex h-8 w-4 items-center justify-center rounded-3xl'
        >
          <Image
            src='/icons/icon-vertical-ellipsis.svg'
            alt='add task'
            width={5}
            height={16}
            className='md:h-5'
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
