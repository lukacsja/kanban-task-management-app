import React from 'react';
import { currentBoards } from '@/lib/data';
import BoardIcon from '../board-icon';
import ThemeSwitcher from '../theme-switcher';
import Image from 'next/image';
import { useMenu } from '@/context/menu-context';

const MenuItems = () => {
  const { setIsMenuOpen } = useMenu();

  return (
    <div className='text-heading-m flex h-full w-full flex-col gap-4 text-grayMedium'>
      <h3 className='text-heading-s uppercase'>all boards (3)</h3>
      <div className='-ml-8 flex flex-col'>
        {currentBoards.map((board) => (
          <button
            key={board}
            className='group flex h-12 items-center gap-4 rounded-r-full pl-8 hover:bg-purpleMain hover:text-white'
          >
            <BoardIcon className='fill-grayMedium group-hover:fill-white' />
            <span>{board}</span>
          </button>
        ))}
        <button className='group flex h-12 items-center gap-4 rounded-r-full pl-8 text-purpleMain hover:bg-purpleMain hover:text-white'>
          <BoardIcon className='fill-grayMedium group-hover:fill-white' />
          <span>+Create New Board</span>
        </button>
      </div>
      <ThemeSwitcher />

      <button
        className='hidden h-12 md:flex md:items-center'
        onClick={() => setIsMenuOpen(false)}
      >
        <Image
          src='/icons/icon-hide-sidebar.svg'
          alt='hide sidebar'
          width={18}
          height={16}
          className='mr-2.5'
        />
        <span>Hide Sidebar</span>
      </button>
    </div>
  );
};

export default MenuItems;
