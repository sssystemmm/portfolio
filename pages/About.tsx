import React, { useState } from 'react';

const About: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      {/* Image Expansion Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <img 
              src={expandedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-fade-in"
            />
            <button 
              className="absolute top-0 right-0 p-4 text-white/50 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <header className="mb-24 border-b border-white/10 pb-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tighter leading-none">
          How I <span className="text-brand-blue italic">Work.</span>
        </h1>
      </header>

      {/* Rows for the 4 Pillars */}
      <div className="flex flex-col">
        
        {/* Pillar 1: Discovery */}
        <section className="group pt-0 pb-16 flex flex-col md:flex-row gap-12 items-start">
          <div 
            className="w-full md:w-2/5 overflow-hidden rounded-xl bg-white/5 border border-white/10 shrink-0 cursor-zoom-in"
            onClick={() => setExpandedImage("https://res.cloudinary.com/dz26vptwn/image/upload/v1772875431/34057a64-db4e-469b-90ba-5e4a52e13fe2.png")}
          >
            <img 
              src="https://res.cloudinary.com/dz26vptwn/image/upload/v1772875431/34057a64-db4e-469b-90ba-5e4a52e13fe2.png" 
              alt="Discovery process" 
              className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] font-mono text-brand-blue font-bold tracking-widest">01</span>
              <h2 className="text-2xl md:text-3xl font-bold group-hover:text-brand-blue transition-colors uppercase tracking-tight">Discovery</h2>
            </div>
            <h3 className="text-xl font-serif italic text-white/80 leading-snug">
              Research deep. Decide right.
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Great design starts before the first screen. I ground every project in layered research drawing from papers, latest trends, and real user data. All tailored to the specific context we're building for. This creates a strategic framework that doesn't just inform the first concept but guides every iteration, enabling confident pivots rooted in real insights rather than assumptions.
            </p>
          </div>
        </section>

        {/* Pillar 2: Design */}
        <section className="group border-t border-white/10 py-16 flex flex-col md:flex-row-reverse gap-12 items-start">
          <div 
            className="w-full md:w-2/5 overflow-hidden rounded-xl bg-white/5 border border-white/10 shrink-0 cursor-zoom-in"
            onClick={() => setExpandedImage("https://res.cloudinary.com/dz26vptwn/image/upload/v1772875515/13612098-fd41-4142-9538-58fe1be76533.png")}
          >
            <img 
              src="https://res.cloudinary.com/dz26vptwn/image/upload/v1772875515/13612098-fd41-4142-9538-58fe1be76533.png" 
              alt="Design systems" 
              className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] font-mono text-brand-blue font-bold tracking-widest">02</span>
              <h2 className="text-2xl md:text-3xl font-bold group-hover:text-brand-blue transition-colors uppercase tracking-tight">Design</h2>
            </div>
            <h3 className="text-xl font-serif italic text-white/80 leading-snug">
              Think in systems. Craft with empathy.
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              I design at the systems level building scalable architectures that create consistency across every touchpoint while leaving room for the nuanced, human moments that matter. Whether it's helping users negotiate with an AI in real time or guiding them toward their most efficient decision, every interaction is considered as part of a larger whole. Systems thinking meets polished craft, applied across AI-driven adaptive learning platforms serving thousands of students.
            </p>
          </div>
        </section>

        {/* Pillar 3: Alignment */}
        <section className="group border-t border-white/10 py-16 flex flex-col md:flex-row gap-12 items-start">
          <div 
            className="w-full md:w-2/5 overflow-hidden rounded-xl bg-white/5 border border-white/10 shrink-0 cursor-zoom-in"
            onClick={() => setExpandedImage("https://res.cloudinary.com/dz26vptwn/image/upload/v1772875407/18d4b11b-1a20-460b-87c0-e18f731baf3e.png")}
          >
            <img 
              src="https://res.cloudinary.com/dz26vptwn/image/upload/v1772875407/18d4b11b-1a20-460b-87c0-e18f731baf3e.png" 
              alt="Team alignment" 
              className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] font-mono text-brand-blue font-bold tracking-widest">03</span>
              <h2 className="text-2xl md:text-3xl font-bold group-hover:text-brand-blue transition-colors uppercase tracking-tight">Alignment</h2>
            </div>
            <h3 className="text-xl font-serif italic text-white/80 leading-snug">
              Build the vision together.
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Design doesn't happen in a vacuum. I bring engineering, product management, and design into the process early and often, managing expectations, surfacing constraints, and ensuring every perspective strengthens the final outcome. The result isn't a handoff; it's a shared vision that every team already believes in by the time it ships. Aligning leadership, specialists, AI researchers and multiple engineering squads.
            </p>
          </div>
        </section>

        {/* Pillar 4: Implementation */}
        <section className="group border-t border-white/10 py-16 flex flex-col md:flex-row-reverse gap-12 items-start">
          <div 
            className="w-full md:w-2/5 overflow-hidden rounded-xl bg-white/5 border border-white/10 shrink-0 cursor-zoom-in"
            onClick={() => setExpandedImage("https://res.cloudinary.com/dz26vptwn/image/upload/v1772875387/4e89b0ac-8c5d-4d29-973b-14ba15c8028a.png")}
          >
            <img 
              src="https://res.cloudinary.com/dz26vptwn/image/upload/v1772875387/4e89b0ac-8c5d-4d29-973b-14ba15c8028a.png" 
              alt="Implementation and shipping" 
              className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] font-mono text-brand-blue font-bold tracking-widest">04</span>
              <h2 className="text-2xl md:text-3xl font-bold group-hover:text-brand-blue transition-colors uppercase tracking-tight">Implementation</h2>
            </div>
            <h3 className="text-xl font-serif italic text-white/80 leading-snug">
              Ship to the highest standard.
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Vision means nothing without execution. I partner directly with multiple engineering squads through release cycles and production rollout, ensuring UX/UI best practices are maintained from prototype to production. No detail gets lost in translation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
