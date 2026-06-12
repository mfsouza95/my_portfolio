'use client'
import { Minus, Plus, Trash2, X, ShoppingBasket, FileDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLang } from '../context/LangContext';

export default function Sidebar() {
  const { state, dispatch, totalQuantity } = useCart();
  const { t } = useLang();
  const cartItems = Object.entries(state.items);

  function handleBuyNow() {
    cartItems.forEach(([, item]) => {
      if (item.quantity > 0) {
        const a = document.createElement('a');
        a.href = item.fileUrl;
        a.download = '';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    });
    dispatch({ type: 'CLEAR_ALL' });
  }

  return (
    <>
      {state.isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm overlay-animation" onClick={() => dispatch({ type: 'CLOSE_SIDEBAR' })} />
      )}
      <aside className={`fixed top-0 right-0 h-full w-80 z-50 bg-[#020617] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${state.isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400">
            <ShoppingBasket size={15} />
            <span>{t.sidebar.title}</span>
          </div>
          <button onClick={() => dispatch({ type: 'CLOSE_SIDEBAR' })} className="text-slate-500 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {totalQuantity === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBasket size={40} className="text-slate-700" />
              <p className="text-slate-400 text-sm font-mono leading-relaxed">
                {t.sidebar.empty}<br />
                {t.sidebar.emptyLinkPrefix}{' '}
                <a href="#products" onClick={() => dispatch({ type: 'CLOSE_SIDEBAR' })} className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                  {t.sidebar.emptyLink}
                </a>{' '}
                {t.sidebar.emptyLinkSuffix}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map(([productId, item]) => (
                <div key={productId} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0">
                    <FileDown size={22} className="text-blue-400" />
                  </div>
                  <div className="flex flex-col gap-3 flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-white text-xs font-mono font-semibold uppercase tracking-wider">{item.title}</p>
                        <p className="text-slate-500 text-[10px] font-mono mt-0.5">{item.fileUrl.split('/').pop()}</p>
                      </div>
                      <button onClick={() => dispatch({ type: 'CLEAR_ITEM', productId })} className="text-slate-600 hover:text-red-400 transition-colors shrink-0 mt-0.5" title="Remove from cart">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1">
                        <button onClick={() => dispatch({ type: 'DECREASE', productId })} className="text-slate-400 hover:text-white transition-colors">
                          <Minus size={12} />
                        </button>
                        <span className="text-white font-mono text-xs w-6 text-center">{item.quantity}</span>
                        <button onClick={() => dispatch({ type: 'INCREASE', productId })} className="text-slate-400 hover:text-white transition-colors" disabled={item.quantity >= 99}>
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-slate-500 font-mono text-[10px]">
                        {item.quantity} {item.quantity === 1 ? t.sidebar.copies : t.sidebar.copiesPlural}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {totalQuantity > 0 && (
          <div className="px-6 py-5 border-t border-white/10 flex flex-col gap-3">
            <p className="text-slate-500 font-mono text-[10px] leading-relaxed text-center">
              {t.sidebar.disclaimer} <span className="text-teal-400">{t.sidebar.buyNow}</span> {t.sidebar.disclaimerSuffix} {cartItems.length > 1 ? t.sidebar.disclaimerCVs : t.sidebar.disclaimerCV}
            </p>
            <button onClick={handleBuyNow} className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-teal-500 to-blue-500 text-white font-mono font-medium text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-lg">
              <FileDown size={14} />
              {t.sidebar.buyNow}
            </button>
            <button onClick={() => dispatch({ type: 'CLEAR_ALL' })} className="flex items-center justify-center gap-2 w-full font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:border-red-500/40 hover:bg-red-500/5 hover:text-red-400 text-slate-400 transition-all">
              <Trash2 size={13} />
              {t.sidebar.emptyCart}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}