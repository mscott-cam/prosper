import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const CLIENTS = [
  { name: "Tacodeli", src: "/images/tacodeli.png" },
  { name: "Riverside Resources", src: "/images/riverside.png" },
  { name: "Indeed", src: "/images/indeed.png" },
  { name: "Colors of Austin", src: "/images/colors-of-austin.svg" },
  { name: "Michael Hsu Architecture", src: "/images/michael-hsu.jpeg" },
  { name: "Covert Auto Group", src: "/images/covert-auto.png" },
  { name: "Emmer & Rye", src: "/images/emmer-rye.png" },
];

export function ClientsRoll() {
  return (
    <section className="relative bg-sage text-ink">
      <div className="absolute inset-x-0 top-0 h-px bg-ink/15" />
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <Reveal as="div" className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="marginalia text-clay">— In good company</p>
            <h2 className="mt-4 font-display text-4xl leading-tight italic md:text-5xl">
              A short list of <br /> careful neighbours.
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-soft">
              Studios, restaurants, and offices across Central Texas who chose
              living design.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
              {CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className="flex h-16 items-center justify-center"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      className="object-contain opacity-80 grayscale transition-opacity duration-500 hover:opacity-100"
                      sizes="(min-width: 1024px) 20vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-20 h-px bg-ink/15" />

        <p className="marginalia mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-ink-soft">
          {CLIENTS.map((client, i) => (
            <span key={`name-${client.name}`} className="flex items-center gap-3">
              {client.name}
              {i < CLIENTS.length - 1 && (
                <span className="text-clay">·</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
