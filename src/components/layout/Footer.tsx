import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative z-10 w-full px-6 py-12 flex flex-col items-center border-t border-white/20 mt-12 bg-black/10 backdrop-blur-sm snap-start">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div className="flex flex-col items-center md:items-start opacity-80 hover:opacity-100 transition-opacity">
           <Image src="/assets/logo-svgs/white.svg" alt="Transpo" width={48} height={48} className="mb-2" unoptimized />
           <span className="font-calistoga font-bold tracking-wide text-white">make it yours.</span>
           <div className="flex gap-4 mt-4 text-white">
              <a href="https://www.instagram.com/transpo.studio/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
           </div>
        </div>

        <div className="flex gap-16 text-sm text-white flex-wrap justify-center">
           <div className="flex flex-col gap-3">
              <span className="font-bold text-white mb-2">Products</span>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-brand-orange">extensions</a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-brand-orange">mobile app</a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-brand-orange">Desktop</a>
           </div>
           
           <div className="flex flex-col gap-3">
              <span className="font-bold text-white mb-2">Resources</span>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-brand-orange">FAQs</a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-brand-orange">Support</a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-brand-orange">Desktop</a>
           </div>

           <div className="flex flex-col gap-3">
              <span className="font-bold text-white mb-2">Legal</span>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-brand-orange">Terms</a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-brand-orange">Privacy Policy</a>
           </div>
        </div>
      </div>
      
      <div className="mt-16 text-xs text-white/50 font-medium tracking-wide">
         © 2026 Transpo. All rights reserved.
      </div>
    </footer>
  );
}
