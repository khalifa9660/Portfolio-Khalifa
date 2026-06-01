const fr = {
  nav: {
    home: "Accueil",
    projects: "Projets",
    parcours: "Parcours",
    skills: "Stack",
    contact: "Contact",
    hireMe: "Me contacter",
  },
  hero: {
    available: "🟢 Disponible pour de nouvelles opportunités",
    role: "Développeur Full-Stack · Spécialiste Agentic AI",
    title1: "Je conçois des produits IA",
    title2: "— de l'agent à la production.",
    desc: "Développeur full-stack avec 3 ans d'expérience, spécialisé en orchestration d'agents IA et architecture multi-agents. Concepteur en autonomie de 2 SaaS production-ready : RecoverlyAI et AudySpark.",
    btnContact: "Me contacter",
    btnProjects: "Voir mes projets",
  },
  about: {
    subtitle: "Profil",
    title: "Builder AI-augmented, du concept à la production.",
    p1: "Je suis Khalifa Tambadou, développeur full-stack, spécialisé en orchestration d'agents IA, architecture multi-agents et expertise CRO.",
    p2: "J'ai conçu en autonomie complète 2 SaaS production-ready : RecoverlyAI (récupération de panier abandonné DTC, en ligne sur le Shopify App Store) et AudySpark (audit CRO méthodologique basé sur 30+ anchors Baymard, NN Group et MECLABS).",
    p3: "Je recherche un environnement qui valorise l'expertise builder AI-augmented et CRO, dans un cadre de transformation numérique et d'IA agentique en production.",
    highlights: [
      "Orchestration d'agents IA en production",
      "Architecture hexagonale multi-tenant",
      "Audit & scoring CRO méthodologique",
      "Delivery boostée par l'IA",
    ],
    highlightsLabel: "Ce que je fais le mieux",
  },
  projects: {
    subtitle: "Réalisations",
    title: "Projets Récents",
    demo: "Démo",
    demoTitle: "Démo projet",
    items: [
      {
        id: 1,
        title: "RecoverlyAI",
        category: "SaaS Shopify · Cart Recovery",
        description:
          "App Shopify de récupération de panier abandonné pilotée par IA. Architecture multi-agents (orchestration Sonnet → Haiku), scoring intelligent 100+ facteurs, génération éditoriale cross-emails en 38+ langues, multi-tenant avec RLS Supabase et intégration Shopify OAuth. 1685 tests automatisés. En ligne sur le Shopify App Store.",
        image: "/screenshots/Recoverlyai.png",
        tags: ["NestJS", "Next.js 16", "Supabase", "Claude API", "Shopify API"],
        metrics: ["1685 tests", "38+ langues", "Shopify App Store"],
        link: "https://recoverlyai.fr",
        video: "https://www.loom.com/share/652c461e31854134999913ba0a5a03f6",
      },
      {
        id: 2,
        title: "AudySpark",
        category: "SaaS d'audit CRO",
        description:
          "SaaS d'audit CRO pour SaaS B2B et landing pages. Framework propriétaire CLARITY_MATRIX (12 dimensions de scoring), méthodologie sourcée sur 30+ anchors Baymard, NN Group et MECLABS. Rapports chiffrés avec impact financier (€/mois) et recommandations priorisées par ROI. Architecture parallèle NestJS hexagonale, orchestration LLM multi-passes.",
        image: "/screenshots/Audyspark.png",
        tags: ["NestJS", "Architecture hexagonale", "Claude API", "CRO"],
        metrics: ["V5.6 production", "12 dimensions", "30+ anchors"],
        link: "https://audyspark.com",
        video: "https://www.loom.com/share/72c0727185dc4a0a9fa122f8fd05ca4b",
      },
      {
        id: 3,
        title: "MVPs Freelance",
        category: "Applications Web sur mesure",
        description:
          "Construction rapide de MVPs SaaS fonctionnels pour des fondateurs et startups early-stage. De l'idée au produit déployé en production : auth, dashboards, intégrations Stripe, base de données — code propre et documenté.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop",
        tags: ["Next.js", "NestJS", "Supabase", "Stripe", "Vercel"],
        metrics: ["Production-ready", "100% ownership"],
      },
      {
        id: 4,
        title: "Nexus Creative",
        category: "MVP Startup",
        description:
          "Nexus Creative est une agence digitale full-service qui crée des expériences numériques immersives pour aider les entreprises à grandir.",
        image: "/screenshots/NexusCreative.png",
        tags: ["Next.js", "NestJS", "Supabase", "Stripe", "Vercel"],
        metrics: ["Production-ready"],
        video: "https://www.loom.com/share/a4c78f8c45c644f99b4f4ee15c985a9f",
      },
      {
        id: 5,
        title: "INTI",
        category: "Landing Page",
        description:
          "INTI Design présente une galerie d'art manga réinventé, avec quelques pièces majeures et leur positionnement premium.",
        image: "/screenshots/INTI.png",
        tags: ["Next.js", "Tailwind CSS", "Motion"],
        metrics: ["Production-ready"],
        video: "https://www.loom.com/share/8f0d35a6166348b7870902467bfdc96e",
      },
      {
        id: 6,
        title: "Eclat d'art",
        category: "Landing Page",
        description:
          "Eclat d'art présente une galerie d'art réinventée, avec quelques illustrations premium.",
        image: "/screenshots/Eclat_Art.png",
        tags: ["Next.js", "Tailwind CSS", "Motion"],
        metrics: ["Production-ready"],
        video: "https://www.loom.com/share/8cad9153580d4924ab8f788741bfb684",
      },
      {
        id: 7,
        title: "Syra Cosmetics",
        category: "Landing Page",
        description:
          "Syra Cosmetics — cosmétiques de haute facture, une vitrine éditoriale premium.",
        image: "/screenshots/SyraCosmetics.png",
        tags: ["Next.js", "Tailwind CSS", "Motion"],
        metrics: ["Production-ready"],
        video: "https://www.loom.com/share/d4623ee1f6184d46b843027a6cc450cf",
      },
    ],
  },
  skills: {
    subtitle: "Expertise technique",
    title: "Ma Stack",
    categories: [
      {
        title: "Backend & Architecture",
        skills: [
          "NestJS / Node.js",
          "TypeScript",
          "ASP.NET Core",
          "PostgreSQL / Supabase",
          "BullMQ / Redis",
          "Architecture hexagonale",
        ],
      },
      {
        title: "Frontend",
        skills: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS v4",
          "Angular",
        ],
      },
      {
        title: "AI Engineering",
        skills: [
          "Claude API (Anthropic)",
          "Orchestration LLM multi-agents",
          "Prompt engineering avancé",
          "Guardrails system",
          "Gestion erreurs LLM",
        ],
      },
      {
        title: "CRO & Intégrations",
        skills: [
          "Méthodologie Baymard",
          "NN Group / MECLABS",
          "A/B testing",
          "Shopify OAuth",
          "Stripe / Resend",
        ],
      },
    ],
    workflowTitle: "Workflow AI-augmented",
    workflowDesc:
      "Mon process de delivery intègre les meilleurs outils IA du marché (Claude Code) pour accélérer chaque étape sans sacrifier la qualité : tests automatisés, TDD, CI/CD, architecture-driven development. Résultat : un cycle de livraison nettement plus court, pour du code production-ready.",
  },
  experience: {
    subtitle: "Parcours",
    title: "Expérience & formation.",
    steps: [
      {
        num: "01",
        title: "Founder Solo — Développeur Agentic AI",
        timing: "Déc. 2025 — Présent",
        desc: "RecoverlyAI & AudySpark · Paris. Conception et développement en autonomie complète de 2 SaaS agentic production-ready intégrant des agents IA en production : architecture multi-agents, intégration Claude API, backend NestJS hexagonal et frontend Next.js 16.",
      },
      {
        num: "02",
        title: "Développeur Full-Stack — VIR by JP",
        timing: "Sept. 2022 — Août 2023",
        desc: "Angular · ASP.NET Core · Paris. Développement web full-stack en équipe production sur des applications métier transport : livraison de features en environnement agile, code review, déploiement continu et collaboration pluridisciplinaire (PO, designers, ops).",
      },
      {
        num: "03",
        title: "Concepteur & Développeur d'Application Web",
        timing: "2020 — 2023",
        desc: "Diplôme RNCP niveau 6 reconnu par l'État. Formation full-stack complète : conception d'architecture, programmation orientée objet, bases de données, frameworks modernes et méthodologies agiles. Projet de fin d'études validé par jury professionnel.",
      },
    ],
    extraTitle: "Langues & disponibilité",
    extra: [
      "Français — Natif",
      "Anglais — Professionnel (B2)",
      "Paris, France — disponible en remote",
    ],
  },
  contactPage: {
    subtitle: "Contact",
    title1: "Discutons de",
    title2: "votre projet.",
    intro:
      "Une opportunité, une collaboration ou une question ? Écrivez-moi, je réponds sous 24h.",
    emailContactLabel: "Écrivez-moi directement",
    emailContact: "khalifa.96@hotmail.fr",
    phoneLabel: "Téléphone",
    phone: "+33 6 65 42 78 63",
    reassurances: [
      { icon: "⚡", text: "Réponse sous 24h" },
      { icon: "📍", text: "Paris, France · disponible en remote" },
      { icon: "💼", text: "CV détaillé sur demande" },
    ],
    nameLabel: "Votre nom",
    emailLabel: "Votre email",
    messageLabel: "Votre message",
    namePlaceholder: "Prénom Nom",
    emailPlaceholder: "vous@exemple.com",
    messagePlaceholder:
      "Présentez votre projet, votre opportunité ou votre question...",
    sendBtn: "Envoyer",
    successTitle: "Message envoyé !",
    successDesc: "Merci, je reviens vers vous sous 24h.",
  },
  finalCta: {
    title: "Travaillons ensemble.",
    desc: "Vous cherchez un développeur capable de livrer des produits IA en production ? Parlons-en.",
    btn: "Me contacter",
  },
  socialProof: {
    subtitle: "En chiffres",
    items: [
      { value: "3 ans", label: "d'expérience cumulée" },
      { value: "2", label: "SaaS production-ready" },
      { value: "1685", label: "tests automatisés" },
      { value: "38+", label: "langues supportées" },
    ],
  },
  highlights: {
    subtitle: "Réalisations notables",
    title: "Ce qui distingue mon travail.",
    cards: [
      {
        icon: "🛍️",
        title: "Publié sur le Shopify App Store",
        desc: "RecoverlyAI validé par la Shopify Review et mis en ligne en mars 2026 — un SaaS agentic réellement en production.",
      },
      {
        icon: "🤖",
        title: "Architecture multi-agents propriétaire",
        desc: "Orchestration Sonnet → Haiku cohérente sur des séquences cross-emails, avec 6 signatures cognitives configurables par marchand.",
      },
      {
        icon: "📊",
        title: "Rigueur CRO démocratisée",
        desc: "AudySpark : framework CLARITY_MATRIX et 30+ anchors Baymard/NN Group/MECLABS — la rigueur consultant senior rendue accessible.",
      },
    ],
  },
  footer: {
    rights: "Tous droits réservés.",
    tagline: "Développeur Full-Stack · Agentic AI",
  },
};

/** Type de traduction inféré depuis la source de vérité FR */
export type Translation = typeof fr;

export default fr;
