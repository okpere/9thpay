import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import MerchantToolkit from '@/components/MerchantToolkit';
import GoldStandard from '@/components/GoldStandard';
import SectorsWePower from '@/components/SectorsWePower';
import OurDirection from '@/components/OurDirection';
import BetterInfrastructure from '@/components/BetterInfrastructure';

export default function Home() {
  return (
    <div className='flex-1'>
      {/* Hero Section */}
      <Hero />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Merchant Toolkit Section */}
      <MerchantToolkit />

      {/* Gold Standard Section */}
      <GoldStandard />

      {/* Sectors We Power Section */}
      <SectorsWePower />

      {/* Our Direction Section */}
      <OurDirection />

      {/* Better Infrastructure Section */}
      <BetterInfrastructure />
    </div>
  );
}
