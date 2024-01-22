import { useTheme } from '@/context/theme-context';
import Image from 'next/image';
import React from 'react';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='flex h-12 items-center justify-center gap-6 rounded-md bg-grayLightBg dark:bg-grayVeryDark'>
      <Image
        src='/icons/icon-light-theme.svg'
        alt='light theme'
        width={18}
        height={18}
      />
      <button
        className='relative flex h-5 w-10 items-center rounded-xl bg-purpleMain transition-all duration-500'
        onClick={toggleTheme}
      >
        <div
          className={`absolute h-[14px] w-[14px] rounded-full bg-white ${
            theme === 'light' ? 'left-[3px]' : 'right-[3px]'
          } transition-all duration-500`}
        />
      </button>
      <Image
        src='/icons/icon-dark-theme.svg'
        alt='dark theme'
        width={15}
        height={15}
      />
    </div>
  );
};

export default ThemeSwitcher;
