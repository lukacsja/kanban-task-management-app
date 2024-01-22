'use client';

import React from 'react';
import { useMenu } from '@/context/menu-context';
import MenuItems from './menu-items';

const Menu = () => {
  const { isMenuOpen } = useMenu();

  return (
    <div className='min-w-[260px] max-w-[300px] rounded-xl p-4 md:hidden'>
      {isMenuOpen && <MenuItems />}
    </div>
  );
};

export default Menu;
