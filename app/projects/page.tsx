import { Metadata } from 'next';
import { projects } from '@/app/projects/project-data';
import RevealOnScroll from '@/app/ui/reveal-on-scroll';
import { ProjectBrowser } from '@/app/ui/project-browser';
import { siteUrl } from '@/app/site-url';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore software projects by Edward Vale, a First-Class Computer Science graduate. Browse personal, university, and client work.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Edward Vale',
    description:
      'Explore software projects by Edward Vale, including personal, university, and client work.',
    url: `${siteUrl}/projects`,
    type: 'website',
  },
};


export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-foreground">
      <main className="flex w-full flex-1 justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl rounded-2xl border border-accent-border/30 bg-surface-raised p-8 shadow-panel sm:p-12">
          <RevealOnScroll className="mb-10 flex flex-col gap-4 text-left">
            <h1 className="projects-title text-3xl font-semibold leading-10 tracking-tight text-heading sm:text-4xl">
              <span className="projects-title__text">Projects</span>
            </h1>
          </RevealOnScroll>

          <ProjectBrowser projects={projects} />
        </div>
      </main>
    </div>
  );
}