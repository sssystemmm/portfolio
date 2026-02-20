
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import CaseStudy from './pages/CaseStudy.tsx';
import { ImpactItem } from './types.ts';
import { IMPACTS } from './constants.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ImpactItem | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedCaseStudy(null);
    window.scrollTo(0, 0);
  };

  const handleSeeMore = (item: ImpactItem) => {
    setSelectedCaseStudy(item);
    setCurrentPage('casestudy');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (selectedCaseStudy && currentPage === 'casestudy') {
      return (
        <CaseStudy 
          item={selectedCaseStudy} 
          onBack={() => {
            setSelectedCaseStudy(null);
            setCurrentPage('home');
          }} 
          onNext={(nextId) => {
            const nextItem = IMPACTS.find(i => i.id === nextId);
            if (nextItem) {
              setSelectedCaseStudy(nextItem);
              window.scrollTo(0, 0);
            } else {
              setSelectedCaseStudy(null);
              setCurrentPage('home');
            }
          }}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return <Home onSeeMore={handleSeeMore} />;
      case 'process':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onSeeMore={handleSeeMore} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="transition-all duration-500">
        {renderContent()}
      </main>
      
      {/* Footer Section - Simplified */}
      <footer className="py-16 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            {/* Left side: Single header sentence */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">Get in touch</h2>
            </div>
            
            {/* Right side: Two small links */}
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
              <a 
                href="mailto:mdarienzo@gmail.com" 
                className="hover:text-white transition-colors py-2"
              >
                Email
              </a>
              <span className="text-gray-800">|</span>
              <a 
                href="https://linkedin.com/in/marceldarienzo" 
                target="_blank" 
                className="hover:text-white transition-colors py-2"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Bottom bar stays the same */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[9px] font-bold text-gray-700 uppercase tracking-widest">
            <span>© 2024 UX Lead Portfolio</span>
            <span className="my-4 md:my-0">Built with impact in mind</span>
            <span>Portfolio Edition</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
