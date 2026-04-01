'use client';

import { useState, useLayoutEffect, useEffect } from 'react';
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

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useIsomorphicLayoutEffect(() => {
    // Only play the splash on the very first load of the session
    const hasPlayed = sessionStorage.getItem('transpoSplashPlayed');
    if (hasPlayed) {
      setShowSplash(false);
    } else {
      sessionStorage.setItem('transpoSplashPlayed', 'true');
    }
  }, []);

  return (
    <main className="relative min-h-screen font-sans">
      <AnimatedBackground />

      <div className={`${showSplash ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Hero />
        
        <ScrollSpyLayout>
          <Products />
          <Support />
          <FeedbackForm />
          <SignupForm />
        </ScrollSpyLayout>

        <Footer />
      </div>

      {!showSplash && <Navbar />}

      {showSplash && (
        <SplashHeroTransition onComplete={() => setShowSplash(false)} />
      )}
    </main>
  );
}

