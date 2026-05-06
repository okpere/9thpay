import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne', // CSS variable you can use anywhere
});

export const metadata: Metadata = {
  title: '9thPay',
  description:
    "Empowering the Next Billion through smart POS hardware, instant settlement, and e-consumer super app — built for Nigeria's informal and formal economies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${syne.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col bg-black text-white font-syne'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
