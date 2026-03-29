import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ArrowLeft, Mail, Clock, Shield, Zap } from 'lucide-react';
import { useTranslation } from '../../context/AppContext';
import RichTextEditor from '../ui/RichTextEditor';

interface ContactFormData {
  projectType: string;
  budget: string;
  name: string;
  email: string;
  message: string;
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stepVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.25 } },
};

const stepBackVariants = {
  enter: { opacity: 0, x: -40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  exit: { opacity: 0, x: 40, transition: { duration: 0.25 } },
};

interface StepIndicatorProps {
  currentStep: 1 | 2 | 3;
  labels: [string, string, string];
}

function StepIndicator({ currentStep, labels }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-0 mb-10">
      {([1, 2, 3] as const).map((stepNumber, index) => (
        <React.Fragment key={stepNumber}>
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                currentStep === stepNumber
                  ? 'text-white'
                  : currentStep > stepNumber
                  ? 'bg-green-500 text-white'
                  : 'bg-black/10 dark:bg-white/10 text-gray-400 dark:text-white/40'
              }`}
              style={
                currentStep === stepNumber
                  ? { background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)' }
                  : undefined
              }
            >
              {currentStep > stepNumber ? <Check className="w-4 h-4" /> : stepNumber}
            </div>
            <span className={`text-xs font-medium uppercase tracking-widest whitespace-nowrap ${
              currentStep === stepNumber
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-400 dark:text-white/40'
            }`}>
              {labels[index]}
            </span>
          </div>
          {index < 2 && (
            <div className={`flex-1 h-[1px] mx-3 mb-5 transition-all duration-500 ${
              currentStep > stepNumber
                ? 'bg-green-500'
                : 'bg-black/10 dark:bg-white/10'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

interface StepProjectProps {
  formData: ContactFormData;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
  onNext: () => void;
  projectTypes: Array<{ id: string; label: string; icon: string }>;
  budgets: string[];
  nextBtn: string;
}

function StepProject({ formData, setFormData, onNext, projectTypes, budgets, nextBtn }: StepProjectProps) {
  const t = useTranslation();
  return (
    <motion.div
      key="step1"
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="space-y-8"
    >
      {/* Type de projet */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-4">
          {t.contactPage.projectTypeLabel}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {projectTypes.map((projectType) => (
            <button
              key={projectType.id}
              onClick={() => setFormData(previousData => ({ ...previousData, projectType: projectType.id }))}
              className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                formData.projectType === projectType.id
                  ? 'border-transparent text-white'
                  : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 bg-white dark:bg-white/3'
              }`}
              style={
                formData.projectType === projectType.id
                  ? { background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)' }
                  : undefined
              }
            >
              <span className="text-2xl mb-2 block">{projectType.icon}</span>
              <span className="text-xs font-medium leading-tight block">{projectType.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">
          {t.contactPage.budgetLabel}
        </label>
        <select
          value={formData.budget}
          onChange={e => setFormData(previousData => ({ ...previousData, budget: e.target.value }))}
          className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white transition-colors appearance-none cursor-pointer"
        >
          <option value="" className="bg-white dark:bg-[#050505]">{t.contactPage.selectPlaceholder}</option>
          {budgets.map(budgetOption => (
            <option key={budgetOption} value={budgetOption} className="bg-white dark:bg-[#050505]">
              {budgetOption}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onNext}
        disabled={!formData.projectType}
        className="flex items-center gap-2 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {nextBtn}
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

interface StepContactProps {
  formData: ContactFormData;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
  onNext: () => void;
  onBack: () => void;
  labels: { name: string; email: string; message: string };
  placeholders: { name: string; email: string; message: string };
  nextBtn: string;
  backBtn: string;
}

function StepContact({ formData, setFormData, onNext, onBack, labels, placeholders, nextBtn, backBtn }: StepContactProps) {
  return (
    <motion.div
      key="step2"
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="space-y-6"
    >
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">{labels.name}</label>
        <input
          type="text"
          value={formData.name}
          onChange={e => setFormData(previousData => ({ ...previousData, name: e.target.value }))}
          className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 transition-colors"
          placeholder={placeholders.name}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-2">{labels.email}</label>
        <input
          type="email"
          value={formData.email}
          onChange={e => setFormData(previousData => ({ ...previousData, email: e.target.value }))}
          className="w-full px-0 py-3 bg-transparent border-b border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 transition-colors"
          placeholder={placeholders.email}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40 mb-3">{labels.message}</label>
        <RichTextEditor
          content={formData.message}
          onChange={(html) => setFormData(previousData => ({ ...previousData, message: html }))}
          placeholder={placeholders.message}
        />
      </div>
      <div className="flex items-center gap-4 pt-2">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 border border-black/20 dark:border-white/20 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-all text-gray-700 dark:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          {backBtn}
        </button>
        <button
          onClick={onNext}
          disabled={!formData.name || !formData.email}
          className="flex items-center gap-2 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {nextBtn}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

interface StepConfirmProps {
  formData: ContactFormData;
  onBack: () => void;
  onSend: () => void;
  submitted: boolean;
  successTitle: string;
  successDesc: string;
  sendBtn: string;
  backBtn: string;
  emailContact: string;
  projectTypes: Array<{ id: string; label: string; icon: string }>;
  budgets: string[];
}

function StepConfirm({ formData, onBack, onSend, submitted, successTitle, successDesc, sendBtn, backBtn, emailContact, projectTypes }: StepConfirmProps) {
  const t = useTranslation();
  const selectedProjectType = projectTypes.find(projectType => projectType.id === formData.projectType);

  if (submitted) {
    return (
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
        <h3 className="text-3xl font-serif text-gray-900 dark:text-white mb-3">{successTitle}</h3>
        <p className="text-gray-600 dark:text-white/60 font-light">{successDesc}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="step3"
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="space-y-6"
    >
      {/* Récapitulatif */}
      <div className="p-6 rounded-2xl bg-black/3 dark:bg-white/3 border border-black/5 dark:border-white/5 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-white/40">{t.contactPage.recapProject}</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {selectedProjectType ? `${selectedProjectType.icon} ${selectedProjectType.label}` : '—'}
          </span>
        </div>
        {formData.budget && (
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-white/40">{t.contactPage.recapBudget}</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{formData.budget}</span>
          </div>
        )}
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-white/40">{t.contactPage.recapName}</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">{formData.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-white/40">{t.contactPage.recapEmail}</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">{formData.email}</span>
        </div>
        {formData.message && (
          <div className="pt-2 border-t border-black/5 dark:border-white/5">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-white/40 block mb-2">{t.contactPage.recapDescription}</span>
            <div className="text-sm text-gray-700 dark:text-white/70 font-light leading-relaxed line-clamp-3 tiptap" dangerouslySetInnerHTML={{ __html: formData.message }} />
          </div>
        )}
      </div>

      <p className="text-xs text-gray-400 dark:text-white/30">
        {t.contactPage.recapSentTo} <a href={`mailto:${emailContact}`} className="underline hover:text-gray-600 dark:hover:text-white/60 transition-colors">{emailContact}</a>
      </p>

      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 border border-black/20 dark:border-white/20 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-all text-gray-700 dark:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          {backBtn}
        </button>
        <button
          onClick={onSend}
          className="btn-shine flex items-center gap-2 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/90 transition-all"
        >
          <Mail className="w-4 h-4" />
          {sendBtn}
        </button>
      </div>
    </motion.div>
  );
}

/** Page Contact dédiée avec stepper 3 étapes — expérience premium */
export default function ContactPage() {
  const t = useTranslation();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<ContactFormData>({
    projectType: '',
    budget: '',
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const htmlToPlainText = (html: string): string => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  const handleSend = () => {
    const selectedProjectType = t.contactPage.projectTypes.find(projectType => projectType.id === formData.projectType);
    const plainMessage = htmlToPlainText(formData.message);
    const subject = encodeURIComponent(`[Portfolio] ${selectedProjectType?.label || formData.projectType} — ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nType de projet: ${selectedProjectType?.label || formData.projectType}\nBudget: ${formData.budget}\n\nDescription:\n${plainMessage}`
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
          {/* Subtitle */}
          <motion.span
            variants={fadeUpItem}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 dark:text-white/40"
          >
            {t.contactPage.subtitle}
          </motion.span>

          {/* Titre principal */}
          <motion.h1
            variants={fadeUpItem}
            className="text-5xl md:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-gray-900 dark:text-white"
          >
            {t.contactPage.title1}{' '}
            <span className="italic-gradient italic">{t.contactPage.title2}</span>
          </motion.h1>

          {/* Intro */}
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

          {/* Garanties */}
          <motion.div variants={fadeUpItem} className="flex flex-col gap-4">
            {t.contactPage.guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-xl">{guarantee.icon}</span>
                <span className="text-sm text-gray-600 dark:text-white/60 font-light">{guarantee.text}</span>
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
          <StepIndicator
            currentStep={currentStep}
            labels={[t.contactPage.step1Label, t.contactPage.step2Label, t.contactPage.step3Label]}
          />

          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <StepProject
                formData={formData}
                setFormData={setFormData}
                onNext={() => setCurrentStep(2)}
                projectTypes={t.contactPage.projectTypes}
                budgets={t.contactPage.budgets}
                nextBtn={t.contactPage.nextBtn}
              />
            )}
            {currentStep === 2 && (
              <StepContact
                formData={formData}
                setFormData={setFormData}
                onNext={() => setCurrentStep(3)}
                onBack={() => setCurrentStep(1)}
                labels={{
                  name: t.contactPage.nameLabel,
                  email: t.contactPage.emailLabel,
                  message: t.contactPage.messageLabel,
                }}
                placeholders={{
                  name: t.contactPage.namePlaceholder,
                  email: t.contactPage.emailPlaceholder,
                  message: t.contactPage.messagePlaceholder,
                }}
                nextBtn={t.contactPage.nextBtn}
                backBtn={t.contactPage.backBtn}
              />
            )}
            {currentStep === 3 && (
              <StepConfirm
                formData={formData}
                onBack={() => setCurrentStep(2)}
                onSend={handleSend}
                submitted={submitted}
                successTitle={t.contactPage.successTitle}
                successDesc={t.contactPage.successDesc}
                sendBtn={t.contactPage.sendBtn}
                backBtn={t.contactPage.backBtn}
                emailContact={t.contactPage.emailContact}
                projectTypes={t.contactPage.projectTypes}
                budgets={t.contactPage.budgets}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
