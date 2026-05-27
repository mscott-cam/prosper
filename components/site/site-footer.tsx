import Link from "next/link";
import { LeafMark } from "@/components/marks/leaf-mark";

const COLUMNS = [
  {
    heading: "Index",
    links: [
      { label: "Selected Work", href: "/#work" },
      { label: "Process", href: "/#process" },
      { label: "About", href: "/about" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "info@prosperplantscapes.com", href: "mailto:info@prosperplantscapes.com" },
      { label: "@prosperplantscapes ↗", href: "https://instagram.com/prosperplantscapes" },
      { label: "Begin a project", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-bone text-ink">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 md:px-12 md:pt-32">
        <div className="grid grid-cols-1 gap-12 border-b border-ink/15 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-start gap-4">
              <LeafMark className="mt-1 text-clay" size={28} />
              <div>
                <p className="font-display text-3xl italic leading-tight md:text-4xl">
                  Living rooms <br /> for working.
                </p>
                <p className="marginalia mt-6 text-ink-soft">
                  № — Boutique plant design · Austin
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:col-span-7 md:grid-cols-2 md:gap-10">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="marginalia text-ink-soft">{col.heading}</h4>
                <ul className="mt-6 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center font-display text-lg text-ink transition-colors hover:text-clay"
                        data-cursor="hover"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-clay transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="marginalia text-ink-soft">
            © {new Date().getFullYear()} Prosper Plantscapes · Austin, TX
          </p>
          <p className="marginalia text-ink-soft">
            Hours · Mon–Fri 9—5 · By appointment
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="relative -mt-2 select-none overflow-hidden text-sage-deep"
      >
        <p className="font-display whitespace-nowrap text-center text-[clamp(6rem,28vw,22rem)] leading-[0.78] italic tracking-tightest-display translate-y-[18%]">
          Prosper
        </p>
      </div>
    </footer>
  );
}
