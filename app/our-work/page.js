"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const categories = ["All", "Branding", "Web", "Mobile", "Marketing"];

const projects = [
  { title: "TechNova Rebrand", category: "Branding", desc: "Complete visual identity overhaul for a leading tech startup.", year: "2024", metric: "+180% recall" },
  { title: "Bloom E-Commerce", category: "Web", desc: "Full-stack e-commerce platform with 200% conversion increase.", year: "2024", metric: "+200% CR" },
  { title: "StartFlow Dashboard", category: "Web", desc: "Analytics dashboard serving 50,000+ daily active users.", year: "2023", metric: "50k DAU" },
  { title: "Urban Eats App", category: "Mobile", desc: "Food delivery app with real-time tracking and AI recommendations.", year: "2024", metric: "4.8★ App Store" },
  { title: "FinEdge Platform", category: "Web", desc: "Fintech platform processing $2M+ in daily transactions.", year: "2023", metric: "$2M/day" },
  { title: "GreenPath Campaign", category: "Marketing", desc: "Multi-channel campaign reaching 5M+ targeted impressions.", year: "2024", metric: "5M reach" },
  { title: "Luxe Hotels", category: "Branding", desc: "Hospitality brand refresh across 12 international properties.", year: "2023", metric: "12 markets" },
  { title: "Atlas Wearables", category: "Mobile", desc: "Companion app for next-gen fitness wearable.", year: "2024", metric: "100k installs" },
  { title: "Vantage Search", category: "Marketing", desc: "SEO program that tripled organic traffic in 9 months.", year: "2024", metric: "+312% organic" },
];

export default function OurWorkPage() {
  const [active, setActive] = useState("All");
  const ref = useGsapReveal();
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div ref={ref}>
      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p data-reveal className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Work</p>
          <h1 data-reveal className="mt-4 font-heading text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
            Projects We&apos;re <span className="text-gradient">Proud Of</span>
          </h1>
          <p data-reveal className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A curated selection of work across branding, web, mobile and marketing — crafted with care and built to perform.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div data-reveal className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)} className={`rounded-full border px-5 py-2 font-heading text-xs font-medium uppercase tracking-widest transition-all ${active === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <div key={p.title} data-reveal className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:card-glow">
                <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="font-heading text-3xl font-bold text-muted-foreground/20 transition-transform group-hover:scale-110">{p.title.split(" ").map((w) => w[0]).join("")}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{p.category}</span>
                    <span className="text-xs text-muted-foreground">{p.year}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-heading text-sm font-bold text-primary">{p.metric}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 data-reveal className="font-heading text-3xl font-bold md:text-5xl">
            Let&apos;s build the <span className="text-gradient">next one</span> together.
          </h2>
          <div data-reveal className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
