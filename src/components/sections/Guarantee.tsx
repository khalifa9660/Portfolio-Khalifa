import { motion } from 'motion/react';
import { useTranslation } from '../../context/AppContext';

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

/** Section garanties — promesse forte et cartes de confiance */
export default function Guarantee() {
  const t = useTranslation();

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Bloc inversé */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-black dark:bg-white p-12 md:p-16"
        >
          {/* Subtitle */}
          <h2 className="text-sm font-medium text-white/50 dark:text-black/50 uppercase tracking-[0.2em] mb-6">
            {t.guarantee.subtitle}
          </h2>

          {/* Promesse forte */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white dark:text-black leading-tight mb-16 max-w-3xl">
            {t.guarantee.title}
          </h3>

          {/* Cartes garantie */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {t.guarantee.cards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                className="p-6 rounded-2xl bg-white/10 dark:bg-black/10 border border-white/10 dark:border-black/10"
              >
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h4 className="text-lg font-semibold text-white dark:text-black mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-white/60 dark:text-black/60 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
