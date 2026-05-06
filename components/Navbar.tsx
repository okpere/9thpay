import Image from 'next/image';

export default function Navbar() {
  return (
    <header className='w-full bg-[#000000]/85'>
      <div className='flex items-center justify-between px-40 py-3'>
        <Image
          src='/images/logo.svg'
          alt='9thPay Logo'
          width={32}
          height={32}
          className='w-36 h-20'
        />

        <nav className='hidden md:flex items-center gap-8 text-sm'>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition-colors'
          >
            HOME
          </a>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition-colors'
          >
            ABOUT US
          </a>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition-colors'
          >
            LEGAL
          </a>
          <a
            href='#'
            className='text-gray-300 hover:text-white transition-colors'
          >
            CONTACT US
          </a>
        </nav>

        <div className='flex items-center gap-4'>
          <button className='bg-linear-to-r from-[#FF0000] to-[#FFA45F] hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-medium transition-opacity'>
            Send Message
          </button>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs font-medium transition-colors flex items-center gap-2'>
            <span>GET IT ON</span>
            <span className='font-bold'>Google Play</span>
          </button>
        </div>
      </div>
    </header>
  );
}
