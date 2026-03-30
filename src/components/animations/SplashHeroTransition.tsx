'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function SplashHeroTransition({ onComplete }: { onComplete: () => void }) {
  const [isExpanding, setIsExpanding] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsExpanding(true);
    }, 1200);

    const timer2 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-orange to-brand-yellow"
            initial={{ 
              width: '90vw', 
              height: '90dvh', 
              borderRadius: '32px',
            }}
            animate={{
              width: isExpanding ? '100vw' : '90vw',
              height: isExpanding ? '100dvh' : '90dvh',
              borderRadius: isExpanding ? '0px' : '32px',
            }}
            transition={{
              duration: 1.0,
              ease: [0.76, 0, 0.24, 1], // Apple-like smooth easing
            }}
          >
            <motion.div
              className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 z-10 w-full px-12"
              animate={{
                opacity: isExpanding ? 0 : 1,
                scale: isExpanding ? 1.05 : 1,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Left Side: Fingerprint Waveform Logo */}
              <div className="flex-1 flex justify-end">
                <Image src="/assets/logo-svgs/white.svg" alt="Transpo Logo" width={140} height={140} priority className="drop-shadow-xl" unoptimized />
              </div>

               {/* Center: Divider Line */}
              <div className="md:h-32 w-32 md:w-auto flex items-center justify-center shrink-0 my-4 md:my-0">
                 <div className="h-[2px] w-full md:w-[2px] md:h-full bg-white/70 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                 </div>
              </div>

              {/* Right Side: TRANSPO text */}
              <div className="flex-1 flex justify-start">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-calistoga tracking-wide font-bold">TRANSPO</h1>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
