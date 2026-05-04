import { Link } from "@tanstack/react-router";
import { Menu, Globe, Search } from "lucide-react";
import { useState } from "react";
import { SiteMenu } from "./SiteMenu";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header
        className={`${overlay ? "absolute" : "relative"} top-0 left-0 right-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between ${overlay ? "text-white" : "text-foreground"}`}
      >
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={`h-10 w-10 rounded border ${overlay ? "border-white/40 bg-white/10" : "border-border bg-background"} backdrop-blur-sm flex items-center justify-center hover:opacity-80 transition`}
        >
          <Menu className="h-4 w-4" />
        </button>

        <Link to="/" className="flex flex-col items-center leading-tight">
          <span className="text-xl font-semibold tracking-tight">Mehtacop</span>
          <span className="text-[10px] font-light tracking-widest uppercase opacity-70">Refinery Pvt. Ltd.</span>
        </Link>

        <div className="flex items-center gap-2">
          <button className={`hidden sm:flex items-center gap-2 rounded border ${overlay ? "border-white/40 bg-white/10" : "border-border bg-background"} backdrop-blur-sm px-4 py-2 text-xs font-light hover:opacity-80 transition`}>
            <Globe className="h-3.5 w-3.5" />
            <span>Nakoda Group</span>
          </button>
          <button aria-label="Search" className={`h-10 w-10 rounded border ${overlay ? "border-white/40 bg-white/10" : "border-border bg-background"} backdrop-blur-sm flex items-center justify-center hover:opacity-80 transition`}>
            <Search className="h-4 w-4" />
          </button>
        </div>
      </header>
      <SiteMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
