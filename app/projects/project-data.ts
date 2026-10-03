import DashboardWebsiteImage from '@/app/ui/icons/dashboard.png';
import CNGImage from '@/app/ui/icons/cng.png';
import PortfolioImage from '@/app/ui/icons/portfolio-website.png';
import UnderConstructionImage from '@/app/ui/icons/under-construction.png';
import ErgMasterImage from '@/app/ui/icons/ergmaster.png';

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

export const projects = [
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
    image: ErgMasterImage,  
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
    image: PortfolioImage,
  },
  {
    slug: 'film-portfolio-website',
    featured: true,
    projectType: projectType.client,
    title: 'Film Portfolio Website',
    description:
      'A portfolio website built for a film professional, with Next.js and TypeScript, integrated with Sanity CMS.',
    tags: ['Next.js', 'TypeScript', 'Sanity CMS'],
    status: 'In Development',
    year: '2026',
    href: 'https://p-harrison-portfolio-web.vercel.app/',
    image: UnderConstructionImage,
  },
  {
    slug: 'nextjs-dashboard-website',
    featured: false,
    projectType: projectType.personal,
    title: 'Next.js Dashboard Website',
    description:
      'A full-stack web dashboard built with Next.js and TypeScript, as part of a Next.js course. ',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    status: 'Completed',
    year: '2026',
    href: 'https://github.com/edvale732/nextjs-dashboard',
    image: DashboardWebsiteImage,
  },
  

];