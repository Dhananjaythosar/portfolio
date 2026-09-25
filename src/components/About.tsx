import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { telHref } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  const { quickInfo } = profileData;

  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Building reliable data systems that teams can trust"
          description="A concise look at who I am, how I work, and the problems I like solving in data engineering."
        />

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="glass-card space-y-5 p-6 sm:p-8">
            {profileData.about.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-text-muted"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Data Pipelines",
                "ETL / ELT",
                "SQL",
                "Python",
                "Cloud",
                "Analytics",
                "Automation",
                "Full Stack",
                "Databases",
              ].map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="glass-card p-6 sm:p-8" aria-label="Quick info">
            {profileData.photoUrl ? (
              <div className="mb-6 flex justify-center">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border border-border-strong shadow-[0_0_32px_rgba(56,189,248,0.2)]">
                  <Image
                    src={profileData.photoUrl}
                    alt={`${profileData.name} — professional portrait`}
                    fill
                    sizes="144px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ) : null}
            <h3 className="font-display text-lg font-semibold text-text">
              Quick Info
            </h3>
            <ul className="mt-6 space-y-4">
              <InfoRow icon={UserRound} label="Name" value={quickInfo.name} />
              <InfoRow
                icon={BriefcaseBusiness}
                label="Role"
                value={quickInfo.role}
              />
              <InfoRow
                icon={MapPin}
                label="Location"
                value={quickInfo.location}
              />
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-subtle">
                    Email
                  </p>
                  <a
                    href={`mailto:${quickInfo.email}`}
                    className="text-sm text-text transition hover:text-accent"
                  >
                    {quickInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent">
                  <Phone className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-text-subtle">
                    Phone
                  </p>
                  <a
                    href={telHref(quickInfo.phone)}
                    className="text-sm text-text transition hover:text-accent"
                  >
                    {quickInfo.phone}
                  </a>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof UserRound;
  label: string;
  value: string;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 text-accent">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-text-subtle">
          {label}
        </p>
        <p className="text-sm text-text">{value}</p>
      </div>
    </li>
  );
}
