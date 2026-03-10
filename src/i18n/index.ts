import fr from './fr';
import en from './en';
import type { Lang } from '../types';

export type { Translation } from './fr';

/** Dictionnaire de toutes les traductions indexées par langue */
export const translations: Record<Lang, typeof fr> = { fr, en };
