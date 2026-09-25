import {
  Code2,
  Cloud,
  Database,
  GitBranch,
  Layers3,
  Sparkles,
  BarChart3,
  Wrench,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

const categoryIcons = [
  Code2,
  Layers3,
  Database,
  Cloud,
  BarChart3,
  Wrench,
  Sparkles,
  GitBranch,
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools and capabilities I use to ship data platforms"
          description="Organized by category — what I actually work with, without fabricated proficiency bars."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {profileData.skills.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <div key={category.title} className="glass-card p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-[rgba(56,189,248,0.08)] text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-text">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="chip">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
