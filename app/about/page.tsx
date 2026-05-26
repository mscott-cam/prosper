import Image from "next/image";
import type { Metadata } from "next";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { CustomCursor } from "@/components/custom-cursor";
import { Reveal } from "@/components/motion/reveal";
import { MagneticLink } from "@/components/motion/magnetic-link";
import { LeafMark, Asterism } from "@/components/marks/leaf-mark";

export const metadata: Metadata = {
  title: "About — Prosper Plantscapes",
  description:
    "Two women, one small studio in Austin — composing rooms where plants and design thrive together.",
};

const FOUNDERS = [
  {
    name: "Rachel Roberts",
    role: "Co-Founder",
    bio: "Owner and founder of Flourish Plant Shop & Design, Rachel lends years of design work to Prosper. After running a shop and cultivating a curated aesthetic of her own, she brings that practiced eye to commercial and residential plant design.",
    image: "/images/interior-plant-design.jpg",
    plate: "Plate № A · Studio",
  },
  {
    name: "Audrea Straub",
    role: "Co-Founder",
    bio: "Born and raised in Austin, Audrea has spent over a decade in the horticulture field. Her creativity also shows in the seasonal floral designs she composes from her own garden. “Connecting people with plants is my greatest joy — and to say I’m a crazy plant lady is an understatement.”",
    image: "/images/succulent-garden.jpg",
    plate: "Plate № B · Garden",
  },
];

const PHILOSOPHY = [
  {
    kicker: "I",
    title: "Sustainability",
    body: "We source responsibly and prioritise local growers — every choice we make ripples out to clients and community.",
  },
  {
    kicker: "II",
    title: "Artistry",
    body: "Each installation is approached as a work of art, balancing form, function, and the slow beauty of living things.",
  },
  {
    kicker: "III",
    title: "Longevity",
    body: "We design for lasting success — selecting plants and systems that grow into a space rather than wear it out.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-bone text-ink">
      <CustomCursor />
      <SiteNav variant="solid" />

      {/* Hero / Intro */}
      <section className="relative bg-bone pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Reveal as="div" className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7">
              <p className="marginalia flex items-center gap-3 text-ink-soft">
                <span className="inline-block h-px w-10 bg-clay" />
                № 002 — The Studio
              </p>
              <h1 className="mt-10 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] tracking-tightest-display text-ink">
                Two women, <br />
                <em className="font-light">one small studio,</em> <br />
                in Austin.
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-24">
              <div className="border-l border-ink/20 pl-6">
                <p className="marginalia text-clay">— A note</p>
                <p className="mt-4 font-display text-lg italic leading-snug text-ink-soft md:text-xl">
                  Founded with a vision to transform how we experience nature in
                  urban environments, Prosper composes botanical installations
                  that elevate spaces and enrich the days spent in them.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-bone-warm py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Reveal as="div" className="mb-20 flex items-end justify-between">
            <div>
              <p className="marginalia text-clay">— The Founders</p>
              <h2 className="mt-4 font-display text-display-lg italic text-ink">
                Hands on <br /> every plant.
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-relaxed text-ink-soft md:block">
              Prosper is the work of two people. We walk every site, sketch
              every proposal, and tend every install ourselves.
            </p>
          </Reveal>

          <div className="flex flex-col gap-20 md:gap-32">
            {FOUNDERS.map((founder, i) => (
              <Reveal
                as="div"
                key={founder.name}
                delay={i * 0.05}
                className="grid grid-cols-12 items-center gap-8 md:gap-16"
              >
                <div
                  className={`col-span-12 md:col-span-5 ${
                    i % 2 === 1 ? "md:order-2 md:col-start-8" : ""
                  }`}
                >
                  <figure className="relative aspect-[3/4] overflow-hidden bg-bone shadow-[0_30px_80px_-40px_rgba(31,42,27,0.45)]">
                    <Image
                      src={founder.image}
                      alt={`Work composed by ${founder.name}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 35vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-sage/25 mix-blend-multiply" />
                  </figure>
                  <p className="marginalia mt-4 text-ink-soft">{founder.plate}</p>
                </div>

                <div
                  className={`col-span-12 md:col-span-6 ${
                    i % 2 === 1 ? "md:order-1 md:col-start-2" : ""
                  }`}
                >
                  <p className="marginalia text-clay">— {founder.role}</p>
                  <h3 className="mt-3 font-display text-4xl text-ink md:text-6xl">
                    {founder.name}
                  </h3>
                  <div className="mt-8 h-px w-12 bg-clay" />
                  <p className="mt-8 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
                    {founder.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative bg-sage py-32 md:py-44">
        <div className="absolute inset-x-0 top-0 h-px bg-ink/15" />
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Reveal as="div" className="mb-20 max-w-3xl">
            <p className="marginalia text-clay">— Our philosophy</p>
            <h2 className="mt-4 font-display text-display-lg leading-[0.95] tracking-tightest-display text-ink">
              Three quiet rules <br />
              we <em className="font-light">keep coming back to</em>.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
            {PHILOSOPHY.map((value, i) => (
              <Reveal
                as="div"
                key={value.kicker}
                delay={i * 0.1}
                className={`relative py-10 md:py-0 md:px-10 ${
                  i > 0
                    ? "border-t border-ink/15 md:border-t-0 md:border-l"
                    : ""
                } ${i === 0 ? "md:pl-0" : ""} ${
                  i === PHILOSOPHY.length - 1 ? "md:pr-0" : ""
                }`}
              >
                <p className="font-display text-[5rem] leading-none italic text-clay md:text-[7rem]">
                  {value.kicker}
                </p>
                <h3 className="mt-8 font-display text-3xl text-ink md:text-4xl">
                  {value.title}
                </h3>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" className="mt-24 flex items-center justify-center">
            <Asterism className="text-clay" />
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-ink/15" />
      </section>

      {/* Quiet closing */}
      <section className="bg-bone py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Reveal as="div" className="flex flex-col items-center text-center">
            <LeafMark className="text-moss" size={32} />
            <p className="marginalia mt-8 text-ink-soft">— Begin together</p>
            <h2 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-tightest-display text-ink">
              Tell us about the room.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ink-soft">
              We take on a small number of projects each quarter, so every
              installation gets the care it deserves.
            </p>
            <div className="mt-12">
              <MagneticLink
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-clay px-9 py-4 font-mono text-[0.78rem] uppercase tracking-[0.24em] text-bone transition-colors hover:bg-clay-deep"
              >
                Begin a project
                <span aria-hidden>→</span>
              </MagneticLink>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
