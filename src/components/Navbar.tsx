"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = profileData.navigation.map((item) =>
        item.href.replace("#", ""),
      );
      let current = "#home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = `#${id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-[rgba(7,11,20,0.88)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav
        className="section-shell flex h-16 items-center justify-between lg:h-[4.25rem]"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-strong bg-[rgba(56,189,248,0.08)] font-display text-sm font-bold tracking-wide text-accent">
            {profileData.brand}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-text sm:block">
            {profileData.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {profileData.navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition",
                  active === item.href
                    ? "bg-[rgba(56,189,248,0.12)] text-accent"
                    : "text-text-muted hover:text-text",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profileData.resumePath}
            download
            className="btn-primary hidden whitespace-nowrap sm:inline-flex"
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden />
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border bg-[rgba(7,11,20,0.96)] backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {profileData.navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium",
                  active === item.href
                    ? "bg-[rgba(56,189,248,0.12)] text-accent"
                    : "text-text-muted",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={profileData.resumePath}
              download
              className="btn-primary w-full whitespace-nowrap"
              onClick={() => setOpen(false)}
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
