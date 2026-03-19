import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../i18n';
import type { Translation } from '../i18n';
import type { Lang, Theme } from '../types';

/** Forme du contexte global de l'application */
interface AppContextValue {
  lang: Lang;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
  t: Translation;
}

const AppContext = createContext<AppContextValue | null>(null);

/** Hook d'accès au contexte global — lève une erreur si utilisé hors Provider */
export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}

/** Hook de commodité pour accéder directement aux traductions */
export function useTranslation(): Translation {
  return useAppContext().t;
}

interface AppProviderProps {
  children: ReactNode;
}

/** Provider global : gère le thème et la langue de l'application */
export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(previousTheme => previousTheme === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(previousLang => previousLang === 'fr' ? 'en' : 'fr');

  return (
    <AppContext.Provider value={{ lang, toggleLang, theme, toggleTheme, t: translations[lang] }}>
      {children}
    </AppContext.Provider>
  );
}
