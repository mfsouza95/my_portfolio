'use client'
import { File } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLang } from '../context/LangContext';
import { ProductCardProps } from '../types';

export default function ProductCard({ productId, title, fileUrl }: ProductCardProps) {
  const { dispatch } = useCart();
  const { t } = useLang();

  return (
    <div className="group flex flex-col items-center justify-between bg-slate-950/40 border border-white/10 hover:border-blue-500/50 rounded-lg overflow-hidden h-48 w-44 transition-all duration-300 shadow-xl relative backdrop-blur-sm">
      <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
        <span className="text-[9px] font-mono text-white/30 group-hover:text-white/60 transition-colors truncate max-w-30">
          {title.toLowerCase().replace(/\s+/g, '_')}.dat
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center w-full pt-4 group-hover:scale-105 transition-transform duration-300">
        <div className="relative text-blue-500/80 group-hover:text-blue-400 transition-colors">
          <File size={56} strokeWidth={1.5} />
          <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
        </div>
      </div>
      <button
        onClick={() => dispatch({ type: 'ADD', productId, fileUrl, title })}
        className="w-full text-center bg-white/2 border-t border-white/5 py-2.5 group-hover:bg-blue-500/10 transition-colors cursor-pointer focus:outline-none"
      >
        <span className="text-[11px] font-mono font-semibold text-teal-400 group-hover:text-teal-300 uppercase tracking-wider block select-none">
          {t.products.addToCart}
        </span>
      </button>
    </div>
  );
}