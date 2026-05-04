import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Users, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import copperFactory from "@/assets/copper-factory.jpg";
import copperMolten from "@/assets/copper-molten.jpg";
import copperIngots from "@/assets/copper-ingots.jpg";
import copperWire from "@/assets/copper-wire.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const pillars = [
  {
    Icon: Award,
    title: "ISO 9001:2015 Certified",
    desc: "Every process — from raw material intake to final dispatch — meets international quality management standards.",
  },
  {
    Icon: ShieldCheck,
    title: "Stringent Quality Control",
    desc: "Multi-stage testing and inspection protocols ensure every product batch meets global benchmarks.",
  },
  {
    Icon: Globe,
    title: "Export-Ready Operations",
    desc: "Infrastructure and documentation aligned for seamless international copper supply.",
  },
  {
    Icon: Users,
    title: "Industry Leadership",
    desc: "Active contributors to the Bombay Metal Exchange and Bombay Non-Ferrous Metal Association.",
  },
];

const milestones = [
  { year: "Founded", text: "Established with a vision to redefine copper manufacturing in India." },
  { year: "ISO Certified", text: "Achieved ISO 9001:2015 certification — embedding quality into every process." },
  { year: "BME Member", text: "Leadership joined the Bombay Metal Exchange, reinforcing market credibility." },
  { year: "Today", text: "A trusted name in non-ferrous metals, serving domestic and international markets." },
];

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto pt-6 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1fr_380px] gap-10 items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-5">About Us</p>
              <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.06] font-light tracking-tight max-w-3xl">
                Decades of Expertise.<br />One Standard — Excellence.
              </h1>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                Established with a vision to redefine copper manufacturing in India, Mehtacop Refinery Pvt. Ltd. has grown into a trusted name in the non-ferrous metal industry — combining legacy with modern metallurgical precision.
              </p>
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition"
              >
                Explore Our Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative aspect-[16/7] bg-black">
          <img
            src={copperFactory}
            alt="Mehtacop Refinery — copper manufacturing facility"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-6 left-8 text-white">
            <p className="text-xs font-light text-white/60 uppercase tracking-widest">Palghar, Maharashtra</p>
          </div>
        </div>
      </section>

      {/* ── PURPOSE ── */}
      <section className="px-6 md:px-10 mt-24 md:mt-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-5">Our Purpose</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-tight mb-5 tracking-tight">
            A Legacy of Trust. A Future of Innovation.
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Mehtacop Refinery Pvt. Ltd., a part of the renowned Nakoda Group of Companies, is a leading manufacturer and exporter of high-quality copper and copper alloy products. With decades of industry expertise and ISO 9001:2015 certification, we specialize in delivering consistent, high-purity materials tailored to industrial standards across global markets.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {pillars.map(({ Icon, title, desc }) => (
            <div key={title} className="text-center group">
              <div className="mx-auto h-16 w-16 rounded border-2 border-[color:var(--brand-purple)] flex items-center justify-center mb-5 text-[color:var(--brand-purple)] group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h4 className="text-sm font-medium mb-2 tracking-tight">{title}</h4>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition"
          >
            Explore Our Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="px-6 md:px-10 mt-24">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative">
          <img
            src={copperMolten}
            alt="Mehtacop refinery operations"
            className="w-full h-[460px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-blue)]/90 via-[color:var(--brand-blue)]/40 to-transparent" />
          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center max-w-2xl text-white">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-4 text-white/60 font-light">Our Story</p>
            <h3 className="text-3xl md:text-4xl font-light leading-tight mb-5 tracking-tight">
              Part of the Nakoda<br />Group of Companies
            </h3>
            <p className="font-light text-sm md:text-base leading-relaxed mb-7 text-white/85 max-w-md">
              Mehtacop Refinery was established with a clear vision — to bring world-class copper manufacturing to India. Today, we stand as a trusted name in the non-ferrous metal industry, combining decades of legacy with modern metallurgical precision and a commitment to global quality standards.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nakodagroupofcompanies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded border border-white/30 px-5 py-2 text-sm font-light hover:bg-white/10 transition"
              >
                Nakoda Group ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="px-6 md:px-10 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">Our Journey</span>
            <h2 className="mt-4 text-3xl font-light tracking-tight">Built on a Foundation of Trust</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {milestones.map((m, i) => (
              <div key={i} className="rounded-2xl bg-secondary p-7 relative overflow-hidden group hover:shadow-brand transition-shadow duration-300">
                <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium">{m.year}</span>
                <p className="mt-3 text-sm font-light text-muted-foreground leading-relaxed">{m.text}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="px-6 md:px-10 mt-24">
        <div className="max-w-7xl mx-auto bg-secondary rounded-2xl overflow-hidden grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img
              src={copperIngots}
              alt="Mehtacop leadership — Manish P. Jain and Pravin P. Jain"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-8 md:p-14 flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-4">Leadership</p>
            <h3 className="text-3xl font-light mb-8 tracking-tight">Guided by Industry Veterans</h3>
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded bg-brand-gradient shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-medium tracking-tight">Manish P. Jain</h4>
                  <p className="text-sm text-muted-foreground font-light mt-0.5">Director, Mehtacop Refinery Pvt. Ltd.</p>
                  <p className="text-xs text-muted-foreground font-light mt-0.5 opacity-75">Vice President — Bombay Metal Exchange Ltd.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded bg-brand-gradient shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-medium tracking-tight">Pravin P. Jain</h4>
                  <p className="text-sm text-muted-foreground font-light mt-0.5">Director, Mehtacop Refinery Pvt. Ltd.</p>
                  <p className="text-xs text-muted-foreground font-light mt-0.5 opacity-75">Director — Bombay Non-Ferrous Metal Association</p>
                </div>
              </div>
            </div>
            <Link
              to="/leadership"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded bg-brand-gradient text-white px-5 py-2 text-sm font-light hover:opacity-90 transition"
            >
              Full Leadership Profile <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AFFILIATIONS ── */}
      <section className="px-6 md:px-10 mt-24 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-4">Industry Affiliations</p>
        <h2 className="text-3xl font-light mb-4 tracking-tight">Committed to Ethical Practices & Market Leadership</h2>
        <p className="text-sm text-muted-foreground font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Our leadership actively contributes to key industry bodies — reinforcing our commitment to governance, transparency, and market integrity.
        </p>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            { name: "Bombay Metal Exchange Ltd.", desc: "Vice President representation" },
            { name: "Bombay Non-Ferrous Metal Association", desc: "Director representation" },
            { name: "ISO 9001:2015 Certified", desc: "International quality management" },
            { name: "Nakoda Group of Companies", desc: "Parent group affiliation" },
          ].map((a) => (
            <div key={a.name} className="rounded-2xl bg-secondary px-6 py-5 text-left flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-purple)] mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-light">{a.name}</p>
                <p className="text-xs text-muted-foreground font-light mt-0.5">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-10 mt-24">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative">
          <img
            src={copperWire}
            alt="Contact Mehtacop Refinery"
            className="w-full h-[340px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-[color:var(--brand-purple)]/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <h3 className="text-2xl md:text-3xl font-light mb-3 tracking-tight">
              Partner with a Reliable Copper Manufacturer
            </h3>
            <p className="text-sm font-light text-white/75 max-w-lg mb-7">
              Whether you require bulk supply or long-term sourcing partnerships, Mehtacop delivers with precision and consistency.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded border border-white/35 bg-white/8 backdrop-blur-sm px-6 py-2.5 text-sm font-light hover:bg-white/15 transition"
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
