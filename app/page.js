"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Layers, TrendingUp, Star, CheckCircle, Quote, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypewriterHeading from "@/components/TypewriterHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "25+", label: "Team Members" },
];

const services = [
  { icon: Zap, title: "Web Development", desc: "High-performance web applications built with cutting-edge technology. From SPAs to complex enterprise systems." },
  { icon: Target, title: "Brand Strategy", desc: "Data-driven brand positioning that captures your market. We craft identities that resonate and endure." },
  { icon: Layers, title: "UI/UX Design", desc: "Intuitive interfaces that delight users and drive conversions. Research-backed, pixel-perfect designs." },
  { icon: TrendingUp, title: "Digital Marketing", desc: "Growth strategies that amplify your digital presence. SEO, PPC, social media, and content marketing." },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We dive deep into your business, audience, and goals to understand what success looks like." },
  { step: "02", title: "Strategy", desc: "Our team crafts a comprehensive roadmap with clear milestones and measurable objectives." },
  { step: "03", title: "Design", desc: "We create stunning visuals and intuitive interfaces that bring your brand to life." },
  { step: "04", title: "Development", desc: "Clean, scalable code brings the design to reality with top-tier performance." },
  { step: "05", title: "Launch & Support", desc: "We ensure a smooth launch and provide ongoing support to keep everything running perfectly." },
];

const testimonials = [
  { name: "David Park", role: "CEO, TechNova", text: "Trexmate transformed our digital presence completely. Their attention to detail and creative vision exceeded all expectations. Revenue increased by 40% within 3 months.", rating: 5 },
  { name: "Lisa Morgan", role: "Marketing Director, Bloom Co", text: "Working with Trexmate was a game-changer. They understood our brand perfectly and delivered a website that truly represents who we are. Absolutely recommend them.", rating: 5 },
  { name: "James Carter", role: "Founder, StartFlow", text: "From concept to launch, the Trexmate team was professional, creative, and incredibly responsive. They delivered ahead of schedule with outstanding quality.", rating: 5 },
];

const projects = [
  { title: "TechNova Rebrand", category: "Branding", desc: "Complete visual identity overhaul for a leading tech startup." },
  { title: "Bloom E-Commerce", category: "Web Development", desc: "Full-stack e-commerce platform with 200% conversion increase." },
  { title: "StartFlow Dashboard", category: "UI/UX Design", desc: "Analytics dashboard serving 50,000+ daily active users." },
  { title: "Urban Eats App", category: "Mobile App", desc: "Food delivery app with real-time tracking and AI recommendations." },
  { title: "FinEdge Platform", category: "Web Development", desc: "Fintech platform processing $2M+ in daily transactions." },
  { title: "GreenPath Campaign", category: "Digital Marketing", desc: "Multi-channel campaign reaching 5M+ targeted impressions." },
];

const clients = ["TechNova", "Bloom Co", "StartFlow", "Urban Eats", "FinEdge", "GreenPath", "Luxe Media", "Atlas Corp"];

export default function HomePage() {
  const revealRef = useGsapReveal();
  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute right-1/4 top-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] animate-pulse" />
        <div className="absolute left-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-primary/10 blur-[80px]" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-primary/20 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-primary">Award-Winning Digital Agency</span>
          </motion.div>
          <TypewriterHeading as="h1" delay={0.3} speed={0.06} segmentGap={0.25} className="font-heading text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl" segments={[{ text: "We Build", br: true }, { text: "Bold Digital", className: "text-gradient", br: true }, { text: "Experiences" }]} />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 mx-auto max-w-xl text-lg text-muted-foreground leading-relaxed">
            Transforming ideas into stunning, high-performance digital products that make an impact. We combine strategy, design, and technology to create experiences people love.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild><Link href="/contact">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button variant="heroOutline" size="lg" asChild><Link href="/who-we-are">Our Story</Link></Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span className="text-sm">100% Client Satisfaction</span></div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span className="text-sm">On-Time Delivery</span></div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span className="text-sm">24/7 Support</span></div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} data-reveal={i % 2 === 0 ? "left" : "right"} className="flex flex-col items-center gap-1 border-r border-border py-10 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
              <span className="font-heading text-3xl font-bold text-primary md:text-4xl">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">What We Do</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Services We Offer</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">We offer end-to-end digital solutions tailored to your unique needs. From initial concept to final launch and beyond.</p>
            <div className="section-divider mx-auto mt-4" />
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={s.title} data-reveal={i % 2 === 0 ? "left" : "right"} className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:card-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><s.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-heading text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">Learn more <ChevronRight className="h-3 w-3" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">How We Work</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Our Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">A proven methodology that ensures every project is delivered with excellence, on time, and on budget.</p>
            <div className="section-divider mx-auto mt-4" />
          </motion.div>
          <div className="mt-16 space-y-0">
            {processSteps.map((p, i) => (
              <div key={p.step} data-reveal={i % 2 === 0 ? "left" : "right"} className="group flex gap-6 border-b border-border py-8 last:border-b-0 md:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-heading text-xl font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">{p.step}</div>
                <div><h3 className="font-heading text-xl font-semibold">{p.title}</h3><p className="mt-1 text-muted-foreground leading-relaxed">{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Work</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Featured Projects</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">A showcase of our best work across different industries and disciplines.</p>
            <div className="section-divider mx-auto mt-4" />
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <div key={p.title} data-reveal={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50">
                <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="font-heading text-2xl font-bold text-muted-foreground/20">{p.title.split(" ").map(w => w[0]).join("")}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{p.category}</span>
                  <h3 className="mt-3 font-heading text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Testimonials</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">What Clients Say</h2>
            <div className="section-divider mx-auto mt-4" />
          </motion.div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={t.name} data-reveal={i === 0 ? "left" : i === 1 ? "up" : "right"} className="rounded-xl border border-border bg-background p-8">
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="mt-3 flex gap-1">{Array.from({ length: t.rating }).map((_, si) => (<Star key={si} className="h-4 w-4 fill-primary text-primary" />))}</div>
                <p className="mt-4 text-muted-foreground leading-relaxed italic">&quot;{t.text}&quot;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">{t.name.split(" ").map(n => n[0]).join("")}</div>
                  <div><p className="font-heading text-sm font-semibold">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Trusted By</p>
            <h2 className="mt-3 font-heading text-2xl font-bold md:text-3xl">Companies We&apos;ve Worked With</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {clients.map((c) => (<div key={c} className="flex items-center justify-center rounded-lg border border-border bg-card p-6 font-heading text-lg font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground">{c}</div>))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border bg-card py-24">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-heading text-xs font-medium uppercase tracking-widest text-primary">Let&apos;s Collaborate</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl font-bold md:text-5xl">Ready to Start Your<br /><span className="text-gradient">Next Project?</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="mt-4 text-muted-foreground max-w-lg mx-auto">Let&apos;s create something extraordinary together. Get in touch and let&apos;s discuss how we can bring your vision to life.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild><Link href="/contact">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button variant="heroOutline" size="lg" asChild><Link href="/who-we-are">Learn About Us</Link></Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
