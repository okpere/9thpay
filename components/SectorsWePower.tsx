export default function SectorsWePower() {
  return (
    <section className='bg-black py-12 md:py-20 px-6 md:px-40'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-8 md:mb-12'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4'>
            Sectors We Power
          </h2>
          <p className='text-gray-400 text-sm md:text-base max-w-3xl'>
            Our growth is powered by the loyalty of those who keep Nigeria
            moving — across every sector that matters.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
          {/* Market Hubs */}
          <div className='bg-[#1A1A1A] rounded-2xl p-6 md:p-8'>
            <div className='mb-4'>
              <svg
                className='w-10 h-10 md:w-12 md:h-12'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='24' cy='14' r='4' fill='#FF0000' />
                <rect
                  x='12'
                  y='20'
                  width='24'
                  height='20'
                  rx='2'
                  fill='#FFA45F'
                />
                <rect
                  x='16'
                  y='24'
                  width='6'
                  height='8'
                  rx='1'
                  fill='#FF0000'
                />
                <rect
                  x='26'
                  y='24'
                  width='6'
                  height='8'
                  rx='1'
                  fill='#FF0000'
                />
                <path d='M8 40 L40 40 L36 20 L12 20 Z' fill='#FF6B35' />
              </svg>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-white mb-2 md:mb-3'>
              Market Hubs
            </h3>
            <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
              Providing credit and liquidity to traders in Africa's largest
              markets. Instant POS at the stall, settlement before market
              closes.
            </p>
          </div>

          {/* Oil & Gas */}
          <div className='bg-[#1A1A1A] rounded-2xl p-6 md:p-8'>
            <div className='mb-4'>
              <svg
                className='w-10 h-10 md:w-12 md:h-12'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='14'
                  y='12'
                  width='20'
                  height='28'
                  rx='2'
                  fill='#FF0000'
                />
                <rect x='18' y='16' width='12' height='4' fill='#FFA45F' />
                <circle cx='24' cy='26' r='6' fill='#FFA45F' />
                <path d='M14 40 L34 40 L34 38 L14 38 Z' fill='#FF6B35' />
                <rect x='22' y='8' width='4' height='4' rx='1' fill='#FF0000' />
              </svg>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-white mb-2 md:mb-3'>
              Oil & Gas
            </h3>
            <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
              Real-time collections and same-day settlement for downstream
              operators. Built for the volume and velocity of Nigeria's energy
              sector.
            </p>
          </div>

          {/* Healthcare */}
          <div className='bg-[#1A1A1A] rounded-2xl p-6 md:p-8'>
            <div className='mb-4'>
              <svg
                className='w-10 h-10 md:w-12 md:h-12'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='12'
                  y='16'
                  width='24'
                  height='24'
                  rx='2'
                  fill='#FF0000'
                />
                <path
                  d='M12 24 L36 24 L36 16 L30 16 L30 12 L18 12 L18 16 L12 16 Z'
                  fill='#FFA45F'
                />
                <rect x='20' y='20' width='3' height='8' fill='white' />
                <rect x='18' y='24' width='7' height='3' fill='white' />
                <circle cx='16' cy='28' r='1.5' fill='#FF6B35' />
                <circle cx='32' cy='28' r='1.5' fill='#FF6B35' />
              </svg>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-white mb-2 md:mb-3'>
              Healthcare
            </h3>
            <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
              Driving access by powering payments for community pharmacies —
              making healthcare cashless, accessible, and accountable.
            </p>
          </div>

          {/* Education */}
          <div className='bg-[#1A1A1A] rounded-2xl p-6 md:p-8'>
            <div className='mb-4'>
              <svg
                className='w-10 h-10 md:w-12 md:h-12'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M24 10 L40 18 L24 26 L8 18 Z' fill='#FFA45F' />
                <path d='M24 26 L24 38 L16 34 L16 22 L24 26' fill='#FF0000' />
                <path d='M24 26 L24 38 L32 34 L32 22 L24 26' fill='#FF6B35' />
                <rect x='38' y='18' width='2' height='12' fill='#FF0000' />
                <circle cx='39' cy='32' r='2' fill='#FFA45F' />
              </svg>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-white mb-2 md:mb-3'>
              Education
            </h3>
            <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
              Simplifying JAMB ePINs and tuition payments for the next
              generation. From university fees to school canteens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
