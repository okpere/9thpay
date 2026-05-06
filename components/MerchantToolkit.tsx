export default function MerchantToolkit() {
  return (
    <section className='w-full bg-[#0A0A0A]'>
      <div className='px-6 md:px-40 py-12 md:py-20'>
        <div className='max-w-3xl mb-8 md:mb-16'>
          <h2 className='text-3xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight'>
            The Ultimate
            <br />
            Merchant Toolkit
          </h2>
          <p className='text-gray-400 text-base md:text-lg'>
            Our Smart POS is the ultimate tool for the modern merchant — built
            with the reliability and intelligence that keeps Nigerian commerce
            moving.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
          {/* 99.9% Uptime Card */}
          <div className='bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-colors'>
            <div className='bg-linear-to-br from-red-900/50 to-red-950/30 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6'>
              <svg
                className='w-7 h-7 md:w-8 md:h-8 text-orange-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-white mb-2 md:mb-3'>
              99.9% Uptime
            </h3>
            <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
              Dual-connectivity to both NIBSS and UPSL aggregators with
              automatic failover. Engineered for the most remote locations.
            </p>
          </div>

          {/* Instant Settlement Card */}
          <div className='bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-colors'>
            <div className='bg-linear-to-br from-red-900/50 to-red-950/30 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6'>
              <svg
                className='w-7 h-7 md:w-8 md:h-8 text-orange-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-white mb-2 md:mb-3'>
              Instant Settlement
            </h3>
            <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
              No more waiting for T+1. Funds land in your wallet the second the
              beep sounds — real money, real time.
            </p>
          </div>

          {/* All-in-One Acceptance Card */}
          <div className='bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-colors'>
            <div className='bg-linear-to-br from-red-900/50 to-red-950/30 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6'>
              <svg
                className='w-7 h-7 md:w-8 md:h-8 text-orange-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                />
              </svg>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-white mb-2 md:mb-3'>
              All-in-One
              <br />
              Acceptance
            </h3>
            <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
              Seamlessly process Debit Cards, Bank Transfers, QR Codes, and
              Contactless NFC payments in one terminal.
            </p>
          </div>

          {/* Agent Ownership Card */}
          <div className='bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-colors'>
            <div className='bg-linear-to-br from-red-900/50 to-red-950/30 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6'>
              <svg
                className='w-7 h-7 md:w-8 md:h-8 text-orange-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                />
              </svg>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-white mb-2 md:mb-3'>
              Agent Ownership
            </h3>
            <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
              A one-time purchase model that empowers agents as true business
              owners, not just renters paying recurring fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
