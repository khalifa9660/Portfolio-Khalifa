import { motion } from 'motion/react';
import { useTranslation } from '../../context/AppContext';

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

/** Section preuve sociale — chiffres cles pour renforcer la credibilite */
export default function SocialProof() {
  const t = useTranslation();

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {t.socialProof.items.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUpItem}
            className="relative p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-center group hover:border-black/10 dark:hover:border-white/10 transition-colors"
          >
            <span className="block text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-2">
              {item.value}
            </span>
            <span className="block text-sm text-gray-500 dark:text-white/50 font-medium">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
