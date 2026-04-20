"use client";

import { Trophy, Award, Star, Medal } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const awards = [
  { year: "2024", title: "Webby Award — Best Agency Site", org: "The Webby Awards", icon: Trophy },
  { year: "2024", title: "Awwwards Site of the Day", org: "Awwwards", icon: Star },
  { year: "2024", title: "Red Dot Brand Design", org: "Red Dot", icon: Medal },
  { year: "2023", title: "Cannes Lions Bronze", org: "Cannes Lions", icon: Award },
  { year: "2023", title: "FWA of the Day", org: "FWA", icon: Star },
  { year: "2023", title: "D&AD Wood Pencil", org: "D&AD", icon: Medal },
  { year: "2022", title: "CSS Design Awards Winner", org: "CSSDA", icon: Trophy },
  { year: "2022", title: "Communication Arts Pick", org: "Communication Arts", icon: Award },
];

const recognitions = [
  { source: "Forbes", quote: "One of the most exciting digital studios working today." },
  { source: "Fast Company", quote: "Setting the bar for what a modern agency should look like." },
  { source: "TechCrunch", quote: "Trexmate consistently ships work that defines the category." },
];

export default function AwardsPage() {
  const ref = useGsapReveal();

  return (
    <div ref={ref}>
      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p data-reveal className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Recognition</p>
          <h1 data-reveal className="mt-4 font-heading text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
            Awards & <span className="text-gradient">Recognition</span>
          </h1>
          <p data-reveal className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Our work has been honored by the world&apos;s most respected creative and tech institutions — but the real reward is our clients&apos; success.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a) => (
              <div key={a.title} data-reveal className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:card-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <a.icon className="h-6 w-6" />
                </div>
                <span className="mt-5 inline-block font-heading text-xs font-bold uppercase tracking-widest text-primary">{a.year}</span>
                <h3 className="mt-2 font-heading text-base font-semibold leading-snug">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 data-reveal className="text-center font-heading text-3xl font-bold md:text-4xl">As Featured In</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {recognitions.map((r) => (
              <div key={r.source} data-reveal className="rounded-xl border border-border bg-background p-8">
                <p className="font-heading text-xl font-bold text-primary">{r.source}</p>
                <p className="mt-4 text-muted-foreground italic leading-relaxed">&quot;{r.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
