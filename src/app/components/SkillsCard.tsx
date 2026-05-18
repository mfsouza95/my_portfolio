import ProjectProps from "../types";

export default function SkillsCard({ title, description }: ProjectProps) {
  return (
    <div className="group flex flex-col bg-[#020617] border border-white/10 hover:border-blue-500/30 rounded-lg overflow-hidden max-w-sm w-full min-h-95 transition-colors duration-300 shadow-2xl relative">
      <div className="absolute top-0 inset-x-0 z-10 pl-4 pr-1 py-1 flex items-center justify-between select-none bg-transparent w-full">
        <div className="flex-1 flex justify-center pl-16">
          <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400 tracking-wide truncate max-w-45 transition-colors">
            {title.toLowerCase().replace(/\s+/g, '_')}.dll
          </span>
        </div>
        <div className="flex text-slate-600 text-[8px] font-sans">
          <div className="w-6 h-5 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
            <span>⎯</span>
          </div>
          <div className="w-6 h-5 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
            <span className="text-[6px]">🗖</span>
          </div>
          <div className="w-7 h-5 flex items-center justify-center hover:bg-red-500/80 hover:text-white transition-colors rounded-tr-lg">
            <span>✕</span>
          </div>
        </div>
      </div>
      <div className="flex-1 pt-12 pb-6 px-6 flex flex-col justify-between w-full">
        <div>
          <h4 className="text-base font-mono font-bold text-slate-200 group-hover:text-blue-400 text-center transition-colors mb-3">
            {title}
          </h4>
          <p className="text-slate-400 font-sans text-xs md:text-sm leading-relaxed line-clamp-5 text-left">
            {description}
          </p>
        </div>
        <div className="text-[10px] font-mono text-slate-600 flex justify-between items-center w-full pt-3 border-t border-white/5 mt-6">
          <span>status: active</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-teal-500">
            ready
          </span>
        </div>
      </div>

    </div>
  );
}