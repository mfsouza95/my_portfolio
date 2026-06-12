'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import * as Dialog from '@radix-ui/react-dialog';
import ProjectProps from "../types";
import { ExternalLink } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function ProjectModal({ title, description, imageUrl, link }: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLang();

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger className="block w-full border-none bg-transparent p-0 text-left cursor-pointer appearance-none outline-none focus:outline-none" type="button">
        <ProjectCard title={title} description={description} imageUrl={imageUrl} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 transition-opacity data-[state=open]:duration-350 data-[state=closed]:duration-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl max-h-[92vh] overflow-y-auto rounded-lg bg-[#020617] border border-white/10 shadow-2xl pb-12 focus:outline-none z-110 data-[state=open]:animate-[modalFadeIn_0.35s_cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:animate-none">
          <div className="absolute top-0 inset-x-0 z-20 pl-4 pr-1 py-1 flex items-center justify-between select-none bg-transparent w-full">
            <div className="flex-1 flex justify-center pl-16">
              <span className="text-[10px] font-mono text-white/40 tracking-wide truncate max-w-60 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {title.toLowerCase().replace(/\s+/g, '_')}_details.sys
              </span>
            </div>
            <div className="flex text-white/50 text-[9px] font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] items-center z-30">
              <span className="w-7 h-6 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">⎯</span>
              <span className="w-7 h-6 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors text-[7px]">🗖</span>
              <button onClick={() => setIsOpen(false)} type="button" className="w-8 h-6 flex items-center justify-center hover:bg-red-500/80 hover:text-white transition-colors rounded-tr-lg cursor-pointer border-none bg-transparent text-[9px] text-white/50 focus:outline-none">✕</button>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-top object-cover" />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/0 to-black/20" />
          </div>
          <div className="p-8 pb-4 text-center">
            <Dialog.Title className="text-xl font-mono font-bold text-slate-200 tracking-tight">{title}</Dialog.Title>
            <Dialog.Description className="mt-5 text-slate-400 font-sans text-xs md:text-sm leading-relaxed text-left max-w-xl mx-auto">{description}</Dialog.Description>
          </div>
          <div className="mt-6 px-8 flex justify-end items-center gap-4">
            <span className="text-[10px] font-mono text-slate-600 select-none">connection: secure</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent border border-teal-500/40 hover:border-teal-400 text-teal-400 hover:text-teal-300 font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-md transition-all shadow-lg hover:shadow-teal-500/5">
              <span>{t.projects.details}</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}