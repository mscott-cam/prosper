"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";

const WORKS = [
  {
    title: "Riverside Studio",
    place: "East Austin · Office",
    src: "/images/gallery1.jpeg",
    aspect: "aspect-[3/4]",
    span: "md:col-span-5 md:col-start-1",
    offset: "md:mt-0",
  },
  {
    title: "Conference Atrium",
    place: "Domain · Hospitality",
    src: "/images/office-sitting-area.jpeg",
    aspect: "aspect-[4/3]",
    span: "md:col-span-6 md:col-start-7",
    offset: "md:mt-32",
  },
  {
    title: "Window Sill Composition",
    place: "South Lamar · Residential",
    src: "/images/gallery3.jpeg",
    aspect: "aspect-[1/1]",
    span: "md:col-span-4 md:col-start-2",
    offset: "md:-mt-16",
  },
  {
    title: "Welcome Vestibule",
    place: "Downtown · Commercial",
    src: "/images/outside-corner.jpeg",
    aspect: "aspect-[3/4]",
    span: "md:col-span-5 md:col-start-7",
    offset: "md:mt-24",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="relative bg-bone py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal as="div" className="mb-16 flex items-end justify-between">
          <div>
            <p className="marginalia text-clay">— Selected work, 2025</p>
            <h2 className="mt-4 font-display text-display-lg italic text-ink">
              A few rooms <br /> we&apos;ve loved.
            </h2>
          </div>
          <a
            href="/contact"
            className="hidden font-mono text-[0.7rem] uppercase tracking-[0.24em] text-ink md:inline-flex"
            data-cursor="hover"
          >
            <span className="relative">
              See full archive
              <span className="absolute -bottom-1 left-0 h-px w-full bg-clay" />
            </span>
          </a>
        </Reveal>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {WORKS.map((work, i) => (
            <Reveal
              key={work.title}
              as="div"
              delay={i * 0.07}
              offset={40}
              className={`col-span-12 ${work.span} ${work.offset}`}
            >
              <motion.figure
                className="group relative overflow-hidden bg-bone-warm"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                data-cursor="hover"
              >
                <div className={`relative ${work.aspect} overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={work.src}
                      alt={work.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 40vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-sage/30 mix-blend-multiply" />
                  </motion.div>
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between">
                  <div>
                    <p className="font-display text-2xl italic text-ink">
                      {work.title}
                    </p>
                    <p className="marginalia mt-2 text-ink-soft">
                      {work.place}
                    </p>
                  </div>
                  <span className="marginalia text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
