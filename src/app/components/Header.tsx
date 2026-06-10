'use client'
import { ShoppingBasket, Languages } from 'lucide-react';
import { useCart } from '../context/CartContext';

export interface HeaderProps {
  currentLang?: 'PT' | 'EN';
  onLangChange?: () => void;
}

export default function Header({ currentLang = 'PT', onLangChange }: HeaderProps) {
  const { state, dispatch, totalQuantity } = useCart();

  return (
    <div className="fixed bg-[#020617]/70 border border-white/10 backdrop-blur-md rounded-full h-16 w-11/12 max-w-6xl left-1/2 -translate-x-1/2 mt-4 flex items-center justify-between px-8 text-white italic text-lg shadow-2xl z-50">
      <p className="leading-tight select-none tracking-wider text-xl">
        MURILO<br />
        <span className="text-red-500 font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">DEV</span>
      </p>
      <nav className="hidden lg:flex gap-8 ml-auto font-mono text-xs uppercase tracking-widest not-italic text-slate-400">
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="./">Home</a>
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="./">Projects</a>
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="./">About me</a>
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="./">Skills</a>
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="./">Products</a>
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="./">Contact</a>
      </nav>
      <div className="flex items-center gap-6 ml-auto lg:ml-8 not-italic">
        <button
          onClick={onLangChange}
          type="button"
          className="flex items-center gap-1.5 bg-white/5 border border-white/10 hover:border-teal-500/50 rounded-md px-2.5 py-1.5 font-mono text-[10px] tracking-wider text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 transition-all cursor-pointer focus:outline-none"
          title="Mudar Idioma / Change Language"
        >
          <Languages size={14} />
          <span>{currentLang}</span>
        </button>
        <button
          onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
          className="relative cursor-pointer transition-all hover:scale-110 ease-in-out text-slate-300 hover:text-blue-400 focus:outline-none"
        >
          <ShoppingBasket className="w-7 h-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" />
          {totalQuantity > 0 && (
            <div className="absolute rounded-full bg-rose-600 text-white text-[9px] font-mono font-bold -top-1 -right-1 w-4 h-4 flex items-center justify-center translate-x-1/4 -translate-y-1/4 shadow-lg animate-[pulse_2s_infinite]">
              {totalQuantity > 99 ? '99' : totalQuantity}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}