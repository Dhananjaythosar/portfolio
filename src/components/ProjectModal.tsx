"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Project } from "@/types/profile";
import { GitHubIcon } from "@/components/icons/SocialIcons";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-[rgba(2,6,14,0.72)] p-3 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="glass-card max-h-[90vh] w-full max-w-3xl overflow-y-auto p-6 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {project.imageUrl ? (
          <div className="relative mb-6 h-44 w-full overflow-hidden rounded-2xl border border-border sm:h-56">
            <Image
              src={project.imageUrl}
              alt={`${project.name} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Project details
            </p>
            <h3
              id="project-modal-title"
              className="mt-2 font-display text-2xl font-semibold text-text"
            >
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-text-muted">{project.tagline}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-muted transition hover:text-text"
            aria-label="Close project details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <DetailBlock title="Overview" body={project.details.overview} />
        <DetailBlock title="Problem Statement" body={project.details.problem} />
        <DetailList title="Architecture" items={project.details.architecture} />
        <DetailList title="Data Flow" items={project.details.dataFlow} />
        <DetailList
          title="Implementation"
          items={project.details.implementation}
        />
        <DetailList title="Challenges" items={project.details.challenges} />
        <DetailList title="Solutions" items={project.details.solutions} />
        <DetailBlock title="Outcome" body={project.details.outcome} />

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <GitHubIcon className="h-4 w-4" />
              Open GitHub Repository
            </a>
          ) : null}
          {project.paperUrl ? (
            <a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Published Paper
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="mb-5">
      <h4 className="font-display text-sm font-semibold text-text">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{body}</p>
    </section>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mb-5">
      <h4 className="font-display text-sm font-semibold text-text">{title}</h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="relative pl-4 text-sm leading-relaxed text-text-muted before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
