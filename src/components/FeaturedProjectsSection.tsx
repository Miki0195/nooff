import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useT } from '../i18n/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

type ProjectWithGradient = {
  id: string;
  name: string;
  category: string;
  tag: string;
  description: string;
  gradient: string;
};

function ProjectCard({ project, viewProjectLabel }: { project: ProjectWithGradient; viewProjectLabel: string }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group"
    >
      <a
        href={`#${project.id}`}
        className="block"
        aria-label={project.name}
      >
        <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#1c1c1e] transition-colors duration-300 hover:border-[rgba(255,255,255,0.12)]">
          {/* Image area with gradient placeholder */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              style={{ background: project.gradient }}
            />
            {/* Category tag */}
            <span
              className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#f5f5f5',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {project.tag}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h3
              className="text-xl md:text-2xl font-bold text-[#f5f5f5]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.name}
            </h3>
            <p
              className="mt-2 text-[#888888] text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {project.description}
            </p>
            <span
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:underline group-hover:text-[#c8102e]"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#f5f5f5',
              }}
            >
              {viewProjectLabel}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export default function FeaturedProjectsSection() {
  const t = useT();
  const GRADIENTS = [
    'linear-gradient(135deg, #0a0a0a 0%, rgba(200, 16, 46, 0.15) 40%, rgba(220, 80, 50, 0.12) 100%)',
    'linear-gradient(135deg, #0a0a0a 0%, rgba(212, 175, 55, 0.12) 50%, rgba(184, 134, 11, 0.08) 100%)',
    'linear-gradient(135deg, #0a0a0a 0%, rgba(205, 133, 63, 0.14) 40%, rgba(139, 90, 43, 0.1) 100%)',
    'linear-gradient(135deg, #0a0a0a 0%, rgba(255, 182, 193, 0.1) 40%, rgba(219, 112, 147, 0.08) 100%)',
  ];
  const projects = t.projects.items.map((item, i) => ({ ...item, gradient: GRADIENTS[i] }));

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-80px 0px -80px 0px',
    amount: 0.2,
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <motion.header
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {t.projects.title}
          </h2>
          <p
            className="mt-4 text-lg text-[#888888]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t.projects.subtitle}
          </p>
        </motion.header>

        {/* Asymmetrical editorial grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* First project: large, full width */}
          <div className="md:col-span-12">
            <ProjectCard project={projects[0]} viewProjectLabel={t.projects.viewProject} />
          </div>

          {/* Second and third: side by side, smaller */}
          <div className="md:col-span-6">
            <ProjectCard project={projects[1]} viewProjectLabel={t.projects.viewProject} />
          </div>
          <div className="md:col-span-6">
            <ProjectCard project={projects[2]} viewProjectLabel={t.projects.viewProject} />
          </div>

          {/* Fourth: medium width, centered */}
          <div className="md:col-span-8 md:col-start-3">
            <ProjectCard project={projects[3]} viewProjectLabel={t.projects.viewProject} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
