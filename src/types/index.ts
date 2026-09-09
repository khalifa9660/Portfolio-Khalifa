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
  featured?: boolean;
  link?: string;
  /** Lien vers la vidéo de démo (YouTube, Vimeo, ou lien direct .mp4) */
  video?: string;
}

/** Une catégorie de compétences techniques */
export interface SkillCategory {
  title: string;
  skills: string[];
}

/** Une entrée de la frise Parcours (expérience ou formation) */
export interface ExperienceStep {
  num: string;
  title: string;
  timing: string;
  desc: string;
}
