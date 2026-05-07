import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center px-4'>
      <div className='max-w-2xl mx-auto text-center'>
        {/* 404 Number */}
        <div className='mb-8'>
          <h1 className='text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>
            404
          </h1>
        </div>

        {/* Error Message */}
        <h2 className='text-3xl md:text-5xl font-bold mb-6'>Page Not Found</h2>
        <p className='text-gray-400 text-lg mb-8 leading-relaxed'>
          The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Link
            href='/'
            className='bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold transition-opacity inline-flex items-center gap-2'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
            Go Home
          </Link>
          <Link
            href='/contact'
            className='bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center gap-2 border border-gray-800'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className='mt-16 pt-8 border-t border-gray-900'>
          <p className='text-gray-500 text-sm mb-4'>QUICK LINKS</p>
          <div className='flex flex-wrap items-center justify-center gap-6 text-sm'>
            <Link
              href='/about'
              className='text-gray-400 hover:text-white transition-colors'
            >
              About Us
            </Link>
            <Link
              href='/legal'
              className='text-gray-400 hover:text-white transition-colors'
            >
              Legal
            </Link>
            <Link
              href='/contact'
              className='text-gray-400 hover:text-white transition-colors'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
