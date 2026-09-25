import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  children,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-text-muted">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
