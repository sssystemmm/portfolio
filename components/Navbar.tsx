
import React from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="text-xl font-bold tracking-tighter hover:opacity-70 transition-all text-white"
        >
          Marcel Darienzo
        </button>
        <div className="flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium">
            <button 
              onClick={() => onNavigate('home')}
              className={`transition-colors ${currentPage === 'home' || currentPage === 'casestudy' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
            >
              Work
            </button>
            <button 
              onClick={() => onNavigate('process')}
              className={`transition-colors ${currentPage === 'process' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
            >
              Process
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className={`transition-colors ${currentPage === 'contact' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
            >
              Contact
            </button>
          </div>
          <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
          <button className="hidden md:block bg-brand-blue text-white px-5 py-2 rounded-lg text-xs font-bold hover:brightness-110 transition-all">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
