import { ArrowUpRight } from 'lucide-react';
import ProjectProps from "../types";

export default function ProjectCard({ title, description, imageUrl }: ProjectProps) {
  return (
    <div className="group flex flex-col text-left bg-[#020617] border border-white/10 hover:border-blue-500/30 rounded-lg overflow-hidden max-w-md w-full transition-all duration-300 shadow-2xl relative">
      
      <div className="absolute top-0 inset-x-0 z-10 pl-4 pr-1 py-1 flex items-center justify-between select-none bg-transparent w-full">
        <span className="text-[10px] font-mono text-white/40 group-hover:text-white/70 tracking-wide truncate max-w-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-colors">
          {title.toLowerCase().replace(/\s+/g, '_')}.exe
        </span>
        <div className="flex text-white/50 text-[9px] font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <div className="w-7 h-6 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
            <span>⎯</span>
          </div>
          <div className="w-7 h-6 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
            <span className="text-[7px]">🗖</span>
          </div>
          <div className="w-8 h-6 flex items-center justify-center hover:bg-red-500/80 hover:text-white transition-colors rounded-tr-lg">
            <span>✕</span>
          </div>
        </div>
      </div>

      <div className="relative h-40 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/0 to-black/10 transition-colors" />
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between w-full min-h-55">
        <div>
          <h3 className="text-lg font-bold text-slate-200 group-hover:text-white mb-3 tracking-tight transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed line-clamp-5 font-sans">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-3 border-t border-white/5 text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center justify-between w-full">
          <span className="opacity-0 group-hover:opacity-100 text-slate-600 font-mono tracking-normal normal-case transition-opacity">
            view_project
          </span>
          <div className="flex items-center gap-1 text-teal-400 group-hover:text-teal-300 transition-colors">
            <span>Ver Detalhes</span> 
            <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>

    </div>
  );
}