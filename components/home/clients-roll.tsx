import Image from "next/image";

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
      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <h2 className="font-display text-5xl italic text-ink-soft md:text-6xl text-center">
            Trusted By
          </h2>
        </div>
        <div className="mt-16 overflow-hidden">
          <div className="flex min-w-max animate-scroll items-center gap-24">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="relative h-24 w-52 flex-shrink-0"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain grayscale opacity-70"
                  sizes="208px"
                />
              </div>
            ))}
            {CLIENTS.map((client) => (
              <div
                key={`${client.name}-dup`}
                aria-hidden="true"
                className="relative h-24 w-52 flex-shrink-0"
              >
                <Image
                  src={client.src}
                  alt=""
                  fill
                  className="object-contain grayscale opacity-70"
                  sizes="208px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
