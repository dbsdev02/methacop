import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, Award, Truck, ShieldCheck, Globe, CheckCircle2, BarChart3, Layers, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import copperMolten from "@/assets/copper-molten.jpg";
import copperWire from "@/assets/copper-wire.jpg";
import copperIndustry from "@/assets/copper-industry.jpg";

export const Route = createFileRoute("/our-edge")({
  component: OurEdgePage,
});

const differentiators = [
  {
    Icon: FlaskConical,
    title: "Consistent High-Purity Output",
    desc: "Every batch of copper we produce meets LME Grade A standards — 99.99% purity with consistent dimensions and surface quality. Our refining process is engineered to eliminate variability.",
    stat: "99.99%",
    statLabel: "Copper Purity",
  },
  {
    Icon: Award,
    title: "ISO 9001:2015 Certified Manufacturing",
    desc: "Our quality management system is certified to ISO 9001:2015 — covering every stage from raw material intake to final dispatch. Quality is not a checkpoint; it is embedded in every process.",
    stat: "ISO",
    statLabel: "9001:2015 Certified",
  },
  {
    Icon: Truck,
    title: "Scalable & Reliable Supply Chain",
    desc: "Whether you need a single consignment or a long-term bulk supply arrangement, our production capacity and logistics infrastructure scale to meet your requirements — on time, every time.",
    stat: "Pan-India",
    statLabel: "& Export Supply",
  },
  {
    Icon: ShieldCheck,
    title: "Strong Industry Affiliations",
    desc: "Our directors hold leadership positions at the Bombay Metal Exchange and the Bombay Non-Ferrous Metal Association — giving us deep market intelligence, governance credibility, and industry trust.",
    stat: "BME",
    statLabel: "& BNFMA Member",
  },
  {
    Icon: Globe,
    title: "Export-Ready Infrastructure",
    desc: "With documentation, packaging, and logistics aligned for international trade, we are a reliable export partner for copper buyers across global markets.",
    stat: "Global",
    statLabel: "Export Capability",
  },
];

const qualitySteps = [
  { Icon: Layers, title: "Raw Material Inspection", desc: "Every input is tested and graded before entering the production cycle." },
  { Icon: FlaskConical, title: "In-Process Testing", desc: "Continuous monitoring at each refining stage ensures purity targets are maintained." },
  { Icon: BarChart3, title: "Final Quality Audit", desc: "Every finished batch undergoes a comprehensive quality audit before dispatch." },
  { Icon: Clock, title: "Traceability & Documentation", desc: "Full batch traceability with certificates of analysis for every shipment." },
];

function OurEdgePage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto pt-6 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1fr_380px] gap-10 items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-5">Our Edge</p>
              <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.06] font-light tracking-tight max-w-3xl">
                Built on Precision.<br />Driven by Reliability.
              </h1>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                At Mehtacop, quality is not a checkpoint — it is a continuous process embedded into every stage of production. We don't just meet standards; we build long-term industrial partnerships grounded in trust and performance.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition"
              >
                Partner with Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative aspect-[16/7]">
          <img
            src={copperMolten}
            alt="Mehtacop manufacturing excellence"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="px-6 md:px-10 mt-24 md:mt-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-5">What Sets Us Apart</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-tight tracking-tight">
            Five Pillars of Industrial Excellence
          </h2>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {differentiators.map(({ Icon, title, desc, stat, statLabel }, i) => (
            <div
              key={title}
              className={`rounded-2xl overflow-hidden grid md:grid-cols-[1fr_200px] ${i % 2 === 0 ? "bg-secondary" : "bg-brand-gradient text-white"}`}
            >
              <div className="p-8 md:p-10 flex gap-6 items-start">
                <div className={`h-12 w-12 rounded flex items-center justify-center shrink-0 ${i % 2 === 0 ? "bg-brand-gradient text-white" : "bg-white/15 text-white"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-light tracking-tight mb-3">{title}</h3>
                  <p className={`text-sm font-light leading-relaxed ${i % 2 === 0 ? "text-muted-foreground" : "text-white/80"}`}>{desc}</p>
                </div>
              </div>
              <div className={`hidden md:flex flex-col items-center justify-center p-8 border-l ${i % 2 === 0 ? "border-border" : "border-white/15"}`}>
                <span className={`text-3xl font-light tracking-tight ${i % 2 === 0 ? "text-brand-gradient" : "text-white"}`}>{stat}</span>
                <span className={`text-xs font-light mt-1 text-center ${i % 2 === 0 ? "text-muted-foreground" : "text-white/70"}`}>{statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUALITY SYSTEM ── */}
      <section className="px-6 md:px-10 mt-28">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden grid md:grid-cols-2 min-h-[420px]">
          <img
            src={copperWire}
            alt="Mehtacop quality control process"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="bg-secondary p-8 md:p-12 flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-4">Quality System</p>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-8">
              ISO 9001:2015 — Quality at Every Stage
            </h3>
            <div className="flex flex-col gap-5">
              {qualitySteps.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded bg-brand-gradient text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium tracking-tight">{title}</h4>
                    <p className="text-xs text-muted-foreground font-light mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="px-6 md:px-10 mt-24 text-center">
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">Certifications & Affiliations</span>
        <h2 className="mt-4 text-3xl font-light tracking-tight mb-12">Recognised. Certified. Trusted.</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "ISO 9001:2015", desc: "Quality Management System" },
            { title: "LME Grade A", desc: "London Metal Exchange Standard" },
            { title: "Bombay Metal Exchange", desc: "Vice President Representation" },
            { title: "BNFMA", desc: "Bombay Non-Ferrous Metal Association" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-secondary p-6 flex flex-col items-center text-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-[color:var(--brand-purple)]" />
              <h4 className="text-sm font-medium tracking-tight">{c.title}</h4>
              <p className="text-xs text-muted-foreground font-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-10 mt-24">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative">
          <img src={copperIndustry} alt="Partner with Mehtacop" className="w-full h-[320px] object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-[color:var(--brand-purple)]/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <h3 className="text-2xl md:text-3xl font-light mb-3 tracking-tight">Experience the Mehtacop Difference</h3>
            <p className="text-sm font-light text-white/75 max-w-lg mb-7">
              Partner with a manufacturer that delivers consistency, traceability, and trust — at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition">
                Request a Quote
              </Link>
              <Link to="/what-we-do" className="inline-flex items-center gap-2 rounded border border-white/35 bg-white/8 backdrop-blur-sm px-6 py-2.5 text-sm font-light hover:bg-white/15 transition">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

