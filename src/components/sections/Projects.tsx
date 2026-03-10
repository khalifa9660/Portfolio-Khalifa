import React, { useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ExternalLink } from 'lucide-react';
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
};

/** Carte projet avec effet de tilt 3D au survol */
const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rawRotateX = useTransform(y, [-200, 200], [5, -5]);
  const rawRotateY = useTransform(x, [-200, 200], [-5, 5]);
  const rotateX = useSpring(rawRotateX, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(rawRotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col cursor-default"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-black/5 dark:bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay améliore la lisibilité des métriques */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500" />
        <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
          {project.metrics.map((metric) => (
            <span key={metric} className="px-3 py-1 text-xs font-medium bg-black/60 dark:bg-black/70 text-white backdrop-blur-sm rounded-full">
              {metric}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-gray-500 dark:text-white/50 uppercase tracking-wider">{project.category}</span>
          <a href={project.link} className="text-gray-400 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <h4 className="text-2xl font-serif mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h4>
        <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs border border-black/10 dark:border-white/10 rounded-full text-gray-600 dark:text-white/70 hover:border-black/30 dark:hover:border-white/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/** Section Projets — grille de réalisations récentes */
export default function Projects() {
  const t = useTranslation();
  return (
    <section id="projets" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-[0.2em] mb-4">{t.projects.subtitle}</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">{t.projects.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {t.projects.items.map((project, index) => (
          <React.Fragment key={project.id}>
            <ProjectCard project={project} index={index} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
