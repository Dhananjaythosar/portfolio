import { GraduationCap } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="Formal education that underpins the engineering craft."
        />

        <div className="flex flex-col gap-5">
          {profileData.education.map((item) => (
            <article key={item.id} className="glass-card p-5 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-[rgba(56,189,248,0.08)] text-accent sm:h-12 sm:w-12 sm:rounded-2xl">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold leading-snug text-text sm:text-xl">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-accent">
                        {item.institution}
                      </p>
                      <p className="mt-1 text-sm text-text-muted">
                        {item.location}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-xs tracking-wide text-text-subtle sm:pt-1 sm:text-right">
                      {item.startYear} — {item.endYear}
                    </p>
                  </div>

                  {item.details?.length ? (
                    <ul className="mt-4 space-y-1.5">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-sm leading-relaxed text-text-muted"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {item.skills?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span key={skill} className="chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
