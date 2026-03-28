'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface NavbarProps {
  onLogoClick: () => void;
}

export function Navbar({ onLogoClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-8 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-4xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      <div className="relative">
        <div className="flex items-center justify-between p-2 pr-4 md:pr-6 bg-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/80 w-full h-[72px] relative z-20">
          
          {/* Logo */}
          <button 
            onClick={() => { setIsOpen(false); onLogoClick(); }}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-gray-100 hover:scale-[1.03] transition-transform duration-300 relative group"
            aria-label="Replay transition"
          >
            <div className="absolute inset-0 rounded-full border border-brand-orange opacity-0 group-hover:animate-ping" />
            <Image src="/assets/logo-svgs/transpo-Logo.svg" alt="Transpo" width={32} height={32} className="relative z-10" unoptimized />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-12 text-sm font-semibold text-gray-600">
            <button onClick={() => scrollTo('products')} className="hover:text-brand-orange transition-colors tracking-wide">Products</button>
            <div className="w-[1px] h-8 bg-gray-200" />
            <button onClick={() => scrollTo('support')} className="hover:text-brand-orange transition-colors tracking-wide">Support</button>
            <div className="w-[1px] h-8 bg-gray-200" />
            <button onClick={() => scrollTo('feedback')} className="hover:text-brand-orange transition-colors tracking-wide">Feedback</button>
          </div>

          {/* Desktop CTA */}
          <button 
            onClick={() => scrollTo('signup')}
            className="hidden md:flex bg-[#D19039] text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-brand-orange hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 tracking-wide"
          >
            sign up
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-gray-700 gap-1.5 hover:text-brand-orange transition-colors ml-auto mr-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            <div className={`w-5 h-0.5 bg-current rounded-full transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <div className={`w-5 h-0.5 bg-current rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current rounded-full transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-[80px] left-0 right-0 bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden flex flex-col z-10 md:hidden pb-4"
            >
              <div className="flex flex-col items-center pt-4 border-b border-gray-100 mx-4">
                <button onClick={() => scrollTo('products')} className="w-full py-4 text-center font-bold text-gray-700 hover:text-brand-orange active:bg-gray-50 rounded-xl transition-colors">Products</button>
              </div>
              <div className="flex flex-col items-center border-b border-gray-100 mx-4">
                <button onClick={() => scrollTo('support')} className="w-full py-4 text-center font-bold text-gray-700 hover:text-brand-orange active:bg-gray-50 rounded-xl transition-colors">Support</button>
              </div>
              <div className="flex flex-col items-center border-b border-gray-100 mx-4 mb-4">
                <button onClick={() => scrollTo('feedback')} className="w-full py-4 text-center font-bold text-gray-700 hover:text-brand-orange active:bg-gray-50 rounded-xl transition-colors">Feedback</button>
              </div>
              <div className="px-6">
                <button 
                  onClick={() => scrollTo('signup')}
                  className="w-full bg-[#D19039] text-white py-4 rounded-2xl font-bold shadow-md active:-translate-y-0 tracking-wide text-lg text-center"
                >
                  sign up
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

