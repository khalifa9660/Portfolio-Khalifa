/** Langue supportée par l'application */
export type Lang = 'fr' | 'en';

/** Thème visuel de l'application */
export type Theme = 'dark' | 'light';

/** Un projet affiché dans la section Projects */
export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string[];
  link?: string;
  /** Lien vers la vidéo de démo (YouTube, Vimeo, ou lien direct .mp4) */
  video?: string;
}

/** Une catégorie de compétences techniques */
export interface SkillCategory {
  title: string;
  skills: string[];
}

/** Une étape du processus de travail */
export interface ProcessStep {
  num: string;
  title: string;
  timing: string;
  desc: string;
}

/** Un service / offre tarifaire */
export interface ServiceItem {
  title: string;
  price: string;
  delay: string;
  desc: string;
  stack: string;
  featured: boolean;
  badge: string;
}
