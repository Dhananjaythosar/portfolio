import { ArrowUp, Mail } from "lucide-react";
import { profileData } from "@/data/profile";
import {
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
} from "@/components/icons/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-text">
            Designed & Built by {profileData.name}
          </p>
          <p className="mt-1 text-sm text-text-muted">{profileData.role}</p>
          <p className="mt-3 text-xs text-text-subtle">
            © {year} {profileData.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {profileData.socials.map((social) => {
            const Icon =
              social.icon === "github"
                ? GitHubIcon
                : social.icon === "linkedin"
                  ? LinkedInIcon
                  : social.icon === "leetcode"
                    ? LeetCodeIcon
                    : Mail;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "email" ? undefined : "_blank"}
                rel={
                  social.icon === "email" ? undefined : "noopener noreferrer"
                }
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-muted transition hover:border-border-strong hover:text-accent"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            );
          })}
          <a href="#home" className="btn-secondary">
            <ArrowUp className="h-4 w-4" aria-hidden />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
