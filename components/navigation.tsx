"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  variant?: "transparent" | "solid";
}

export default function Navigation({ variant = "solid" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navClasses = variant === "transparent" 
    ? "absolute left-0 right-0 top-0 z-50" 
    : "relative";

  const linkClasses = variant === "transparent"
    ? "text-white transition-all duration-200 hover:scale-105 hover:transform hover:text-white/80"
    : "text-charcoal transition-colors hover:text-stone-600";

  const logoClasses = variant === "transparent"
    ? "font-display text-2xl font-light tracking-[0.3em] text-white transition-colors duration-200 hover:text-white/80 xl:text-3xl"
    : "text-charcoal font-display text-2xl font-light tracking-[0.3em] xl:text-3xl";

  const mobileTitleClasses = variant === "transparent"
    ? "font-display text-lg font-light tracking-[0.2em] text-white"
    : "text-charcoal font-display text-lg font-light tracking-[0.2em]";

  const mobileButtonClasses = variant === "transparent"
    ? "mobile-menu-button p-2 text-white transition-colors duration-200 hover:text-white/80 lg:hidden"
    : "mobile-menu-button p-2 text-charcoal transition-colors duration-200 hover:text-stone-600 lg:hidden";

  return (
    <>
      <nav className={`${navClasses} px-4 py-4 transition-all duration-300 md:px-8 md:py-8`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            <Link
              href="/"
              className="flex-shrink-0 transform transition-transform duration-200 hover:scale-105"
            >
              <Image
                src="/images/prosper-white-logo.png"
                alt="Prosper Plantscapes Logo"
                width={56}
                height={56}
                className="rounded-2xl object-contain opacity-80 transition-opacity duration-200 hover:opacity-100"
              />
            </Link>
            <div className="flex space-x-8 text-sm uppercase tracking-widest">
              <Link href="/services" className={linkClasses}>
                Services
              </Link>
              <Link href="/about" className={linkClasses}>
                About
              </Link>
            </div>
          </div>

          {/* Mobile Logo */}
          <div className="lg:hidden">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/prosper-white-logo.png"
                alt="Prosper Plantscapes Logo"
                width={40}
                height={40}
                className="rounded-xl object-contain opacity-80"
              />
            </Link>
          </div>

          {/* Desktop Center Logo */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 transform lg:block">
            <Link href="/" className={logoClasses}>
              PROSPER PLANTSCAPES
            </Link>
          </div>

          {/* Mobile Center Title */}
          <div className="absolute left-1/2 -translate-x-1/2 transform lg:hidden">
            <Link href="/" className={mobileTitleClasses}>
              PROSPER PLANTSCAPES
            </Link>
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden space-x-8 text-sm uppercase tracking-widest lg:flex">
            <Link href="/contact" className={linkClasses}>
              Contact
            </Link>
            <Link
              href="https://instagram.com/prosperplantscapes"
              className={linkClasses}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={mobileButtonClasses}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`bg-charcoal mobile-menu fixed right-0 top-0 z-50 h-full w-80 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/prosper-white-logo.png"
                alt="Prosper Plantscapes Logo"
                width={32}
                height={32}
                className="rounded-lg object-contain"
              />
              <span className="font-display text-sm font-light tracking-wider text-white">
                PROSPER PLANTSCAPES
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 text-white transition-colors duration-200 hover:text-white/80"
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-6">
            <Link
              href="/"
              className="block text-lg font-light uppercase tracking-wider text-white transition-colors duration-200 hover:text-white/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-lg font-light uppercase tracking-wider text-white transition-colors duration-200 hover:text-white/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-lg font-light uppercase tracking-wider text-white transition-colors duration-200 hover:text-white/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-lg font-light uppercase tracking-wider text-white transition-colors duration-200 hover:text-white/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="https://instagram.com/prosperplantscapes"
              className="block text-lg font-light uppercase tracking-wider text-white transition-colors duration-200 hover:text-white/80"
              onClick={() => setIsMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}