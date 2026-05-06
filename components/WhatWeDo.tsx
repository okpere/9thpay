export default function WhatWeDo() {
  return (
    <section className='w-full bg-[#1A1A1A]'>
      <div className='px-6 md:px-40 py-12 md:py-20'>
        <h2 className='text-3xl md:text-5xl font-bold text-white mb-8 md:mb-16'>
          What We Do
        </h2>

        <div className='grid md:grid-cols-2 gap-8 md:gap-16 items-start'>
          {/* Left Side - Principles */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-4xl md:text-6xl font-extrabold leading-tight'>
                <span className='text-white'>NON-</span>
                <br />
                <span className='text-white'>STOP.</span>
              </h3>
            </div>
            <div>
              <h3 className='text-4xl md:text-6xl font-extrabold leading-tight text-gray-600'>
                INTEL-
                <br />
                LIGENT.
              </h3>
            </div>
            <div>
              <h3 className='text-4xl md:text-6xl font-extrabold leading-tight text-gray-600'>
                NIMBLE.
              </h3>
            </div>

            <p className='text-gray-400 text-base md:text-lg mt-8 md:mt-12 max-w-md'>
              Three principles that power every transaction, every agent, every
              settlement — day or night.
            </p>
          </div>

          {/* Right Side - Feature Cards */}
          <div className='space-y-6'>
            {/* Non-Stop Card */}
            <div className='bg-linear-to-r from-[#FF0000] to-[#FF4444] rounded-2xl p-6 md:p-8 relative overflow-hidden'>
              <div className='absolute right-4 bottom-4 text-[120px] md:text-[200px] font-black text-white/10'>
                N
              </div>
              <div className='relative z-10'>
                <h4 className='text-xl md:text-2xl font-bold text-white mb-3 md:mb-4'>
                  Non-Stop
                </h4>
                <p className='text-white/90 text-sm md:text-base'>
                  24/7 global payment processing that never sleeps, ensuring
                  your business is always open for every customer.
                </p>
              </div>
            </div>

            {/* Intelligent Card */}
            <div className='bg-linear-to-r from-[#FFA45F] to-[#FFB87F] rounded-2xl p-6 md:p-8 relative overflow-hidden'>
              <div className='absolute right-4 bottom-4 text-[120px] md:text-[200px] font-black text-white/10'>
                N
              </div>
              <div className='relative z-10'>
                <h4 className='text-xl md:text-2xl font-bold text-black mb-3 md:mb-4'>
                  Intelligent
                </h4>
                <p className='text-black/80 text-sm md:text-base'>
                  AI-driven backend that predicts bank downtime and suggests the
                  fastest routes for instant settlement.
                </p>
              </div>
            </div>

            {/* Nimble Card */}
            <div className='bg-[#2A2A2A] rounded-2xl p-6 md:p-8 relative overflow-hidden border border-gray-700'>
              <div className='absolute right-4 bottom-4 text-[120px] md:text-[200px] font-black text-white/5'>
                N
              </div>
              <div className='relative z-10'>
                <h4 className='text-xl md:text-2xl font-bold text-white mb-3 md:mb-4'>
                  Nimble
                </h4>
                <p className='text-gray-300 text-sm md:text-base'>
                  We adapt faster than traditional banks — deploying updates and
                  resolving disputes in record time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
