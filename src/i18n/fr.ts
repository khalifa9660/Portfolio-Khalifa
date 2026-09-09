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
    role: "Software Engineer Fullstack · TypeScript · SaaS AI-native",
    title1: "Je construis des produits SaaS",
    title2: "du frontend à l'IA.",
    desc: "Je développe des applications TypeScript de bout en bout : interfaces, APIs, bases de données, traitements asynchrones et intégrations tierces. J'intègre les LLM dans une architecture contrôlée, avec logique métier déterministe, validation et observabilité.",
    btnContact: "Me contacter",
    btnProjects: "Voir mes projets",
    btnResume: "Télécharger mon CV",
  },
  about: {
    subtitle: "Profil",
    title: "Des applications TypeScript de bout en bout.",
    p1: "Je suis Khalifa Tambadou, Software Engineer Fullstack issu du développement web, spécialisé dans la construction de produits SaaS AI-native.",
    p2: "Sur les fonctionnalités IA, je conçois les LLM comme des composants probabilistes intégrés dans une architecture contrôlée : logique métier déterministe, guardrails, validation, fallback, versioning, observabilité et évaluation.",
    p3: "J'ai notamment conçu Breyvio, une application Shopify automatisant la récupération de paniers abandonnés, ainsi qu'AudySpark, un SaaS d'analyse CRO de landing pages.",
    highlights: [
      "Applications TypeScript fullstack",
      "APIs, données et traitements asynchrones",
      "LLM encadrés par une logique déterministe",
      "Sécurité et intégrations SaaS",
    ],
    highlightsLabel: "Ce que je fais le mieux",
  },
  projects: {
    subtitle: "Réalisations",
    title: "Projets Récents",
    personalTitle: "Projets personnels",
    otherTitle: "Autres réalisations",
    demo: "Démo",
    demoTitle: "Démo projet",
    items: [
      {
        id: 1,
        title: "Breyvio",
        category: "Projet personnel · SaaS Shopify AI-native",
        description:
          "Application Shopify automatisant la récupération de paniers abandonnés. Son moteur de décision déterministe 0–100 s'appuie sur environ 26 facteurs et sépare strictement décision métier et génération LLM. Quatre couches de guardrails encadrent les messages, avec OAuth 2.0 + PKCE, webhooks HMAC, chiffrement AES-256-GCM et génération localisée dans 38 langues.",
        image: "/screenshots/Breyvioo.png",
        tags: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Redis", "BullMQ", "Shopify GraphQL"],
        metrics: ["~26 facteurs", "4 couches de guardrails", "38 langues"],
        link: "https://breyvio.com",
        video: "https://www.loom.com/share/47bc86b7616f4b0c8c463878dd4e64ad",
        featured: true,
      },
      {
        id: 2,
        title: "AudySpark",
        category: "Projet personnel · SaaS d'analyse CRO",
        description:
          "SaaS automatisant l'analyse de landing pages et la production de recommandations CRO exploitables. Le pipeline transforme une URL en extraction structurée, analyse, scoring et rapport priorisé. Il associe un framework d'évaluation sur 12 dimensions CRO à une orchestration LLM multi-passes.",
        image: "/screenshots/Audyspark.png",
        tags: ["TypeScript", "Next.js", "Supabase", "PostgreSQL", "LLM APIs", "Stripe"],
        metrics: ["Pipeline complet", "12 dimensions CRO", "Rapports priorisés"],
        link: "https://audyspark.com",
        video: "https://www.loom.com/share/72c0727185dc4a0a9fa122f8fd05ca4b",
        featured: true,
      },
      {
        id: 8,
        title: "Folomi Paris",
        category: "Mission client · Site vitrine",
        description:
          "Site menu d'un restaurant parisien, livré et en ligne. Site statique sans framework, cartes en WebP optimisées (formules, entrées, plats, desserts, cocktails), déploiement GitHub Pages. Mission externe cadrée, livrée, terminée.",
        image: "/screenshots/Folomi_Paris.jpg",
        tags: ["HTML", "CSS", "WebP", "GitHub Pages"],
        metrics: ["Mission livrée", "Site statique", "GitHub Pages"],
        link: "https://folomi-paris.github.io/Folomi_Paris/",
      },
      {
        id: 3,
        title: "MVPs Freelance",
        category: "Applications Web sur mesure",
        description:
          "Construction rapide de MVPs SaaS fonctionnels pour des fondateurs et startups early-stage. De l'idée au produit déployé en production : auth, dashboards, intégrations Stripe, base de données, code propre et documenté.",
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
          "Syra Cosmetics · cosmétiques de haute facture, une vitrine éditoriale premium.",
        image: "/screenshots/SyraCosmetics.png",
        tags: ["Next.js", "Tailwind CSS", "Motion"],
        metrics: ["Production-ready"],
        video: "https://www.loom.com/share/d4623ee1f6184d46b843027a6cc450cf",
      },
    ],
  },
  skills: {
    subtitle: "Expertise technique",
    title: "Compétences techniques",
    categories: [
      {
        title: "Software Engineering",
        skills: ["TypeScript / JavaScript", "Node.js / NestJS", "Next.js / React", "Angular", "REST / GraphQL"],
      },
      {
        title: "Backend & Data",
        skills: ["PostgreSQL / Supabase", "SQL Server", "Redis / BullMQ", "APIs / Webhooks", "Traitements asynchrones"],
      },
      {
        title: "AI Engineering",
        skills: ["Claude / OpenAI / Gemini", "Structured outputs", "Guardrails / validation", "Model routing / fallback", "Versioning / évaluation / observabilité"],
      },
      {
        title: "Sécurité & intégrations",
        skills: ["OAuth 2.0 / PKCE", "HMAC / AES-256-GCM", "Rate limiting", "Multi-tenancy", "GDPR"],
      },
      {
        title: "Engineering",
        skills: ["Git / Docker", "CI/CD", "Tests automatisés", "Debugging", "Architecture SaaS / code review"],
      },
    ],
    workflowTitle: "Une IA intégrée dans une architecture contrôlée",
    workflowDesc:
      "Je sépare la logique métier déterministe de la génération LLM. Les sorties sont encadrées par des guardrails, une validation, des fallbacks, un versioning des prompts, de l'observabilité et des évaluations.",
  },
  experience: {
    subtitle: "Parcours",
    title: "Expérience & formation.",
    steps: [
      {
        num: "01",
        title: "Freelance · Founder Solo · SaaS AI-native",
        timing: "Déc. 2024 → Aujourd'hui",
        desc: "Conception et développement de produits SaaS AI-native, de l'expérience frontend aux APIs, bases de données, traitements asynchrones et intégrations tierces.",
      },
      {
        num: "02",
        title: "Breyvio · Founder / Software Engineer",
        timing: "2026 → Aujourd'hui",
        desc: "SaaS Shopify AI-native. Moteur de décision déterministe, génération LLM encadrée, intégration Shopify GraphQL, sécurité des tokens, données isolées par boutique et traitements asynchrones avec Redis et BullMQ.",
      },
      {
        num: "03",
        title: "AudySpark · Founder / Fullstack Software Engineer",
        timing: "2025 → 2026",
        desc: "SaaS d'analyse CRO. Développement du pipeline complet, du framework d'évaluation sur 12 dimensions, de l'orchestration LLM multi-passes, du système de rapports et de l'infrastructure SaaS.",
      },
      {
        num: "04",
        title: "Développeur Full-Stack · VIR by JP",
        timing: "2022 → 2024",
        desc: "Développement et maintenance d'une application métier avec Angular, TypeScript, C# / ASP.NET et SQL Server. APIs REST, authentification, permissions, audit de code, revues de code et travail en environnement Scrum.",
      },
      {
        num: "05",
        title: "Concepteur & Développeur d'Application Web",
        timing: "2020 → 2022",
        desc: "Ada Tech School. Diplôme RNCP niveau 6 reconnu par l'État. Formation full-stack complète : conception d'architecture, programmation orientée objet, bases de données, frameworks modernes et méthodologies agiles. Projet de fin d'études validé par jury professionnel.",
      },
    ],
    extraTitle: "Langues & disponibilité",
    extra: [
      "Français · Natif",
      "Anglais · Professionnel (B2)",
      "Paris, France · disponible en remote",
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
      { icon: "💼", text: "CV disponible au téléchargement" },
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
      { value: "2", label: "SaaS conçus en autonomie" },
      { value: "38", label: "langues dans Breyvio" },
      { value: "4", label: "couches de guardrails" },
      { value: "12", label: "dimensions CRO dans AudySpark" },
    ],
  },
  highlights: {
    subtitle: "Réalisations notables",
    title: "Ce qui distingue mon travail.",
    cards: [
      {
        icon: "⚙️",
        title: "Décision métier déterministe",
        desc: "Breyvio sépare la décision d'envoi, le nombre d'emails, le timing et l'éligibilité de la génération LLM.",
      },
      {
        icon: "🔐",
        title: "Sécurité Shopify intégrée",
        desc: "OAuth 2.0 + PKCE, webhooks HMAC, chiffrement AES-256-GCM, isolation par boutique et déduplication des webhooks.",
      },
      {
        icon: "📊",
        title: "Pipeline CRO complet",
        desc: "AudySpark transforme une URL en données structurées, analyse, scoring et rapport de recommandations priorisées.",
      },
    ],
  },
  footer: {
    rights: "Tous droits réservés.",
    tagline: "Software Engineer Fullstack · TypeScript · SaaS AI-native",
  },
};

/** Type de traduction inféré depuis la source de vérité FR */
export type Translation = typeof fr;

export default fr;
