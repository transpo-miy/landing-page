'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'products', title: 'Products' },
  { id: 'support', title: 'Support' },
  { id: 'feedback', title: 'Feedback' },
  { id: 'signup', title: 'Sign Up' }
];

export function ScrollSpyLayout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('Products');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const matched = sections.find(s => s.id === entry.target.id);
          if (matched) setActiveSection(matched.title);
        }
      });
    }, { threshold: 0.5 }); // 50% visibility triggers the change

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-[1300px] mx-auto flex items-stretch relative z-10 px-4 md:px-8 xl:px-0">
      {/* Sticky Left Indicator */}
      <div className="hidden xl:flex w-64 shrink-0 sticky top-0 h-screen flex-col justify-center items-end pr-8 2xl:pr-4">
         <div className="flex items-center gap-6">
            <div className="text-right select-none">
               <h2 className="font-calistoga text-2xl text-white font-bold tracking-wider mb-1 drop-shadow-sm">TRANSPO</h2>
               <p className="text-white/70 text-sm font-medium transition-all">{activeSection}</p>
            </div>
            <div className="flex flex-col items-center h-48 opacity-80">
               <div className="w-px flex-1 bg-white/40 transition-all duration-300"></div>
               <div className="w-2 h-2 rounded-full bg-white my-3 shadow-[0_0_12px_rgba(255,255,255,0.9)]"></div>
               <div className="w-px flex-1 bg-white/40 transition-all duration-300"></div>
            </div>
         </div>
      </div>

      {/* Main Content Sections */}
      <div className="flex-1 w-full max-w-4xl mx-auto pb-32">
        {children}
      </div>
    </div>
  );
}
