'use client';

import { useState } from 'react';
import { SplashHeroTransition } from '@/components/animations/SplashHeroTransition';
import { AnimatedBackground } from '@/components/animations/AnimatedBackground';
import { Navbar } from '@/components/layout/Navbar';
import { ScrollSpyLayout } from '@/components/layout/ScrollSpyLayout';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { Support } from '@/components/sections/Support';
import { FeedbackForm } from '@/components/forms/FeedbackForm';
import { SignupForm } from '@/components/forms/SignupForm';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  function handleReplay() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setShowSplash(true);
  }

  return (
    <main className="relative min-h-screen font-sans">
      <AnimatedBackground />

      <div className={`${showSplash ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Navbar onLogoClick={handleReplay} />
        <Hero />
        
        <ScrollSpyLayout>
          <Products />
          <Support />
          <FeedbackForm />
          <SignupForm />
        </ScrollSpyLayout>

        <Footer />
      </div>

      {showSplash && (
        <SplashHeroTransition onComplete={() => setShowSplash(false)} />
      )}
    </main>
  );
}

