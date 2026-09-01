import DashboardWebsiteImage from '@/app/ui/icons/dashboard.png';
import CNGImage from '@/app/ui/icons/cng.png';
import PortfolioImage from '@/app/ui/icons/portfolio-website.png';
import UnderConstructionImage from '@/app/ui/icons/under-construction.png';

export const projects = [
  {
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
    title: 'Rowing Tracker App',
    description:
      'A mobile app designed to track and analyse rowing, strength training and flexibility metrics, providing insights for athletes and coaches.',
    tags: ['Java', 'Python', 'PostgreSQL'],
    status: 'Idea',
    year: '2026',
    href: 'https://github.com/edvale732/rowing_gym',
    image:
      UnderConstructionImage,
  },
  {
    title: 'Campus Navigation Game',
    description:
      'An open-world videogame set on Lancaster University campus, designed to help students learn the campus layout.',
    tags: ['Godot', 'Research', 'Videogame'],
    status: 'Dissertation',
    year: '2025',
    href: 'https://youtu.be/4f6bMZY8u7g',
    image: CNGImage,
  },
  {
    title: 'Next.js Dashboard Website',
    description:
      'A full-stack web dashboard built with Next.js and TypeScript, as part of a Next.js course. ',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    status: 'Completed',
    year: '2026',
    href: 'https://github.com/edvale732/nextjs-dashboard',
    image: DashboardWebsiteImage,
  },
  {
    title: 'Film Portfolio Website',
    description:
      'A portfolio website built for a film professional, with Next.js and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Client'],
    status: 'In Development',
    year: '2026',
    href: 'https://p-harrison-film.vercel.app/',
    image: UnderConstructionImage,
  },

];