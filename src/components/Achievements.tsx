import { Trophy } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function Achievements() {
  if (!profileData.achievements.length) return null;

  return (
    <section id="achievements" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition for delivery and impact"
          description="Awards earned for data engineering initiatives and modernization work."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {profileData.achievements.map((item) => (
            <article key={item.id} className="glass-card glass-card-hover p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-[rgba(56,189,248,0.08)] text-accent">
                  <Trophy className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold text-text">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
