export default function OurDirection() {
  return (
    <section className='bg-linear-to-br from-[#FFA45F] via-[#FF6B35] to-[#FF0000] py-16 md:py-24 px-6 md:px-40'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12 md:mb-16'>
          <div className='flex items-center justify-center gap-3 mb-6 md:mb-8'>
            <div className='h-px w-12 md:w-16 bg-white/50'></div>
            <p className='text-white/90 text-sm md:text-base tracking-wider uppercase'>
              OUR DIRECTION
            </p>
            <div className='h-px w-12 md:w-16 bg-white/50'></div>
          </div>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight'>
            Built to Be
            <br />
            Africa's
            <br />
            Market Leader
          </h2>
        </div>

        {/* Vision & Mission Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {/* Our Vision */}
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20'>
            <h3 className='text-white text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 font-semibold'>
              OUR VISION
            </h3>
            <p className='text-white/90 text-base md:text-lg leading-relaxed'>
              To be Africa's market leader in technology-driven financial
              services, driving inclusive socio-economic growth through secure,
              borderless solutions.
            </p>
          </div>

          {/* Our Mission */}
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20'>
            <h3 className='text-white text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 font-semibold'>
              OUR MISSION
            </h3>
            <p className='text-white/90 text-base md:text-lg leading-relaxed'>
              To leverage digital financial technology and innovation to provide
              simple, accessible, efficient, and inclusive payment services that
              are the most trusted in Sub-Saharan Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
