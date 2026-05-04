import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Wind, Car, Recycle, Building2, FlaskConical, Layers, Cpu, Leaf } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import copperWire from "@/assets/copper-wire.jpg";
import copperIngots from "@/assets/copper-ingots.jpg";
import copperMolten from "@/assets/copper-molten.jpg";
import copperFactory from "@/assets/copper-factory.jpg";
import copperCircuit from "@/assets/copper-circuit.jpg";
import copperManufacturing from "@/assets/copper-manufacturing.jpg";
import copperHero from "@/assets/copper-hero.jpg";

export const Route = createFileRoute("/what-we-do")({
  component: ProductsPage,
});

const products = [
  {
    title: "Copper Cathodes",
    tag: "Primary Product",
    desc: "High-purity, LME Grade A cathodes with 99.99% copper content — the global benchmark for electrical conductivity, consistency, and industrial reliability.",
    specs: ["LME Grade A", "99.99% Cu Purity", "Superior Conductivity", "Consistent Dimensions"],
    img: copperWire,
  },
  {
    title: "Copper Anodes",
    tag: "Electro-Refining",
    desc: "Uniform, defect-free anodes precision-cast for efficient electro-refining and electroplating processes — ensuring maximum yield and minimal impurities.",
    specs: ["Defect-Free Surface", "Uniform Composition", "Electro-Refining Grade", "Controlled Weight"],
    img: copperIngots,
  },
  {
    title: "Copper Ingots",
    tag: "Manufacturing Grade",
    desc: "Structurally sound ingots with tightly controlled composition — engineered for downstream manufacturing, casting, and alloying applications.",
    specs: ["Controlled Composition", "Alloying Grade", "Structural Integrity", "Custom Sizing"],
    img: copperMolten,
  },
  {
    title: "Slag / Dross Processing",
    tag: "Recovery Solutions",
    desc: "Advanced recovery solutions that extract maximum copper value from slag and dross — maximizing material yield while meeting environmental responsibility standards.",
    specs: ["High Recovery Rate", "Eco-Responsible", "Value Maximization", "Certified Process"],
    img: copperFactory,
  },
];

const process = [
  {
    Icon: FlaskConical,
    step: "01",
    title: "Raw Material Sourcing",
    desc: "Carefully vetted inputs — including ICW scrap and copper-bearing materials — sourced for quality and traceability.",
  },
  {
    Icon: Layers,
    step: "02",
    title: "Refining & Processing",
    desc: "Advanced smelting and electrolytic refining processes deliver maximum purity and consistent output.",
  },
  {
    Icon: Cpu,
    step: "03",
    title: "Quality Testing",
    desc: "Multi-stage testing against international benchmarks at every production step — no batch leaves without certification.",
  },
  {
    Icon: Leaf,
    step: "04",
    title: "Dispatch & Delivery",
    desc: "Optimized packaging and logistics ensure timely, damage-free delivery to domestic and international customers.",
  },
];

const industries = [
  { Icon: Zap, label: "Power & Electrical Infrastructure", desc: "High-conductivity cathodes for cables, transformers, busbars, and switchgear." },
  { Icon: Wind, label: "HVAC & Cooling Systems", desc: "Precision copper for heat exchangers, refrigeration coils, and HVAC components." },
  { Icon: Car, label: "Automotive & Engineering", desc: "Reliable copper alloys for motors, connectors, radiators, and precision parts." },
  { Icon: Recycle, label: "Metal Processing & Recycling", desc: "ICW scrap and dross processing for efficient secondary copper recovery." },
  { Icon: Building2, label: "Construction & Industrial Manufacturing", desc: "Ingots and anodes for plumbing, roofing, industrial fabrication, and casting." },
];

function ProductsPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto pt-6 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1fr_380px] gap-10 items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-5">Our Products</p>
              <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.06] font-light tracking-tight max-w-3xl">
                Precision-Engineered<br />Copper Solutions
              </h1>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                A comprehensive range of copper products designed for performance-critical applications — manufactured under ISO 9001:2015 standards with rigorous quality control at every stage.
              </p>
              <button className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition">
                Download Specifications <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative aspect-[16/7]">
          <img
            src={copperHero}
            alt="Mehtacop copper products — cathodes, anodes and ingots"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-6 right-6 h-1 w-20 rounded bg-brand-gradient" />
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section className="px-6 md:px-10 mt-24 md:mt-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-5">Product Range</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-tight tracking-tight mb-5">
            Engineered for Performance. Refined for Excellence.
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Every product is manufactured under ISO 9001:2015 standards with rigorous quality control — ensuring international benchmark compliance from raw material to final dispatch.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.title} className="rounded-2xl overflow-hidden bg-secondary group">
              <div className="aspect-[16/7] overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 rounded bg-black/50 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-3 py-1 font-light">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-light tracking-tight mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.specs.map((s) => (
                    <span key={s} className="rounded border border-border px-3 py-1 text-xs font-light">{s}</span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="text-sm font-medium inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-5 py-2 hover:opacity-90 transition"
                >
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── ICW SCRAP — FULL WIDTH ── */}
        <div className="max-w-7xl mx-auto mt-6 rounded-2xl overflow-hidden bg-brand-gradient text-white grid md:grid-cols-[1fr_auto] min-h-[240px]">
          <div className="p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="orbital-circles" />
            <span className="relative text-[11px] uppercase tracking-[0.2em] text-white/60 mb-3 font-light">
              Specialty Input Material
            </span>
            <h3 className="relative text-2xl md:text-3xl font-light tracking-tight mb-4">ICW Scrap</h3>
            <p className="relative text-sm font-light text-white/80 leading-relaxed mb-6 max-w-xl">
              Carefully graded insulated copper wire scrap — sourced, sorted, and processed for high recovery efficiency and consistent quality output. A key input in our copper refining cycle.
            </p>
            <div className="relative flex flex-wrap gap-2 mb-6">
              {["High Recovery Rate", "Carefully Graded", "Consistent Output", "Eco-Responsible"].map((t) => (
                <span key={t} className="rounded border border-white/25 px-3 py-1 text-xs font-light">{t}</span>
              ))}
            </div>
            <Link
              to="/contact"
              className="relative inline-flex w-fit items-center gap-2 rounded border border-white/35 px-5 py-2 text-sm font-light hover:bg-white/10 transition"
            >
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="hidden md:block w-72 relative">
            <img
              src={copperCircuit}
              alt="ICW scrap copper wire processing"
              className="w-full h-full object-cover opacity-35"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING PROCESS ── */}
      <section className="px-6 md:px-10 mt-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">How We Work</span>
          <h2 className="mt-4 text-3xl font-light tracking-tight">From Scrap to Precision Metal</h2>
          <p className="mt-4 text-sm text-muted-foreground font-light leading-relaxed">
            Every batch follows a rigorous four-stage process — from sourcing to dispatch — ensuring consistent quality and full traceability.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {process.map(({ Icon, step, title, desc }) => (
            <div key={title} className="text-center group">
              <div className="mx-auto h-16 w-16 rounded border-2 border-[color:var(--brand-purple)] flex items-center justify-center mb-5 text-[color:var(--brand-purple)] relative bg-background group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-light">Step {step}</p>
              <h4 className="text-sm font-medium mb-2 tracking-tight">{title}</h4>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-secondary mt-24 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-4">Industries We Power</p>
            <h3 className="text-3xl font-light tracking-tight mb-4">Sectors That Demand Uncompromising Quality</h3>
            <p className="text-sm text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Our products are integral to sectors where performance, reliability, and purity are non-negotiable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map(({ Icon, label, desc }) => (
              <div key={label} className="bg-background rounded-2xl p-6 flex gap-4 hover:shadow-brand transition-shadow duration-300">
                <div className="h-11 w-11 rounded bg-brand-gradient text-white flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1.5 tracking-tight">{label}</h4>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-10 mt-24">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative">
          <img
            src={copperManufacturing}
            alt="Contact Mehtacop Refinery for copper supply"
            className="w-full h-[360px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-[color:var(--brand-purple)]/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <h3 className="text-2xl md:text-3xl font-light mb-3 tracking-tight">
              Ready to Source High-Grade Copper?
            </h3>
            <p className="text-sm font-light text-white/75 max-w-lg mb-7 leading-relaxed">
              Whether you need bulk supply, technical specifications, or a long-term sourcing partnership — our team is ready to deliver.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition"
              >
                Request a Quote
              </Link>
              <button className="inline-flex items-center gap-2 rounded border border-white/35 bg-white/8 backdrop-blur-sm px-6 py-2.5 text-sm font-light hover:bg-white/15 transition">
                Download Specifications
              </button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
