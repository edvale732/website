import DashboardWebsiteImage from '@/app/ui/icons/dashboard.png';
import CNGImage from '@/app/ui/icons/cng.png';
import PortfolioImage from '@/app/ui/icons/portfolio-website.png';
import UnderConstructionImage from '@/app/ui/icons/under-construction.png';
import ErgMasterImage from '@/app/ui/icons/ergmaster.png';
import StrokeAIImage from '@/app/ui/icons/stroke-ai.png';
import CharlotteBeattieImage from '@/app/ui/icons/charlotte-beattie.png';
import PollyannaHarrisonImage from '@/app/ui/icons/p-harrison.png';
import TaskTimerImage from '@/app/ui/icons/task-timer.png';
import type { StaticImageData } from 'next/image';

export const projectType = {
  personal: {
    label: 'Personal',
    description: 'I have built several personal projects in order to develop my skills and explore topics I am passionate about.',
  },
  university: {
    label: 'University',
    description: 'These projects were completed as part of my BSc in Computer Science at Lancaster University.',
  },
  client: {
    label: 'Client',
    description: 'Several projects built for clients to meet their specific requirements.',
  },
} as const;

export type ProjectData = {
  slug: string;
  featured: boolean;
  title: string;
  projectType: (typeof projectType)[keyof typeof projectType];
  description: string;
  tags: string[];
  status: string;
  year: string;
  href?: string;
  readmeUrl?: string;
  image?: StaticImageData;
};

export const projects: ProjectData[] = [
  {
    slug: 'erg-master',
    featured: true,
    title: 'Erg Master',
    projectType: projectType.personal,
    description:
      'A rowing and strength training tracking application, with machine learning performance predictions.',

    tags: ['Next.js', 'TypeScript', 'Python'],
    status: 'In Development',
    year: '2026',
    href: 'https://github.com/edvale732/erg-master',
    readmeUrl:
      'https://raw.githubusercontent.com/edvale732/erg-master/main/README.md',
    image: ErgMasterImage,
  },

  {
    slug: 'stroke-ai',
    featured: true,
    title: 'Stroke AI',
    projectType: projectType.personal,
    description:
      'A Computer Vision application designed to analyse rowing technique.',
    tags: ['Python', 'Machine Learning', 'CV'],
    status: 'In Development',
    year: '2026',
    href: 'https://github.com/edvale732/stroke-ai',
    readmeUrl:
      'https://raw.githubusercontent.com/edvale732/stroke-ai/main/README.md',
    image: StrokeAIImage,

  },

  {
    slug: 'task-timer',
    featured: false,
    projectType: projectType.personal,
    title: 'Task Timer',
    description:
      'A simple task timer application to help manage and track time spent on various tasks.',
    tags: ['Next.js', 'TypeScript', 'React'],
    status: 'In Development',
    year: '2026',
    href: 'https://github.com/edvale732/task-timer',
    readmeUrl:
      'https://raw.githubusercontent.com/edvale732/task-timer/main/README.md',
    image: TaskTimerImage,
  },

  {
    slug: 'charlotte-beattie',
    featured: true,
    projectType: projectType.client,
    title: 'Media Portfolio Website',
    description:
      'A project built for media, business and marketing professional Charlotte Beattie, showcasing her work and portfolio. Sanity CMS was used to allow the client to easily manage and update content.',
    tags: ['Next.js', 'TypeScript', 'Sanity CMS'],
    status: 'In Development',
    year: '2026',
    href: 'https://charlottebeattie.co.uk',
    image: CharlotteBeattieImage,
  },
  
  {
    slug: 'campus-navigation-game',
    featured: true,
    title: 'Campus Navigation Game',
    projectType: projectType.university,
    description:
      'An open-world videogame set on Lancaster University campus, designed to help students learn the campus layout.',
    tags: ['Godot', 'Research', 'Videogame'],
    status: 'Dissertation',
    year: '2025',
    href: 'https://youtu.be/4f6bMZY8u7g',
    readmeUrl:
      'https://raw.githubusercontent.com/edvale732/campus_navigation_game/main/README.md',
    image: CNGImage,
  },
  {
    slug: 'portfolio-website',
    featured: false,
    projectType: projectType.personal,
    title: 'Portfolio Website',
    description:
      'A polished personal portfolio built to showcase myself and my projects in a clean, modern layout.',
    tags: ['Next.js', 'TypeScript', 'Design'],
    status: 'In Development',
    year: '2026',
    href: 'https://github.com/edvale732/website',
    readmeUrl:
      'https://raw.githubusercontent.com/edvale732/website/main/README.md',
    image: PortfolioImage,
  },
  {
    slug: 'pollyanna-harrison',
    featured: false,
    projectType: projectType.client,
    title: 'Film Portfolio Website',
    description:
      'A portfolio website built for a film professional, with Next.js and TypeScript, integrated with Sanity CMS.',
    tags: ['Next.js', 'TypeScript', 'Sanity CMS'],
    status: 'In Development',
    year: '2026',
    href: 'https://p-harrison-portfolio-web.vercel.app/',
    image: PollyannaHarrisonImage,
  },

];