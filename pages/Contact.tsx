
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-40 px-6 max-w-7xl mx-auto min-h-[70vh] flex flex-col">
      <div className="w-full">
        {/* Full-width single-line header - Smaller font size as requested */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-24 tracking-tighter leading-none border-b border-white/10 pb-12 w-full">
          Let's build something <span className="text-brand-blue italic">impactful.</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          {/* Column 1: Direct Reach */}
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-10">Direct Reach</h2>
            <div className="space-y-12">
              {/* Email - Smaller font size as requested */}
              <a 
                href="mailto:mdarienzo@gmail.com" 
                className="text-xl md:text-2xl lg:text-3xl font-semibold hover:text-brand-blue transition-colors block underline decoration-white/10 underline-offset-8 hover:decoration-brand-blue"
              >
                mdarienzo@gmail.com
              </a>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xl md:text-2xl text-gray-400 font-light">+971 56 484 8860</p>
                  <p className="text-xl md:text-2xl text-gray-400 font-light">+49 176 62472666</p>
                </div>
                
                <div className="pt-4">
                   <a 
                    href="https://linkedin.com/in/marceldarienzo" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xl md:text-2xl font-semibold text-white hover:text-brand-blue transition-all flex items-center gap-3 group"
                  >
                    LinkedIn
                    <svg className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Current Status */}
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-10">Current Status</h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 leading-relaxed font-light">
              Open to leadership opportunities in <span className="text-white font-normal">AI, innovation, product design, and strategy</span>, looking to apply deep research to push boundaries and create measurable impact.
            </p>
            
            <div className="mt-16 flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
               <span className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                 Available for discussion
               </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
