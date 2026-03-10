import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check } from 'lucide-react';
import { useTranslation } from '../../context/AppContext';

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

/** Section Contact — formulaire de prise de contact par email */
export default function Contact() {
  const t = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] ${formData.projectType || 'Nouveau projet'} — ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nType de projet: ${formData.projectType}\nBudget: ${formData.budget}\n\nDescription:\n${formData.message}`
    );
    window.location.href = `mailto:${t.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.contact.subtitle}</h2>
          <h3 className="text-5xl md:text-7xl font-serif mb-6 text-gray-900 dark:text-white">
            {t.contact.title1} <span className="italic">{t.contact.title2}</span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-white/60 font-light max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
        </div>

        {submitted ? (
          <div className="text-center p-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-xl font-serif text-gray-900 dark:text-white">Message envoyé !</p>
            <p className="text-gray-600 dark:text-white/60 mt-2">Je reviens vers toi sous 24h.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">{t.contact.fields.name}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(previousData => ({ ...previousData, name: e.target.value }))}
                  className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 transition-colors"
                  placeholder="Ton prénom"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">{t.contact.fields.email}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(previousData => ({ ...previousData, email: e.target.value }))}
                  className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 transition-colors"
                  placeholder="toi@exemple.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">{t.contact.fields.projectType}</label>
                <select
                  value={formData.projectType}
                  onChange={e => setFormData(previousData => ({ ...previousData, projectType: e.target.value }))}
                  className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white transition-colors appearance-none"
                >
                  <option value="" className="bg-white dark:bg-[#050505]">— Choisir —</option>
                  {t.contact.fields.projectTypeOptions.map(option => (
                    <option key={option} value={option} className="bg-white dark:bg-[#050505]">{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">{t.contact.fields.budget}</label>
                <select
                  value={formData.budget}
                  onChange={e => setFormData(previousData => ({ ...previousData, budget: e.target.value }))}
                  className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white transition-colors appearance-none"
                >
                  <option value="" className="bg-white dark:bg-[#050505]">— Choisir —</option>
                  {t.contact.fields.budgetOptions.map(option => (
                    <option key={option} value={option} className="bg-white dark:bg-[#050505]">{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">{t.contact.fields.message}</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData(previousData => ({ ...previousData, message: e.target.value }))}
                className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 transition-colors resize-none"
                placeholder="Décris ton projet, tes objectifs, ce que tu as déjà..."
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button
                type="submit"
                className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/90 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {t.contact.fields.submit}
              </button>
              <div className="text-center sm:text-left">
                <p className="text-xs text-gray-400 dark:text-white/30 mb-1">{t.contact.emailLabel}</p>
                <a href={`mailto:${t.contact.email}`} className="text-sm text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4">
                  {t.contact.email}
                </a>
              </div>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
