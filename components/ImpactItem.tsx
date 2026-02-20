
import React, { useState } from 'react';
import { ImpactItem as ImpactItemType } from '../types.ts';

interface Props {
  item: ImpactItemType;
  onSeeMore: (item: ImpactItemType) => void;
  index: number;
}

const ImpactItem: React.FC<Props> = ({ item, onSeeMore, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic font size for the large impact value
  const impactValueSize = item.impactValue.length > 4 
    ? 'text-4xl md:text-5xl' 
    : 'text-6xl md:text-7xl';

  return (
    <div 
      className="relative group py-12 lg:py-20 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden border-b border-white/5 last:border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSeeMore(item)}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-24 relative z-10">
        
        {/* Left Side: Index & Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
             <span className="text-[11px] font-bold text-gray-500 tracking-[0.4em]">
               {String(index + 1).padStart(2, '0')}
             </span>
             <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.4em] group-hover:text-brand-blue transition-colors">
               {item.product}
             </span>
          </div>
          
          <h3 className={`text-xl md:text-2xl lg:text-3xl font-serif leading-[1.4] transition-all duration-700 ${isHovered ? 'text-white' : 'text-white/60'}`}>
            {item.subtitle}
          </h3>

          {/* Reveal: Process Description & Link */}
          <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? 'max-h-60 opacity-100 mt-8 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}`}>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-6 font-light italic">
              {item.title}
            </p>
            <div className="inline-flex items-center gap-4 text-[8px] font-bold text-brand-blue uppercase tracking-[0.4em]">
              Explore Case Study
              <div className="w-8 h-[1px] bg-brand-blue group-hover:w-16 transition-all duration-700"></div>
            </div>
          </div>
        </div>

        {/* Right Side: High-Impact Card */}
        <div className="lg:w-[400px] w-full shrink-0">
          <div className={`relative p-8 rounded-3xl bg-white/5 border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-8 group/card overflow-hidden h-full min-h-[320px] ${isHovered ? 'border-brand-blue/30 bg-white/[0.08] -translate-y-2 shadow-2xl shadow-brand-blue/10' : 'border-white/5'}`}>
            
            {/* Background Thumbnail (Subtle underlay) */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none group-hover/card:opacity-40 transition-opacity duration-1000">
               <img 
                src={item.imageUrl} 
                alt="" 
                className="w-full h-full object-cover grayscale brightness-200"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]"></div>
            </div>

            {/* Award Badge - Visual highlight */}
            {item.award && (
              <div className={`absolute top-6 right-6 z-20 transition-all duration-700 ${isHovered ? 'scale-110 translate-x-1 -translate-y-1' : 'scale-100'}`}>
                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-yellow-500/10">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                  <span className="text-[8px] font-bold text-yellow-500 uppercase tracking-widest">GESS 2025 WINNER</span>
                </div>
              </div>
            )}

            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Thumbnail Mini-Preview */}
                <div className="w-20 aspect-video rounded-lg overflow-hidden border border-white/10 bg-black/40 mb-6">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className={`w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-110 grayscale-0' : 'grayscale opacity-60'}`}
                  />
                </div>

                {/* Impact Metric Layout */}
                <div className="space-y-4">
                  <div className="space-y-0">
                    <div className={`${impactValueSize} font-bold tracking-tighter leading-none transition-colors duration-500 break-words ${isHovered ? 'text-brand-blue' : 'text-white'}`}>
                      {item.impactValue}
                    </div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] pt-2">
                      {item.impactLabel}
                    </div>
                  </div>
                  
                  <p className="text-[13px] text-gray-400 leading-relaxed font-medium max-w-[280px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Background Polish */}
      <div className={`absolute inset-0 -mx-10 bg-gradient-to-r from-brand-blue/[0.02] to-transparent transition-opacity duration-700 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );
};

export default ImpactItem;
