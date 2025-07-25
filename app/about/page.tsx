import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const founders = [
    {
      name: "Sarah Martinez",
      title: "Co-Founder & Botanical Curator",
      bio: "Sarah brings over a decade of expertise in horticulture and spatial design to every project. Her philosophy centers on creating harmony between plants and their environments, ensuring each installation feels both natural and intentional. She holds advanced degrees in Plant Sciences from UT Austin and has curated botanical installations for some of the city's most prestigious spaces.",
    },
    {
      name: "Michael Chen",
      title: "Co-Founder & Design Director",
      bio: "Michael's background in sustainable design and operations ensures every GreenSpace Austin project reflects our commitment to environmental responsibility and aesthetic excellence. His approach to botanical design emphasizes the importance of creating spaces that support both human well-being and plant health through thoughtful, sustainable practices.",
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Navigation */}
      <nav className="px-8 py-8 fade-in">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-8">
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
              <Link
                href="/services"
                className="text-charcoal transition-colors hover:text-stone-600"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-charcoal transition-colors hover:text-stone-600"
              >
                About
              </Link>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <Link
              href="/"
              className="text-charcoal font-display text-3xl font-light tracking-[0.3em]"
            >
              PROSPER PLANTSCAPES
            </Link>
          </div>

          <div className="flex space-x-8 text-sm uppercase tracking-widest">
            <Link
              href="/contact"
              className="text-charcoal transition-colors hover:text-stone-600"
            >
              Contact
            </Link>
            <Link
              href="https://instagram.com/prosperplantscapes"
              className="text-charcoal transition-colors hover:text-stone-600"
            >
              Instagram
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-sage slide-up px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-charcoal font-heading mb-8 text-4xl font-thin leading-tight tracking-wide md:text-5xl">
            About Prosper Plantscapes
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600">
            Founded with a vision to transform how we experience nature in urban
            environments, Prosper Plantscapes creates botanical installations
            that elevate spaces and enrich lives.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-charcoal px-8 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center fade-in">
            <h2 className="font-heading mb-4 text-3xl font-light text-white">
              The Founders
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
              Meet the visionaries behind Prosper Plantscapes' distinctive
              approach to botanical design.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            {founders.map((founder, index) => (
              <div
                key={index}
                className={`text-center ${index === 0 ? "slide-in-left" : "slide-in-right"}`}
              >
                <h3 className="font-heading mb-2 text-2xl font-light text-white">
                  {founder.name}
                </h3>
                <p className="font-heading mb-8 text-sm uppercase tracking-widest text-gray-400">
                  {founder.title}
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-sage px-8 py-32">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-charcoal font-heading mb-16 text-3xl font-light fade-in">
            Our Philosophy
          </h2>

          <div className="grid gap-16 md:grid-cols-3">
            {[
              {
                title: "SUSTAINABILITY",
                desc: "We source responsibly and prioritize local growers, ensuring our impact benefits both clients and community.",
              },
              {
                title: "ARTISTRY",
                desc: "Every installation is approached as a work of art, balancing form, function, and natural beauty.",
              },
              {
                title: "LONGEVITY",
                desc: "We design for lasting success, selecting plants and systems that thrive with minimal intervention.",
              },
            ].map((value, index) => (
              <div key={index} className={`stagger-${index + 1} fade-in`}>
                <h3 className="text-charcoal font-heading mb-4 text-sm font-medium uppercase tracking-widest">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-stone-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream border-t border-stone-200 px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-3">
            <div>
              <div className="mb-6 flex items-center space-x-4">
                <Image
                  src="/images/prosper-white-logo.png"
                  alt="Prosper Plantscapes Logo"
                  width={48}
                  height={48}
                  className="rounded-2xl object-contain"
                />
                <div className="text-charcoal font-display text-xl font-light tracking-[0.2em] underline decoration-2 underline-offset-4">
                  PROSPER PLANTSCAPES
                </div>
              </div>
              <p className="text-sm leading-relaxed text-stone-600">
                Professional botanical curation for Austin's most important
                spaces.
              </p>
            </div>

            <div>
              <h4 className="text-charcoal font-heading mb-6 text-sm font-medium uppercase tracking-widest">
                Navigation
              </h4>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="hover:text-charcoal block text-sm text-stone-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-charcoal block text-sm text-stone-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="hover:text-charcoal block text-sm text-stone-600 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-charcoal block text-sm text-stone-600 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-charcoal font-heading mb-6 text-sm font-medium uppercase tracking-widest">
                Connect
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-stone-600">
                  <p className="mb-1">(512) 555-0123</p>
                  <p className="mb-3">hello@prosperplantscapes.com</p>
                </div>
                <Link
                  href="https://instagram.com/prosperplantscapes"
                  className="hover:text-charcoal block text-sm text-stone-600 transition-colors"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-stone-200 pt-8 text-center">
            <p className="text-xs uppercase tracking-wider text-stone-500">
              © 2024 Prosper Plantscapes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
