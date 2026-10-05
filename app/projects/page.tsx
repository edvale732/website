import { Metadata } from 'next';
import { projects } from '@/app/projects/project-data';
import RevealOnScroll from '@/app/ui/reveal-on-scroll';
import { ProjectBrowser } from '@/app/ui/project-browser';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Personal projects page',
};


export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-foreground">
      <main className="flex w-full flex-1 justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl rounded-2xl border border-accent-border/30 bg-surface-raised p-8 shadow-panel sm:p-12">
          <RevealOnScroll className="mb-10 flex flex-col gap-4 text-left">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-heading sm:text-4xl">
              Projects
            </h1>
          </RevealOnScroll>

          <ProjectBrowser projects={projects} />
        </div>
      </main>
    </div>
  );
}