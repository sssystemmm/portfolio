
import React, { useEffect, useState } from 'react';
import { ImpactItem } from '../types.ts';

interface CaseStudyProps {
  item: ImpactItem;
  onBack: () => void;
  onNext: (nextId: string) => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ item, onBack, onNext }) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { caseStudy } = item;

  const sidebarItems = [
    { label: 'Overview', id: 'overview' },
    { label: 'The Impact', id: 'impact' },
    { label: 'The Problem', id: 'problem' },
    { label: 'Design Process', id: 'process' },
    { label: 'Final Result', id: 'result' },
    ...(caseStudy.postLaunch ? [{ label: 'Post Launch', id: 'post-launch' }] : [])
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen pt-20">
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

      {/* Expanded Header Section */}
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-start w-full">
          {/* Label */}
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase">{item.product}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif leading-[1.05] mb-12 tracking-tight w-full max-w-6xl">
            {item.title.split(' ').map((word, i) => (
              <span key={i} className={i >= 3 ? 'text-brand-blue' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Expanded Subtitle / Impact Statement */}
          <p className="text-xl md:text-3xl text-gray-400 max-w-5xl leading-relaxed mb-16 font-light">
            {item.subtitle}
          </p>
          
          {/* Full-width Metadata Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-12 border-t border-b border-white/10 mb-20">
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-[0.3em] mb-2">Role</span>
              <span className="text-base md:text-lg font-semibold">{caseStudy.metadata.role}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-[0.3em] mb-2">Timeline</span>
              <span className="text-base md:text-lg font-semibold">{caseStudy.metadata.timeline}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-[0.3em] mb-2">Team Structure</span>
              <span className="text-base md:text-lg font-semibold">{caseStudy.metadata.team}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full">
            <div className="aspect-[21/9] bg-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/10">
               <img 
                src={item.imageUrl} 
                alt="Project hero" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Body with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[240px_1fr] gap-24 pb-32">
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <span className="text-[10px] uppercase font-bold text-gray-600 tracking-widest block mb-8">On this page</span>
            <nav className="flex flex-col gap-4">
              {sidebarItems.map((navItem) => (
                <button 
                  key={navItem.id}
                  onClick={(e) => scrollToSection(e, navItem.id)}
                  className="text-xs font-bold text-gray-500 hover:text-white transition-colors flex items-center gap-3 group text-left"
                >
                  <span className="w-4 h-[1px] bg-white/10 group-hover:bg-brand-blue transition-colors group-hover:w-6"></span>
                  {navItem.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Sections */}
        <div className="space-y-40">
          {/* Executive Overview */}
          <section id="overview" className="max-w-3xl scroll-mt-32">
            <h2 className="text-3xl font-bold mb-10">Executive Overview</h2>
            <div className="space-y-8 text-xl text-gray-400 leading-relaxed">
              <p>{caseStudy.overview}</p>
              <p>{caseStudy.overviewSubtext}</p>
              {caseStudy.links && caseStudy.links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-4">
                  {caseStudy.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-brand-blue hover:bg-brand-blue hover:text-white transition-all group"
                    >
                      {link.label}
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* The Impact */}
          <section id="impact" className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-12">The Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Award Recognition */}
              {item.award && (
                <div className="md:col-span-2 lg:col-span-1 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-yellow-600/5 to-transparent border border-yellow-500/20 shadow-2xl shadow-yellow-500/5 flex flex-col justify-between relative overflow-hidden group min-h-[220px]">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-500 opacity-[0.05] blur-[60px] rounded-full group-hover:opacity-10 transition-opacity"></div>
                  <div>
                    <span className="block text-[10px] font-bold tracking-[0.3em] text-yellow-500 uppercase mb-8 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L14.39 8.26H22L15.81 12.75L18.19 20L12 15.5L5.81 20L8.19 12.75L2 8.26H9.61L12 1Z" />
                      </svg>
                      Industry Recognition
                    </span>
                    <div className="text-2xl font-serif text-white mb-4 leading-snug">
                      Winner: Best Digital Educational Resource/Product
                    </div>
                  </div>
                  <p className="text-xs text-yellow-500/80 font-bold uppercase tracking-widest mt-4">
                    GESS EDUCATION AWARDS 2025
                  </p>
                </div>
              )}

              {caseStudy.metrics && caseStudy.metrics.length > 0 && caseStudy.metrics.map((metric, i) => {
                const isLongValue = metric.value.length > 6;
                return (
                  <div 
                    key={i} 
                    className={`p-8 rounded-2xl border flex flex-col justify-between h-full min-h-[220px] ${metric.featured ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20' : 'bg-white/5 border-white/10 shadow-sm'}`}
                  >
                    <div>
                      <span className={`block text-[10px] font-bold tracking-[0.2em] mb-4 ${metric.featured ? 'text-blue-100' : 'text-brand-blue'}`}>
                        {metric.label}
                      </span>
                      <div className={`${isLongValue ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold mb-4 break-words leading-tight`}>
                        {metric.value}
                      </div>
                    </div>
                    <p className={`text-[14px] leading-relaxed ${metric.featured ? 'text-blue-50' : 'text-gray-400'}`}>
                      {metric.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Insights & Testimonials */}
          {caseStudy.insights && (
            <section className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-10">Insights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudy.insights.map((insight, i) => (
                  <div key={i} className={`p-8 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group ${insight.content.includes('"') ? 'border-brand-blue/20 bg-brand-blue/[0.02]' : ''}`}>
                    {insight.content.includes('"') && (
                      <div className="absolute top-4 right-8 text-6xl font-serif text-brand-blue/10 pointer-events-none">"</div>
                    )}
                    <h3 className="text-xl font-bold mb-4 text-brand-blue">{insight.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-base">
                      {insight.content}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* The Problem */}
          <section id="problem" className="scroll-mt-32">
            <div className={`flex flex-col lg:flex-row gap-16 ${caseStudy.challenge.image ? 'items-center' : 'items-start'}`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-8">The Problem</h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  {caseStudy.challenge.description}
                </p>
                <div className={`grid ${caseStudy.challenge.image ? 'grid-cols-1' : 'md:grid-cols-2'} gap-8`}>
                  {caseStudy.challenge.points && caseStudy.challenge.points.length > 0 && caseStudy.challenge.points.map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${point.iconType === 'warning' ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/5 text-gray-500'}`}>
                         {point.iconType === 'warning' ? '!' : 'i'}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-lg">{point.title}</h4>
                        <p className="text-base text-gray-500 leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {caseStudy.challenge.image && (
                <div className="flex-1 w-full">
                  <div 
                    className="bg-white/5 rounded-3xl aspect-square overflow-hidden border border-white/10 shadow-2xl relative cursor-zoom-in group"
                    onClick={() => setExpandedImage(caseStudy.challenge.image!)}
                  >
                     <img 
                      src={caseStudy.challenge.image} 
                      alt="Problem context" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Design Process */}
          <section id="process" className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-4">Design Process</h2>
            <p className="text-lg text-gray-500 mb-16">Following a comprehensive human-centered methodology spanning nine months.</p>
            
            <div className="space-y-32 relative">
              {/* Connector line */}
              <div className="absolute left-6 top-10 bottom-10 w-[1px] bg-white/10"></div>

              {caseStudy.processSteps && caseStudy.processSteps.length > 0 && caseStudy.processSteps.map((step, i) => (
                <div key={i} className="relative pl-24 group">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center z-10 shadow-lg shadow-brand-blue/20 transition-transform group-hover:scale-110">
                    {step.id}
                  </div>
                  <div className="grid lg:grid-cols-[1fr_240px] gap-12 items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{step.title}</h3>
                      <p className="text-lg text-gray-400 leading-relaxed mb-4">{step.description}</p>
                    </div>
                    {step.image && (
                      <div 
                        className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/5 cursor-zoom-in group/img h-48 lg:h-40"
                        onClick={() => setExpandedImage(step.image!)}
                      >
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Final Solution */}
          {(caseStudy.solution.featureTitle || caseStudy.solution.featureDescription || (caseStudy.solution.featureImages && caseStudy.solution.featureImages.length > 0) || caseStudy.solution.embedCode) && (
            <section id="result" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-16">The Final Solution</h2>

              {caseStudy.solution.embedCode && (
                <div className="mb-24 w-full aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                  <div 
                    className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
                    dangerouslySetInnerHTML={{ __html: caseStudy.solution.embedCode }} 
                  />
                </div>
              )}
              
              {caseStudy.solution.featureImages && caseStudy.solution.featureImages.length > 0 && (
                <div className="bg-white/5 rounded-[3rem] p-8 lg:p-16 mb-16 flex flex-wrap items-center justify-center gap-8 border border-white/10 overflow-hidden">
                  {caseStudy.solution.featureImages.map((img, i) => (
                    <div 
                      key={i} 
                      className="flex-1 min-w-[300px] rounded-2xl shadow-2xl overflow-hidden border border-white/10 cursor-zoom-in group/sol" 
                      onClick={() => setExpandedImage(img)}
                    >
                        <img src={img} className="w-full h-auto object-contain group-hover/sol:scale-105 transition-transform duration-1000" />
                    </div>
                  ))}
                </div>
              )}

              <div className="max-w-3xl mb-32">
                {caseStudy.solution.featureTitle && <h3 className="text-3xl font-bold mb-6">{caseStudy.solution.featureTitle}</h3>}
                {caseStudy.solution.featureDescription && <p className="text-xl text-gray-400 mb-10 leading-relaxed whitespace-pre-line">{caseStudy.solution.featureDescription}</p>}
                {caseStudy.solution.featureList && caseStudy.solution.featureList.length > 0 && (
                  <div className="space-y-4">
                    {caseStudy.solution.featureList.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base font-semibold text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Additional Solution Sections */}
              {caseStudy.solution.additionalSections?.map((section, idx) => (
                 <div key={idx} className="mb-32">
                    {section.images && section.images.length > 0 && (
                      <div className="bg-white/5 rounded-[3rem] p-8 lg:p-16 mb-16 flex flex-wrap items-center justify-center gap-8 border border-white/10 overflow-hidden">
                        {section.images.map((img, i) => (
                          <div 
                            key={i} 
                            className="flex-1 min-w-[300px] rounded-2xl shadow-2xl overflow-hidden border border-white/10 cursor-zoom-in group/sol" 
                            onClick={() => setExpandedImage(img)}
                          >
                              <img src={img} className="w-full h-auto object-contain group-hover/sol:scale-105 transition-transform duration-1000" />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="max-w-3xl">
                      <h3 className="text-3xl font-bold mb-6">{section.title}</h3>
                      <p className="text-xl text-gray-400 mb-10 leading-relaxed whitespace-pre-line">{section.description}</p>
                      {section.list && (
                        <div className="space-y-4">
                          {section.list.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center shrink-0">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-base font-semibold text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                 </div>
              ))}
            </section>
          )}

          {/* Post Launch */}
          {caseStudy.postLaunch && (
            <section id="post-launch" className="scroll-mt-32">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-8">{caseStudy.postLaunch.title}</h2>
                <p className="text-xl text-gray-400 leading-relaxed whitespace-pre-line">
                  {caseStudy.postLaunch.content}
                </p>
              </div>
            </section>
          )}

          {/* Reflections */}
          {caseStudy.reflections && caseStudy.reflections.length > 0 && (
            <section className="scroll-mt-32">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-12 lg:p-16 grid md:grid-cols-2 gap-16">
                {caseStudy.reflections.map((ref, i) => (
                  <div key={i}>
                    <h4 className="text-brand-blue font-bold mb-4 uppercase tracking-widest text-xs">{ref.title}</h4>
                    <p className="text-base text-gray-400 leading-relaxed">{ref.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Up Next */}
          <section className="pt-20 border-t border-white/10 flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.4em] mb-8">Up Next</span>
            <button 
              onClick={() => {
                onNext(caseStudy.nextProject.id);
              }}
              className="group flex flex-col items-center text-center gap-6"
            >
              <h2 className="text-4xl md:text-7xl font-serif group-hover:text-brand-blue transition-colors max-w-4xl">{caseStudy.nextProject.title}</h2>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-blue transition-colors">
                <svg className="w-6 h-6 text-white group-hover:text-brand-blue transition-all transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
