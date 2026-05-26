"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MagneticLink } from "@/components/motion/magnetic-link";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
];

const INSTAGRAM_URL = "https://instagram.com/prosperplantscapes";

interface SiteNavProps {
  variant?: "transparent" | "solid";
}

export function SiteNav({ variant = "transparent" }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const onBone = variant === "solid" || scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
          onBone
            ? "bg-bone/85 backdrop-blur-md border-b border-ink/10"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
          <Link
            href="/"
            className={`font-display text-[1.6rem] leading-none italic tracking-tight transition-colors ${
              onBone ? "text-ink" : "text-bone"
            }`}
            data-cursor="hover"
          >
            Prosper
            <span
              className={`ml-1 align-super text-[0.45em] not-italic font-mono tracking-[0.2em] uppercase ${
                onBone ? "text-clay" : "text-clay"
              }`}
            >
              ✦
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[0.72rem] uppercase tracking-[0.28em] relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-clay after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 ${
                  onBone ? "text-ink" : "text-bone"
                }`}
                data-cursor="hover"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono text-[0.7rem] uppercase tracking-[0.24em] transition-opacity hover:opacity-60 ${
                onBone ? "text-ink-soft" : "text-bone/80"
              }`}
              data-cursor="hover"
            >
              Instagram <span aria-hidden>↗</span>
            </Link>
            <MagneticLink
              href="/contact"
              className={`inline-flex items-center gap-3 rounded-full border px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.24em] transition-colors ${
                onBone
                  ? "border-ink/30 text-ink hover:bg-ink hover:text-bone"
                  : "border-bone/40 text-bone hover:bg-bone hover:text-ink"
              }`}
            >
              Inquire
              <span aria-hidden>→</span>
            </MagneticLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`group flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden ${
              onBone ? "text-ink" : "text-bone"
            }`}
          >
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduced ? { opacity: 0 } : { y: "-100%" }}
            animate={reduced ? { opacity: 1 } : { y: 0 }}
            exit={reduced ? { opacity: 0 } : { y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-bone px-6 pb-12 pt-28"
          >
            <nav className="flex flex-1 flex-col justify-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-5xl leading-none text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block font-display text-3xl italic text-ink-soft"
                >
                  Instagram <span aria-hidden>↗</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-clay px-6 py-3 font-mono text-xs uppercase tracking-[0.24em] text-bone"
                >
                  Inquire <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </nav>

            <div className="flex items-end justify-between font-mono text-[0.7rem] uppercase tracking-[0.24em] text-ink-soft">
              <span>Austin · TX</span>
              <span>info@prosperplantscapes.com</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
