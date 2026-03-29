import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/AppContext';

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

/** Section héro — première section visible, plein écran */
export default function Hero() {
  const t = useTranslation();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 overflow-hidden">
      {/* Animated ambient blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[120px] animate-blob-alt" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/5 dark:bg-pink-500/5 rounded-full blur-[100px] animate-blob"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          {/* Badge disponibilité */}
          <motion.div variants={fadeUpItem} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium">
              {t.hero.available}
            </span>
          </motion.div>

          {/* Role */}
          <motion.span
            variants={fadeUpItem}
            className="text-sm md:text-base font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-6 block"
          >
            {t.hero.role}
          </motion.span>

          {/* Titre principal */}
          <motion.h1
            variants={fadeUpItem}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.15] tracking-tight mb-8 text-gray-900 dark:text-white"
          >
            {t.hero.title1} <br className="hidden md:block" />
            <span className="italic-gradient italic">{t.hero.title2}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpItem}
            className="text-lg md:text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-12"
          >
            {t.hero.desc}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Link
                to="/contact"
                className="btn-shine w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                {t.hero.btnContact}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <a
              href="#projets"
              className="w-full sm:w-auto px-8 py-4 border border-black/20 dark:border-white/20 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white text-center"
            >
              {t.hero.btnProjects}
            </a>
            {/* Icônes sociales groupées pour éviter le wrapping incohérent */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/khalifatambadou"
                target="_blank"
                rel="noreferrer"
                className="p-4 border border-black/20 dark:border-white/20 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/khalifatambadou"
                target="_blank"
                rel="noreferrer"
                className="p-4 border border-black/20 dark:border-white/20 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
