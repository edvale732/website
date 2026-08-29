import Link from 'next/link';

export type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  status?: string;
  year?: string;
  href?: string;
  ctaLabel?: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  status = 'Featured',
  year,
  href,
  ctaLabel = 'View',
}: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full border border-violet-400/50 bg-violet-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-violet-200">
          {status}
        </span>
        {year ? (
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-violet-300/80">
            {year}
          </span>
        ) : null}
      </div>

      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>

      <p className="mt-3 flex-1 text-sm leading-6 text-violet-100/80">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-violet-400/20 bg-violet-400/5 px-2.5 py-1 text-xs font-medium text-violet-100/90"
          >
            {tag}
          </span>
        ))}
      </div>

      {href ? (
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition group-hover:text-violet-50">
          {ctaLabel}
          <span aria-hidden="true">→</span>
        </div>
      ) : null}
    </>
  );

  if (!href) {
    return <article className="group flex h-full flex-col rounded-2xl border border-violet-400/30 bg-[#160f24] p-6 shadow-[0_0_0_1px_rgba(139,92,246,0.12)] transition duration-200 hover:-translate-y-1 hover:border-violet-300/60 hover:bg-[#1a122d]">{cardContent}</article>;
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${title} on GitHub`}
      className="group block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#0b0713]"
    >
      <article className="flex h-full flex-col rounded-2xl border border-violet-400/30 bg-[#160f24] p-6 shadow-[0_0_0_1px_rgba(139,92,246,0.12)] transition duration-200 hover:-translate-y-1 hover:border-violet-300/60 hover:bg-[#1a122d]">
        {cardContent}
      </article>
    </Link>
  );
}

export function ProjectCardGrid({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
