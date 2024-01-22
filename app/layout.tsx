import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import ThemeContextProvider from '@/context/theme-context';
import Menu from '@/components/menu/mobile-menu';
import { MenuProvider } from '@/context/menu-context';
import Sidebar from '@/components/menu/sidebar';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'task manager app',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${jakarta.className} flex h-screen flex-col`}>
        <ThemeContextProvider>
          <MenuProvider>
            <Header />
            <div className='flex flex-1'>
              <Sidebar />
              <main className='w-full dark:bg-grayDark'>{children}</main>
            </div>
          </MenuProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
