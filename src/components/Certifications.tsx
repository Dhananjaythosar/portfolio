import Image from "next/image";
import { Award, ExternalLink, FileBadge2 } from "lucide-react";
import type { Certification } from "@/types/profile";
import { profileData } from "@/data/profile";
import { isPlaceholder } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that back the craft"
          description="AWS, Databricks, HackerRank, and Udemy credentials with public verification and certificate links."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {profileData.certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const hasCertificate =
    Boolean(certification.certificateUrl) &&
    !isPlaceholder(certification.certificateUrl);
  const hasVerify =
    Boolean(certification.verifyUrl) && !isPlaceholder(certification.verifyUrl);

  return (
    <article className="glass-card glass-card-hover flex h-full flex-col overflow-hidden">
      {certification.imageUrl ? (
        <div className="relative h-36 w-full border-b border-border bg-[rgba(7,11,20,0.8)]">
          <Image
            src={certification.imageUrl}
            alt={`${certification.name} cover`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-[rgba(56,189,248,0.08)] text-accent">
            <Award className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold leading-snug text-text">
              {certification.name}
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              {certification.issuer}
            </p>
          </div>
        </div>

        {certification.issueDate ? (
          <p className="text-xs text-text-subtle">
            Issued {certification.issueDate}
          </p>
        ) : null}

        {certification.credentialId &&
        !isPlaceholder(certification.credentialId) ? (
          <p className="mt-1 font-mono text-xs text-text-subtle">
            ID: {certification.credentialId}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {certification.skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {hasCertificate ? (
            <a
              href={certification.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FileBadge2 className="h-4 w-4" aria-hidden />
              View Certificate
            </a>
          ) : null}
          {hasVerify ? (
            <a
              href={certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Verify Credential
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
