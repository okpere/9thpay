'use client';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-black text-white '>
      {/* Hero Section - Built on Trust */}
      <section className='max-w-7xl mx-auto px-6 md:px-20 pt-10 pb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Built on <span className='text-orange-500'>Trust</span>,<br />
              Driven by
              <br />
              Purpose.
            </h1>
            <p className='text-gray-400 text-lg leading-relaxed'>
              9th Pay Ltd. is Nigeria's unified fintech powerhouse — born to
              bridge the last mile of financial services and serve as the
              backbone of Africa's informal and formal economies.
            </p>
          </div>
        </div>
      </section>

      {/* From Regional Processor to Unified Powerhouse */}
      <section className='max-w-7xl mx-auto px-6 md:px-20 pt-10 pb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left Column */}
          <div>
            <h2 className='text-4xl md:text-5xl font-bold mb-8'>
              From Regional
              <br />
              Processor
              <br />
              to <span className='text-orange-500'>Unified</span> Powerhouse
            </h2>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              9th Pay Ltd. (RC No. 9302102) was born from a vision to bridge the
              last mile of financial services — reaching the market traders,
              community pharmacies, and petrol station operators that
              traditional banking left behind.
            </p>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              Operating as a subsidiary of 911i Tech Ltd, we have spent 4.5
              years building a hybrid infrastructure that merges physical agency
              banking with cutting-edge digital wallets — all under one brand,
              one platform, one mission.
            </p>
            <p className='text-gray-400 leading-relaxed'>
              Today, we operate across 37 states and are targeting a network of
              over 1 million exclusive agents by 2027, handling billions in
              Total Processing Volume on a scalable, cloud-native architecture.
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div className='relative'>
            <div className='space-y-8'>
              {/* Timeline Item 1 */}
              <div className='flex gap-4'>
                <div className='flex flex-col items-center'>
                  <div className='w-3 h-3 bg-red-600 rounded-full'></div>
                  <div className='w-0.5 h-full bg-gray-800'></div>
                </div>
                <div className='pb-8'>
                  <p className='text-red-600 font-semibold mb-2'>2021</p>
                  <h3 className='text-xl font-bold mb-2'>
                    Founded as 9th Pay Ltd.
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    Launched under CAMA with a mission to democratize financial
                    access across Nigeria.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className='flex gap-4'>
                <div className='flex flex-col items-center'>
                  <div className='w-3 h-3 bg-red-600 rounded-full'></div>
                  <div className='w-0.5 h-full bg-gray-800'></div>
                </div>
                <div className='pb-8'>
                  <p className='text-red-600 font-semibold mb-2'>2023</p>
                  <h3 className='text-xl font-bold mb-2'>
                    First Smart POS Terminal Deployed
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    Launching all-in-one card transfer, QR, and NFC acceptance —
                    engineered for 99.9% uptime.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className='flex gap-4'>
                <div className='flex flex-col items-center'>
                  <div className='w-3 h-3 bg-red-600 rounded-full'></div>
                  <div className='w-0.5 h-full bg-gray-800'></div>
                </div>
                <div className='pb-8'>
                  <p className='text-red-600 font-semibold mb-2'>2024</p>
                  <h3 className='text-xl font-bold mb-2'>
                    PCI-DSS Level 1 Certified
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    Achieved the highest global security standard for card data
                    protection.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className='flex gap-4'>
                <div className='flex flex-col items-center'>
                  <div className='w-3 h-3 bg-red-600 rounded-full'></div>
                  <div className='w-0.5 h-full bg-gray-800'></div>
                </div>
                <div className='pb-8'>
                  <p className='text-red-600 font-semibold mb-2'>2025</p>
                  <h3 className='text-xl font-bold mb-2'>
                    Dual NIBSS + UPSL Connectivity
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    Integrated redundant aggregator failover — transactions
                    complete even when one network is down.
                  </p>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className='flex gap-4'>
                <div className='flex flex-col items-center'>
                  <div className='w-3 h-3 bg-red-600 rounded-full'></div>
                </div>
                <div>
                  <p className='text-red-600 font-semibold mb-2'>2027</p>
                  <h3 className='text-xl font-bold mb-2'>
                    Borderless Expansion
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    Scaling to all 37 states with hyper-local Relationship
                    Managers, targeting 1M+ exclusive agents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='bg-[#0a0a0a] py-12 md:py-20'>
        <div className='max-w-7xl mx-auto px-6 md:px-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-12'>Core Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Integrity */}
            <div className='bg-black rounded-2xl p-8 border border-gray-900 hover:border-gray-800 transition-colors'>
              <div className='w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-3'>Integrity</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                We operate with full transparency and the governance of a
                tier-one institution — no hidden fees, no hidden agendas.
              </p>
            </div>

            {/* Empathy */}
            <div className='bg-black rounded-2xl p-8 border border-gray-900 hover:border-gray-800 transition-colors'>
              <div className='w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-3'>Empathy</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Every product decision starts with the agent, the merchant, the
                market women. We build for humans, not statistics.
              </p>
            </div>

            {/* Relentless Innovation */}
            <div className='bg-black rounded-2xl p-8 border border-gray-900 hover:border-gray-800 transition-colors'>
              <div className='w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-6 h-6 text-white'
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
              <h3 className='text-xl font-bold mb-3'>Relentless Innovation</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                We move faster than traditional banks — shipping updates,
                resolving disputes, and anticipating disruption before it
                arrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Structure */}
      <section className='max-w-7xl mx-auto px-6 md:px-20 pt-10 pb-20'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
          Leadership Structure
        </h2>
        <p className='text-gray-400 mb-12 max-w-3xl'>
          A lean, mission-driven leadership team running 9th Pay's operations,
          technology, growth, and compliance.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* CEO */}
          <div className='bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800'>
            <p className='text-orange-500 text-xs font-semibold uppercase mb-2'>
              Chief Executive Officer
            </p>
            <h3 className='text-xl font-bold mb-2'>CEO</h3>
            <p className='text-gray-400 text-sm'>
              Corporate Strategy & Visionary Leadership.
            </p>
          </div>

          {/* COO */}
          <div className='bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800'>
            <p className='text-orange-500 text-xs font-semibold uppercase mb-2'>
              Chief Operating Officer
            </p>
            <h3 className='text-xl font-bold mb-2'>COO</h3>
            <p className='text-gray-400 text-sm'>
              Scale, Regional Expansion & Field Operations.
            </p>
          </div>

          {/* CTO */}
          <div className='bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800'>
            <p className='text-orange-500 text-xs font-semibold uppercase mb-2'>
              Chief Technology Officer
            </p>
            <h3 className='text-xl font-bold mb-2'>CTO</h3>
            <p className='text-gray-400 text-sm'>
              Terminal Management Systems & App Engineering.
            </p>
          </div>

          {/* CFO */}
          <div className='bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800'>
            <p className='text-orange-500 text-xs font-semibold uppercase mb-2'>
              Chief Financial Officer
            </p>
            <h3 className='text-xl font-bold mb-2'>CFO</h3>
            <p className='text-gray-400 text-sm'>
              Reconciliation, Settlement & Fundraising.
            </p>
          </div>

          {/* Product Management */}
          <div className='bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800'>
            <p className='text-orange-500 text-xs font-semibold uppercase mb-2'>
              Head of Product
            </p>
            <h3 className='text-xl font-bold mb-2'>Product Management</h3>
            <p className='text-gray-400 text-sm'>
              Agent POS Software, Backed-User & UX/UX Design.
            </p>
          </div>

          {/* Growth & Marketing */}
          <div className='bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800'>
            <p className='text-orange-500 text-xs font-semibold uppercase mb-2'>
              Head of Growth
            </p>
            <h3 className='text-xl font-bold mb-2'>Growth & Marketing</h3>
            <p className='text-gray-400 text-sm'>
              Brand Strategy, GTM, Campaigns & Lifecycle Marketing.
            </p>
          </div>

          {/* Field Team */}
          <div className='bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800'>
            <p className='text-orange-500 text-xs font-semibold uppercase mb-2'>
              Field Team
            </p>
            <h3 className='text-xl font-bold mb-2'>Relationship Managers</h3>
            <p className='text-gray-400 text-sm'>
              Hyper-local Agent Support & Direct Training.
            </p>
          </div>

          {/* Customer Success */}
          <div className='bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800'>
            <p className='text-orange-500 text-xs font-semibold uppercase mb-2'>
              Customer Success
            </p>
            <h3 className='text-xl font-bold mb-2'>24/7 Support</h3>
            <p className='text-gray-400 text-sm'>
              Multi-lingual Support & Dispute Resolution.
            </p>
          </div>
        </div>
      </section>

      {/* 9th Pay at a Glance */}
      <section className='bg-gradient-to-r from-red-600 to-orange-500 py-12 md:py-20'>
        <div className='max-w-7xl mx-auto px-6 md:px-20 pt-10 pb-20'>
          <p className='text-white/80 text-sm uppercase tracking-wider mb-4'>
            — BY THE NUMBERS
          </p>
          <h2 className='text-5xl md:text-6xl font-bold mb-16 text-white'>
            9th Pay at a Glance
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Stat 1 */}
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
              <h3 className='text-5xl font-bold mb-3 text-white'>4.5yr</h3>
              <p className='text-white/90'>
                Operational excellence & track record
              </p>
            </div>

            {/* Stat 2 */}
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
              <h3 className='text-5xl font-bold mb-3 text-white'>37</h3>
              <p className='text-white/90'>
                States of active infrastructure presence
              </p>
            </div>

            {/* Stat 3 */}
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
              <h3 className='text-5xl font-bold mb-3 text-white'>1M+</h3>
              <p className='text-white/90'>Exclusive agent target by 2027</p>
            </div>

            {/* Stat 4 */}
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
              <h3 className='text-5xl font-bold mb-3 text-white'>99.9%</h3>
              <p className='text-white/90'>Network uptime SLA guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
