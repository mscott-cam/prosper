"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`bg-charcoal mobile-menu fixed right-0 top-0 p-6 z-50 w-80 transform transition-transform duration-300 ease-in-out lg:hidden flex-row ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <nav className="space-y-6">
            <Link
              href="/"
              className="block text-lg font-light uppercase tracking-wider text-white transition-colors duration-200 hover:text-white/80"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-lg font-light uppercase tracking-wider text-white transition-colors duration-200 hover:text-white/80"
              onClick={onClose}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-lg font-light uppercase tracking-wider text-white transition-colors duration-200 hover:text-white/80"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-lg font-light uppercase tracking-wider text-white transition-colors duration-200 hover:text-white/80"
              onClick={onClose}
            >
              Contact
            </Link>
            <Link
              href="https://instagram.com/prosperplantscapes"
              className="block text-lg font-light uppercase tracking-wider text-white transition-colors duration-200 hover:text-white/80"
              onClick={onClose}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </nav>
          <button
            onClick={onClose}
            className="h-auto self-start p-1 text-white transition-colors duration-200 hover:text-white/80"
            aria-label="Close mobile menu"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
