"use client";

import { useEffect, useState } from "react";
import { Download, Eye, ExternalLink, FileText, X } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function Resume() {
  const [open, setOpen] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="resume" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Resume"
          title="Want the complete overview of my experience and technical background?"
          description="Download the latest PDF or preview it directly in the browser."
        />

        <div className="glass-card overflow-hidden">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-strong bg-[rgba(56,189,248,0.08)] text-accent">
                  <FileText className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-text">
                    {profileData.name}
                  </h3>
                  <p className="text-sm text-text-muted">{profileData.role}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-text-muted">
                A polished snapshot of production data engineering work across
                AWS pipelines, PySpark transformations, dimensional modelling,
                and operational automation — plus certifications and selected
                projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profileData.resumePath}
                  download
                  className="btn-primary"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download Resume
                </a>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setOpen(true)}
                >
                  <Eye className="h-4 w-4" aria-hidden />
                  View Resume
                </button>
                <a
                  href={profileData.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  Open PDF
                </a>
              </div>
            </div>

            <div className="relative bg-[linear-gradient(180deg,rgba(15,23,42,0.4),rgba(7,11,20,0.85))] p-4 sm:p-6">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group relative mx-auto block w-full max-w-md overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition hover:border-border-strong"
                aria-label="Open full resume preview"
              >
                {!previewFailed ? (
                  <iframe
                    title="Resume preview"
                    src={`${profileData.resumePath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="pointer-events-none h-[420px] w-full bg-white sm:h-[480px]"
                    onError={() => setPreviewFailed(true)}
                  />
                ) : (
                  <div className="flex h-[420px] flex-col items-center justify-center gap-3 bg-slate-50 px-6 text-center sm:h-[480px]">
                    <FileText className="h-10 w-10 text-sky-500" aria-hidden />
                    <p className="text-sm font-medium text-slate-700">
                      Preview unavailable in this browser
                    </p>
                    <p className="text-xs text-slate-500">
                      Click to open the full PDF viewer
                    </p>
                  </div>
                )}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 to-transparent px-4 py-3 text-center text-xs font-medium text-white opacity-90 transition group-hover:opacity-100">
                  Click to enlarge
                </span>
              </button>
              <p className="mt-4 text-center text-xs text-text-subtle">
                Live PDF preview · click to enlarge or download
              </p>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(2,6,14,0.78)] p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Resume viewer"
          onClick={() => setOpen(false)}
        >
          <div
            className="glass-card flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
              <div>
                <p className="font-display text-sm font-semibold text-text">
                  {profileData.name} — Resume
                </p>
                <p className="text-xs text-text-subtle">{profileData.role}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.resumePath}
                  download
                  className="btn-secondary"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download
                </a>
                <a
                  href={profileData.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  Open
                </a>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-muted"
                  aria-label="Close resume viewer"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <iframe
              title="Dhananjay Thosar resume PDF"
              src={`${profileData.resumePath}#view=FitH`}
              className="h-full w-full bg-white"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
