import { SectionWrapper } from '../layout/SectionWrapper';

export function Products() {
  return (
    <SectionWrapper id="products" title="Products">
       <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
          <h2 className="font-calistoga text-3xl md:text-4xl text-white font-bold mb-4 w-full text-center">Our first product is live</h2>
          <p className="text-white/80 mb-10 text-lg text-center font-medium">Real-time key detection, directly in your browser.</p>
          
          <div className="w-full aspect-[16/9] bg-[#D9D9D9] rounded-xl mb-12 flex items-center justify-center shadow-inner overflow-hidden relative">
             <div className="absolute inset-0 flex items-center justify-center border-4 border-[#3A220F] rounded-xl">
                <span className="text-black/30 font-semibold text-xl tracking-widest uppercase blur-[1px] select-none">[ Demo UI Loop ]</span>
             </div>
          </div>
          
          <div className="w-full flex justify-center">
             <button className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-4 hover:scale-105 hover:bg-gray-100 transition-all shadow-xl font-bold group">
               <div className="w-6 h-6 rounded-full bg-blue-500 overflow-hidden relative flex justify-center items-center shadow-sm -ml-2">
                 {/* Fake chrome icon styling */}
                 <div className="w-2.5 h-2.5 bg-white rounded-full z-10 absolute shadow-sm"></div>
                 <div className="absolute inset-0 bg-[#ea4335]"></div>
                 <div className="absolute top-1/2 bottom-0 left-0 right-1/2 bg-[#fbbc05]"></div>
                 <div className="absolute top-1/2 bottom-0 left-1/2 right-0 bg-[#34a853]"></div>
               </div>
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
