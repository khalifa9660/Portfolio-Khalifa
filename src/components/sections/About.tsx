import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useTranslation } from '../../context/AppContext';

const fadeInItem = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/** Section À propos — présentation personnelle et points forts */
export default function About() {
  const t = useTranslation();
  return (
    <section id="apropos" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.about.subtitle}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-8">{t.about.title}</h3>
          <div className="space-y-5 text-gray-600 dark:text-white/60 font-light leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:pt-16"
        >
          <p className="text-sm font-semibold text-gray-500 dark:text-white/40 uppercase tracking-widest mb-6">{t.about.highlightsLabel}</p>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            className="space-y-4"
          >
            {t.about.highlights.map((item, index) => (
              <motion.li key={index} variants={fadeInItem} className="flex items-center gap-4 text-gray-700 dark:text-white/80">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-gray-600 dark:text-white/70" />
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
