import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import copperManufacturing from "@/assets/copper-manufacturing.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Mehtacop Refinery Pvt. Ltd." },
      {
        name: "description",
        content:
          "Get in touch with Mehtacop Refinery for copper supply enquiries, bulk orders, and sourcing partnerships. Located in Palghar, Maharashtra.",
      },
      { property: "og:title", content: "Contact Us — Mehtacop Refinery Pvt. Ltd." },
    ],
  }),
  component: ContactPage,
});

const contactDetails = [
  {
    Icon: MapPin,
    label: "Address",
    lines: [
      "Survey No. 8/4/A, Girgaon,",
      "Talasari, Palghar,",
      "Maharashtra – 401606",
    ],
  },
  {
    Icon: Phone,
    label: "Phone",
    lines: ["+91 98334 74799", "+91 86554 11111"],
    links: ["tel:+919833474799", "tel:+918655411111"],
  },
  {
    Icon: Mail,
    label: "Email",
    lines: ["mehtacoprefinery@gmail.com"],
    links: ["mailto:mehtacoprefinery@gmail.com"],
  },
  {
    Icon: Clock,
    label: "Business Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM IST"],
  },
];

const enquiryTypes = [
  "Copper Cathodes",
  "Copper Anodes",
  "Copper Ingots",
  "Slag / Dross Processing",
  "ICW Scrap",
  "General Enquiry",
];

function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto pt-6 pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1fr_380px] gap-10 items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-5">
                Contact Us
              </p>
              <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.06] font-light tracking-tight max-w-3xl">
                Partner with a Reliable<br />Copper Manufacturer
              </h1>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Whether you require bulk copper supply, long-term sourcing partnerships, or technical product information — our team is ready to assist. Reach out and we'll respond promptly.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative aspect-[16/6]">
          <img
            src={copperManufacturing}
            alt="Contact Mehtacop Refinery"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-[color:var(--brand-purple)]/40" />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-12 text-white">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-light mb-2">
              Mehtacop Refinery Pvt. Ltd.
            </p>
            <p className="text-lg font-light text-white/90">
              Survey No. 8/4/A, Girgaon, Talasari, Palghar, Maharashtra – 401606
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="px-6 md:px-10 mt-24 md:mt-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_420px] gap-12">

          {/* ── ENQUIRY FORM ── */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-5">
              Send an Enquiry
            </p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-8">
              Tell Us What You Need
            </h2>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-purple)]/30 transition"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your company"
                    className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-purple)]/30 transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-purple)]/30 transition"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-purple)]/30 transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                  Product / Enquiry Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {enquiryTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="rounded border border-border px-4 py-1.5 text-xs font-light hover:bg-brand-gradient hover:text-white hover:border-transparent transition"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                  Quantity / Requirement
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10 MT Copper Cathodes per month"
                  className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-purple)]/30 transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements, delivery location, or any specific questions..."
                  className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-purple)]/30 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded bg-brand-gradient text-white px-8 py-3.5 text-sm font-medium shadow-brand hover:opacity-90 transition self-start"
              >
                Send Enquiry <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* ── CONTACT DETAILS ── */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gradient font-medium mb-5">
                Contact Details
              </p>
              <h2 className="text-2xl font-light tracking-tight mb-8">
                Reach Us Directly
              </h2>
            </div>

            {contactDetails.map(({ Icon, label, lines, links }) => (
              <div key={label} className="rounded-2xl bg-secondary p-6 flex gap-4">
                <div className="h-10 w-10 rounded bg-brand-gradient text-white flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-2">
                    {label}
                  </p>
                  {lines.map((line, i) =>
                    links?.[i] ? (
                      <a
                        key={i}
                        href={links[i]}
                        className="block text-sm font-light hover:text-[color:var(--brand-purple)] transition"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-sm font-light text-muted-foreground">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Nakoda Group website */}
            <div className="rounded-2xl bg-secondary p-6 flex gap-4">
              <div className="h-10 w-10 rounded bg-brand-gradient text-white flex items-center justify-center shrink-0">
                <ArrowRight className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-2">
                  Website
                </p>
                <a
                  href="https://www.nakodagroupofcompanies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light hover:text-[color:var(--brand-purple)] transition"
                >
                  www.nakodagroupofcompanies.com
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-border p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                Quick Links
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Our Products", to: "/what-we-do" },
                  { label: "About Us", to: "/about" },
                  { label: "Leadership", to: "/leadership" },
                  { label: "Industries We Serve", to: "/industries" },
                ].map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="flex items-center justify-between text-sm font-light text-muted-foreground hover:text-foreground transition group py-1"
                  >
                    {l.label}
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="px-6 md:px-10 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-secondary overflow-hidden h-[320px] flex flex-col items-center justify-center gap-4 text-center px-6">
            <div className="h-12 w-12 rounded bg-brand-gradient text-white flex items-center justify-center">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-light text-muted-foreground">Survey No. 8/4/A, Girgaon, Talasari</p>
              <p className="text-sm font-light text-muted-foreground">Palghar, Maharashtra – 401606</p>
            </div>
            <a
              href="https://maps.google.com/?q=Talasari,Palghar,Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-brand-gradient text-white px-5 py-2 text-sm font-light shadow-brand hover:opacity-90 transition"
            >
              Open in Google Maps <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="px-6 md:px-10 mt-24">
        <div className="max-w-7xl mx-auto rounded-3xl bg-brand-gradient text-white p-10 md:p-14 relative overflow-hidden text-center">
          <div className="orbital-circles" />
          <p className="relative text-[11px] uppercase tracking-[0.2em] text-white/60 font-light mb-4">
            Ready to Get Started?
          </p>
          <h3 className="relative text-2xl md:text-3xl font-light tracking-tight mb-4">
            High-Grade Copper. Delivered with Precision.
          </h3>
          <p className="relative text-sm font-light text-white/75 max-w-xl mx-auto mb-8 leading-relaxed">
            From a single enquiry to a long-term supply partnership — Mehtacop Refinery is your trusted source for consistent, ISO-certified copper products.
          </p>
          <div className="relative flex flex-wrap justify-center gap-3">
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 rounded bg-white text-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              View Our Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded border border-white/35 px-6 py-2.5 text-sm font-light hover:bg-white/10 transition"
            >
              About Mehtacop
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

