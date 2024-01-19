import React from 'react';

interface ButtonProps {
  title: string;
  bgColor: 'primary' | 'secondary' | 'destructive';
  height: 'L' | 'S';
}

const Button: React.FC<ButtonProps> = ({ title, bgColor, height }) => {
  const buttonStyles = {
    height: height === 'L' ? 'h-12 text-l' : 'h-10 text-m',
    bgColor:
      bgColor === 'primary'
        ? 'bg-primary hover:bg-secondary'
        : bgColor === 'secondary'
          ? 'bg-grayExtraLight bg-grayExtraLight hover:bg-grayLight text-primary'
          : 'bg-danger hover:bg-dangerLight',
  };

  return (
    <button
      className={`w-full rounded-3xl font-bold text-white ${buttonStyles.height} ${buttonStyles.bgColor}`}
    >
      {title}
    </button>
  );
};

export default Button;
