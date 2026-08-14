/** STYLE REMINDER — Terminal Ledger fallback: concise, high-contrast, and wired back to the system. */
import { Link } from "wouter";
import { Eyebrow } from "@/components/PageElements";

export default function NotFound() {
  return <section className="px-4 py-32 sm:px-8"><div className="mx-auto max-w-3xl border-l border-[#a8ff58] pl-6"><Eyebrow>404 / route not indexed</Eyebrow><h1 className="mt-6 font-display text-7xl leading-[0.85] tracking-[-0.06em] text-[#f1f0e9]">This view is outside the preview.</h1><Link href="/" className="mt-10 inline-flex font-mono text-[11px] uppercase tracking-[0.13em] text-[#a8ff58]">Return to SmartStaker →</Link></div></section>;
}
