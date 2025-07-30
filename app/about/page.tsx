import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/navigation";

export default function AboutPage() {
  const founders = [
    {
      name: "Rachel Roberts",
      title: "Co-Founder",
      bio: "As the owner and founder of Flourish Plant Shop & Design, Rachel lends her years of design work to Prosper Plantscapes. After working as a plant shop owner, cultivating plant design and a curated aesthetic, she is imparting that into plant design for commercial and residential projects.",
    },
    {
      name: "Audrea Straub",
      title: "Co-Founder",
      bio: 'Born and raised Austinite, Audrea has been working in the horticulture field for over a decade. Her creativity also shines in creating seasonal floral designs, where she showcases blooms from her very own garden. "Connecting people with plants is my greatest joy, and I love educating clients on how to green up their space. To say I\'m a crazy plant lady is an understatement!"',
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-cream px-8 py-12 lg:py-20">
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
      <section className="bg-charcoal px-8 py-20 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center fade-in lg:mb-24">
            <h2 className="font-heading text-4xl font-light text-white lg:mb-4">
              The Founders
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
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
      <section className="bg-sage px-8 py-20 lg:py-32">
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
                <div className="text-charcoal font-display text-xl font-light tracking-[0.2em]">
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
                  className="hover:text-charcoal block text-sm text-stone-600 transition-all duration-200 hover:translate-x-1"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-charcoal block text-sm text-stone-600 transition-all duration-200 hover:translate-x-1"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="hover:text-charcoal block text-sm text-stone-600 transition-all duration-200 hover:translate-x-1"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-charcoal block text-sm text-stone-600 transition-all duration-200 hover:translate-x-1"
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
                  <p className="mb-3">info@prosperplantscapes.com</p>
                </div>
                <Link
                  href="https://instagram.com/prosperplantscapes"
                  className="hover:text-charcoal block text-sm text-stone-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
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
