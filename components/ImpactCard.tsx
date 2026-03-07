
import React from 'react';
import { ImpactItem } from '../types.ts';

interface Props {
  item: ImpactItem;
  onSeeMore: (item: ImpactItem) => void;
  className?: string;
}

const ImpactCard: React.FC<Props> = ({ item, onSeeMore, className = "" }) => {
  return (
    <div 
      className={`group relative bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden cursor-pointer flex flex-col lg:flex-row h-full transition-all duration-700 hover:border-brand-blue/40 hover:shadow-[0_0_50px_-12px_rgba(51,102,255,0.15)] ${className}`}
      onClick={() => onSeeMore(item)}
    >
      {/* Image Section - Horizontal on Desktop */}
      <div className="relative w-full lg:w-[45%] aspect-[16/10] lg:aspect-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0d0d0d]/40 via-transparent to-transparent opacity-40"></div>
        
        {/* Award Badge */}
        {item.award && (
          <div className="absolute top-6 right-6 z-10">
            <div className="bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-2xl">
              <span className="text-[9px] font-bold text-yellow-500 uppercase tracking-[0.2em]">Award Winner</span>
            </div>
          </div>
        )}

        {/* Category Tag Overlay */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <span className="text-[9px] font-bold text-white bg-brand-blue px-3 py-1 rounded-sm uppercase tracking-[0.2em] shadow-xl inline-block">
            {item.product}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 lg:p-12 flex flex-col flex-grow justify-center">
        {/* Secondary Title (Label) - Now in Grey */}
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-4 block">
          {item.title}
        </span>

        {/* Main Text (Subtitle) */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-8 leading-[1.3] group-hover:text-brand-blue transition-colors duration-500">
          {item.subtitle}
        </h3>

        {/* Impact Stats */}
        <div className="mt-auto pt-8 border-t border-white/5 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-5xl md:text-6xl font-serif italic text-white tracking-tighter group-hover:text-brand-blue transition-colors duration-500">
              {item.impactValue}
            </span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mt-2">
              {item.impactLabel}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-700">
            Case Study
            <div className="w-8 h-[1px] bg-brand-blue"></div>
          </div>
        </div>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
    </div>
  );
};

export default ImpactCard;
