import type { MetadataRoute } from 'next';
import { projects } from '@/app/projects/project-data';
import { siteUrl } from './site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projects.map(({ slug }) => ({
      url: `${siteUrl}/projects/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
