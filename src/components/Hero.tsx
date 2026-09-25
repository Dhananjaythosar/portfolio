"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Database,
  Cloud,
  GitBranch,
  Mail,
  Download,
} from "lucide-react";
import { profileData } from "@/data/profile";
import {
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
} from "@/components/icons/SocialIcons";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github") return <GitHubIcon className="h-5 w-5" />;
  if (icon === "linkedin") return <LinkedInIcon className="h-5 w-5" />;
  if (icon === "leetcode") return <LeetCodeIcon className="h-5 w-5" />;
  return <Mail className="h-5 w-5" aria-hidden />;
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 pipeline-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22),transparent_70%)] blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_70%)] blur-2xl"
        aria-hidden
      />

      <PipelineViz />

      <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-[rgba(15,23,42,0.7)] px-3 py-1.5 text-xs font-medium tracking-wide text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#38bdf8]" />
            Available for Data Engineering roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{profileData.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 font-display text-xl font-medium text-accent sm:text-2xl"
          >
            {profileData.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            {profileData.valueProposition}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowDownRight className="h-4 w-4" aria-hidden />
            </a>
            <a href={profileData.resumePath} download className="btn-secondary">
              <Download className="h-4 w-4" aria-hidden />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center gap-3"
          >
            {profileData.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "email" ? undefined : "_blank"}
                rel={social.icon === "email" ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-[rgba(15,23,42,0.7)] text-text-muted transition hover:border-border-strong hover:text-accent"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="glass-card relative overflow-hidden p-6 sm:p-8"
        >
          {profileData.photoUrl ? (
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-border-strong shadow-[0_0_28px_rgba(56,189,248,0.22)] sm:h-28 sm:w-28">
                <Image
                  src={profileData.photoUrl}
                  alt={`${profileData.name} — professional portrait`}
                  fill
                  priority
                  sizes="112px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-text">
                  {profileData.name}
                </p>
                <p className="mt-1 text-sm text-accent">{profileData.role}</p>
                <p className="mt-2 text-xs text-text-subtle">
                  {profileData.location}
                </p>
              </div>
            </div>
          ) : null}

          <div className="mb-5 flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-subtle">
              data platform
            </p>
            <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-accent">
              live systems
            </span>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Cloud,
                label: "Ingest",
                detail: "S3 · Lambda · Step Functions",
              },
              {
                icon: GitBranch,
                label: "Transform",
                detail: "PySpark · Glue · EMR",
              },
              {
                icon: Database,
                label: "Serve",
                detail: "Redshift · Athena · Power BI",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className="relative flex items-center gap-4 rounded-2xl border border-border bg-[rgba(7,11,20,0.55)] p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-[rgba(56,189,248,0.08)] text-accent">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-text">
                    {item.label}
                  </p>
                  <p className="text-xs text-text-muted">{item.detail}</p>
                </div>
                {index < 2 && (
                  <span
                    className="absolute -bottom-4 left-8 h-4 w-px bg-gradient-to-b from-accent/60 to-transparent"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-text-muted">
            Focused on reliable pipelines, dimensional modelling, and cloud data
            platforms that scale with the business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PipelineViz() {
  return (
    <svg
      className="pointer-events-none absolute right-[-8%] top-[18%] hidden h-[420px] w-[520px] opacity-40 lg:block"
      viewBox="0 0 520 420"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="70" cy="80" r="8" fill="#38bdf8" fillOpacity="0.8" />
      <circle cx="180" cy="150" r="8" fill="#22d3ee" fillOpacity="0.8" />
      <circle cx="290" cy="90" r="8" fill="#38bdf8" fillOpacity="0.8" />
      <circle cx="390" cy="180" r="8" fill="#22d3ee" fillOpacity="0.8" />
      <circle cx="470" cy="110" r="8" fill="#38bdf8" fillOpacity="0.8" />
      <circle cx="250" cy="260" r="8" fill="#38bdf8" fillOpacity="0.8" />
      <circle cx="360" cy="320" r="8" fill="#22d3ee" fillOpacity="0.8" />
      <path
        d="M70 80 C120 90, 140 140, 180 150 C230 165, 250 100, 290 90 C340 75, 350 160, 390 180 C430 200, 450 120, 470 110"
        stroke="url(#line)"
        strokeWidth="1.5"
      />
      <path
        d="M180 150 C210 210, 230 240, 250 260 C290 300, 330 300, 360 320"
        stroke="url(#line)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
