'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-brand-orange">
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-yellow" />
      
      {/* Moving slow radial pulses representing audio/waves */}
      <motion.div
        className="absolute w-[150vw] h-[150vw] left-[-30vw] top-[-30vw] opacity-30 pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 40%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.35, 0.15],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Additional glowing orb for rich depth */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] right-[-10vw] top-[20vh] opacity-20 bg-brand-yellow rounded-full blur-[100px] pointer-events-none mix-blend-screen"
        animate={{
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.15, 0.4, 0.15],
          x: [0, -50, 20, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute w-[60vw] h-[60vw] left-[10vw] bottom-[-20vh] opacity-20 bg-[#FFE0B2] rounded-full blur-[120px] pointer-events-none mix-blend-overlay"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 40, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Noise filter for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
    </div>
  );
}

