import { Link } from "@tanstack/react-router";
import { Linkedin, Phone, Mail, MapPin } from "lucide-react";

const cols = [
  { links: ["About Us", "Our Products"] },
  { links: ["Our Edge", "Industries"] },
  { links: ["Leadership", "Contact"] },
];

const colLinks: Record<string, string> = {
  "About Us": "/about",
  "Our Products": "/what-we-do",
  "Our Edge": "/our-edge",
  "Industries": "/industries",
  "Leadership": "/leadership",
  "Contact": "/contact",
};

export function SiteFooter() {
  return (
    <footer className="relative bg-brand-gradient text-white mt-24">
      <div className="orbital-circles" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="block">
              <span className="text-2xl font-semibold tracking-tight">Mehtacop</span>
              <span className="block text-xs font-light tracking-widest uppercase opacity-80 mt-0.5">Refinery Pvt. Ltd.</span>
            </Link>
            <p className="mt-4 text-xs font-light text-white/75 leading-relaxed max-w-[200px]">
              Part of the Nakoda Group of Companies. Engineering Purity. Delivering Performance.
            </p>
          </div>
          {cols.map((c, i) => (
            <ul key={i} className="space-y-3 text-base font-light">
              {c.links.map((l) => (
                <li key={l}>
                  <Link to={colLinks[l] as any} className="hover:opacity-80 transition">{l}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-xs font-light text-white/85">
          <div className="flex items-start gap-2">
            <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
            <span>Survey No. 8/4/A, Girgaon, Talasari, Palghar, Maharashtra – 401606</span>
          </div>
          <div className="flex flex-col gap-2">
            <a href="tel:+919833474799" className="flex items-center gap-2 hover:opacity-80 transition">
              <Phone className="h-3.5 w-3.5 shrink-0" /> +91 98334 74799
            </a>
            <a href="tel:+918655411111" className="flex items-center gap-2 hover:opacity-80 transition">
              <Phone className="h-3.5 w-3.5 shrink-0" /> +91 86554 11111
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="mailto:mehtacoprefinery@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition">
              <Mail className="h-3.5 w-3.5 shrink-0" /> mehtacoprefinery@gmail.com
            </a>
            <a href="https://www.nakodagroupofcompanies.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              www.nakodagroupofcompanies.com
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-light text-white/85">
          <a className="hover:opacity-80 transition cursor-pointer">ISO 9001:2015 Certified</a>
          <a className="hover:opacity-80 transition cursor-pointer">Bombay Metal Exchange</a>
          <a className="hover:opacity-80 transition cursor-pointer">Bombay Non-Ferrous Metal Association</a>
          <div className="ml-auto flex items-center gap-3">
            <span>Follow us on</span>
            <a aria-label="LinkedIn" className="h-7 w-7 rounded bg-white/15 flex items-center justify-center hover:bg-white/25 transition">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/15 text-xs text-white/70 font-light flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Mehtacop Refinery Pvt. Ltd. All rights reserved.</span>
          <span>Privacy · Legal</span>
        </div>
      </div>
    </footer>
  );
}
