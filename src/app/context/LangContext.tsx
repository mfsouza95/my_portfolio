'use client'
import { createContext, useContext, useState } from 'react';
import { translations, Lang, Translations } from '../translations';

interface LangContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('EN');

  function toggleLang() {
    setLang((prev) => (prev === 'EN' ? 'PT' : 'EN'));
  }

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used inside LangProvider');
  return context;
}