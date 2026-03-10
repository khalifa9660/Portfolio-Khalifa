const fr = {
  nav: {
    home: "Accueil",
    projects: "Projets",
    skills: "Stack",
    services: "Services & Tarifs",
    contact: "Contact",
    hireMe: "Discutons",
  },
  hero: {
    available: "🟢 Disponible pour missions",
    role: "AI Product Builder",
    title1: "Je transforme ton idée",
    title2: "en produit qui tourne.",
    desc: "Développeur fullstack basé en France. Je construis des MVPs SaaS fonctionnels en 2 à 4 semaines grâce à un workflow augmenté par l'IA. Stack moderne, livraison rapide, code production-ready.",
    btnContact: "Discutons de ton projet",
    btnProjects: "Voir mes projets",
  },
  about: {
    subtitle: "À propos",
    title: "Pas un dev classique.",
    p1: "Je suis Khalifa, développeur fullstack et AI Product Builder basé en France. Je ne facture pas au temps passé — je construis des produits.",
    p2: "Mon approche : comprendre ton besoin business, définir un scope serré, et livrer un MVP fonctionnel en 2 à 4 semaines. J'utilise l'IA (Claude Code) au quotidien pour coder plus vite sans sacrifier la qualité. Ce qui prend 1 à 2 mois chez une agence, je le livre en quelques semaines.",
    p3: "Mon parcours m'a amené à travailler sur des projets Angular/C# en entreprise, à construire mon propre SaaS Shopify (RecoverlyAI), et à accompagner des fondateurs dans la création de leurs premiers produits.",
    highlights: [
      "Transformer une idée floue en app fonctionnelle",
      "Intégrer de l'IA dans des produits existants",
      "Construire des apps Shopify sur mesure",
      "Livrer vite, propre, déployé",
    ],
    highlightsLabel: "Ce que je fais le mieux",
  },
  projects: {
    subtitle: "Réalisations",
    title: "Projets Récents",
    items: [
      {
        id: 1,
        title: "RecoverlyAI",
        category: "SaaS Shopify",
        description: "App Shopify qui génère des séquences d'emails de récupération de paniers abandonnés personnalisés par IA. Scoring intelligent, 6 styles d'écriture IA, support 30+ langues, billing triple couche avec 1 811 tests passants. Soumis au Shopify App Store.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1770&auto=format&fit=crop",
        tags: ["NestJS", "Next.js", "Supabase", "Claude API", "Shopify API"],
        metrics: ["1 811 tests", "30+ langues", "6 styles IA"],
        link: "#",
      },
      {
        id: 2,
        title: "MVPs Freelance",
        category: "Applications Web sur mesure",
        description: "Construction rapide de MVPs fonctionnels pour des fondateurs et startups early-stage. De l'idée au produit déployé en production : auth, dashboards, intégrations Stripe, base de données — code propre et documenté.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop",
        tags: ["Next.js", "NestJS", "Supabase", "Stripe", "Vercel"],
        metrics: ["2-4 semaines", "100% ownership", "Production-ready"],
        link: "#",
      },
    ],
  },
  skills: {
    subtitle: "Expertise technique",
    title: "Ma Stack",
    categories: [
      {
        title: "Frontend",
        skills: ["Next.js / React", "Angular", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "Backend",
        skills: ["NestJS / Node.js", "C# / .NET", "Python", "PostgreSQL"],
      },
      {
        title: "IA & Intégrations",
        skills: ["Claude API (Anthropic)", "OpenAI API", "Shopify API", "Stripe"],
      },
      {
        title: "Infrastructure",
        skills: ["Supabase", "Vercel / Railway", "Docker", "CI/CD"],
      },
    ],
    workflowTitle: "Workflow IA",
    workflowDesc: "J'utilise Claude Code au quotidien avec des agents spécialisés. Ce qui prend 3 semaines à un dev classique, je le livre en 1 à 2 semaines — même qualité, moins de temps, meilleur prix pour toi.",
  },
  process: {
    subtitle: "Comment ça se passe",
    title: "Un process simple et transparent.",
    steps: [
      {
        num: "01",
        title: "Discovery Call",
        timing: "Jour 0",
        desc: "30 minutes gratuites pour comprendre ton besoin, ton marché et tes priorités. On définit ensemble ce qui est essentiel dans le MVP vs ce qui peut attendre.",
      },
      {
        num: "02",
        title: "Proposition",
        timing: "24-48h",
        desc: "Tu reçois un document clair : scope précis des features incluses ET exclues, prix forfaitaire, timeline semaine par semaine, stack technique choisie.",
      },
      {
        num: "03",
        title: "Kickoff + Build",
        timing: "Semaine 1-3",
        desc: "Acompte de 50%, je setup le projet et je commence à construire. Point hebdomadaire chaque lundi, démo chaque vendredi. Tu vois l'avancement en temps réel.",
      },
      {
        num: "04",
        title: "Livraison",
        timing: "Semaine 3-4",
        desc: "App déployée en production, repo GitHub transféré, documentation technique. Tu es propriétaire de ton code à 100%.",
      },
    ],
    guarantees: [
      "50% upfront, 50% à la livraison — pas de mauvaise surprise",
      "Le code est à toi — repo GitHub transféré, tu en fais ce que tu veux",
      "Production-ready — déployé, SSL, documenté, prêt à accueillir des utilisateurs",
    ],
  },
  services: {
    subtitle: "Mes Services",
    title: "Ce que je construis",
    items: [
      {
        title: "MVP SaaS",
        price: "3 000 – 8 000€",
        delay: "2-4 semaines",
        desc: "App web complète prête à accueillir tes premiers utilisateurs. Auth (email + Google SSO), dashboard, 3-5 features core, paiements Stripe, déploiement production.",
        stack: "Next.js · NestJS · Supabase · Stripe",
        featured: true,
      },
      {
        title: "Intégration IA",
        price: "1 500 – 4 000€",
        delay: "1-2 semaines",
        desc: "J'intègre de l'IA dans ton produit existant. Chatbot, génération de contenu, classification, emails personnalisés. Pipeline de prompts optimisés et testés.",
        stack: "Claude API · OpenAI · NestJS · Prompt Engineering",
        featured: false,
      },
      {
        title: "App Shopify Custom",
        price: "3 000 – 6 000€",
        delay: "2-4 semaines",
        desc: "App Shopify sur mesure de A à Z. OAuth, webhooks, dashboard marchand intégré, soumission App Store. J'ai construit ma propre app Shopify — je connais le processus de bout en bout.",
        stack: "Shopify API · Next.js · NestJS · Supabase",
        featured: false,
      },
      {
        title: "Sprint Technique / Rescue",
        price: "1 500 – 3 000€",
        delay: "1 semaine",
        desc: "Ton projet est bloqué, buggé ou mal architecturé ? J'interviens en mode pompier : audit complet, fix des bugs critiques, refactoring, stack clean.",
        stack: "Audit · Refactoring · CI/CD · Tests",
        featured: false,
      },
    ],
    tjm: "TJM (missions courtes)",
    tjmPrice: "450€",
    tjmUnit: "/jour",
    tjmDesc: "Pour du renfort d'équipe ou des missions courtes.",
  },
  contact: {
    subtitle: "Prochaine Étape",
    title1: "Parlons de",
    title2: "ton projet.",
    desc: "Remplis le formulaire ou écris-moi directement. Je réponds sous 24h.",
    fields: {
      name: "Ton nom *",
      email: "Ton email *",
      projectType: "Type de projet",
      projectTypeOptions: [
        "MVP SaaS",
        "Intégration IA",
        "App Shopify",
        "Sprint Technique",
        "Autre",
      ],
      budget: "Budget estimé",
      budgetOptions: ["1 000 – 3 000€", "3 000 – 5 000€", "5 000 – 10 000€", "10 000€+"],
      message: "Décris ton projet *",
      submit: "Envoyer mon projet",
    },
    email: "khalifatambadou.dev@gmail.com",
    emailLabel: "Ou écris-moi directement",
  },
  footer: {
    rights: "Tous droits réservés.",
    tagline: "AI Product Builder · France",
  },
};

/** Type de traduction inféré depuis la source de vérité FR */
export type Translation = typeof fr;

export default fr;
