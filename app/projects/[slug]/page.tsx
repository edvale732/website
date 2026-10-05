import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/app/projects/project-data';
import ProjectReadme from '@/app/ui/project-readme';
import GitHubIcon from '@/app/ui/icons/github-white.png';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-foreground">
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent-hover transition hover:text-heading focus:outline-none focus:ring-2 focus:ring-accent-border"
        >
          <span aria-hidden="true">←</span>
          All projects
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl border border-accent-border/30 bg-surface-raised shadow-panel">
          {project.image ? (
            <div className="border-b border-accent-border/20 bg-accent/10 p-4 sm:p-8">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                priority
                className="mx-auto max-h-[32rem] w-full rounded-xl object-contain"
              />
            </div>
          ) : null}

          <div className="p-6 sm:p-10">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-accent-border/50 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-accent-hover">
                {project.status}
              </span>
              <div className="ml-auto flex items-center gap-3">
                <span className="text-sm font-medium uppercase tracking-[0.14em] text-subtle">
                  {project.year}
                </span>
                {project.href?.startsWith('https://github.com/') ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center gap-2 rounded-full border border-accent-border/30 bg-accent/5 px-3 py-2 text-sm font-medium text-body transition hover:border-accent-hover/60 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent-border"
                  >
                    <Image
                      src={GitHubIcon}
                      alt=""
                      width={30}
                      height={30}
                      className="h-[30px] w-[30px]"
                    />
                    <span>View GitHub</span>
                  </a>
                ) : null}
              </div>
            </div>

            {!project.readmeUrl ? (
              <>
                <h1 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                  {project.title}
                </h1>

                <section className="mt-8">
                  <h2 className="text-lg font-semibold text-heading">Overview</h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-body/80">
                    {project.description}
                  </p>
                </section>

                <section className="mt-8">
                  <h2 className="text-lg font-semibold text-heading">Built with</h2>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-accent-border/20 bg-accent/5 px-3 py-1.5 text-sm font-medium text-body"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            ) : null}

            {project.readmeUrl ? (
              <ProjectReadme readmeUrl={project.readmeUrl} />
            ) : null}

            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-accent-border/50 bg-accent/15 px-5 py-3 text-sm font-medium text-heading transition hover:border-accent-hover hover:bg-accent/25 focus:outline-none focus:ring-2 focus:ring-accent-border"
              >
                Visit project
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </article>
      </main>
    </div>
  );
}