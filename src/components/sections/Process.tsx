import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useTranslation } from '../../context/AppContext';

/** Section Process — étapes de collaboration et garanties */
export default function Process() {
  const t = useTranslation();
  return (
    <section id="process" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.process.subtitle}</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">{t.process.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {t.process.steps.map((step, index) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            className="relative p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md dark:hover:border-white/10 overflow-hidden transition-shadow duration-300"
          >
            <span className="absolute top-4 right-6 font-serif text-6xl font-bold text-black/5 dark:text-white/5 select-none">{step.num}</span>
            <div className="relative z-10">
              <span className="text-xs font-mono font-medium text-gray-400 dark:text-white/40 uppercase tracking-widest mb-3 block">{step.timing}</span>
              <h4 className="text-xl font-serif mb-3 text-gray-900 dark:text-white">{step.title}</h4>
              <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bloc garanties */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 md:p-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black"
      >
        <h4 className="text-lg font-semibold mb-6 opacity-80">Garanties</h4>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.process.guarantees.map((guarantee, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
              <span className="font-light opacity-80 text-sm leading-relaxed">{guarantee}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
