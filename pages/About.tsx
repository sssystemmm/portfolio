import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-24 border-b border-white/10 pb-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 tracking-tighter leading-none">
          How I <span className="text-brand-blue italic">Work.</span>
        </h1>
        {/* Updated Subheader as requested */}
        <p className="text-xl md:text-2xl lg:text-[26px] text-gray-400 leading-relaxed font-light tracking-tight">
          Research deep. Think in systems. Align the teams. Ship what matters.
        </p>
      </header>

      {/* Grid for the 4 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Pillar 1: Discovery */}
        <section className="space-y-6 group">
          <div className="flex items-baseline gap-3">
            <span className="text-[10px] font-mono text-brand-blue font-bold tracking-widest">01</span>
            <h2 className="text-2xl font-bold group-hover:text-brand-blue transition-colors uppercase tracking-tight">Discovery</h2>
          </div>
          <h3 className="text-lg font-serif italic text-white/80 leading-snug">
            Research deep. Decide right.
          </h3>
          <p className="text-base text-gray-400 leading-relaxed">
            Great design starts before the first screen. I ground every project in layered research drawing from academic literature, technology trends, and real user data. All tailored to the specific context we're building for. This creates a strategic framework that doesn't just inform the first concept but guides every iteration, enabling confident pivots rooted in real insights rather than assumptions.
          </p>
        </section>

        {/* Pillar 2: Design */}
        <section className="space-y-6 group">
          <div className="flex items-baseline gap-3">
            <span className="text-[10px] font-mono text-brand-blue font-bold tracking-widest">02</span>
            <h2 className="text-2xl font-bold group-hover:text-brand-blue transition-colors uppercase tracking-tight">Design</h2>
          </div>
          <h3 className="text-lg font-serif italic text-white/80 leading-snug">
            Think in systems. Craft with empathy.
          </h3>
          <p className="text-base text-gray-400 leading-relaxed">
            I design at the systems level building scalable architectures that create consistency across every touchpoint while leaving room for the nuanced, human moments that matter. Whether it's helping users negotiate with an AI in real time or guiding them toward their most efficient decision, every interaction is considered as part of a larger whole. Systems thinking meets polished craft.
          </p>
        </section>

        {/* Pillar 3: Alignment */}
        <section className="space-y-6 group">
          <div className="flex items-baseline gap-3">
            <span className="text-[10px] font-mono text-brand-blue font-bold tracking-widest">03</span>
            <h2 className="text-2xl font-bold group-hover:text-brand-blue transition-colors uppercase tracking-tight">Alignment</h2>
          </div>
          <h3 className="text-lg font-serif italic text-white/80 leading-snug">
            Build the vision together.
          </h3>
          <p className="text-base text-gray-400 leading-relaxed">
            Design doesn't happen in a vacuum. I bring engineering, product management, and design into the process early and often, managing expectations, surfacing constraints, and ensuring every perspective strengthens the final outcome. The result isn't a handoff; it's a shared vision that every team already believes in by the time it ships.
          </p>
        </section>

        {/* Pillar 4: Implementation */}
        <section className="space-y-6 group">
          <div className="flex items-baseline gap-3">
            <span className="text-[10px] font-mono text-brand-blue font-bold tracking-widest">04</span>
            <h2 className="text-2xl font-bold group-hover:text-brand-blue transition-colors uppercase tracking-tight">Implementation</h2>
          </div>
          <h3 className="text-lg font-serif italic text-white/80 leading-snug">
            Ship to the highest standard.
          </h3>
          <p className="text-base text-gray-400 leading-relaxed">
            Vision means nothing without execution. I partner directly with front-end and back-end engineers to ensure technical feasibility, seamless testing, and UX/UI best practices are maintained from prototype to production. No detail gets lost in translation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;