'use client'
import { useState, useEffect } from 'react';

interface aboutProps {
  description: string;
}

export default function AboutMe({ description }: aboutProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(description.slice(0, i));
      if (i >= description.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [description]);

  return (
    <div className="group flex flex-col text-left bg-[#020617] border border-white/10 hover:border-blue-500/30 rounded-lg overflow-hidden h-fit max-w-2xl w-full mx-auto transition-colors duration-300 shadow-2xl">
      <div className="border-b border-white/5 bg-white/1 pl-4 pr-1 py-1.5 flex items-center justify-between select-none">
        <span className="text-[11px] font-mono text-slate-500 tracking-wide">about_me.txt</span>
        <div className="flex text-slate-500 text-[10px] font-sans">
          <button className="w-8 h-7 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
            <span>⎯</span>
          </button>
          <button className="w-8 h-7 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
            <span className="text-[8px]">🗖</span>
          </button>
          <button className="w-9 h-7 flex items-center justify-center hover:bg-red-500/80 hover:text-white transition-colors rounded-tr-lg">
            <span>✕</span>
          </button>
        </div>
      </div>
      <div className="p-6 font-mono text-xs md:text-sm text-slate-300 leading-relaxed min-h-30">
        <span>{displayed}</span>
        <span className={`border-r-2 border-teal-500 ${done ? 'animate-blink' : ''} ml-px`}>&nbsp;</span>
      </div>
    </div>
  );
}