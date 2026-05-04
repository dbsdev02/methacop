import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ArrowRight, ChevronRight,
  Zap, Wind, Car, Recycle, Building2,
  ShieldCheck, Award, Globe, Truck, FlaskConical,
} from "lucide-react";
import copperHero from "@/assets/copper-hero.jpg";
import copperWire from "@/assets/copper-wire.jpg";
import copperMolten from "@/assets/copper-molten.jpg";
import copperFactory from "@/assets/copper-factory.jpg";
import copperIngots from "@/assets/copper-ingots.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mehtacop Refinery Pvt. Ltd. — Engineering Purity. Delivering Performance." },
      { name: "description", content: "Global-grade copper cathodes, anodes and ingots. ISO 9001:2015 certified manufacturer and exporter. Part of the Nakoda Group of Companies." },
      { property: "og:title", content: "Mehtacop Refinery Pvt. Ltd." },
      { property: "og:description", content: "Engineering Purity. Delivering Performance." },
    ],
  }),
  component: Home,
});

const products = [
  {
    title: "Copper Cathodes",
    desc: "High-purity, LME Grade A cathodes with 99.99% copper content — the benchmark for electrical conductivity and industrial reliability.",
  },
  {
    title: "Copper Anodes",
    desc: "Uniform, defect-free anodes precision-cast for efficient electro-refining and electroplating processes.",
  },
  {
    title: "Copper Ingots",
    desc: "Structurally sound ingots with tightly controlled composition — engineered for downstream manufacturing and alloying.",
  },
  {
    title: "Slag / Dross Processing",
    desc: "Advanced recovery solutions that extract maximum copper value from slag and dross while meeting environmental standards.",
  },
  {
    title: "ICW Scrap",
    desc: "Carefully graded insulated copper wire scrap, processed for high recovery efficiency and consistent quality output.",
  },
];

const edge = [
  { Icon: FlaskConical, label: "Consistent High-Purity Output" },
  { Icon: Award, label: "ISO 9001:2015 Certified Manufacturing" },
  { Icon: Truck, label: "Scalable & Reliable Supply Chain" },
  { Icon: ShieldCheck, label: "Strong Industry Affiliations" },
  { Icon: Globe, label: "Export-Ready Infrastructure" },
];

const industries = [
  { Icon: Zap, label: "Power & Electrical Infrastructure" },
  { Icon: Wind, label: "HVAC & Cooling Systems" },
  { Icon: Car, label: "Automotive & Engineering" },
  { Icon: Recycle, label: "Metal Processing & Recycling" },
  { Icon: Building2, label: "Construction & Industrial Manufacturing" },
];

const leaders = [
  {
    name: "Manish P. Jain",
    role: "Director, Mehtacop Refinery Pvt. Ltd.",
    affiliation: "Vice President — Bombay Metal Exchange Ltd.",
  },
  {
    name: "Pravin P. Jain",
    role: "Director, Mehtacop Refinery Pvt. Ltd.",
    affiliation: "Director — Bombay Non-Ferrous Metal Association",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── HERO ── */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={copperHero}
          alt="Mehtacop copper refinery operations"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920} height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70" />
        <SiteHeader overlay />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/60 mb-5 font-light">
            Mehtacop Refinery Pvt. Ltd. &nbsp;·&nbsp; Part of Nakoda Group
          </p>
          <h1 className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-light leading-[1.08] max-w-4xl tracking-tight">
            Engineering Purity.<br className="hidden md:block" /> Delivering Performance.
          </h1>
          <p className="mt-6 text-base md:text-xl font-light text-white/75 max-w-2xl leading-relaxed">
            Global-grade copper solutions — backed by decades of metallurgical legacy and built for the demands of tomorrow's industries.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded bg-brand-gradient px-8 py-3.5 text-sm font-medium shadow-brand hover:opacity-90 transition"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 rounded border border-white/35 bg-white/8 backdrop-blur-sm px-8 py-3.5 text-sm font-light hover:bg-white/15 transition"
            >
              Explore Products <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <div className="h-10 w-px bg-gradient-to-b from-transparent to-white/40" />
        </div>
      </section>

      {/* ── BRAND STATEMENT ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-28">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">
              Part of Nakoda Group of Companies
            </span>
            <h2 className="mt-4 text-3xl md:text-[2.6rem] font-light leading-[1.1] tracking-tight">
              A Refined Force in<br />Copper Manufacturing
            </h2>
            <div className="mt-6 h-px w-16 bg-brand-gradient rounded" />
          </div>
          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
            Mehtacop Refinery stands at the intersection of legacy, precision, and industrial excellence. With decades of metallurgical expertise, we manufacture and export high-grade copper products that meet the evolving demands of global industries — delivering consistency, traceability, and trust at scale.
          </p>
        </div>
      </section>

      {/* ── ABOUT BANNER ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-24">
        <div className="relative rounded-3xl overflow-hidden h-[440px]">
          <img
            src={copperWire}
            alt="Copper wire and cables"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy" width={1600} height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-14 text-white max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-3 font-light">About Us</span>
            <h3 className="text-3xl md:text-4xl font-light leading-tight mb-4">
              Decades of Expertise.<br />One Standard — Excellence.
            </h3>
            <p className="text-sm font-light text-white/80 leading-relaxed mb-7 max-w-lg">
              Established to redefine copper manufacturing in India, Mehtacop Refinery operates under ISO 9001:2015 standards — combining advanced refining processes with stringent quality control. Our leadership actively contributes to the Bombay Metal Exchange and the Bombay Non-Ferrous Metal Association.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 self-start rounded bg-white text-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">Our Products</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight">
              Precision-Engineered Copper Solutions
            </h2>
          </div>
          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-medium shadow-brand hover:opacity-90 transition shrink-0"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <article
              key={i}
              className="group rounded-2xl bg-secondary p-7 flex flex-col gap-4 min-h-[210px] hover:shadow-brand transition-shadow duration-300"
            >
              <h3 className="text-lg font-light tracking-tight">{p.title}</h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <Link
                to="/what-we-do"
                className="text-sm font-medium inline-flex items-center gap-2 self-start rounded border border-border px-4 py-1.5 group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent transition"
              >
                Learn more
              </Link>
            </article>
          ))}
          <article className="rounded-2xl bg-brand-gradient text-white p-7 flex flex-col gap-4 min-h-[210px] relative overflow-hidden">
            <div className="orbital-circles opacity-30" />
            <h3 className="relative text-lg font-light">Download Technical Specifications</h3>
            <p className="relative text-sm font-light text-white/80 leading-relaxed flex-1">
              Get detailed product datasheets, quality certifications, and compliance documents for all our copper products.
            </p>
            <button className="relative text-sm font-medium inline-flex items-center gap-2 self-start rounded border border-white/40 px-4 py-1.5 hover:bg-white/15 transition">
              Download <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        </div>
      </section>

      {/* ── WAVE DIVIDER ── */}
      <div className="my-24 max-w-6xl mx-auto px-6">
        <div className="wave-line h-20" />
      </div>

      {/* ── OUR EDGE ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">Our Edge</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight tracking-tight">
              Built on Precision.<br />Driven by Reliability.
            </h2>
            <p className="mt-5 text-base font-light text-muted-foreground leading-relaxed">
              At Mehtacop, quality is not a checkpoint — it is a continuous process embedded into every stage of production. We don't just meet standards; we build long-term industrial partnerships grounded in trust and performance.
            </p>
            <Link
              to="/our-edge"
              className="mt-8 inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-medium shadow-brand hover:opacity-90 transition"
            >
              What Sets Us Apart <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {edge.map(({ Icon, label }, i) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl bg-secondary px-5 py-4 hover:shadow-brand transition-shadow duration-300"
              >
                <div className="h-10 w-10 rounded bg-brand-gradient text-white flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-light">{label}</span>
                <span className="ml-auto text-xs text-muted-foreground font-light">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28 text-center">
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">Industries We Power</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight mb-4">
          Sectors That Demand Uncompromising Quality
        </h2>
        <p className="text-base font-light text-muted-foreground max-w-2xl mx-auto mb-12">
          Our copper products are integral to industries where performance, purity, and reliability are non-negotiable.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map(({ Icon, label }) => (
            <Link
              key={label}
              to="/industries"
              className="flex items-center gap-3 rounded border border-border px-6 py-3 text-sm font-light hover:bg-brand-gradient hover:text-white hover:border-transparent hover:shadow-brand transition-all duration-300 group"
            >
              <Icon className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── MANUFACTURING EXCELLENCE ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28">
        <div className="relative rounded-3xl overflow-hidden grid md:grid-cols-2 min-h-[400px]">
          <img
            src={copperMolten}
            alt="Copper smelting and refining"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="bg-brand-gradient text-white p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
            <div className="orbital-circles" />
            <span className="relative text-[11px] uppercase tracking-[0.2em] text-white/60 mb-4 font-light">
              Manufacturing Excellence
            </span>
            <h3 className="relative text-2xl md:text-3xl font-light leading-tight mb-5">
              Where Technology<br />Meets Metallurgy
            </h3>
            <p className="relative text-sm font-light text-white/80 leading-relaxed mb-7">
              Our facility integrates modern refining techniques with rigorous multi-stage testing protocols — ensuring every batch meets international purity and structural standards before dispatch.
            </p>
            <div className="relative flex flex-wrap gap-2">
              {["Purity Control", "Structural Integrity", "Performance Reliability", "Timely Delivery"].map((t) => (
                <span key={t} className="rounded border border-white/25 px-3.5 py-1 text-xs font-light">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL OUTLOOK ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28 text-center">
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">Global Outlook</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight">Built in India. Trusted Worldwide.</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-light leading-relaxed">
          With a growing footprint in international markets, Mehtacop Refinery is positioned as a reliable export partner — delivering consistent, high-grade copper solutions across borders.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { stat: "99.99%", label: "Copper Purity — LME Grade A" },
            { stat: "ISO", label: "9001:2015 Certified" },
            { stat: "BME", label: "Bombay Metal Exchange Member" },
            { stat: "Export", label: "Ready Infrastructure" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-secondary p-6 text-center">
              <div className="text-2xl md:text-3xl font-light text-brand-gradient mb-2">{s.stat}</div>
              <p className="text-xs font-light text-muted-foreground leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">Leadership</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight">Guided by Industry Veterans</h2>
          </div>
          <Link
            to="/leadership"
            className="inline-flex items-center gap-2 rounded border border-border px-5 py-2 text-sm font-light hover:bg-secondary transition shrink-0"
          >
            Meet the Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {leaders.map((l) => (
            <div key={l.name} className="rounded-2xl bg-secondary p-8 flex items-start gap-5">
              <div className="h-14 w-14 rounded bg-brand-gradient shrink-0" />
              <div>
                <h3 className="text-lg font-light tracking-tight">{l.name}</h3>
                <p className="text-sm text-muted-foreground font-light mt-1">{l.role}</p>
                <p className="text-xs text-muted-foreground font-light mt-1 opacity-80">{l.affiliation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ESG ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28">
        <div className="rounded-3xl bg-secondary p-10 md:p-16 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">Sustainability & Responsibility</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight">Responsibility in Every Refinement</h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground font-light leading-relaxed">
            We are committed to sustainable practices, efficient resource utilization, and responsible metal processing — ensuring long-term value for both industry and environment. Every recovery process is designed to minimize waste and maximize material value.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Sustainable Processing", "Efficient Resource Use", "Responsible Sourcing", "Minimal Waste Output"].map((t) => (
              <span key={t} className="rounded border border-border px-5 py-2 text-sm font-light">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28">
        <div className="relative rounded-3xl overflow-hidden grid md:grid-cols-2 min-h-[340px]">
          <img
            src={copperFactory}
            alt="Mehtacop copper manufacturing facility"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="bg-secondary p-10 md:p-14 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">Get in Touch</span>
            <h3 className="mt-4 text-2xl md:text-3xl font-light leading-tight tracking-tight">
              Partner with a Reliable<br />Copper Manufacturer
            </h3>
            <p className="mt-4 text-sm font-light text-muted-foreground leading-relaxed">
              Whether you require bulk supply, long-term sourcing partnerships, or technical specifications — Mehtacop delivers with precision and consistency.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-medium shadow-brand hover:opacity-90 transition"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="rounded border border-border px-6 py-2.5 text-sm font-medium hover:bg-accent transition"
              >
                Connect with Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

