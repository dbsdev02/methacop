import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Users, Globe, TrendingUp, ShieldCheck, Handshake } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import copperFactory from "@/assets/copper-factory.jpg";
import copperMolten from "@/assets/copper-molten.jpg";
import copperIndustry from "@/assets/copper-industry.jpg";

export const Route = createFileRoute("/leadership")({
  component: LeadershipPage,
});

const directors = [
  {
    name: "Manish P. Jain",
    title: "Director",
    company: "Mehtacop Refinery Pvt. Ltd.",
    affiliation: "Vice President — Bombay Metal Exchange Ltd.",
    affiliationShort: "BME Vice President",
    bio: "Manish P. Jain brings decades of deep expertise in the non-ferrous metals industry to Mehtacop Refinery. As a Director, he drives the company's strategic vision — overseeing manufacturing excellence, quality systems, and long-term growth. His role as Vice President of the Bombay Metal Exchange Ltd. places him at the heart of India's metals trading ecosystem, giving Mehtacop unparalleled market intelligence and industry credibility.",
    expertise: [
      "Non-Ferrous Metal Manufacturing",
      "Strategic Business Development",
      "Metals Market Intelligence",
      "Quality Systems & ISO Compliance",
      "Industry Governance",
    ],
    highlights: [
      { Icon: Award, text: "Vice President, Bombay Metal Exchange Ltd." },
      { Icon: TrendingUp, text: "Decades of non-ferrous metals industry experience" },
      { Icon: ShieldCheck, text: "Champion of ISO 9001:2015 quality standards" },
    ],
  },
  {
    name: "Pravin P. Jain",
    title: "Director",
    company: "Mehtacop Refinery Pvt. Ltd.",
    affiliation: "Director — Bombay Non-Ferrous Metal Association",
    affiliationShort: "BNFMA Director",
    bio: "Pravin P. Jain is a seasoned industry leader whose expertise spans copper refining, supply chain management, and industry association governance. As a Director of Mehtacop Refinery, he oversees operations, customer relationships, and export strategy. His directorship at the Bombay Non-Ferrous Metal Association reflects his commitment to ethical trade practices, industry development, and the advancement of India's non-ferrous metals sector on the global stage.",
    expertise: [
      "Copper Refining & Processing",
      "Supply Chain & Export Operations",
      "Industry Association Governance",
      "Customer & Partner Relations",
      "Sustainable Metal Processing",
    ],
    highlights: [
      { Icon: Users, text: "Director, Bombay Non-Ferrous Metal Association" },
      { Icon: Globe, text: "Export strategy and international market development" },
      { Icon: Handshake, text: "Long-term industrial partnership builder" },
    ],
  },
];

const affiliations = [
  {
    name: "Bombay Metal Exchange Ltd.",
    short: "BME",
    role: "Vice President",
    director: "Manish P. Jain",
    desc: "One of India's premier commodity exchanges for non-ferrous metals. The BME sets pricing benchmarks, facilitates trade, and governs market conduct for the metals industry across India.",
    impact: "Mehtacop's Vice President representation at the BME ensures direct access to market pricing, trade intelligence, and regulatory developments — giving our customers confidence in fair, transparent dealings.",
  },
  {
    name: "Bombay Non-Ferrous Metal Association",
    short: "BNFMA",
    role: "Director",
    director: "Pravin P. Jain",
    desc: "A leading industry body representing manufacturers, traders, and processors in the non-ferrous metals sector. The BNFMA advocates for industry interests, promotes ethical practices, and supports sector growth.",
    impact: "Our directorship at the BNFMA reflects Mehtacop's commitment to industry governance, ethical sourcing, and the long-term development of India's copper and non-ferrous metals ecosystem.",
  },
  {
    name: "ISO 9001:2015",
    short: "ISO",
    role: "Certified",
    director: "Both Directors",
    desc: "The international standard for quality management systems — covering process control, customer focus, continual improvement, and evidence-based decision making across all operations.",
    impact: "Every stage of Mehtacop's production — from raw material intake to final dispatch — operates under ISO 9001:2015 certified processes, ensuring consistent quality and full traceability.",
  },
];

const values = [
  { Icon: ShieldCheck, title: "Integrity", desc: "Transparent dealings, ethical sourcing, and honest partnerships — at every level of the business." },
  { Icon: Award, title: "Excellence", desc: "A relentless commitment to quality that goes beyond certification — embedded in every process and every product." },
  { Icon: TrendingUp, title: "Growth", desc: "Strategic vision that balances immediate customer needs with long-term market leadership and industry development." },
  { Icon: Handshake, title: "Partnership", desc: "We build relationships, not just transactions — working closely with customers, suppliers, and industry bodies." },
];

function LeadershipPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto pt-6 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1fr_380px] gap-10 items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-5">
                Leadership
              </p>
              <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.06] font-light tracking-tight max-w-3xl">
                Guided by Industry<br />Veterans
              </h1>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                Mehtacop Refinery is led by two directors whose combined expertise spans decades of non-ferrous metal manufacturing, industry governance, and strategic market leadership.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition"
              >
                About the Company <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative aspect-[16/7] bg-black">
          <img
            src={copperFactory}
            alt="Mehtacop Refinery leadership — Manish P. Jain and Pravin P. Jain"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8 text-white">
            <p className="text-xs font-light text-white/60 uppercase tracking-widest">
              Mehtacop Refinery Pvt. Ltd. — Palghar, Maharashtra
            </p>
          </div>
        </div>
      </section>

      {/* ── DIRECTOR PROFILES ── */}
      <section className="px-6 md:px-10 mt-24 md:mt-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-5">
            Director Profiles
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-tight tracking-tight">
            The People Behind Mehtacop's Excellence
          </h2>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {directors.map((d, i) => (
            <div
              key={d.name}
              className={`rounded-3xl overflow-hidden grid md:grid-cols-[340px_1fr] bg-secondary`}
            >
              {/* Avatar panel */}
              <div className="bg-brand-gradient p-10 flex flex-col items-center justify-center text-white text-center relative overflow-hidden">
                <div className="orbital-circles opacity-20" />
                <div className="relative h-28 w-28 rounded bg-white/20 border-2 border-white/30 mb-6 flex items-center justify-center">
                  <span className="text-4xl font-light">
                    {d.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <h3 className="relative text-xl font-light tracking-tight">{d.name}</h3>
                <p className="relative text-sm font-light text-white/75 mt-1">{d.title}</p>
                <p className="relative text-xs font-light text-white/60 mt-0.5">{d.company}</p>
                <div className="relative mt-5 rounded border border-white/25 px-4 py-1.5 text-xs font-light text-white/85">
                  {d.affiliationShort}
                </div>
              </div>

              {/* Content panel */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-2">
                  {d.affiliation}
                </p>
                <p className="text-sm font-light text-muted-foreground leading-relaxed mb-7">
                  {d.bio}
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Expertise */}
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-3">
                      Areas of Expertise
                    </p>
                    <ul className="flex flex-col gap-2">
                      {d.expertise.map((e) => (
                        <li key={e} className="flex items-center gap-2 text-xs font-light text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded bg-brand-gradient shrink-0" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-3">
                      Key Highlights
                    </p>
                    <ul className="flex flex-col gap-3">
                      {d.highlights.map(({ Icon, text }) => (
                        <li key={text} className="flex items-start gap-2.5">
                          <div className="h-6 w-6 rounded bg-brand-gradient text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="h-3 w-3" />
                          </div>
                          <span className="text-xs font-light text-muted-foreground leading-relaxed">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRY AFFILIATIONS ── */}
      <section className="px-6 md:px-10 mt-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-5">
            Industry Affiliations
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-tight tracking-tight">
            Rooted in Industry.<br />Committed to Governance.
          </h2>
          <p className="mt-5 text-sm text-muted-foreground font-light leading-relaxed">
            Our leadership's active participation in key industry bodies reinforces Mehtacop's commitment to ethical practices, market transparency, and long-term industry development.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {affiliations.map((a, i) => (
            <div
              key={a.name}
              className={`rounded-2xl overflow-hidden grid md:grid-cols-[120px_1fr_1fr] ${i === 1 ? "bg-brand-gradient text-white" : "bg-secondary"}`}
            >
              {/* Short name badge */}
              <div className={`flex items-center justify-center p-8 border-r ${i === 1 ? "border-white/15" : "border-border"}`}>
                <span className={`text-3xl font-light tracking-tight ${i === 1 ? "text-white" : "text-brand-gradient"}`}>
                  {a.short}
                </span>
              </div>

              {/* About */}
              <div className={`p-7 border-r ${i === 1 ? "border-white/15" : "border-border"}`}>
                <p className={`text-[11px] uppercase tracking-[0.2em] font-light mb-2 ${i === 1 ? "text-white/60" : "text-muted-foreground"}`}>
                  {a.role} — {a.director}
                </p>
                <h4 className={`text-base font-light tracking-tight mb-3 ${i === 1 ? "text-white" : ""}`}>
                  {a.name}
                </h4>
                <p className={`text-xs font-light leading-relaxed ${i === 1 ? "text-white/75" : "text-muted-foreground"}`}>
                  {a.desc}
                </p>
              </div>

              {/* Impact */}
              <div className="p-7">
                <p className={`text-[11px] uppercase tracking-[0.2em] font-light mb-2 ${i === 1 ? "text-white/60" : "text-muted-foreground"}`}>
                  What This Means for You
                </p>
                <p className={`text-xs font-light leading-relaxed ${i === 1 ? "text-white/80" : "text-muted-foreground"}`}>
                  {a.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEADERSHIP VALUES ── */}
      <section className="px-6 md:px-10 mt-28">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden grid md:grid-cols-2 min-h-[420px]">
          <img
            src={copperMolten}
            alt="Mehtacop leadership values"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="bg-secondary p-8 md:p-12 flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-4">
              Leadership Philosophy
            </p>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-8">
              Values That Drive<br />Every Decision
            </h3>
            <div className="grid grid-cols-2 gap-5">
              {values.map(({ Icon, title, desc }) => (
                <div key={title}>
                  <div className="h-9 w-9 rounded bg-brand-gradient text-white flex items-center justify-center mb-3">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-medium tracking-tight mb-1">{title}</h4>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NAKODA GROUP ── */}
      <section className="px-6 md:px-10 mt-24">
        <div className="max-w-7xl mx-auto rounded-2xl bg-secondary p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-3">
              Parent Group
            </p>
            <h3 className="text-2xl font-light tracking-tight mb-3">
              Part of the Nakoda Group of Companies
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl">
              Mehtacop Refinery Pvt. Ltd. operates under the umbrella of the Nakoda Group of Companies — a diversified business group with a strong presence in the metals and manufacturing sector. The group's backing provides Mehtacop with the financial strength, operational depth, and strategic direction to serve customers at scale.
            </p>
          </div>
          <a
            href="https://www.nakodagroupofcompanies.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition shrink-0"
          >
            Visit Nakoda Group <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-10 mt-24">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative">
          <img
            src={copperIndustry}
            alt="Connect with Mehtacop leadership"
            className="w-full h-[320px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-[color:var(--brand-purple)]/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <h3 className="text-2xl md:text-3xl font-light mb-3 tracking-tight">
              Connect with Our Team
            </h3>
            <p className="text-sm font-light text-white/75 max-w-lg mb-7 leading-relaxed">
              Whether you're looking to establish a supply partnership or simply want to learn more about Mehtacop — we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-6 py-2.5 text-sm font-light shadow-brand hover:opacity-90 transition"
              >
                Get in Touch
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded border border-white/35 bg-white/8 backdrop-blur-sm px-6 py-2.5 text-sm font-light hover:bg-white/15 transition"
              >
                About the Company
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

