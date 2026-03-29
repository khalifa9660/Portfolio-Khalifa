import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/AppContext';

/** Section CTA finale — dernier push vers la page contact avant le footer */
export default function FinalCta() {
  const t = useTranslation();

  return (
    <section className="py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-6">
          {t.finalCta.title}
        </h3>
        <p className="text-lg text-gray-600 dark:text-white/60 font-light mb-10 max-w-xl mx-auto">
          {t.finalCta.desc}
        </p>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="inline-block"
        >
          <Link
            to="/contact"
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 text-lg"
          >
            {t.finalCta.btn}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
