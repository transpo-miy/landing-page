import React from 'react';

export function SectionWrapper({ id, title,  children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="min-h-[85vh] py-20 flex items-center justify-center relative z-10 w-full scroll-mt-24">
      <div className="w-full bg-gradient-to-br from-[#4A2B14]/95 to-[#3B2210]/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-10 md:p-16 border border-white/5 relative overflow-hidden flex justify-center group transition-shadow hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]">
        {/* Subtle inner light bursts for "soul" and depth */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] blur-3xl rounded-full pointer-events-none group-hover:bg-white/[0.04] transition-colors duration-700" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-orange/[0.04] blur-3xl rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E')] opacity-50 pointer-events-none" />
        
        {/* Inner Content */}
        <div className="relative z-10 w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </section>
  );
}
