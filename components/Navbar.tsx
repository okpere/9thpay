'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='w-full bg-[#000000]/85'>
      <div className='flex items-center justify-between px-6 md:px-40 py-3'>
        <Link href='/'>
          <Image
            src='/images/logo.svg'
            alt='9thPay Logo'
            width={32}
            height={32}
            className='w-24 h-14 md:w-36 md:h-20 cursor-pointer'
          />
        </Link>

        <nav className='hidden md:flex items-center gap-8 text-sm'>
          <Link
            href='/'
            className={`transition-colors ${
              pathname === '/'
                ? 'text-red-600 font-semibold'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            HOME
          </Link>
          <Link
            href='#'
            className='text-gray-300 hover:text-white transition-colors'
          >
            ABOUT US
          </Link>
          <Link
            href='/legal'
            className={`transition-colors ${
              pathname === '/legal'
                ? 'text-red-600 font-semibold'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            LEGAL
          </Link>
          <Link
            href='/contact'
            className={`transition-colors ${
              pathname === '/contact'
                ? 'text-red-600 font-semibold'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            CONTACT US
          </Link>
        </nav>

        <div className='flex items-center gap-2 md:gap-4'>
          <Link
            href='/contact'
            className='hidden md:block bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-medium transition-opacity'
          >
            Send Message
          </Link>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 md:px-4 md:py-2 rounded-md text-xs font-medium transition-colors flex items-center gap-1 md:gap-2'>
            <span className='hidden sm:inline'>GET IT ON</span>
            <span className='font-bold'>Google Play</span>
          </button>
        </div>
      </div>
    </header>
  );
}
