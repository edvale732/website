import { ProjectCardGrid } from '@/app/ui/cards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Personal projects page',
};

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A polished personal portfolio built to showcase my projects in a clean, modern layout.',
    tags: ['Next.js', 'TypeScript', 'Design'],
    status: 'In Progress',
    year: '2026',
    href: 'https://github.com/edvale732/website',
  },
  {
    title: 'Rowing Tracker App',
    description:
      'A mobile app designed to track and analyse rowing, strength training and flexibility metrics, providing insights for athletes and coaches.',
    tags: ['Java', 'Python', 'PostgreSQL'],
    status: 'Prototype',
    year: '2026',
    href: 'https://github.com/edvale732/rowing_gym',
  },
  {
    title: 'Campus Navigation Game',
    description:
      'An open-world videogame set on Lancaster University campus, designed to help students learn the campus layout.',
    tags: ['Godot', 'Research', 'Videogame'],
    status: 'Dissertation',
    year: '2025',
    href: 'https://youtu.be/4f6bMZY8u7g',
  },
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0713] font-sans text-violet-50">
      <main className="flex w-full flex-1 justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl rounded-2xl border border-violet-400/30 bg-[#120d1d] p-8 shadow-[0_0_0_1px_rgba(139,92,246,0.12)] sm:p-12">
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