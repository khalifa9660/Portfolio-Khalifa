import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Play, X } from 'lucide-react';
import { useTranslation } from '../../context/AppContext';

type ProjectItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string[];
  link: string;
  video?: string;
};

/**
 * Transforme une URL vidéo en URL embed.
 * Supporte : Loom, YouTube, Vimeo, liens directs (.mp4…)
 */
function toEmbedUrl(url: string): string {
  // Loom — loom.com/share/ID
  const loomMatch = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
  if (loomMatch) {
    return `https://www.loom.com/embed/${loomMatch[1]}?autoplay=1&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`;
  }
  // YouTube — watch?v=ID ou youtu.be/ID
  const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?\s]+)/);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
  }
  // Vimeo — vimeo.com/ID
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  }
  // Lien direct (mp4, webm…)
  return url;
}

/** Détecte si l'URL est un fichier vidéo direct (non iframe) */
function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url);
}

/** Modal lecteur vidéo */
function VideoModal({ url, title, onClose }: { url: string; title: string; onClose: () => void }) {
  const embedUrl = toEmbedUrl(url);
  const direct = isDirectVideo(url);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Fermer"
      >
        <X className="w-5 h-5" />
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {direct ? (
          <video
            src={embedUrl}
            autoPlay
            controls
            className="w-full h-full object-cover bg-black"
            title={title}
          />
        ) : (
          <iframe
            src={embedUrl}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </motion.div>
    </motion.div>
  );
}

/** Carte projet */
function ProjectCard({ project, index, onPlayVideo }: {
  project: ProjectItem;
  index: number;
  onPlayVideo: (url: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col"
    >
      {/* Vignette image + bouton play */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-black/5 dark:bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Bouton Play — visible uniquement si une vidéo est définie */}
        {project.video && (
          <button
            onClick={() => onPlayVideo(project.video!)}
            className="absolute inset-0 flex items-center justify-center group/play"
            aria-label={`Voir la démo de ${project.title}`}
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-black shadow-xl transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-white">
              <Play className="w-6 h-6 translate-x-0.5" fill="currentColor" />
            </span>
          </button>
        )}

        {/* Métriques */}
        <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="px-3 py-1 text-xs font-medium bg-black/60 text-white backdrop-blur-sm rounded-full"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>

      {/* Contenu texte */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-gray-500 dark:text-white/50 uppercase tracking-wider">
            {project.category}
          </span>
          <div className="flex items-center gap-3">
            {project.video && (
              <button
                onClick={() => onPlayVideo(project.video!)}
                className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Voir la démo vidéo"
              >
                <Play className="w-3.5 h-3.5" fill="currentColor" />
                Démo
              </button>
            )}
            <a
              href={project.link}
              className="text-gray-400 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
              aria-label={`Voir ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <h4 className="text-2xl font-serif mb-3 text-gray-900 dark:text-white">
          {project.title}
        </h4>

        <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs border border-black/10 dark:border-white/10 rounded-full text-gray-600 dark:text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/** Section Projets — grille de réalisations récentes */
export default function Projects() {
  const t = useTranslation();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <>
      <section id="projets" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">
            {t.projects.subtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">
            {t.projects.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {t.projects.items.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onPlayVideo={setActiveVideoUrl}
            />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeVideoUrl && (
          <VideoModal
            url={activeVideoUrl}
            title="Démo projet"
            onClose={() => setActiveVideoUrl(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
