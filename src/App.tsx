import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Sun, Moon, Globe, Check } from 'lucide-react';

const translations = {
  fr: {
    nav: { home: "Accueil", projects: "Projets", skills: "Compétences", services: "Services & Tarifs", contact: "Contact", hireMe: "Me Contacter" },
    hero: { 
      role: "Développeur & Designer", 
      title1: "Créateur d'expériences", 
      title2: "numériques.", 
      desc: "Je conçois et développe des applications web modernes, performantes et esthétiques, en mettant l'accent sur l'expérience utilisateur et la qualité du code.", 
      btnProjects: "Voir mes projets" 
    },
    projects: { 
      subtitle: "Sélection de travaux", 
      title: "Projets Récents",
      items: [
        {
          id: 1,
          title: "E-Commerce Premium",
          category: "Développement Full-Stack",
          description: "Une plateforme de commerce électronique complète avec panier, paiement sécurisé et tableau de bord administrateur.",
          image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1664&auto=format&fit=crop",
          tags: ["React", "Node.js", "Stripe", "Tailwind"],
          link: "#"
        },
        {
          id: 2,
          title: "Application Financière",
          category: "Interface Utilisateur",
          description: "Dashboard analytique pour le suivi des dépenses personnelles avec graphiques interactifs en temps réel.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop",
          tags: ["TypeScript", "Next.js", "D3.js", "PostgreSQL"],
          link: "#"
        },
        {
          id: 3,
          title: "Réseau Social Créatif",
          category: "Application Mobile & Web",
          description: "Plateforme permettant aux artistes de partager leur portfolio et de collaborer sur des projets communs.",
          image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1770&auto=format&fit=crop",
          tags: ["React Native", "Firebase", "Redux"],
          link: "#"
        },
        {
          id: 4,
          title: "Outil de Gestion de Projet",
          category: "SaaS",
          description: "Application web pour la gestion de tâches en équipe avec système de kanban et notifications en temps réel.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop",
          tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
          link: "#"
        }
      ]
    },
    skills: { 
      subtitle: "Expertise", 
      title: "Compétences Techniques",
      categories: [
        { title: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Framer Motion"] },
        { title: "Backend", skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"] },
        { title: "Outils & Design", skills: ["Git", "Docker", "Figma", "AWS", "Vercel", "Jest"] }
      ]
    },
    services: {
      subtitle: "Mes Services",
      title: "Ce que je propose",
      items: [
        { title: "Développement Web Sur Mesure", desc: "Création de sites vitrines, e-commerce et applications web performantes adaptées à vos besoins." },
        { title: "Refonte & Optimisation", desc: "Amélioration de l'interface, de l'expérience utilisateur et des performances de votre site existant." },
        { title: "Consulting Technique", desc: "Accompagnement et conseils sur vos choix technologiques et l'architecture de vos projets." }
      ]
    },
    pricing: {
      subtitle: "Tarifs Freelance",
      title: "Des offres transparentes",
      tjm: "TJM (Taux Journalier)",
      tjmPrice: "450€",
      tjmDesc: "Pour des missions courtes ou du renfort d'équipe.",
      packages: [
        {
          name: "Site Vitrine",
          price: "À partir de 1500€",
          features: ["Design sur mesure", "Responsive (Mobile/Tablette)", "Optimisation SEO de base", "Formulaire de contact", "Mise en ligne"]
        },
        {
          name: "Application Web / E-commerce",
          price: "Sur devis",
          features: ["Architecture sur mesure", "Base de données", "Espace utilisateur/admin", "Paiement en ligne", "Tests et déploiement"]
        }
      ]
    },
    contact: { 
      subtitle: "Prochaine Étape", 
      title1: "Travaillons", 
      title2: "Ensemble", 
      desc: "Je suis actuellement à l'écoute de nouvelles opportunités. Que vous ayez une question ou que vous souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre !", 
      btn: "Dites Bonjour" 
    },
    footer: { rights: "Tous droits réservés." }
  },
  en: {
    nav: { home: "Home", projects: "Projects", skills: "Skills", services: "Services & Pricing", contact: "Contact", hireMe: "Hire Me" },
    hero: { 
      role: "Developer & Designer", 
      title1: "Crafting digital", 
      title2: "experiences.", 
      desc: "I design and develop modern, performant, and aesthetic web applications, focusing on user experience and code quality.", 
      btnProjects: "View my projects" 
    },
    projects: { 
      subtitle: "Selected Works", 
      title: "Recent Projects",
      items: [
        {
          id: 1,
          title: "Premium E-Commerce",
          category: "Full-Stack Development",
          description: "A complete e-commerce platform with a shopping cart, secure checkout, and an admin dashboard.",
          image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1664&auto=format&fit=crop",
          tags: ["React", "Node.js", "Stripe", "Tailwind"],
          link: "#"
        },
        {
          id: 2,
          title: "Financial Application",
          category: "User Interface",
          description: "Analytical dashboard for tracking personal expenses with real-time interactive charts.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop",
          tags: ["TypeScript", "Next.js", "D3.js", "PostgreSQL"],
          link: "#"
        },
        {
          id: 3,
          title: "Creative Social Network",
          category: "Mobile & Web App",
          description: "Platform allowing artists to share their portfolio and collaborate on joint projects.",
          image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1770&auto=format&fit=crop",
          tags: ["React Native", "Firebase", "Redux"],
          link: "#"
        },
        {
          id: 4,
          title: "Project Management Tool",
          category: "SaaS",
          description: "Web application for team task management with a kanban system and real-time notifications.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop",
          tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
          link: "#"
        }
      ]
    },
    skills: { 
      subtitle: "Expertise", 
      title: "Technical Skills",
      categories: [
        { title: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Framer Motion"] },
        { title: "Backend", skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"] },
        { title: "Tools & Design", skills: ["Git", "Docker", "Figma", "AWS", "Vercel", "Jest"] }
      ]
    },
    services: {
      subtitle: "My Services",
      title: "What I offer",
      items: [
        { title: "Custom Web Development", desc: "Creation of showcase sites, e-commerce, and high-performance web applications tailored to your needs." },
        { title: "Redesign & Optimization", desc: "Improvement of the interface, user experience, and performance of your existing site." },
        { title: "Technical Consulting", desc: "Guidance and advice on your technological choices and project architecture." }
      ]
    },
    pricing: {
      subtitle: "Freelance Rates",
      title: "Transparent pricing",
      tjm: "Daily Rate",
      tjmPrice: "€450",
      tjmDesc: "For short missions or team reinforcement.",
      packages: [
        {
          name: "Showcase Website",
          price: "From €1500",
          features: ["Custom design", "Responsive (Mobile/Tablet)", "Basic SEO optimization", "Contact form", "Deployment"]
        },
        {
          name: "Web App / E-commerce",
          price: "Custom quote",
          features: ["Custom architecture", "Database", "User/Admin dashboard", "Online payment", "Testing & deployment"]
        }
      ]
    },
    contact: { 
      subtitle: "What's Next", 
      title1: "Let's Work", 
      title2: "Together", 
      desc: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!", 
      btn: "Say Hello" 
    },
    footer: { rights: "All rights reserved." }
  }
};

type Lang = 'fr' | 'en';
type Theme = 'dark' | 'light';

const AppContext = createContext<{
  lang: Lang;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
  t: typeof translations['fr'];
} | null>(null);

function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("Missing AppContext");
  return ctx;
}

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(l => l === 'fr' ? 'en' : 'fr');

  return (
    <AppContext.Provider value={{ lang, toggleLang, theme, toggleTheme, t: translations[lang] }}>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-300 selection:bg-black/10 dark:selection:bg-white/20">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPricing />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function Header() {
  const { lang, toggleLang, theme, toggleTheme, t } = useAppContext();
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <header className="pointer-events-auto flex items-center justify-between w-full max-w-7xl px-8 py-5 md:px-12 backdrop-blur-xl bg-white/80 dark:bg-[#111111]/80 border border-black/10 dark:border-white/10 rounded-full shadow-sm transition-colors duration-300">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">PORTFOLIO.</Link>
        <nav className="hidden lg:flex items-center gap-12 text-sm font-medium text-gray-600 dark:text-white/70">
          <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.home}</Link>
          {isHome && (
            <>
              <a href="#projets" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.projects}</a>
              <a href="#competences" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.skills}</a>
            </>
          )}
          <Link to="/services" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.services}</Link>
          {isHome ? (
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.contact}</a>
          ) : (
            <Link to="/#contact" className="hover:text-black dark:hover:text-white transition-colors">{t.nav.contact}</Link>
          )}
        </nav>
        
        <div className="flex items-center gap-6 md:gap-8">
          <button onClick={toggleLang} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
            <Globe className="w-4 h-4" />
            {lang}
          </button>
          <button onClick={toggleTheme} className="p-2 text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10">
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          {isHome ? (
            <a 
              href="#contact"
              className="hidden sm:inline-block px-6 py-3 text-xs font-semibold uppercase tracking-widest border border-black/20 dark:border-white/20 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              {t.nav.hireMe}
            </a>
          ) : (
            <Link 
              to="/#contact"
              className="hidden sm:inline-block px-6 py-3 text-xs font-semibold uppercase tracking-widest border border-black/20 dark:border-white/20 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              {t.nav.hireMe}
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}

function Hero() {
  const { t } = useAppContext();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm md:text-base font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-6 block">
            {t.hero.role}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight mb-8 text-gray-900 dark:text-white">
            {t.hero.title1} <br className="hidden md:block" />
            <span className="italic text-gray-600 dark:text-white/80">{t.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            {t.hero.desc}
          </p>
          <div className="flex items-center justify-center gap-6">
            <a href="#projets" className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/90 transition-colors">
              {t.hero.btnProjects}
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-4 border border-black/20 dark:border-white/20 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-4 border border-black/20 dark:border-white/20 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

function Projects() {
  const { t } = useAppContext();
  return (
    <section id="projets" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.projects.subtitle}</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">{t.projects.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {t.projects.items.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-black/5 dark:bg-white/5">
              <img 
                src={project.image} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            <div className="flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-500 dark:text-white/50 uppercase tracking-wider">{project.category}</span>
                <a href={project.link} className="text-gray-400 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h4 className="text-2xl font-serif mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h4>
              <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs border border-black/10 dark:border-white/10 rounded-full text-gray-600 dark:text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const { t } = useAppContext();
  return (
    <section id="competences" className="py-32 px-6 md:px-12 bg-black/5 dark:bg-white/5 border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.skills.subtitle}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">{t.skills.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
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
              <ul className="flex flex-col gap-4">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPricing() {
  const { t } = useAppContext();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <section className="mb-32">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.services.subtitle}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">{t.services.title}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-sm"
            >
              <h4 className="text-xl font-serif mb-4 text-gray-900 dark:text-white">{service.title}</h4>
              <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-16 text-center">
          <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.pricing.subtitle}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">{t.pricing.title}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-black text-white dark:bg-white dark:text-black lg:col-span-1"
          >
            <h4 className="text-xl font-medium mb-2">{t.pricing.tjm}</h4>
            <div className="text-5xl font-serif mb-4">{t.pricing.tjmPrice}<span className="text-lg font-sans font-light text-white/70 dark:text-black/70">/jour</span></div>
            <p className="text-white/80 dark:text-black/80 font-light mb-8">
              {t.pricing.tjmDesc}
            </p>
            <Link 
              to="/#contact"
              className="block w-full py-4 text-center rounded-full bg-white text-black dark:bg-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              {t.nav.hireMe}
            </Link>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.pricing.packages.map((pkg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-sm flex flex-col h-full"
              >
                <h4 className="text-xl font-serif mb-2 text-gray-900 dark:text-white">{pkg.name}</h4>
                <div className="text-3xl font-medium mb-8 text-gray-900 dark:text-white">{pkg.price}</div>
                <ul className="flex flex-col gap-4 mb-8 flex-grow">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-gray-600 dark:text-white/70">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  const { t } = useAppContext();
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.contact.subtitle}</h2>
        <h3 className="text-5xl md:text-7xl font-serif mb-8 text-gray-900 dark:text-white">{t.contact.title1} <span className="italic">{t.contact.title2}</span></h3>
        <p className="text-lg text-gray-600 dark:text-white/60 font-light mb-12 max-w-2xl mx-auto">
          {t.contact.desc}
        </p>
        <a 
          href="mailto:bonjour@exemple.com" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/90 transition-all hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          {t.contact.btn}
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  const { t } = useAppContext();
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-white/40 transition-colors duration-300">
      <p>© {new Date().getFullYear()} Portfolio. {t.footer.rights}</p>
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
      </div>
    </footer>
  );
}
