import { Reveal } from "@/components/motion/reveal";
import { LeafMark } from "@/components/marks/leaf-mark";

export function Manifesto() {
  return (
    <section className="relative bg-bone-warm py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8">
          <Reveal
            as="div"
            className="col-span-12 md:col-span-3"
            offset={20}
            duration={0.9}
          >
            <p className="marginalia text-ink-soft">On practice</p>
            <p className="marginalia mt-3 text-clay">2026 — Manifest</p>
          </Reveal>

          <Reveal
            as="div"
            className="col-span-12 md:col-span-9"
            delay={0.1}
            offset={24}
            duration={1}
          >
            <div className="hairline mb-12" />
            <p className="max-w-[22ch] font-display text-[clamp(2rem,4.4vw,4.25rem)] leading-[1.08] tracking-tightest-display text-ink">
              We design rooms that <em className="font-light">breathe</em> —
              spaces where plants and people share the same daylight.
            </p>
            <div className="mt-12 flex items-center justify-between">
              <div className="hairline w-1/2" />
              <LeafMark className="text-moss" size={36} />
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
              <div>
                <p className="marginalia text-clay">— I</p>
                <p className="mt-3 font-display text-xl text-ink">Considered</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Each placement studied against light, traffic, and the rhythm
                  of the room.
                </p>
              </div>
              <div>
                <p className="marginalia text-clay">— II</p>
                <p className="mt-3 font-display text-xl text-ink">Local</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Hand-selected from Texas growers we&apos;ve known for years.
                </p>
              </div>
              <div>
                <p className="marginalia text-clay">— III</p>
                <p className="mt-3 font-display text-xl text-ink">Lasting</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Installations cared for monthly so they grow into the space.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
