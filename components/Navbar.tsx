'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/legal', label: 'LEGAL' },
    { href: '/contact', label: 'CONTACT US' },
  ];

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
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                pathname === href
                  ? 'text-red-600 font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-2 md:gap-4'>
          <Link
            href='/contact'
            className='hidden md:block bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-medium transition-opacity'
          >
            Send Message
          </Link>

          <Image
            src='/images/appDownload.svg'
            alt='9thPay App Download'
            width={32}
            height={32}
            className='hidden md:block w-24 h-14 md:w-36 md:h-20 cursor-pointer'
          />

          {/* Hamburger button */}
          <button
            className='md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5'
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label='Toggle menu'
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className='md:hidden bg-black border-t border-gray-800 px-6 py-6 flex flex-col gap-5 text-sm'>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors ${
                pathname === href
                  ? 'text-red-600 font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href='/contact'
            onClick={() => setMenuOpen(false)}
            className='mt-2 bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-medium transition-opacity text-center'
          >
            Send Message
          </Link>
          <Image
            src='/images/appDownload.svg'
            alt='9thPay App Download'
            width={120}
            height={40}
            className='w-28 cursor-pointer'
          />
        </nav>
      )}
    </header>
  );
}
