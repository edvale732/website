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
    <div className="flex min-h-screen flex-col bg-[#0b0713] font-sans text-violet-50">
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          <span aria-hidden="true">←</span>
          All projects
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl border border-violet-400/30 bg-[#120d1d] shadow-[0_0_0_1px_rgba(139,92,246,0.12)]">
          {project.image ? (
            <div className="border-b border-violet-400/20 bg-violet-950/30 p-4 sm:p-8">
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
              <span className="inline-flex items-center rounded-full border border-violet-400/50 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-violet-200">
                {project.status}
              </span>
              <div className="ml-auto flex items-center gap-3">
                <span className="text-sm font-medium uppercase tracking-[0.14em] text-violet-300/80">
                  {project.year}
                </span>
                {project.href?.startsWith('https://github.com/') ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/5 px-3 py-2 text-sm font-medium text-violet-100 transition hover:border-violet-300/60 hover:bg-violet-400/10 focus:outline-none focus:ring-2 focus:ring-violet-400"
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
                <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {project.title}
                </h1>

                <section className="mt-8">
                  <h2 className="text-lg font-semibold text-white">Overview</h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-violet-100/80">
                    {project.description}
                  </p>
                </section>

                <section className="mt-8">
                  <h2 className="text-lg font-semibold text-white">Built with</h2>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1.5 text-sm font-medium text-violet-100/90"
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
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-violet-500/15 px-5 py-3 text-sm font-medium text-violet-100 transition hover:border-violet-200 hover:bg-violet-500/25 focus:outline-none focus:ring-2 focus:ring-violet-400"
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