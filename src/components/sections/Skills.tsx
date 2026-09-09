import { motion } from 'motion/react';
import { useTranslation } from '../../context/AppContext';

const skillItemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

/** Section Stack technique — catégories de compétences + encart Workflow IA */
export default function Skills() {
  const t = useTranslation();
  return (
    <section id="competences" className="py-32 px-6 md:px-12 bg-black/5 dark:bg-white/5 border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.skills.subtitle}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">{t.skills.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12 md:gap-8 mb-16">
          {t.skills.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h4 className="text-xl font-serif mb-8 pb-4 border-b border-black/10 dark:border-white/10 text-gray-900 dark:text-white">{category.title}</h4>
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
                className="flex flex-col gap-4"
              >
                {category.skills.map(skill => (
                  <motion.li key={skill} variants={skillItemVariants} className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30 shrink-0" />
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        {/* Encart Workflow IA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -3, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
          className="p-8 md:p-10 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md dark:hover:border-white/10 transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-black dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-black text-xl font-bold">⚡</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t.skills.workflowTitle}</h4>
              <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed">{t.skills.workflowDesc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
