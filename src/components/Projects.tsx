"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import type { Project } from "@/types/profile";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Data engineering, GenAI tooling, and earlier full-stack work"
          description="Selected repositories spanning data platforms, RAG assistants, and full-stack applications from my earlier product-building work."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {profileData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelected}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
