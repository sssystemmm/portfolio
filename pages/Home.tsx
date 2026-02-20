import React from 'react';
import ImpactItem from '../components/ImpactItem.tsx';
import { IMPACTS } from '../constants.tsx';
import { ImpactItem as ImpactItemType } from '../types.ts';

interface HomeProps {
  onSeeMore: (item: ImpactItemType) => void;
}

const Home: React.FC<HomeProps> = ({ onSeeMore }) => {
  return (
    <div className="pt-48 pb-10 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-32">
        <div className="w-full">
          <div className="mb-10">
            <span className="inline-block text-[11px] font-bold text-brand-blue uppercase tracking-[0.4em] animate-fade-in">
              PRODUCT DESIGN LEAD • AI UX • EDTECH • FINTECH • WEB3
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[92px] font-serif leading-[1.1] text-white tracking-tight mb-16">
            <div className="block">
              <span className="block">Aligning stakeholders.</span>
            </div>
            <div className="block">
              <span className="block">Driving vision.</span>
            </div>
            <div className="block">
              <span className="block text-brand-blue italic">Delivering impact.</span>
            </div>
          </h1>

          {/* Consistent subheader text */}
          <p className="text-xl md:text-2xl lg:text-[26px] text-gray-400 leading-relaxed font-light w-full tracking-tight">
            Research deep. Think in systems. Align the teams. Ship what matters.
          </p>
        </div>
      </section>

      {/* Impact Section Header */}
      <section className="mb-12">
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.4em]">Selected Impact Use Cases</h2>
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest hidden md:block">01 — {IMPACTS.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* Impact List - Minimal list that reveals on hover */}
      <section className="mb-20 divide-y divide-white/10">
        {IMPACTS.map((impact, index) => (
          <ImpactItem 
            key={impact.id} 
            item={impact} 
            index={index}
            onSeeMore={onSeeMore} 
          />
        ))}
      </section>
    </div>
  );
};

export default Home;