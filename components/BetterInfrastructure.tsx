export default function BetterInfrastructure() {
  return (
    <section className='bg-[#1A1A1A] py-20 md:py-32 px-6 md:px-40'>
      <div className='max-w-5xl mx-auto text-center'>
        {/* Heading */}
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-10 leading-tight'>
          Your Business
          <br />
          Deserves{' '}
          <span className='bg-linear-to-r from-[#FF0000] to-[#FFA45F] bg-clip-text text-transparent'>
            Better
          </span>
          <br />
          Infrastructure
        </h2>

        {/* Description */}
        <p className='text-gray-400 text-base md:text-lg mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed'>
          Join thousands of merchants and agents who trust 9th Pay to keep their
          businesses running — 24 hours a day, across all 37 states.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6'>
          <button className='bg-linear-to-r from-[#FF0000] to-[#FFA45F] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:opacity-90 transition-opacity w-full sm:w-auto'>
            Contact Sales Team
          </button>
          <button className='border-2 border-white/20 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white/5 transition-colors w-full sm:w-auto flex items-center justify-center gap-2'>
            Socials
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
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
