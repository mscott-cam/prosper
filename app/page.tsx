import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { CustomCursor } from "@/components/custom-cursor";
import { HeroMast } from "@/components/home/hero-mast";
import { Manifesto } from "@/components/home/manifesto";
import { ProcessIndex } from "@/components/home/process-index";
import { ClientsRoll } from "@/components/home/clients-roll";
import { SelectedWork } from "@/components/home/selected-work";
import { InquireBand } from "@/components/home/inquire-band";

export default function HomePage() {
  return (
    <main className="bg-bone text-ink">
      <CustomCursor />
      <SiteNav variant="solid" />
      <HeroMast />
      <Manifesto />
      <ClientsRoll />
      <SelectedWork />
      <ProcessIndex />
      <InquireBand />
      <SiteFooter />
    </main>
  );
}
