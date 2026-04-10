'use client';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-brand-orange">
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-yellow" />
      
      {/* Moving slow radial pulses — CSS-only for GPU compositing */}
      <div
        className="absolute w-[150vw] h-[150vw] left-[-30vw] top-[-30vw] pointer-events-none mix-blend-screen animate-pulse-orb-1"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 40%)',
        }}
      />

      {/* Additional glowing orb for rich depth */}
      <div
        className="absolute w-[80vw] h-[80vw] right-[-10vw] top-[20vh] bg-brand-yellow rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-orb-2"
      />
      
      <div
        className="absolute w-[60vw] h-[60vw] left-[10vw] bottom-[-20vh] bg-[#FFE0B2] rounded-full blur-[120px] pointer-events-none mix-blend-overlay animate-pulse-orb-3"
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
