/**
 * STYLE REMINDER — Terminal Ledger shell: controlled near-black canvas, fine grid,
 * clear editorial navigation, visible independent-preview language, no generic SaaS chrome.
 */

import { Link, useLocation } from "wouter";
import { Menu, Moon, Sun, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { images } from "@/lib/siteData";

const navigation = [
  { href: "/stake-bot", label: "Platform" },
  { href: "/stake-strategy", label: "Strategy" },
  { href: "/stake-stats", label: "Analytics" },
  { href: "/blog", label: "Guides" },
];

const productLinks = [
  ["Platform", "/stake-bot"],
  ["Signal relay", "/ssprf"],
  ["Dice", "/stake-dice"],
  ["Limbo", "/stake-limbo"],
  ["Mines", "/stake-mines"],
  ["Plinko", "/stake-plinko"],
  ["Sessions", "/stake-slots"],
  ["Strategy", "/stake-strategy"],
  ["Analytics", "/stake-stats"],
  ["Code monitor", "/stake-code-claimer"],
  ["Reload monitor", "/stake-reload-claimer"],
] as const;

export function previewToast(label = "This action") {
  toast("SmartStaker preview", {
    description: `${label} is visual-only in this static product prototype. No account action was performed.`,
  });
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0c0e0d] text-[#efeee6] selection:bg-[#a8ff58] selection:text-[#0c0e0d]">
      <div className="site-grid-pointer fixed inset-0 z-0 opacity-55" aria-hidden="true" />
      <div className="relative z-10">
        <div className="border-b border-white/10 bg-[#111412]/90 px-4 py-2 backdrop-blur-md sm:px-8">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#a9afa8]">
            <span>Independent product preview · no account connections</span>
            <button onClick={() => previewToast("The access request")} className="hidden transition-colors hover:text-[#a8ff58] sm:inline-flex">
              Read the preview policy <ArrowUpRight className="ml-1 h-3 w-3" />
            </button>
          </div>
        </div>

        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0c0e0d]/94 backdrop-blur-xl">
          <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-4 sm:px-8">
            <Link href="/" className="group flex items-center gap-3" aria-label="SmartStaker home">
              <img src={images.mark} alt="" className="h-9 w-9 object-contain transition-transform duration-200 group-hover:scale-105" />
              <span className="font-mono text-[13px] font-semibold tracking-[0.19em] text-[#f6f4ea]">SMARTSTAKER</span>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-mono text-[11px] uppercase tracking-[0.13em] transition-colors ${location === item.href ? "text-[#a8ff58]" : "text-[#c0c4bb] hover:text-[#f6f4ea]"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="grid h-10 w-10 place-items-center border border-white/10 text-[#cdd1c9] transition-colors hover:border-[#a8ff58] hover:text-[#a8ff58]"
                onClick={() => setLight((value) => !value)}
                aria-label="Toggle color theme"
              >
                {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <Link href="/download" className="hidden bg-[#a8ff58] px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0c0e0d] transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.97] sm:inline-flex">
                Preview access
              </Link>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center border border-white/10 text-[#cdd1c9] lg:hidden"
                onClick={() => setMenuOpen((value) => !value)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="border-t border-white/10 bg-[#0c0e0d] px-4 py-6 lg:hidden">
              <nav className="mx-auto grid max-w-[1440px] gap-2" aria-label="Mobile navigation">
                {[...navigation, { href: "/download", label: "Preview access" }].map((item) => (
                  <Link key={item.href} href={item.href} className="border border-white/10 px-4 py-4 font-mono text-xs uppercase tracking-[0.14em] text-[#d9ddd5] transition-colors hover:border-[#a8ff58] hover:text-[#a8ff58]">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 bg-[#111412] px-4 pb-8 pt-16 sm:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.3fr_2fr]">
            <div>
              <div className="flex items-center gap-3">
                <img src={images.mark} alt="" className="h-10 w-10 object-contain" />
                <span className="font-mono text-sm font-semibold tracking-[0.18em]">SMARTSTAKER</span>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#a9afa8]">
                An independent static product preview built around clearer session framing, explicit limits, and readable decision context.
              </p>
              <p className="mt-6 max-w-sm border-l border-[#a8ff58] pl-4 text-xs leading-6 text-[#c4c9c1]">
                18+ only. Gambling involves financial risk and may be addictive. SmartStaker is not affiliated with SSPilot, Stake, or any gaming platform.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a8ff58]">Product</p>
                <div className="mt-4 grid gap-3">
                  {productLinks.slice(0, 4).map(([label, href]) => <FooterLink key={href} href={href} label={label} />)}
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a8ff58]">Views</p>
                <div className="mt-4 grid gap-3">
                  {productLinks.slice(4, 8).map(([label, href]) => <FooterLink key={href} href={href} label={label} />)}
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a8ff58]">Notes</p>
                <div className="mt-4 grid gap-3">
                  <FooterLink href="/blog" label="Guides" />
                  <FooterLink href="/privacy" label="Privacy" />
                  <FooterLink href="/terms" label="Terms" />
                  <FooterLink href="/download" label="Preview access" />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-[1440px] flex-col justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#777d76] sm:flex-row">
            <span>© 2026 SmartStaker preview</span>
            <span>Interface study · no live product actions</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return <Link href={href} className="text-sm text-[#b4b9b1] transition-colors hover:text-[#a8ff58]">{label}</Link>;
}
