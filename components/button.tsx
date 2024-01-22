import React from 'react';

interface ButtonProps {
  title: string;
  bgColor: 'primary' | 'secondary' | 'red';
  height: 'L' | 'S';
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ title, bgColor, height, width }) => {
  const buttonStyles = {
    height: height === 'L' ? 'h-12 text-l' : 'h-10 text-m',
    bgColor:
      bgColor === 'primary'
        ? 'bg-purpleMain hover:bg-purpleHover'
        : bgColor === 'secondary'
          ? 'bg-grayLightBg hover:bg-grayMedium text-purpleMain'
          : 'bg-red hover:bg-redHover',
  };

  return (
    <button
      className={`${width} rounded-3xl font-bold text-white ${buttonStyles.height} ${buttonStyles.bgColor}`}
    >
      {title}
    </button>
  );
};

export default Button;
