"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'work', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/70 backdrop-blur-xl shadow-2xl py-2' 
        : 'bg-black/30 backdrop-blur-md shadow-lg py-4'
    }`}>
      <div className='flex justify-between items-center w-[90%] md:w-[85%] lg:w-[75%] mx-auto'>
        <div className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'><a href="/"><img src="/logo.png" alt="" className='h-10 scale-300' /></a></div>
        <div className="hidden md:block">
          <ul className='flex justify-center items-center gap-6 lg:gap-10'>
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-white bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white cursor-pointer focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <div className="hidden md:block">
          <Button 
            className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Book a Call
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 mt-4 py-4">
          <ul className='flex flex-col items-center gap-4'>
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 rounded-xl w-full max-w-xs transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-white bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                onClick={() => scrollToSection('contact')}
              >
                Book a Call
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;