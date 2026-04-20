"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Timer, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@apexstudio.com", desc: "We reply within 24 hours" },
  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", desc: "Mon-Fri, 9am-6pm EST" },
  { icon: MapPin, label: "Visit Us", value: "123 Creative Ave, New York, NY 10001", desc: "By appointment only" },
  { icon: Timer, label: "Working Hours", value: "Monday - Friday", desc: "9:00 AM - 6:00 PM EST" },
];



const faqs = [
  { q: "What is your typical project timeline?", a: "Project timelines vary based on scope and complexity. A typical website takes 4-8 weeks, while larger applications can take 3-6 months. We'll provide a detailed timeline during our discovery phase." },
  { q: "How do you handle project pricing?", a: "We offer both fixed-price and hourly billing models. After our initial consultation, we'll provide a detailed proposal with transparent pricing. No hidden fees, ever." },
  { q: "Do you provide ongoing support after launch?", a: "Absolutely! We offer maintenance packages that include bug fixes, security updates, performance monitoring, and feature enhancements. We're your long-term digital partner." },
  { q: "What technologies do you work with?", a: "We specialize in React, TypeScript, Node.js, Python, and modern cloud platforms like AWS and GCP. We choose the best tech stack based on your project's specific needs." },
  { q: "Can you work with our existing team?", a: "Yes! We frequently collaborate with in-house teams. Whether you need us to lead the project or augment your existing capabilities, we adapt to your workflow." },
  { q: "What's your design process like?", a: "We follow a user-centered design process: Research → Wireframes → Visual Design → Prototyping → Testing. We involve you at every stage to ensure the result matches your vision." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center border-b border-border">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
            <MessageCircle className="h-3 w-3 text-primary" />
            <span className="font-heading text-xs font-medium uppercase tracking-widest text-primary">Get In Touch</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Let&apos;s <span className="text-gradient">Talk</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 max-w-xl text-lg text-muted-foreground">
            Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s start a conversation about how we can help.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((c, i) => (
              <motion.div key={c.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-primary/50">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><c.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-heading text-sm font-semibold uppercase tracking-widest text-primary">{c.label}</h3>
                <p className="mt-2 font-medium text-foreground text-sm">{c.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              <div className="section-divider mt-3" />
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-muted-foreground">Full Name *</label>
                    <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="bg-card border-border focus:border-primary" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-muted-foreground">Email Address *</label>
                    <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" className="bg-card border-border focus:border-primary" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-muted-foreground">Phone Number</label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000" className="bg-card border-border focus:border-primary" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-muted-foreground">Company Name</label>
                    <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your Company" className="bg-card border-border focus:border-primary" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">Subject *</label>
                  <Input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Project Inquiry" className="bg-card border-border focus:border-primary" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">Message *</label>
                  <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project, timeline, budget, and any specific requirements..." rows={6} className="bg-card border-border focus:border-primary" />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-8 lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-heading text-lg font-bold">Why Work With Us?</h3>
                <div className="section-divider mt-3" />
                <div className="mt-6 space-y-4">
                  {["Free initial consultation", "Transparent pricing, no hidden fees", "Dedicated project manager", "24/7 support during development", "Post-launch maintenance included", "100% satisfaction guarantee"].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center"><div className="h-2 w-2 rounded-full bg-primary" /></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 rounded-xl border border-border bg-card flex items-center justify-center min-h-[200px]">
                <div className="text-center p-6">
                  <MapPin className="mx-auto h-8 w-8 text-primary/30" />
                  <p className="mt-3 font-heading text-sm font-semibold text-foreground">New York, NY</p>
                  <p className="mt-1 text-xs text-muted-foreground">123 Creative Ave, Suite 400</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Got questions? We&apos;ve got answers. If you don&apos;t see your question here, feel free to reach out directly.</p>
            <div className="section-divider mx-auto mt-4" />
          </motion.div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-xl border border-border bg-background overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-muted/30">
                  <span className="font-heading text-sm font-semibold pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="h-4 w-4 shrink-0 text-primary" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
                </button>
                {openFaq === i && (
                  <div className="border-t border-border px-5 py-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
