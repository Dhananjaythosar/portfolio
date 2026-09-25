"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types/profile";
import { GitHubIcon } from "@/components/icons/SocialIcons";

type ProjectCardProps = {
  project: Project;
  onOpenDetails: (project: Project) => void;
};

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <article className="glass-card glass-card-hover flex h-full flex-col overflow-hidden">
      {project.imageUrl ? (
        <div className="relative h-44 w-full overflow-hidden border-b border-border bg-[rgba(7,11,20,0.8)] sm:h-48">
          <Image
            src={project.imageUrl}
            alt={`${project.name} cover`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center"
            unoptimized
            priority={project.id === "schemamind"}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(7,11,20,0.45)] to-transparent" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {project.paperUrl
              ? "Final Year · Published"
              : project.featured === false
                ? "Full Stack Project"
                : "Featured Project"}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-text">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-text-subtle">{project.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-subtle">
            Problem solved
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
            {project.problemSolved}
          </p>
        </div>

        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="relative pl-4 text-sm text-text-muted before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70"
            >
              {feature}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-xs leading-relaxed text-text-subtle">
          <span className="font-semibold text-text-muted">Tech: </span>
          {project.technologies.join(" · ")}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHubIcon className="h-4 w-4" />
              View GitHub
            </a>
          ) : null}
          {project.paperUrl ? (
            <a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              View Paper
            </a>
          ) : null}
          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Live Demo
            </a>
          ) : null}
          <button
            type="button"
            className="btn-ghost"
            onClick={() => onOpenDetails(project)}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
