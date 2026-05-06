export default function Hero() {
  return (
    <main className='w-full relative bg-[#000000]'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <img
          src='/images/hero-background.jpg'
          alt='Hero Background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/85'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 px-40 py-20'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h1 className='text-6xl font-bold leading-tight'>
              <span className='text-white font-extrabold'>Unified.</span>
              <br />
              <span className='text-white font-extrabold'>Reliable.</span>
              <br />
              <span className='font-extrabold bg-linear-to-r from-[#FF0000] to-[#FFA45F] bg-clip-text text-transparent'>
                Unstopp
                <br />
                able.
              </span>
            </h1>

            <p className='text-gray-400 text-lg font-extralight max-w-md'>
              Empowering the Next Billion through smart POS hardware, instant
              settlement, and e-consumer super app — built for Nigeria's
              informal and formal economies.
            </p>

            <div className='flex gap-4 pt-4'>
              <button className='bg-linear-to-r from-[#FF0000] to-[#FFA45F] hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-opacity'>
                Become an Agent
              </button>
              <button className='border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-full font-medium transition-colors'>
                Explore Solutions →
              </button>
            </div>
          </div>

          <div>
            <img
              src='/images/heroCard.svg'
              alt='9thPay Hero Image'
              className='w-full rounded-lg shadow-lg'
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-8 border-t border-gray-800'>
          <div>
            <div className='text-red-500 text-4xl font-bold mb-2'>4-5yr</div>
            <div className='text-gray-400 text-sm'>Years in Business</div>
          </div>
          <div>
            <div className='text-red-500 text-4xl font-bold mb-2'>37</div>
            <div className='text-gray-400 text-sm'>States Nationwide</div>
          </div>
          <div>
            <div className='text-red-500 text-4xl font-bold mb-2'>1M+</div>
            <div className='text-gray-400 text-sm'>POS Terminals Deployed</div>
          </div>
          <div>
            <div className='text-red-500 text-4xl font-bold mb-2'>99.9%</div>
            <div className='text-gray-400 text-sm'>Uptime Success Rate</div>
          </div>
        </div>
      </div>
    </main>
  );
}
