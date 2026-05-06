export default function GoldStandard() {
  return (
    <section className='w-full bg-[#F5F5F0]'>
      <div className='px-6 md:px-40 py-12 md:py-20'>
        <div className='max-w-4xl mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-6xl font-extrabold text-black mb-4 md:mb-6 leading-tight'>
            The Gold Standard
            <br />
            of Reliability
          </h2>
          <p className='text-gray-600 text-base md:text-lg'>
            Every merchant deserves infrastructure that works as hard as they
            do. Here's what sets us apart.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 md:gap-16 items-start'>
          {/* Left Side - Features List */}
          <div className='space-y-8 md:space-y-12'>
            {/* Feature 01 */}
            <div className='flex gap-6'>
              <div className='text-red-500 text-xl md:text-2xl font-bold shrink-0'>
                01
              </div>
              <div>
                <h3 className='text-xl md:text-2xl font-bold text-black mb-2 md:mb-3'>
                  The Beep of Success
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                  An unmistakable audio confirmation for every transaction —
                  designed for empathy in busy market environments.
                </p>
              </div>
            </div>

            {/* Feature 02 */}
            <div className='flex gap-6'>
              <div className='text-red-500 text-xl md:text-2xl font-bold shrink-0'>
                02
              </div>
              <div>
                <h3 className='text-xl md:text-2xl font-bold text-black mb-2 md:mb-3'>
                  Hyper-Local Support
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                  Dedicated Relationship Managers on the ground to train agents
                  and resolve issues within 24 hours.
                </p>
              </div>
            </div>

            {/* Feature 03 */}
            <div className='flex gap-6'>
              <div className='text-red-500 text-xl md:text-2xl font-bold shrink-0'>
                03
              </div>
              <div>
                <h3 className='text-xl md:text-2xl font-bold text-black mb-2 md:mb-3'>
                  Inclusive UX
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                  The app and terminal interface are designed for users of all
                  tech-literacy levels — no one is left behind.
                </p>
              </div>
            </div>

            {/* Feature 04 */}
            <div className='flex gap-6'>
              <div className='text-red-500 text-xl md:text-2xl font-bold shrink-0'>
                04
              </div>
              <div>
                <h3 className='text-xl md:text-2xl font-bold text-black mb-2 md:mb-3'>
                  Free Inter-Wallet Transfers
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                  Moving money within the 9th Pay ecosystem is always free. Zero
                  cost, zero friction for your customers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Pricing Card */}
          <div className='bg-[#1A1A1A] rounded-3xl p-6 md:p-10 sticky top-4'>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3'>
              Lowest Fees in the Market
            </h3>
            <p className='text-gray-400 text-sm md:text-base mb-8 md:mb-10'>
              Transparent pricing that maximizes merchant profit
            </p>

            <div className='space-y-6 md:space-y-8'>
              {/* Withdrawal Fee */}
              <div className='flex justify-between items-center pb-4 border-b border-gray-800'>
                <span className='text-gray-300 text-sm md:text-base'>
                  Withdrawal fee cap
                </span>
                <span className='text-red-500 font-bold text-base md:text-lg'>
                  0.5% / ₦100 max
                </span>
              </div>

              {/* Inter-wallet Transfers */}
              <div className='flex justify-between items-center pb-4 border-b border-gray-800'>
                <span className='text-gray-300 text-sm md:text-base'>
                  Inter-wallet transfers
                </span>
                <span className='text-green-400 font-bold text-base md:text-lg'>
                  FREE
                </span>
              </div>

              {/* Settlement Time */}
              <div className='flex justify-between items-center pb-4 border-b border-gray-800'>
                <span className='text-gray-300 text-sm md:text-base'>
                  Settlement time
                </span>
                <span className='text-green-400 font-bold text-base md:text-lg'>
                  Instant
                </span>
              </div>

              {/* Network Uptime SLA */}
              <div className='flex justify-between items-center pb-4 border-b border-gray-800'>
                <span className='text-gray-300 text-sm md:text-base'>
                  Network uptime SLA
                </span>
                <span className='text-white font-semibold text-base md:text-lg'>
                  99.9%
                </span>
              </div>

              {/* Support Response */}
              <div className='flex justify-between items-center pb-4'>
                <span className='text-gray-300 text-sm md:text-base'>
                  Support response
                </span>
                <span className='text-white font-semibold text-base md:text-lg'>
                  &lt; 24hrs
                </span>
              </div>
            </div>

            {/* Certification Badges */}
            <div className='flex flex-wrap gap-3 mt-8 md:mt-10'>
              <div className='border border-red-500/50 rounded-lg px-4 py-2 text-red-500 text-xs md:text-sm font-semibold'>
                PCI-DSS Level 1
              </div>
              <div className='border border-gray-600 rounded-lg px-4 py-2 text-gray-300 text-xs md:text-sm font-semibold'>
                NDPR Audited
              </div>
              <div className='border border-gray-600 rounded-lg px-4 py-2 text-gray-300 text-xs md:text-sm font-semibold'>
                CAC Registered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
