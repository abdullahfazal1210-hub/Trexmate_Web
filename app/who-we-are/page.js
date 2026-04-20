"use client";

import { motion } from "framer-motion";
import { Users, Award, Globe, Rocket, Heart, Shield, Lightbulb, CheckCircle } from "lucide-react";

const values = [
  { icon: Rocket, title: "Innovation", desc: "We push boundaries and embrace new technologies to deliver forward-thinking solutions." },
  { icon: Users, title: "Collaboration", desc: "Great work happens when great minds come together. We partner closely with every client." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in every pixel and every line of code." },
  { icon: Globe, title: "Impact", desc: "We create digital products that make a real difference in people's lives." },
  { icon: Heart, title: "Passion", desc: "We love what we do and it shows in the quality of work we deliver to every client." },
  { icon: Shield, title: "Integrity", desc: "Transparency and honesty are the foundation of every relationship we build." },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Founder", bio: "15+ years of experience in digital strategy and business leadership." },
  { name: "Sarah Chen", role: "Creative Director", bio: "Award-winning designer with a passion for creating memorable brand experiences." },
  { name: "Marcus Johnson", role: "Lead Developer", bio: "Full-stack engineer specializing in scalable, high-performance applications." },
  { name: "Emma Williams", role: "UX Strategist", bio: "User experience expert focused on research-driven, human-centered design." },
  { name: "Ryan O'Brien", role: "Project Manager", bio: "Certified PMP with a track record of delivering complex projects on time." },
  { name: "Priya Sharma", role: "Marketing Lead", bio: "Data-driven marketer with expertise in growth strategies and analytics." },
  { name: "Tom Baker", role: "Backend Engineer", bio: "Cloud architecture specialist with experience in microservices and DevOps." },
  { name: "Nina Kowalski", role: "UI Designer", bio: "Pixel-perfect designer with a keen eye for typography and visual systems." },
];

const timeline = [
  { year: "2014", title: "Founded", desc: "Started as a two-person studio in a small New York apartment with big dreams." },
  { year: "2016", title: "First Major Client", desc: "Landed our first Fortune 500 client, establishing our reputation in enterprise work." },
  { year: "2018", title: "Team of 10", desc: "Grew to 10 full-time team members and moved into our first official office space." },
  { year: "2020", title: "100 Projects", desc: "Celebrated our 100th project milestone and expanded into international markets." },
  { year: "2022", title: "Award Winners", desc: "Won multiple industry awards for design excellence and client satisfaction." },
  { year: "2024", title: "Global Reach", desc: "Now serving clients across 15+ countries with a team of 25+ creative professionals." },
];

const techStack = ["React", "TypeScript", "Node.js", "Python", "AWS", "Figma", "Next.js", "PostgreSQL", "Docker", "Tailwind CSS", "GraphQL", "Redis"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function WhoWeArePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center border-b border-border">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-heading text-xs font-medium uppercase tracking-widest text-primary">Our Story</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            We Are <span className="text-gradient">Trexmate</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
            A passionate team of designers, developers, and strategists dedicated to crafting exceptional digital experiences since 2014.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><Lightbulb className="h-6 w-6" /></div>
              <h3 className="mt-5 font-heading text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact. We believe every brand deserves a powerful digital presence.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-card p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><Globe className="h-6 w-6" /></div>
              <h3 className="mt-5 font-heading text-2xl font-bold">Our Vision</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">To be the world&apos;s most trusted creative partner, known for pushing the boundaries of digital design and building products that people genuinely love to use every day.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Who We Are</p>
              <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">From a small studio to a global creative force</h2>
              <div className="section-divider mt-4" />
              <p className="mt-6 text-muted-foreground leading-relaxed">Founded in 2014, Trexmate started as a two-person design studio with a shared vision: to make the digital world more beautiful and functional. Over the years, we&apos;ve grown into a full-service digital agency, working with startups and Fortune 500 companies alike.</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">Today, our team of 25+ creatives and technologists continues to push the boundaries of what&apos;s possible in digital design and development. We&apos;ve completed 150+ projects across 15 countries, earning multiple industry awards along the way.</p>
              <div className="mt-8 space-y-3">
                {["End-to-end digital solutions", "Award-winning design team", "Agile & transparent process", "Long-term partnership approach"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {[{ val: "150+", label: "Projects Delivered" }, { val: "98%", label: "Client Satisfaction" }, { val: "10+", label: "Years in Business" }, { val: "15+", label: "Countries Served" }, { val: "25+", label: "Team Members" }, { val: "50+", label: "Happy Clients" }].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-background p-6 text-center">
                  <span className="font-heading text-2xl font-bold text-primary">{s.val}</span>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Journey</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">How We Got Here</h2>
            <div className="section-divider mx-auto mt-4" />
          </motion.div>
          <div className="mt-16 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
            {timeline.map((t, i) => (
              <motion.div key={t.year} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`relative mb-10 last:mb-0 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
                <div className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-auto ${i % 2 === 0 ? "md:-right-[6.5px]" : "md:-left-[6.5px]"}`} />
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-heading text-sm font-bold text-primary">{t.year}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Values</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">What Drives Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">These core principles guide everything we do, from how we treat our clients to the quality standards we uphold.</p>
            <div className="section-divider mx-auto mt-4" />
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-xl border border-border bg-background p-8 text-center transition-all hover:border-primary/50">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><v.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-heading text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Technologies</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Our Tech Stack</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">We use the latest and most reliable technologies to build scalable, high-performance solutions.</p>
            <div className="section-divider mx-auto mt-4" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (<span key={tech} className="rounded-lg border border-border bg-card px-5 py-3 font-heading text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary">{tech}</span>))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">The Team</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Meet the Experts</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Our diverse team brings together world-class talent from design, engineering, and marketing backgrounds.</p>
            <div className="section-divider mx-auto mt-4" />
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group overflow-hidden rounded-xl border border-border bg-background transition-all hover:border-primary/50">
                <div className="aspect-square bg-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="font-heading text-4xl font-bold text-muted-foreground/30">{t.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold">{t.name}</h3>
                  <p className="text-sm text-primary">{t.role}</p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{t.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
