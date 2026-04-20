"use client";

import { Code2, Palette, Megaphone, BarChart3, Smartphone, Search, Cloud, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const services = [
  { icon: Code2, title: "Web Development", desc: "Scalable, high-performance web applications built on modern stacks like React, Next.js and Node.", points: ["Custom SPAs & SSR apps", "Headless CMS integration", "API & microservices"] },
  { icon: Palette, title: "Brand & Identity", desc: "Memorable identities that capture your essence and resonate across every touchpoint.", points: ["Logo & visual systems", "Brand guidelines", "Packaging & print"] },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform apps that delight users on iOS and Android.", points: ["React Native & Flutter", "App Store optimization", "Push & analytics"] },
  { icon: Megaphone, title: "Digital Marketing", desc: "Performance-driven campaigns that turn impressions into measurable revenue.", points: ["Paid ads & SEO", "Email automation", "Conversion strategy"] },
  { icon: Search, title: "UX Research", desc: "Deep user research and testing to validate decisions before a single pixel is moved.", points: ["User interviews", "Usability testing", "Journey mapping"] },
  { icon: BarChart3, title: "Analytics & Data", desc: "Turn raw data into clear dashboards and decisions that move the business forward.", points: ["GA4 & dashboards", "A/B testing", "Attribution"] },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Robust cloud infrastructure with CI/CD pipelines that scale with your team.", points: ["AWS / GCP / Azure", "Kubernetes", "Monitoring & SRE"] },
  { icon: ShieldCheck, title: "Security Audits", desc: "Protect your product and your users with end-to-end security reviews.", points: ["Penetration testing", "Code audits", "Compliance"] },
];

export default function ServicesPage() {
  const ref = useGsapReveal();

  return (
    <div ref={ref}>
      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute right-1/4 top-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p data-reveal className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">What We Do</p>
          <h1 data-reveal className="mt-4 font-heading text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
            Services Built To <span className="text-gradient">Scale</span> With You
          </h1>
          <p data-reveal className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From discovery to launch and beyond — we offer a full suite of digital services that help bold brands grow with confidence.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} data-reveal className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:card-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 data-reveal className="font-heading text-3xl font-bold md:text-5xl">
            Need a custom <span className="text-gradient">solution?</span>
          </h2>
          <p data-reveal className="mt-4 text-muted-foreground">Let&apos;s chat about your project and design a tailored engagement.</p>
          <div data-reveal className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
