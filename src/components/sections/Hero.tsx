'use client';

import { DemoCard } from './DemoCard';

export function Hero() {
  const scrollToLink = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-40 px-6 flex flex-col items-center justify-start text-white">
      <div 
        className="text-center max-w-3xl flex flex-col items-center z-10 animate-hero-text"
      >
        <h1 className="text-5xl md:text-7xl font-calistoga font-bold tracking-tight mb-4 drop-shadow-sm">
          Music, your way
        </h1>
        <p className="text-lg md:text-xl font-medium text-white/90 mb-10">
          Transpo is building a future where music adapts to you.
        </p>

        <button 
          onClick={() => scrollToLink('signup')}
          className="bg-cta-bg text-cta-fg px-8 py-3 rounded-lg font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:brightness-110 transition-all duration-300 cursor-pointer"
        >
          Get Early Access
        </button>
        <p className="mt-4 text-sm text-white/80 font-medium">Be first to try Transpo.</p>
      </div>

      <div 
        className="mt-16 w-full max-w-5xl z-10 animate-hero-card"
      >
        <DemoCard />
      </div>
    </section>
  );
}
