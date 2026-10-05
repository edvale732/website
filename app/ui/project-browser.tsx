'use client';

import { useState } from 'react';
import { projectType } from '@/app/projects/project-data';
import { ProjectCardGrid, type ProjectCardProps } from '@/app/ui/cards';

type ProjectTypeLabel =
  (typeof projectType)[keyof typeof projectType]['label'];

const projectTypeOptions = Object.values(projectType);
const projectFilters: ('Featured' | ProjectTypeLabel)[] = [
  'Featured',
  ...projectTypeOptions.map(({ label }) => label),
];

export function ProjectBrowser({
  projects,
}: {
  projects: ProjectCardProps[];
}) {
  const [selectedType, setSelectedType] =
    useState<ProjectTypeLabel | 'Featured'>('Featured');
  const selectedProjectType = projectTypeOptions.find(
    ({ label }) => label === selectedType,
  );
  const visibleProjects =
    selectedType === 'Featured'
      ? projects.filter((project) => project.featured)
      : projects.filter(
          (project) => project.projectType.label === selectedType,
        );
  const description =
    selectedType === 'Featured'
      ? 'A selection of projects I’m especially proud of.'
      : selectedProjectType?.description;

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" aria-label="Project type">
        {projectFilters.map((label) => (
          <button
            key={label}
            type="button"
            aria-pressed={selectedType === label}
            onClick={() => setSelectedType(label)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent-border ${
              selectedType === label
                ? 'border-accent-border bg-accent/20 text-heading'
                : 'border-accent-border/30 bg-accent/5 text-accent-hover hover:border-accent-hover/60'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="mb-8 max-w-3xl text-sm leading-6 text-body/80" aria-live="polite">
        {description}
      </p>

      <ProjectCardGrid projects={visibleProjects} />
    </div>
  );
}
