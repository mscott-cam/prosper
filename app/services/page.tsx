import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";

const services = [
  {
    title: "Consultation",
    subtitle: "PERSONALIZED SPACE ASSESSMENT",
    description:
      "We meet on site to create a proposal for your plant needs and curate an environment for your space.",
    features: [
      "On-site space evaluation and assessment",
      "Lighting and environmental condition analysis",
      "Custom plant recommendations for your specific needs",
      "Detailed proposal with timeline and pricing",
      "Expert guidance on plant placement and design",
    ],
    image: "/images/whitepotwindow.jpeg",
  },
  {
    title: "Design",
    subtitle: "CURATED PLANT SELECTION",
    description:
      "After creating a proposal and scheduling an install appointment, we hand pick local plants for your space.",
    features: [
      "Hand-selected plants from local suppliers",
      "Custom container and planter selection",
      "Professional installation scheduling",
      "Plant placement optimization for health and aesthetics",
      "Styling guidance and design consultation",
    ],
    image: "/images/office-sitting-area.jpeg",
  },
  {
    title: "Maintenance",
    subtitle: "ONGOING PLANT CARE",
    description:
      "We ensure your plants are healthy with regularly scheduled maintenance and upkeep.",
    features: [
      "Flexible scheduling: weekly, bi-weekly, or monthly visits",
      "Comprehensive plant care: watering, pruning, fertilizing",
      "Health monitoring and pest prevention",
      "Plant replacement when necessary",
      "Seasonal care adjustments and recommendations",
    ],
    image: "/images/outside-corner.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-cream px-8 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-charcoal font-heading mb-8 text-4xl font-thin leading-tight tracking-wide md:text-5xl">
            Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600">
            Comprehensive botanical curation services tailored to create
            environments where nature and design exist in perfect harmony.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-white px-8 py-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12 lg:space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid items-center gap-12 lg:gap-24 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""} ${index === 0 ? "slide-in-left" : index === 1 ? "slide-in-right" : "slide-in-left"}`}
              >
                <div
                  className={`relative h-[400px] lg:h-[600px] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <p className="font-heading mb-4 text-xs uppercase tracking-[0.2em] text-stone-500">
                    {service.subtitle}
                  </p>
                  <h2 className="text-charcoal font-heading mb-8 text-3xl font-light leading-tight">
                    {service.title}
                  </h2>
                  <p className="mb-12 text-lg leading-relaxed text-stone-600">
                    {service.description}
                  </p>

                  <div className="mb-12 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="bg-sage mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                        <span className="leading-relaxed text-stone-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="border-charcoal text-charcoal hover:bg-charcoal bg-transparent px-8 py-3 text-sm uppercase tracking-wider hover:text-white"
                  >
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-charcoal px-8 py-20 lg:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading mb-16 text-3xl font-light text-white fade-in">
            Why Prosper Plantscapes
          </h2>

          <div className="grid gap-16 md:grid-cols-3">
            {[
              {
                title: "LOCAL EXPERTISE",
                desc: "Deep understanding of Austin's unique climate and indoor growing conditions ensures your plants thrive year-round.",
              },
              {
                title: "DESIGN EXCELLENCE",
                desc: "Every installation reflects our commitment to aesthetic sophistication and functional beauty.",
              },
              {
                title: "LASTING PARTNERSHIPS",
                desc: "We build long-term relationships with our clients, providing ongoing support and botanical expertise.",
              },
            ].map((value, index) => (
              <div key={index} className={`stagger-${index + 1} fade-in`}>
                <h3 className="font-heading mb-6 text-sm font-medium uppercase tracking-widest text-white">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sage px-8 py-20 lg:py-32">
        <div className="slide-up mx-auto max-w-4xl text-center">
          <h2 className="text-charcoal font-heading mb-8 text-3xl font-light leading-tight">
            Ready to begin your botanical journey?
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-stone-600">
            Let's discuss how we can transform your space with thoughtfully
            curated plants and design.
          </p>
          <Button
            variant="outline"
            className="border-charcoal text-charcoal hover:bg-charcoal bg-transparent px-8 py-3 text-sm uppercase tracking-wider hover:text-white"
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white px-8 py-16">
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
                  <p className="mb-3">hello@prosperplantscapes.com</p>
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
