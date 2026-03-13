import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from '../../context/AppContext';

/** Page Services & Tarifs — grille des offres */
export default function ServicesPricing() {
  const t = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <section>
        <div className="mb-16 text-center">
          <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.services.subtitle}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">{t.services.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
              className={`p-8 rounded-2xl border flex flex-col gap-4 transition-shadow duration-300 ${
                service.featured
                  ? 'bg-black text-white dark:bg-white dark:text-black border-transparent hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]'
                  : 'bg-white dark:bg-white/5 border-black/5 dark:border-white/5 shadow-sm hover:shadow-md dark:hover:border-white/10'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-xl font-serif">{service.title}</h4>
                <span className={`text-xs font-mono px-3 py-1 rounded-full flex-shrink-0 ${
                  service.featured
                    ? 'bg-white/20 dark:bg-black/20'
                    : 'bg-black/5 dark:bg-white/10 text-gray-500 dark:text-white/50'
                }`}>
                  {service.delay}
                </span>
              </div>
              <div className={`text-2xl font-semibold ${service.featured ? 'text-white dark:text-black' : 'text-gray-900 dark:text-white'}`}>
                {service.price}
              </div>
              <p className={`font-light leading-relaxed text-sm ${service.featured ? 'text-white/80 dark:text-black/70' : 'text-gray-600 dark:text-white/60'}`}>
                {service.desc}
              </p>
              <p className={`text-xs font-mono ${service.featured ? 'text-white/60 dark:text-black/50' : 'text-gray-400 dark:text-white/40'}`}>
                {service.stack}
              </p>
              <Link
                to="/#contact"
                className={`mt-2 block w-full py-3 text-center rounded-full text-sm font-medium transition-colors ${
                  service.featured
                    ? 'bg-white text-black dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                    : 'border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                }`}
              >
                {t.nav.hireMe}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
