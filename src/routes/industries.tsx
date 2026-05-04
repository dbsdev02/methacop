import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Wind, Car, Recycle, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import copperWire from "@/assets/copper-wire.jpg";
import copperPipes from "@/assets/copper-pipes.jpg";
import copperCircuit from "@/assets/copper-circuit.jpg";
import copperIngots from "@/assets/copper-ingots.jpg";
import copperFactory from "@/assets/copper-factory.jpg";
import copperIndustry from "@/assets/copper-industry.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Power — Mehtacop Refinery Pvt. Ltd." },
      { name: "description", content: "Copper solutions for power & electrical, HVAC, automotive, metal processing, and construction industries. ISO 9001:2015 certified." },
      { property: "og:title", content: "Industries We Power — Mehtacop Refinery Pvt. Ltd." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    Icon: Zap,
    title: "Power & Electrical Infrastructure",
    desc: "Copper is the backbone of electrical infrastructure — and purity is everything. Our LME Grade A cathodes deliver the conductivity and consistency demanded by power cables, transformers, busbars, switchgear, and electrical winding applications.",
    applications: ["Power Cables & Wiring", "Transformers & Inductors", "Busbars & Switchgear", "Electrical Windings", "Overhead Transmission Lines"],
    products: ["Copper Cathodes", "Copper Ingots"],
    img: copperWire,
  },
  {
    Icon: Wind,
    title: "HVAC & Cooling Systems",
    desc: "Thermal efficiency in HVAC and refrigeration systems depends on the quality of copper used. Our precision copper products deliver the thermal conductivity and formability required for heat exchangers, refrigeration coils, and air conditioning components.",
    applications: ["Heat Exchangers", "Refrigeration Coils", "Air Conditioning Units", "Chiller Systems", "Industrial Cooling"],
    products: ["Copper Cathodes", "Copper Ingots"],
    img: copperPipes,
  },
  {
    Icon: Car,
    title: "Automotive & Engineering",
    desc: "Modern vehicles and precision engineering applications demand copper with consistent composition and structural integrity. From electric motors to radiators and connectors, our copper products meet the exacting standards of the automotive sector.",
    applications: ["Electric Motor Windings", "Radiators & Heat Sinks", "Connectors & Terminals", "Brake Systems", "Precision Engineering Parts"],
    products: ["Copper Cathodes", "Copper Anodes", "Copper Ingots"],
    img: copperCircuit,
  },
  {
    Icon: Recycle,
    title: "Metal Processing & Recycling",
    desc: "Our ICW scrap processing and slag/dross recovery solutions are designed for metal processors and recyclers who demand high recovery efficiency and consistent output quality. We maximize material value at every stage of the recycling cycle.",
    applications: ["Secondary Copper Smelting", "Scrap Processing", "Dross Recovery", "Alloy Manufacturing", "Metal Refining"],
    products: ["ICW Scrap", "Slag / Dross Processing"],
    img: copperIngots,
  },
  {
    Icon: Building2,
    title: "Construction & Industrial Manufacturing",
    desc: "From plumbing and roofing to industrial fabrication and casting, copper's durability and workability make it indispensable in construction. Our ingots and anodes provide the structural integrity and composition control required for demanding applications.",
    applications: ["Plumbing & Piping", "Roofing & Cladding", "Industrial Fabrication", "Casting & Foundry", "Architectural Applications"],
    products: ["Copper Ingots", "Copper Anodes"],
    img: copperFactory,
  },
];

function IndustriesPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto pt-6 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1fr_380px] gap-10 items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-5">Industries We Power</p>
              <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.06] font-light tracking-tight max-w-3xl">
                Sectors That Demand<br />Uncompromising Quality
              </h1>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                Our copper products are integral to industries where performance, purity, and reliability are non-negotiable. From power infrastructure to automotive engineering, Mehtacop delivers.
              </p>
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition"
              >
                View Our Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative aspect-[16/7]">
          <img src={copperWire} alt="Industries powered by Mehtacop copper" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="px-6 md:px-10 mt-24 md:mt-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          {industries.map(({ Icon, title, desc, applications, products, img }, i) => (
            <div
              key={title}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded bg-brand-gradient text-white flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">
                    Industry {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">{title}</h2>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">{desc}</p>

                <div className="mb-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-3">Key Applications</p>
                  <div className="flex flex-wrap gap-2">
                    {applications.map((a) => (
                      <span key={a} className="rounded border border-border px-3 py-1 text-xs font-light">{a}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-7">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-3">Relevant Products</p>
                  <div className="flex flex-wrap gap-2">
                    {products.map((p) => (
                      <span key={p} className="rounded bg-brand-gradient text-white px-3 py-1 text-xs font-light">{p}</span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded border border-border px-5 py-2 text-sm font-light hover:bg-brand-gradient hover:text-white hover:border-transparent transition"
                >
                  Enquire for This Sector <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-10 mt-28">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative">
          <img src={copperIndustry} alt="Contact Mehtacop for your industry" className="w-full h-[320px] object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-[color:var(--brand-purple)]/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <h3 className="text-2xl md:text-3xl font-light mb-3 tracking-tight">Don't See Your Industry?</h3>
            <p className="text-sm font-light text-white/75 max-w-lg mb-7">
              We supply copper solutions across a wide range of sectors. Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition">
                Get in Touch
              </Link>
              <Link to="/what-we-do" className="inline-flex items-center gap-2 rounded border border-white/35 bg-white/8 backdrop-blur-sm px-6 py-2.5 text-sm font-light hover:bg-white/15 transition">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

