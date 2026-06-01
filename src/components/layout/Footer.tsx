import { useTranslation } from '../../context/AppContext';

/** Pied de page avec copyright et liens réseaux sociaux */
export default function Footer() {
  const t = useTranslation();
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-white/40 transition-colors duration-300">
      <p>© {new Date().getFullYear()} Khalifa Tambadou — {t.footer.tagline}. {t.footer.rights}</p>
      <div className="flex items-center gap-6">
        <a href="https://linkedin.com/in/khalifatambadou" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
        <a href="https://github.com/khalifatambadou" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
        <a href="https://recoverlyai.fr" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">RecoverlyAI</a>
        <a href="https://audyspark.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">AudySpark</a>
      </div>
    </footer>
  );
}
