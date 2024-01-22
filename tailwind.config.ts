import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purpleMain: '#635FC7',
        purpleHover: '#A8A4FF',
        grayDarkest: '#000112',
        grayVeryDark: '#20212C',
        grayDark: '#2B2C37',
        grayDarkLines: '#3E3F4E',
        grayMedium: '#828FA3',
        grayLightLines: '#E4EBFA',
        grayLightBg: '#F4F7FD',
        white: '#FFFFFF',
        red: '#EA5555',
        redHover: '#FF9898',
      },
      fontSize: {
        '2xl': '24px',
        xl: '18px',
        l: '15px',
        m: '13px',
        s: '12px',
      },
      lineHeight: {
        '2xl': '30px',
        xl: '23px',
        l: '19px',
        m: '23px',
        s: '15px',
      },
      letterSpacing: {
        '2,4px': '2.4px',
      },
      fontWeight: {
        bold: '700',
        medium: '500',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
