import React from 'react';
import Button from './button';

const EmptyBoard = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <p className='text-heading-l text-center text-grayMedium'>
        This board is empty. Create a new column to get started.
      </p>
      <Button
        title='+Add New Column'
        height='L'
        width='w-[174px]'
        bgColor='primary'
      />
    </div>
  );
};

export default EmptyBoard;
