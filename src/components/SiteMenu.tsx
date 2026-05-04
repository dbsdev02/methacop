import { Link } from "@tanstack/react-router";
import { X, Globe, Search, Phone, MapPin, Mail, ExternalLink, Linkedin } from "lucide-react";
import { useEffect } from "react";

const items = [
  { label: "About Us", to: "/about" },
  { label: "Our Products", to: "/what-we-do" },
  { label: "Our Edge", to: "/our-edge" },
  { label: "Industries", to: "/industries" },
  { label: "Leadership", to: "/leadership" },
  { label: "Contact", to: "/contact" },
] as const;

const utility = [
  { icon: Phone, label: "+91 98334 74799" },
  { icon: Mail, label: "mehtacoprefinery@gmail.com" },
  { icon: MapPin, label: "Palghar, Maharashtra" },
  { icon: ExternalLink, label: "Nakoda Group" },
];

export function SiteMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-brand-gradient text-white animate-in fade-in duration-300">
      <div className="orbital-circles">
        <div className="orbital-line" />
        <div className="orbital-dot" />
      </div>

      {/* Top bar */}
      <div className="relative flex items-start justify-between px-6 md:px-12 pt-6 md:pt-8">
        <button onClick={onClose} aria-label="Close menu" className="text-brand-orange hover:opacity-80 transition">
          <X className="h-9 w-9" strokeWidth={1.75} />
        </button>

        <div className="flex items-center gap-2">
          <a
            href="https://www.nakodagroupofcompanies.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded border border-white/30 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm font-light hover:bg-white/10 transition"
          >
            <Globe className="h-4 w-4" />
            <span>Nakoda Group</span>
          </a>
          <button aria-label="Search" className="h-11 w-11 rounded border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-12 px-6 md:px-12 mt-10 md:mt-16">
        <div>
          <Link to="/" onClick={onClose} className="block">
            <span className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-none tracking-tight">
              Mehtacop
            </span>
            <span className="block text-sm font-light tracking-widest uppercase opacity-70 mt-1">
              Refinery Pvt. Ltd.
            </span>
          </Link>
        </div>

        <nav className="flex flex-col gap-5 md:gap-6">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              onClick={onClose}
              className="text-[clamp(2rem,4vw,3.25rem)] font-light leading-tight hover:opacity-70 transition-opacity w-fit"
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom utility bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 px-6 md:px-12 py-5 flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {utility.map(({ icon: Icon, label }) => (
            <button key={label} className="flex items-center gap-2 hover:opacity-80 transition">
              <Icon className="h-4 w-4" />
              <span className="font-light">{label}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/80 font-light">Follow us on</span>
          <a aria-label="LinkedIn" className="h-8 w-8 rounded bg-white/15 hover:bg-white/25 transition flex items-center justify-center"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
  );
}
