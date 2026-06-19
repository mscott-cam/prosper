"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { LeafMark } from "@/components/marks/leaf-mark";
import { PalmFrond, Pothos } from "@/components/marks/botanical-mark";

export function HeroMast() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const palmY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const palmRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);
  const pothosY = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-bone text-ink"
    >
      {/* Soft moss color wash, top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-[60%] w-[42%] bg-bone-warm md:block"
      />

      {/* Hairline guides (editorial grid feel) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 mx-auto hidden h-px max-w-[1400px] bg-ink/10 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-ink/8 md:block"
      />

      {/* Large palm frond — primary botanical anchor, bottom-right, partially clipped */}
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y: palmY, rotate: palmRotate }}
        className="pointer-events-none absolute -bottom-[10%] -right-[14%] z-0 w-[78vw] max-w-[820px] text-moss/45 md:-right-[6%] md:bottom-[-12%] md:w-[52vw]"
      >
        <PalmFrond className="h-auto w-full" />
      </motion.div>

      {/* Small trailing pothos — top-left accent */}
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y: pothosY }}
        className="pointer-events-none absolute left-[2%] top-[14%] z-0 hidden w-[120px] text-moss/30 md:block lg:w-[180px]"
      >
        <Pothos className="h-auto w-full" />
      </motion.div>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col px-6 pb-12 pt-32 md:px-12 md:pt-36">
        <Reveal as="div">
          <p className="marginalia flex items-center gap-3 text-ink-soft">
            <span className="inline-block h-px w-10 bg-clay" />
            Boutique Plant Design, Austin
          </p>
        </Reveal>

        {/* Main editorial layout */}
        <div className="grid flex-1 grid-cols-12 items-center gap-6 pt-12 md:pt-16">
          {/* Left: headline */}
          <div className="col-span-12 md:col-span-7">
            <SplitText
              as="h1"
              italicWords={["Living"]}
              className="font-display text-[clamp(3.25rem,10vw,9.5rem)] leading-[0.88] tracking-tightest-display text-ink"
              stagger={0.09}
              duration={1.1}
            >
              Living rooms for working.
            </SplitText>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.9 }}
              className="mt-10 flex max-w-md items-start gap-4"
            >
              <span className="mt-2 inline-block h-px w-8 bg-clay" />
              <p className="font-display text-lg italic leading-snug text-ink-soft md:text-xl">
                A boutique plant design service composing rooms where green
                things and good work share the same daylight.
              </p>
            </motion.div>
          </div>

          {/* Right: framed photo card + marginalia */}
          <motion.div
            style={reduced ? undefined : { y: cardY }}
            className="col-span-12 md:col-span-4 md:col-start-9"
          >
            <Reveal as="div" delay={0.6} offset={28} className="relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-bone-warm shadow-[0_30px_80px_-40px_rgba(31,42,27,0.45)]">
                <Image
                  src="/images/hero-living-room.jpg"
                  alt="A curated downtown Austin office lounge with monstera and rubber plant"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 768px) 28vw, 80vw"
                />
                <div className="absolute inset-0 bg-sage/30 mix-blend-multiply" />
              </div>

              <div className="mt-8 border-l border-ink/20 pl-5">
                <p className="marginalia text-clay">Est. — Boutique</p>
                <div className="mt-3 flex items-center gap-3 marginalia text-ink-soft">
                  <LeafMark size={14} className="text-moss" />
                  Austin · Texas
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex items-end justify-between"
        >
          <div className="flex items-center gap-4 marginalia text-ink-soft">
            <span className="relative flex h-10 w-px overflow-hidden bg-ink/15">
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{
                  delay: 2,
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.4,
                }}
                className="absolute inset-x-0 h-1/2 bg-clay"
              />
            </span>
            Scroll
          </div>
        </motion.div>
      </div>
    </section>
  );
}
