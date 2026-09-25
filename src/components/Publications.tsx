import Image from "next/image";
import { BookOpen, ExternalLink, FileText } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function Publications() {
  if (!profileData.publications?.length) return null;

  return (
    <section id="publications" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Publications"
          title="Research published from academic work"
          description="Peer-reviewed publication from my final-year engineering project on air quality prediction with machine learning."
        />

        <div className="space-y-6">
          {profileData.publications.map((paper) => (
            <article
              key={paper.id}
              className="glass-card glass-card-hover overflow-hidden"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {paper.imageUrl ? (
                  <div className="relative min-h-[220px] border-b border-border lg:min-h-full lg:border-b-0 lg:border-r">
                    <Image
                      src={paper.imageUrl}
                      alt={`${paper.title} cover`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ) : null}

                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-[rgba(56,189,248,0.08)] text-accent">
                      <BookOpen className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                        Research Paper
                      </p>
                      <p className="text-xs text-text-subtle">
                        {paper.publishedOn}
                        {paper.paperId ? ` · ${paper.paperId}` : ""}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold leading-snug text-text sm:text-2xl">
                    {paper.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {paper.authors.join(", ")}
                  </p>

                  <p className="mt-2 text-sm text-accent">
                    {paper.venue}
                    {paper.volume ? ` · Vol. ${paper.volume}` : ""}
                    {paper.issue ? `, Issue ${paper.issue}` : ""}
                    {paper.pages ? ` · pp. ${paper.pages}` : ""}
                  </p>

                  <p className="mt-5 text-sm leading-relaxed text-text-muted">
                    {paper.abstract}
                  </p>

                  {paper.keywords?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {paper.keywords.map((keyword) => (
                        <span key={keyword} className="chip">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-2">
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden />
                      View Paper
                    </a>
                    {paper.pdfUrl ? (
                      <a
                        href={paper.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <FileText className="h-4 w-4" aria-hidden />
                        Open on IJCRT
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
