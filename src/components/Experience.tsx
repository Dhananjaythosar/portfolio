import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Roles where I have delivered production data systems"
          description="A timeline of impact across enterprise data platforms, modernization programmes, and earlier engineering work."
        />

        <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
          {profileData.experience.map((role) => (
            <li key={role.id} className="relative">
              <span
                className="absolute -left-[1.91rem] top-2 flex h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg shadow-[0_0_16px_rgba(56,189,248,0.55)] sm:-left-[2.41rem]"
                aria-hidden
              />
              <article className="glass-card glass-card-hover p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-text">
                      {role.role}
                    </h3>
                    <p className="mt-1 text-sm text-accent">
                      {role.company}
                      <span className="text-text-subtle"> · {role.location}</span>
                    </p>
                  </div>
                  <p className="font-mono text-xs tracking-wide text-text-subtle">
                    {role.startDate} — {role.endDate}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  {role.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {role.highlights.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 text-sm leading-relaxed text-text-muted before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {role.achievements?.length ? (
                  <div className="mt-5 rounded-2xl border border-border bg-[rgba(56,189,248,0.05)] p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">
                      Recognition
                    </p>
                    <ul className="space-y-1.5">
                      {role.achievements.map((item) => (
                        <li key={item} className="text-sm text-text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
