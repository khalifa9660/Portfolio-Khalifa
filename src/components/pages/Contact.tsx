import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Mail } from 'lucide-react';
import { useTranslation } from '../../context/AppContext';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

/** Page Contact — formulaire simple (nom / email / message) envoyé par mailto */
export default function ContactPage() {
  const t = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] Contact · ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${t.contactPage.emailContact}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen relative overflow-hidden">
      {/* Blobs décoratifs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-blue-500/8 dark:bg-blue-500/8 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-purple-500/8 dark:bg-purple-500/8 rounded-full blur-[100px] animate-blob-alt" />
        <div
          className="absolute top-2/3 left-1/2 w-60 h-60 bg-pink-500/5 dark:bg-pink-500/5 rounded-full blur-[80px] animate-blob"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-16 max-w-7xl mx-auto px-6 md:px-12">
        {/* Colonne gauche — éditoriale */}
        <motion.aside
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10 lg:pt-4"
        >
          <motion.span
            variants={fadeUpItem}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 dark:text-white/40"
          >
            {t.contactPage.subtitle}
          </motion.span>

          <motion.h1
            variants={fadeUpItem}
            className="text-5xl md:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-gray-900 dark:text-white"
          >
            {t.contactPage.title1}{' '}
            <span className="italic-gradient italic">{t.contactPage.title2}</span>
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="text-lg text-gray-600 dark:text-white/60 font-light leading-relaxed max-w-sm"
          >
            {t.contactPage.intro}
          </motion.p>

          {/* Email direct */}
          <motion.div variants={fadeUpItem} className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-white/40">
              {t.contactPage.emailContactLabel}
            </span>
            <a
              href={`mailto:${t.contactPage.emailContact}`}
              className="text-sm text-gray-700 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4"
            >
              {t.contactPage.emailContact}
            </a>
          </motion.div>

          {/* Téléphone */}
          <motion.div variants={fadeUpItem} className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-white/40">
              {t.contactPage.phoneLabel}
            </span>
            <a
              href={`tel:${t.contactPage.phone.replace(/\s/g, '')}`}
              className="text-sm text-gray-700 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4"
            >
              {t.contactPage.phone}
            </a>
          </motion.div>

          {/* Rassurances */}
          <motion.div variants={fadeUpItem} className="flex flex-col gap-4">
            {t.contactPage.reassurances.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm text-gray-600 dark:text-white/60 font-light">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.aside>

        {/* Colonne droite — formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 dark:bg-white/3 backdrop-blur-sm border border-black/5 dark:border-white/5 rounded-3xl p-8 md:p-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 300 }}
                className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-green-500" />
              </motion.div>
              <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-3">{t.contactPage.successTitle}</h3>
              <p className="text-gray-600 dark:text-white/60 font-light">{t.contactPage.successDesc}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">{t.contactPage.nameLabel}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(previousData => ({ ...previousData, name: e.target.value }))}
                  className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 transition-colors"
                  placeholder={t.contactPage.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">{t.contactPage.emailLabel}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(previousData => ({ ...previousData, email: e.target.value }))}
                  className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 transition-colors"
                  placeholder={t.contactPage.emailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">{t.contactPage.messageLabel}</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={e => setFormData(previousData => ({ ...previousData, message: e.target.value }))}
                  className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 transition-colors resize-none"
                  placeholder={t.contactPage.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="btn-shine flex items-center gap-2 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/90 transition-all"
              >
                <Mail className="w-4 h-4" />
                {t.contactPage.sendBtn}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
