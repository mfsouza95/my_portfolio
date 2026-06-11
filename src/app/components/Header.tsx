'use client'
import { ShoppingBasket } from 'lucide-react';
import { useCart } from '../context/CartContext';

export interface HeaderProps {
  currentLang?: 'PT' | 'EN';
  onLangChange?: () => void;
}

export default function Header({ currentLang = 'EN', onLangChange }: HeaderProps) {
  const { dispatch, totalQuantity } = useCart();

  return (
    <div className="fixed bg-[#020617]/70 border border-white/10 backdrop-blur-md rounded-full h-16 w-11/12 max-w-6xl left-1/2 -translate-x-1/2 mt-4 flex items-center px-8 text-white italic text-lg shadow-2xl z-50">
      <p className="leading-tight select-none tracking-wider text-xl shrink-0">
        MURILO<br />
        <span className="text-red-500 font-bold">DEV</span>
      </p>

      <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-8 font-mono text-xs uppercase tracking-widest not-italic text-slate-400">
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="./">Home</a>
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="#projects">Projects</a>
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="#about">About me</a>
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="#skills">Skills</a>
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="#products">Products</a>
        <a className="transition-all hover:text-blue-400 hover:scale-105 cursor-pointer" href="#contact">Contact</a>
      </nav>

      <div className="flex items-center gap-4 ml-auto not-italic shrink-0">
        <button
          onClick={onLangChange}
          type="button"
          title="Mudar Idioma / Change Language"
          className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 w-16 h-8 cursor-pointer focus:outline-none transition-colors"
        >
          <span
            className={`absolute top-0.5 w-7 h-7 rounded-full bg-white/10 border border-white/20 transition-transform duration-300 ease-in-out ${
              currentLang === 'PT' ? 'translate-x-0.5' : 'translate-x-8'
            }`}
          />
          <span className="relative z-10 w-8 text-center text-base leading-none">🇧🇷</span>
          <span className="relative z-10 w-8 text-center text-base leading-none">🇺🇸</span>
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