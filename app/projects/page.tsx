import { ProjectCardGrid } from '@/app/ui/cards';
import { Metadata } from 'next';
import { projects } from '@/app/projects/project-data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Personal projects page',
};


export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0713] font-sans text-violet-50">
      <main className="flex w-full flex-1 justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl rounded-2xl border border-violet-400/30 bg-[#120d1d] p-8 shadow-[0_0_0_1px_rgba(139,92,246,0.12)] sm:p-12">
          <div className="mb-10 flex flex-col gap-4 text-left">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-white sm:text-4xl">
              Projects
            </h1>
          </div>

          <ProjectCardGrid projects={projects} />
        </div>
      </main>
    </div>
  );
}