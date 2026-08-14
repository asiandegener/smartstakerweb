/**
 * STYLE REMINDER — Reference-faithful shell: slim dark header, compact left wordmark,
 * top-right utilities, teal/green download action, and a complete small-screen menu.
 */

import { Link, useLocation } from "wouter";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const nav = [{ href: "/stake-bot", label: "Platform" }, { href: "/stake-strategy", label: "Strategy" }, { href: "/stake-stats", label: "Analytics" }, { href: "/blog", label: "Guides" }];
const footerGroups = [
  { title: "Product", links: [["Platform", "/stake-bot"], ["SmartStaker Relay", "/ssprf"], ["Slots", "/stake-slots"], ["Stats", "/stake-stats"]] },
  { title: "Originals", links: [["Dice", "/stake-dice"], ["Limbo", "/stake-limbo"], ["Mines", "/stake-mines"], ["Plinko", "/stake-plinko"]] },
  { title: "Resources", links: [["Strategy", "/stake-strategy"], ["Guides", "/blog"], ["Privacy", "/privacy"], ["Terms", "/terms"]] },
];

export function previewToast(label = "This control") {
  toast("SmartStaker preview", { description: `${label} is a visual preview in this static website build.` });
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  useEffect(() => setMenuOpen(false), [location]);
  useEffect(() => { document.documentElement.classList.toggle("site-light", light); }, [light]);
  return <div className="min-h-screen overflow-x-hidden bg-[#101315] text-[#e8e8e3] selection:bg-[#53cdb4] selection:text-[#07110f]">
    <header className="relative z-50 border-b border-white/[0.08] bg-[#111416]">
      <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-5 lg:px-6">
        <Link href="/" aria-label="SmartStaker home" className="group flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center border border-[#50cdb1]/60 text-[11px] font-bold text-[#63d9bf] transition-colors group-hover:border-[#8ae2cf]">S</span>
          <span className="font-mono text-[12px] font-medium tracking-[0.18em] text-[#e9ece8]">SMARTSTAKER</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={() => setLight((value) => !value)} className="grid h-9 w-9 place-items-center border border-white/[0.12] text-[#d6dbd8] transition-colors hover:border-[#50cdb1] hover:text-[#50cdb1]" aria-label="Toggle theme">{light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
          <a href="#platform" className="hidden border border-[#4dc8ae]/55 px-3 py-2 font-mono text-[11px] tracking-[0.1em] text-[#61d6bd] transition-colors hover:bg-[#163b34] sm:inline-flex">Platform ↗</a>
          <Link href="/download" className="hidden items-center gap-2 bg-[linear-gradient(105deg,#47bfa7,#8ada69)] px-4 py-[11px] font-mono text-[11px] font-semibold tracking-[0.08em] text-[#0a1714] transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.97] sm:inline-flex"><Download className="h-3.5 w-3.5" />Download</Link>
          <button onClick={() => setMenuOpen((value) => !value)} className="grid h-9 w-9 place-items-center border border-dashed border-[#c4de6a]/65 text-[#d9e78d] transition-colors hover:bg-[#20251c]" aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
        </div>
      </div>
      {menuOpen && <div className="absolute inset-x-0 top-full border-b border-white/[0.1] bg-[#101315] px-5 py-5 shadow-2xl"><nav className="mx-auto grid max-w-[1280px] gap-1" aria-label="Site menu">{[...nav, { href: "/stake-dice", label: "Dice" }, { href: "/stake-limbo", label: "Limbo" }, { href: "/stake-mines", label: "Mines" }, { href: "/stake-plinko", label: "Plinko" }, { href: "/stake-slots", label: "Slots" }, { href: "/ssprf", label: "SmartStaker Relay" }, { href: "/download", label: "Download" }].map((item) => <Link key={item.href} href={item.href} className={`border-b border-white/[0.07] py-3 font-mono text-[11px] uppercase tracking-[0.14em] ${location === item.href ? "text-[#62d7bd]" : "text-[#c8ceca] hover:text-[#8be1cb]"}`}>{item.label}</Link>)}</nav></div>}
    </header>
    <main>{children}</main>
    <footer className="border-t border-white/[0.08] bg-[#0d0f11] px-5 py-14 lg:px-6">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[1.2fr_1.8fr]">
        <div><Link href="/" className="inline-flex items-center gap-2.5"><span className="grid h-7 w-7 place-items-center border border-[#50cdb1]/60 text-[11px] font-bold text-[#63d9bf]">S</span><span className="font-mono text-[12px] tracking-[0.18em]">SMARTSTAKER</span></Link><p className="mt-5 max-w-sm text-sm leading-7 text-[#8e9795]">A desktop-product companion concept for structured session workflows, reporting, and platform-monitoring utilities.</p><p className="mt-5 max-w-sm text-xs leading-6 text-[#79817f]">18+ only. Platform activity can involve loss and account risk. SmartStaker is an independent product and is not affiliated with an external gaming platform.</p></div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{footerGroups.map((group) => <div key={group.title}><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#58c9b0]">{group.title}</p><div className="mt-4 grid gap-2.5">{group.links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-[#a5aeaa] transition-colors hover:text-[#71dcc4]">{label}</Link>)}</div></div>)}</div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col justify-between gap-2 border-t border-white/[0.08] pt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#66706e] sm:flex-row"><span>© 2026 SmartStaker</span><span>Independent desktop product site</span></div>
    </footer>
  </div>;
}
