'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const keys = ["A Minor", "C Major", "G Major", "E Minor", "D Minor", "F# Minor", "Bb Major"];

export function DemoCard() {
  const [currentKey, setCurrentKey] = useState("Listening...");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentKey(keys[Math.floor(Math.random() * keys.length)]);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl bg-[#2D3035] border border-[#484A4D] flex flex-col w-full h-[650px] select-none">
      {/* Tab Row */}
      <div className="h-10 bg-[#292A2D] flex items-end px-3 gap-2">
        <div className="flex gap-2 items-center h-full px-2 mb-1">
          <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>
        {/* Active Tab */}
        <div className="bg-[#35363A] text-white/90 text-xs px-4 py-2 rounded-t-lg flex items-center gap-2 mt-2 w-56 relative border-t border-x border-[#5F6368]/20">
          <div className="w-3 h-3 rounded-sm bg-[#FF0000]" />
          Youtube
        </div>
        <div className="text-white/40 mb-2 ml-2 hover:bg-white/10 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer">+</div>
      </div>
      
      {/* Navigation Row */}
      <div className="h-12 bg-[#35363A] flex items-center px-4 gap-3 border-b border-[#202124] text-white">
        <div className="flex gap-5 text-white/80 px-2 font-light">
          <span className="cursor-pointer hover:text-white">←</span>
          <span className="cursor-pointer hover:text-white">→</span>
          <span className="cursor-pointer hover:text-white">↻</span>
        </div>
        
        <div className="flex-1 max-w-2xl bg-[#202124] rounded-full h-8 flex items-center px-4 text-sm text-white/80 border border-[#5F6368]/40">
          <span className="text-[10px] mr-2 opacity-50">🔒</span> Youtube.com
        </div>
        
        {/* Right Nav Icons */}
        <div className="flex gap-4 ml-auto px-2 items-center text-white/70">
           <span className="text-sm cursor-pointer">☆</span>
           {/* Active extension icon */}
           <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-brand-orange shadow-[0_0_8px_rgba(230,81,0,0.8)] ml-2 p-1">
              <Image src="/assets/logo-svgs/transpo-Logo.svg" alt="Transpo" width={14} height={14} unoptimized />
           </div>
           <div className="w-6 h-6 border border-white/50 rounded flex items-center justify-center mx-[0.2]">
             <div className="w-3 h-3 bg-white/50" />
           </div>
           <span className="cursor-pointer tracking-widest font-serif leading-[0px] shadow-inner">:</span>
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 bg-white relative overflow-hidden flex">
        {/* Fake YouTube Content */}
        <div className="flex-1 p-8">
            <div className="w-[60%] aspect-video bg-gray-200 rounded-lg animate-pulse mb-4" />
            <div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="w-1/3 h-4 bg-gray-100 rounded animate-pulse" />
        </div>

        {/* Extension floating widget — pure CSS, no motion wrapper */}
        <div className="absolute top-4 right-4 w-72 bg-[#12161A] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 text-white overflow-hidden flex flex-col z-20">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
            <div className="flex items-center gap-2">
               <div className="w-5 h-5 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full shadow-[0_0_8px_rgba(230,81,0,0.6)]" />
               <span className="font-calistoga font-bold text-brand-orange tracking-widest text-sm">TRANSPO</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/50 border border-white/5 cursor-pointer hover:bg-white/20 hover:text-white transition-colors">?</div>
          </div>
          
          {/* Main Display */}
          <div className="flex flex-col items-center py-10 relative bg-gradient-to-b from-[#12161A] to-[#1A1E24]">
            <button 
              type="button"
              className={`w-36 h-36 rounded-full border border-brand-orange bg-[#282C31] flex items-center justify-center relative cursor-pointer z-10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${isPlaying ? 'shadow-[0_0_40px_rgba(230,81,0,0.35),inset_0_0_15px_rgba(230,81,0,0.15)]' : 'shadow-[0_0_15px_rgba(230,81,0,0.1)]'}`}
              onClick={() => {
                setIsPlaying(!isPlaying);
                if (isPlaying) setCurrentKey("Stopped");
                else setCurrentKey("Detecting...");
              }}
            >
              <Image 
                src="/assets/logo-svgs/transpo-Logo.svg" 
                alt="Transpo Logo" 
                width={56} height={56} 
                className={`transition-all duration-300 ${isPlaying ? 'drop-shadow-[0_0_12px_rgba(230,81,0,0.8)] opacity-100' : 'opacity-70'}`}
                unoptimized
              />
            </button>

            <span className="mt-6 text-[11px] font-bold text-brand-orange uppercase tracking-wider h-5 flex items-center justify-center w-full">
              {isPlaying ? currentKey : "Tap to detect key"}
            </span>

            {/* Simulated Audio Bars */}
            <div className="flex items-center gap-3 mt-4 w-full px-12">
               <span className="text-[10px] text-white/50">2:26</span>
               <div className="flex-1 h-1 bg-white/10 rounded-full relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-brand-orange rounded-full" />
               </div>
               <span className="text-[10px] text-white/50">10:30</span>
            </div>
            {/* Pause button mock */}
            <div className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center mt-3 shadow-[0_0_10px_rgba(230,81,0,0.5)]">
               <div className="w-1.5 h-1.5 flex gap-0.5"><div className="w-0.5 h-full bg-white"/><div className="w-0.5 h-full bg-white"/></div>
            </div>
          </div>

          <div className="bg-[#15191E] flex-1 p-5 border-t border-white/5">
             <div className="text-[11px] font-bold text-white/80 mb-3 tracking-wide">Recent Detections</div>
             <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded text-sm border border-white/5">
                   <span className="font-bold text-white/90">A Minor</span><span className="text-white/40 text-[10px] font-medium text-right w-16">1m ago</span>
                </div>
                <div className="flex justify-between items-center bg-transparent px-3 py-2 rounded text-sm border border-transparent">
                   <span className="font-medium text-white/50">E Minor</span><span className="text-white/30 text-[10px] text-right w-16">5m ago</span>
                </div>
                <div className="flex justify-between items-center bg-transparent px-3 py-2 rounded text-sm border border-transparent">
                   <span className="font-medium text-white/50">G Major</span><span className="text-white/30 text-[10px] text-right w-16">10m ago</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
