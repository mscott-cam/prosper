import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { MagneticLink } from "@/components/motion/magnetic-link";
import { LeafMark } from "@/components/marks/leaf-mark";

export function InquireBand() {
  return (
    <section className="relative overflow-hidden bg-sage text-ink">
      <div className="relative z-20 mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-44">
        <Reveal as="div" className="flex flex-col items-center text-center">
          <LeafMark className="text-moss" size={36} />
          <p className="marginalia mt-8 text-ink-soft">
            — Begin a project · 2026
          </p>
          <h2 className="mt-6 max-w-[16ch] font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] tracking-tightest-display">
            Bring <em className="font-light">living</em> design to your space.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
            We take on a small number of projects each quarter so every
            installation gets the care it deserves. Tell us about the room.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6 md:flex-row md:gap-10">
            <MagneticLink
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-clay px-9 py-4 font-mono text-[0.78rem] uppercase tracking-[0.24em] text-bone transition-colors hover:bg-clay-deep"
            >
              Begin a project
              <span aria-hidden>→</span>
            </MagneticLink>
            <Link
              href="mailto:info@prosperplantscapes.com"
              className="font-display text-lg italic text-ink underline-offset-[6px] hover:underline"
              data-cursor="hover"
            >
              info@prosperplantscapes.com
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-ink/15" />
    </section>
  );
}
