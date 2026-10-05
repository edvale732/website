import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/app/ui/reveal-on-scroll';

export type ProjectCardProps = {
  slug: string;
  featured?: boolean;
  title: string;
  projectType: {
    label: string;
    description: string;
  };
  description: string;
  tags: string[];
  status?: string;
  year?: string;
  href?: string;
  image?: string | StaticImageData;
  ctaLabel?: string;
};

export function ProjectCard({
  slug,
  title,
  description,
  tags,
  status = 'Featured',
  year,
  href,
  image,
  ctaLabel = 'View',
}: ProjectCardProps) {
  const cardContent = (
    <>
      {image ? (
        <div className="mb-5 rounded-2xl border border-accent-border/20 bg-accent/10 p-2">
          <Image
            src={image}
            alt={`${title} preview`}
            width={1200}
            height={680}
            className="h-60 w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full border border-accent-border/50 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent-hover">
          {status}
        </span>
        {year ? (
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            {year}
          </span>
        ) : null}
      </div>

      <h2 className="text-xl font-semibold tracking-tight text-heading">{title}</h2>

      <p className="mt-3 flex-1 text-sm leading-6 text-body/80">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent-border/20 bg-accent/5 px-2.5 py-1 text-xs font-medium text-body"
          >
            {tag}
          </span>
        ))}
      </div>

      {href ? (
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-hover transition group-hover:text-heading">
          {ctaLabel}
          <span aria-hidden="true">→</span>
        </div>
      ) : null}
    </>
  );

  return (
    <Link
      href={`/projects/${slug}`}
      aria-label={`View ${title} project`}
      className="group block h-full rounded-[28px] focus:outline-none focus:ring-2 focus:ring-accent-border focus:ring-offset-2 focus:ring-offset-page"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-accent-border/30 bg-surface p-5 shadow-panel transition duration-200 hover:-translate-y-1 hover:border-accent-hover/60 hover:bg-surface-raised">
        {cardContent}
      </article>
    </Link>
  );
}

export function ProjectCardGrid({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
      {projects.map((project, index) => (
        <RevealOnScroll key={project.title} delay={index * 100} className="h-full">
          <ProjectCard {...project} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
