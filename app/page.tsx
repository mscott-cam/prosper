"use client";

import { useEffect, useState } from "react";
import MobileSidebar from "@/components/mobile-sidebar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import InstagramFeed from "@/components/instagram-feed";

const services = [
  {
    title: "Consultation",
    subtitle: "Personalized space assessment",
    description: "Curated plant collections for modern workspaces",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    title: "Design",
    subtitle: "Curated plant selection",
    description: "Bespoke plant arrangements for discerning homes",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    title: "Maintenance",
    subtitle: "Ongoing plant care",
    description: "Expert care for lasting botanical beauty",
    image: "/placeholder.svg?height=600&width=400",
  },
];

const clientLogos = [
  "TACODELI",
  "RIVERSIDE RESOURCES",
  "EMMER & RYE GROUP",
  "COLORS OF AUSTIN COUNSELING",
  "MICHAEL HSU ARCHITECTURE",
  "COVERT AUTO GROUP",
  "INDEED",
];

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [heroHeight, setHeroHeight] = useState<string>("100vh");

  useEffect(() => {
    // Set initial viewport height on mount
    setHeroHeight(`${window.innerHeight}px`);
  }, []);

  useEffect(() => {
    // Simple parallax effect for hero only
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax-bg");

      parallaxElements.forEach((element) => {
        const speed = 0.3;
        (element as HTMLElement).style.transform =
          `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     if (
  //       isMobileMenuOpen &&
  //       !target.closest(".mobile-menu") &&
  //       !target.closest(".mobile-menu-button")
  //     ) {
  //       setIsMobileMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  // useEffect(() => {
  //   if (isMobileMenuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [isMobileMenuOpen]);

  return (
    <div className="bg-cream min-h-screen">
      <nav className="absolute left-0 right-0 top-0 z-50 px-4 py-4 transition-all duration-300 md:px-8 md:py-8">
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
                className="opacity-80hover:opacity-100 object-contain"
              />
            </Link>
            <div className="flex space-x-8 text-sm uppercase tracking-widest">
              <Link
                href="/services"
                className="text-white transition-all duration-200 hover:scale-105 hover:transform hover:text-white/80"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-white transition-all duration-200 hover:scale-105 hover:transform hover:text-white/80"
              >
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
                width={56}
                height={56}
                className="rounded-xl object-contain opacity-80"
              />
            </Link>
          </div>

          {/* Desktop Center Logo */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 transform lg:block">
            <Link
              href="/"
              className="font-display text-2xl font-light tracking-[0.3em] text-white transition-colors duration-200 hover:text-white/80 xl:text-3xl"
            >
              PROSPER PLANTSCAPES
            </Link>
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden space-x-8 text-sm uppercase tracking-widest lg:flex">
            <Link
              href="/contact"
              className="text-white transition-all duration-200 hover:scale-105 hover:transform hover:text-white/80"
            >
              Contact
            </Link>
            <Link
              href="https://instagram.com/prosperplantscapes"
              className="text-white transition-all duration-200 hover:scale-105 hover:transform hover:text-white/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button p-2 text-white transition-colors duration-200 hover:text-white/80 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {!isMobileMenuOpen ? <Menu size={32} /> : null}
          </button>
        </div>
      </nav>

      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ height: heroHeight }}
      >
        <div className="parallax-bg absolute inset-0">
          <Image
            src="/images/prosper-main-large.jpg"
            alt="Botanical workspace design background"
            fill
            className="h-full w-full max-w-full object-cover"
            priority
          />
        </div>
        <div className="slide-up absolute bottom-8 left-4 z-10 md:bottom-16 md:left-8">
          {/* Mobile Title - visible only on mobile */}
          <h2 className="font-display mb-6 text-5xl font-light tracking-[0.3em] text-white drop-shadow-lg lg:hidden">
            PROSPER PLANTSCAPES
          </h2>
          <h1 className="font-heading mb-4 text-3xl font-thin leading-tight tracking-wide text-white drop-shadow-lg md:text-4xl lg:text-5xl">
            Boutique Plant Design Studio
          </h1>
          <p className="text-base font-light tracking-wide text-white/90 drop-shadow-lg md:text-lg">
            Austin, TX
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
            <div className="order-2 space-y-6 md:order-1">
              <p className="group transform text-base leading-relaxed text-stone-600 transition-all duration-500 hover:text-stone-700 md:text-lg">
                <span className="text-charcoal mb-4 block text-2xl font-bold md:text-3xl lg:text-4xl">
                  At Prosper Plantscapes,
                </span>
                we are more than just a plant company. We're a brand where
                design, sustainability and functionality all work together to
                enrich your workplace and lifestyle.
                <br />
                <br />
                We have a passion for plants and people, and creating a vibe
                using greenery and contemporary containers that matches your
                style.
              </p>
              <p className="transform text-base leading-relaxed text-stone-600 transition-all duration-500 hover:text-stone-700 md:text-lg">
                It's about being open to a more conscientious way of life,
                choosing plants and products made with care and attention to
                detail, one which will stand the test of time and contribute
                towards a greener, more harmonious world.
              </p>
            </div>
            <div className="group relative order-1 h-[400px] overflow-hidden rounded-2xl md:order-2 md:h-[600px]">
              <Image
                src="/images/interior-plant-design.jpg"
                alt="Modern interior featuring a large fiddle leaf fig plant in white ceramic planter with warm wood paneling and ambient lighting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-cream px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-center text-xs uppercase tracking-widest text-stone-500 md:mb-12 md:text-sm">
            Trusted by
          </p>
          <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className={`text-charcoal flex transform items-center justify-center py-2 text-sm font-medium tracking-wider transition-all duration-300 hover:scale-110 hover:text-stone-600 md:text-base ${
                  index === 6 ? "lg:col-start-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white px-4 py-8 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
            <div className="group relative order-1 overflow-hidden rounded-2xl md:h-[600px]">
              <Image
                src="/images/bluecorner.jpeg"
                alt="Modern turquoise interior corner featuring tall snake plant in black planter, black cane chair with rattan details, wooden desk with brass lamp and decorative vase"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 space-y-6 md:space-y-8">
              <h2 className="text-charcoal font-heading text-2xl font-light leading-tight transition-colors duration-300 hover:text-stone-600 md:text-3xl">
                Let us recreate your space.
              </h2>
              <p className="text-base leading-relaxed text-stone-600 transition-colors duration-300 hover:text-stone-700 md:text-lg">
                Our expertise and services are catered to your project. We make
                sure your space is equipped with everything you need.
              </p>
              <ul className="space-y-3 md:space-y-4">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="transform transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h6 className="text-charcoal font-heading text-base font-medium md:text-lg">
                      {service.title}
                    </h6>
                    <span className="mt-1 block text-sm text-stone-400">
                      {service.subtitle}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal group w-full bg-transparent px-6 py-3 text-xs uppercase tracking-wider hover:text-white md:w-auto md:px-8 md:text-sm"
              >
                <Link
                  href="/services"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Service Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-charcoal px-4 py-16 md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-12 md:gap-20 lg:grid-cols-2">
            {/* Left Column - Title and Subtitle */}
            <div className="lg:sticky lg:top-32">
              <h2 className="font-heading mb-6 text-2xl font-light text-white transition-colors duration-300 hover:text-gray-200 md:mb-8 md:text-3xl">
                Our Process
              </h2>
              <p className="mb-6 text-base leading-relaxed text-gray-300 transition-colors duration-300 hover:text-gray-200 md:mb-8 md:text-lg">
                A thoughtful approach to creating spaces where plants and design
                exist in perfect balance.
              </p>
              <Button
                variant="outline"
                className="hover:text-charcoal w-full border-white bg-transparent px-6 py-3 text-xs uppercase tracking-wider text-white hover:bg-white md:w-auto md:px-8 md:text-sm"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Right Column - Steps with connecting line */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gray-600 md:block"></div>

              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    number: "01",
                    title: "CONSULTATION & PROPOSAL",
                    description:
                      "We meet on site to create a proposal for your plant needs and choose the right plants for the right places to set everyone up for success.",
                  },
                  {
                    number: "02",
                    title: "DEPOSIT & INSTALL",
                    description:
                      "A 50% deposit is needed to order containers and get on our install calendar. We schedule the install once containers are in our hands - there is typically a 2-6 week time frame for installation.\n\nPlants are always subject to availability, and we source the best products from our local suppliers.",
                  },
                  {
                    number: "03",
                    title: "MAINTENANCE",
                    description:
                      "We keep plants looking their very best with maintenance options that work for you!",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="relative flex transform items-start space-x-4 transition-all duration-500 hover:translate-x-2 md:space-x-6"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Step number circle */}
                    <div className="bg-charcoal relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-600 transition-colors duration-300 hover:border-gray-400 md:h-12 md:w-12">
                      <span className="text-xs font-light text-white md:text-sm">
                        {step.number}
                      </span>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pt-2">
                      <h3 className="font-heading mb-3 text-xs font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:text-gray-200 md:mb-4 md:text-sm">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300 transition-colors duration-300 hover:text-gray-200">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-charcoal font-heading mb-8 text-center text-2xl font-light leading-tight md:mb-12 md:text-3xl">
            Our Work
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {[
              {
                src: "/images/gallery1.jpeg",
                alt: "Outdoor succulent and cactus arrangement in weathered stone planters",
              },
              {
                src: "/images/gallery4.jpeg",
                alt: "Elegant interior plant arrangement with snake plants and fiddle leaf figs",
              },
              {
                src: "/images/gallery5.jpeg",
                alt: "Statement plant installation in geometric brass planter for commercial lobby",
              },
              {
                src: "/images/gallery3.jpeg",
                alt: "Office balcony with sleek black planters containing agave and rosemary",
              },
              {
                src: "/images/gallery7.jpeg",
                alt: "Hanging plants in white ceramic planters with rope suspension",
              },
              {
                src: "/images/gallery8.jpeg",
                alt: "Minimalist plant arrangement in cream ceramic planters",
              },
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
                </div>
              </div>
            ))}
          </div>
          {/* Instagram feed ready for future use - uncomment line below and remove gallery above when ready */}
          {/* <InstagramFeed /> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage border-t border-stone-200 px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3 md:gap-16">
            <div>
              <div className="mb-6 flex items-center space-x-4">
                <Image
                  src="/images/prosper-white-logo.png"
                  alt="Prosper Plantscapes Logo"
                  width={48}
                  height={48}
                  className="transform rounded-2xl object-contain transition-transform duration-200 hover:scale-110"
                />
                <div className="text-charcoal font-display text-lg font-light tracking-[0.2em] transition-colors duration-200 hover:text-stone-600 md:text-xl">
                  PROSPER PLANTSCAPES
                </div>
              </div>
              <p className="text-sm leading-relaxed text-stone-600 transition-colors duration-200 hover:text-stone-700">
                Professional botanical curation for Austin's most important
                spaces.
              </p>
            </div>

            <div>
              <h4 className="text-charcoal font-heading mb-6 text-xs font-medium uppercase tracking-widest md:text-sm">
                Navigation
              </h4>
              <div className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/contact", label: "Contact" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="hover:text-charcoal block text-sm text-stone-600 transition-all duration-200 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-charcoal font-heading mb-6 text-xs font-medium uppercase tracking-widest md:text-sm">
                Connect
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-stone-600">
                  <p className="mb-1">(512) 555-0123</p>
                  <p className="mb-3">hello@prosperplantscapes.com</p>
                </div>
                <Link
                  href="https://instagram.com/prosperplantscapes"
                  className="hover:text-charcoal block text-sm text-stone-600 transition-all duration-200 hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-stone-200 pt-8 text-center md:mt-16">
            <p className="text-xs uppercase tracking-wider text-stone-500 transition-colors duration-200 hover:text-stone-600">
              © 2024 Prosper Plantscapes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
