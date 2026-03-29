import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppContext } from '../../context/AppContext';

/** En-tête fixe avec navigation, toggle langue, toggle thème et menu mobile */
export default function Header() {
  const { lang, toggleLang, theme, toggleTheme, t } = useAppContext();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fermer le menu lors d'un changement de route
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <header
          className={`pointer-events-auto flex items-center justify-between w-full max-w-7xl rounded-full transition-all duration-500 ${
            scrolled
              ? 'px-4 py-2 md:px-8 md:py-3 backdrop-blur-md bg-white/50 dark:bg-[#111111]/50 border border-black/5 dark:border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
              : 'px-6 py-4 md:px-12 md:py-5 backdrop-blur-xl bg-white/80 dark:bg-[#111111]/80 border border-black/10 dark:border-white/10 shadow-sm'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
            KHALIFA.
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-12 text-sm font-medium text-gray-600 dark:text-white/70">
            <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.home}</Link>
            <Link to="/#projets" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.projects}</Link>
            <Link to="/#competences" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.skills}</Link>
            <Link to="/services" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.services}</Link>
            <Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.contact}</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-6">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              {lang}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA desktop */}
            <Link
              to="/contact"
              className="hidden lg:inline-block px-6 py-3 text-xs font-semibold uppercase tracking-widest border border-black/20 dark:border-white/20 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              {t.nav.hireMe}
            </Link>

            {/* Hamburger mobile */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="lg:hidden p-2 text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>
      </div>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/60 backdrop-blur-sm"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-[88px] left-4 right-4 z-50 rounded-2xl bg-white/95 dark:bg-[#111111]/95 border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-xl overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-1">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="px-4 py-3 text-base font-medium text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 rounded-xl transition-colors"
                >
                  {t.nav.home}
                </Link>
                <Link
                  to="/#projets"
                  onClick={closeMenu}
                  className="px-4 py-3 text-base font-medium text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 rounded-xl transition-colors"
                >
                  {t.nav.projects}
                </Link>
                <Link
                  to="/#competences"
                  onClick={closeMenu}
                  className="px-4 py-3 text-base font-medium text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 rounded-xl transition-colors"
                >
                  {t.nav.skills}
                </Link>
                <Link
                  to="/services"
                  onClick={closeMenu}
                  className="px-4 py-3 text-base font-medium text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 rounded-xl transition-colors"
                >
                  {t.nav.services}
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="px-4 py-3 text-base font-medium text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 rounded-xl transition-colors"
                >
                  {t.nav.contact}
                </Link>

                {/* CTA mobile */}
                <div className="mt-3 pt-4 border-t border-black/8 dark:border-white/8">
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="block w-full py-3.5 text-center text-sm font-semibold uppercase tracking-widest rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/90 transition-colors"
                  >
                    {t.nav.hireMe}
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
