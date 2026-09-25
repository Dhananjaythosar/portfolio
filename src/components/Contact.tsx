"use client";

import { useState, type ComponentType, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { profileData } from "@/data/profile";
import { telHref } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<string | null>(null);

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Subject is required.";
    if (!values.message.trim()) next.message = "Message is required.";
    else if (values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus(null);
      return;
    }

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ].join("\n");

    const mailto = `mailto:${profileData.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus(
      "Opening your email client to send the message. No server-side delivery is configured yet — this uses a secure mailto fallback.",
    );
    window.location.href = mailto;
  }

  const linkedin = profileData.socials.find((s) => s.icon === "linkedin");
  const github = profileData.socials.find((s) => s.icon === "github");

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Let's Build Something With Data"
          description="Recruiters, engineering managers, collaborators, and fellow builders — I'd love to hear from you about data platforms, pipelines, or interesting problems to solve."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card space-y-5 p-6 sm:p-8">
            <ContactLine
              icon={Mail}
              label="Email"
              value={profileData.email}
              href={`mailto:${profileData.email}`}
            />
            <ContactLine
              icon={Phone}
              label="Phone"
              value={profileData.phone}
              href={telHref(profileData.phone)}
            />
            <ContactLine
              icon={MapPin}
              label="Location"
              value={profileData.location}
            />
            {linkedin ? (
              <ContactLine
                icon={LinkedInIcon}
                label="LinkedIn"
                value="linkedin.com/in/dhananjay-thosar-38b5641b9"
                href={linkedin.href}
                external
              />
            ) : null}
            {github ? (
              <ContactLine
                icon={GitHubIcon}
                label="GitHub"
                value="github.com/Dhananjaythosar"
                href={github.href}
                external
              />
            ) : null}
          </div>

          <form
            className="glass-card space-y-4 p-6 sm:p-8"
            onSubmit={onSubmit}
            noValidate
          >
            <Field
              id="name"
              label="Name"
              value={form.name}
              error={errors.name}
              onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, email: value }))
              }
            />
            <Field
              id="subject"
              label="Subject"
              value={form.subject}
              error={errors.subject}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, subject: value }))
              }
            />
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-text"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, message: event.target.value }))
                }
                className="w-full rounded-xl border border-border bg-[rgba(7,11,20,0.65)] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-subtle focus:border-border-strong"
                placeholder="Tell me about the role, collaboration, or problem..."
              />
              {errors.message ? (
                <p className="mt-1.5 text-xs text-[color:var(--danger)]">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button type="submit" className="btn-primary">
              <Send className="h-4 w-4" aria-hidden />
              Send Message
            </button>

            {status ? (
              <p className="text-sm leading-relaxed text-text-muted" role="status">
                {status}
              </p>
            ) : (
              <p className="text-xs leading-relaxed text-text-subtle">
                Form validation runs locally. Messages open in your email client
                via mailto until a backend or form service is connected.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-text">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-border bg-[rgba(7,11,20,0.65)] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-subtle focus:border-border-strong"
      />
      {error ? (
        <p className="mt-1.5 text-xs text-[color:var(--danger)]">{error}</p>
      ) : null}
    </div>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-sm text-text transition hover:text-accent"
    >
      {value}
    </a>
  ) : (
    <p className="text-sm text-text">{value}</p>
  );

  return (
    <div className="flex gap-3">
      <span className="mt-0.5 text-accent">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-text-subtle">
          {label}
        </p>
        {content}
      </div>
    </div>
  );
}
