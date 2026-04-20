"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const featured = {
  category: "Announcement",
  date: "April 12, 2026",
  title: "Trexmate Opens New Studio in Singapore",
  desc: "Expanding our footprint in Asia-Pacific to better serve a growing roster of regional clients across fintech, retail and hospitality.",
  read: "5 min read",
};

const articles = [
  { category: "Insight", date: "Apr 8, 2026", title: "Why Brand Systems Matter in the AI Era", desc: "Strong brand systems are the antidote to AI sameness — here's how to build one." },
  { category: "Case Study", date: "Mar 28, 2026", title: "How We Helped FinEdge Hit $2M in Daily Volume", desc: "A behind-the-scenes look at the design and engineering decisions behind the launch." },
  { category: "Press", date: "Mar 15, 2026", title: "Trexmate Named Agency of the Year by Webby", desc: "We're humbled and energized to keep raising the bar for digital craft." },
  { category: "Insight", date: "Mar 2, 2026", title: "The 2026 State of Web Performance", desc: "Our annual deep dive into Core Web Vitals across 1,200 commerce sites." },
  { category: "Culture", date: "Feb 18, 2026", title: "Inside Our Remote-First Design Sprints", desc: "Frameworks, tools and rituals that make distributed creativity work." },
  { category: "Hiring", date: "Feb 4, 2026", title: "We're Hiring Across 8 Roles Globally", desc: "Senior designers, engineers, and producers — come build with us." },
];

export default function NewsroomPage() {
  const ref = useGsapReveal();

  return (
    <div ref={ref}>
      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p data-reveal className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Newsroom</p>
          <h1 data-reveal className="mt-4 font-heading text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
            Stories, Ideas & <span className="text-gradient">Updates</span>
          </h1>
          <p data-reveal className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Press releases, case studies, hot takes and culture notes from inside the studio.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <article data-reveal className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto bg-secondary flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <span className="font-heading text-6xl font-bold text-muted-foreground/20">SG</span>
            </div>
            <div className="flex flex-col justify-center p-10">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{featured.category}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> {featured.date}</span>
              </div>
              <h2 className="mt-4 font-heading text-2xl font-bold md:text-3xl">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{featured.desc}</p>
              <div className="mt-6 flex items-center gap-2 font-heading text-sm font-medium text-primary">
                Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <article key={a.title} data-reveal className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:card-glow">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{a.category}</span>
                  <span className="text-xs text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                  Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
