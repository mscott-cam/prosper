"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";

const STEPS = [
  {
    number: "01",
    kicker: "Personalized space assessment",
    title: "Consultation",
    body: "We meet on site to create a proposal for your plant needs and choose the right plants for the right places to set everyone up for success.",
    features: [
      "On-site space evaluation and assessment",
      "Lighting and environmental condition analysis",
      "Custom plant recommendations for your specific needs",
      "Detailed proposal with timeline and pricing",
      "Expert guidance on plant placement and design",
    ],
    image: "/images/bluecorner.jpeg",
  },
  {
    number: "02",
    kicker: "Curated plant selection",
    title: "Design",
    body: "A 50% deposit is needed to order containers and get on our install calendar. We schedule the install once containers are in our hands — there is typically a 2–6 week time frame for installation. Plants are always subject to availability, and we source the best products from our local suppliers.",
    features: [
      "Hand-selected plants from local suppliers",
      "Custom container and planter selection",
      "Professional installation scheduling",
      "Plant placement optimization for health and aesthetics",
      "Styling guidance and design consultation",
    ],
    image: "/images/interior-plant-design.jpg",
  },
  {
    number: "03",
    kicker: "Ongoing plant care",
    title: "Maintenance",
    body: "We keep plants looking their very best with maintenance options that work for you.",
    features: [
      "Flexible scheduling: weekly, bi-weekly, or monthly visits",
      "Comprehensive plant care: watering, pruning, fertilizing",
      "Health monitoring and pest prevention",
      "Plant replacement when necessary",
      "Seasonal care adjustments and recommendations",
    ],
    image: "/images/whitepotwindow.jpeg",
  },
];

export function ProcessIndex() {
  return (
    <section id="process" className="relative bg-bone py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal as="div" className="mb-20 flex items-end justify-between">
          <div>
            <p className="marginalia text-clay">— Our process</p>
            <h2 className="mt-4 font-display text-display-lg italic text-ink">
              Three acts, <br /> one room.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-ink-soft md:block">
            A thoughtful sequence — from first walkthrough to lasting care —
            built so plants and design stay in balance.
          </p>
        </Reveal>

        <ul className="flex flex-col">
          {STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 0.08}
              className="group relative border-t border-ink/15 last:border-b"
            >
              <div className="grid grid-cols-12 items-start gap-6 py-12 md:py-20">
                <div className="col-span-3 md:col-span-2">
                  <span className="font-display text-[clamp(3rem,6vw,6rem)] leading-none text-ink transition-colors duration-500 group-hover:text-clay">
                    {step.number}
                  </span>
                </div>

                <div className="col-span-9 md:col-span-6">
                  <p className="marginalia text-clay">— {step.kicker}</p>
                  <h3 className="mt-3 font-display text-3xl text-ink md:text-5xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                    {step.body}
                  </p>

                  <ul className="mt-10 space-y-3.5">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4">
                        <span
                          aria-hidden
                          className="mt-[0.6em] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-clay"
                        />
                        <span className="text-sm leading-relaxed text-ink-soft md:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    data-cursor="hover"
                    className="group/cta relative mt-10 inline-flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-ink"
                  >
                    <span className="relative">
                      Learn more
                      <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left bg-clay transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:scale-x-110" />
                    </span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover/cta:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>

                <div className="col-span-12 mt-6 md:col-span-4 md:mt-0">
                  <div className="relative aspect-[4/5] overflow-hidden bg-bone-warm md:aspect-[3/4]">
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 30vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-sage/30 mix-blend-multiply" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
