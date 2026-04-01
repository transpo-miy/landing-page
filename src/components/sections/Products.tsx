import { SectionWrapper } from '../layout/SectionWrapper';
import Image from "next/image";


export function Products() {
  return (
    <SectionWrapper id="products" title="Products">
       <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
          <h2 className="font-calistoga text-3xl md:text-4xl text-white font-bold mb-4 w-full text-center">Our first product is live</h2>
          <p className="text-white/80 mb-10 text-lg text-center font-medium">Real-time key detection, directly in your browser.</p>
          
          <div className="w-full aspect-[16/9] bg-black rounded-xl mb-12 flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden relative border border-white/10">
            <video 
              src="/assets/videos/demo-loop.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full flex justify-center">
             <button className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-4 hover:scale-105 hover:bg-gray-100 transition-all shadow-xl font-bold group cursor-pointer">
                
                <Image src="/assets/logo-svgs/chrome-icon.svg"
                              alt="Chrome Extension"
                              width={40}
                              height={40}
                              className="relative z-10"
                              unoptimized
                            />
               <div className="flex flex-col text-left leading-tight py-1">
                 <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Chrome Extension</span>
                 <span className="text-sm">Download <span className="inline-block group-hover:translate-x-1 transition-transform">↗</span></span>
               </div>
             </button>
          </div>
       </div>
    </SectionWrapper>
  );
}
