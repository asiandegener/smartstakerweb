/**
 * STYLE REMINDER — Terminal Ledger modules: framed instrumentation, editorial type,
 * sparse lime signals, compact mono labels, and physical spacing rather than pill-heavy UI.
 */

import { ArrowRight, Check, CircleAlert, Play, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { previewToast } from "@/components/SiteShell";
import type { FAQ, Metric } from "@/lib/siteData";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#a8ff58]">[ {children} ]</p>;
}

export function PrimaryAction({ label = "Inspect the preview", href = "/download" }: { label?: string; href?: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-3 bg-[#a8ff58] px-5 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0c0e0d] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(168,255,88,0.15)] active:scale-[0.97]">
      {label}<ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function GhostAction({ label = "View the system" }: { label?: string }) {
  return <button onClick={() => previewToast(label)} className="inline-flex items-center gap-3 border border-white/20 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[#e7e9e1] transition-colors hover:border-[#a8ff58] hover:text-[#a8ff58]">{label}<Play className="h-3.5 w-3.5" /></button>;
}

export function MetricStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid border-y border-white/10 sm:grid-cols-3">
      {metrics.map((metric, index) => (
        <div key={metric.label} className={`px-5 py-6 ${index < metrics.length - 1 ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""}`}>
          <p className="font-display text-3xl text-[#f6f4ea]">{metric.value}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8f968d]">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

export function FeatureGrid({ features }: { features: { title: string; copy: string }[] }) {
  return (
    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
      {features.map((feature, index) => (
        <article key={feature.title} className="group bg-[#111412] p-6 transition-colors hover:bg-[#151b17]">
          <span className="font-mono text-[10px] tracking-[0.16em] text-[#a8ff58]">0{index + 1}</span>
          <h3 className="mt-12 font-display text-2xl text-[#f4f3eb]">{feature.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#a9afa8]">{feature.copy}</p>
        </article>
      ))}
    </div>
  );
}

export function Workflow({ steps }: { steps: { title: string; copy: string }[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {steps.map((step, index) => (
        <article key={step.title} className="relative border-t border-white/20 pt-5">
          <span className="absolute -top-3 left-0 bg-[#0c0e0d] pr-3 font-mono text-[10px] tracking-[0.15em] text-[#a8ff58]">0{index + 1}</span>
          <h3 className="font-display text-2xl text-[#f4f3eb]">{step.title}</h3>
          <p className="mt-3 max-w-sm text-sm leading-7 text-[#a9afa8]">{step.copy}</p>
        </article>
      ))}
    </div>
  );
}

export function FAQList({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="border-y border-white/10">
      {faqs.map((faq, index) => (
        <details key={faq.question} className="group border-b border-white/10 last:border-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base text-[#e7e9e1] marker:content-none">
            <span><span className="mr-4 font-mono text-[10px] text-[#a8ff58]">0{index + 1}</span>{faq.question}</span>
            <span className="grid h-7 w-7 shrink-0 place-items-center border border-white/15 text-[#a8ff58] transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-3xl pb-6 pl-8 pr-8 text-sm leading-7 text-[#a9afa8]">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function PreviewConsole({ labels, mode }: { labels: string[]; mode: string }) {
  return (
    <div className="relative overflow-hidden border border-white/15 bg-[#111412] p-4 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(168,255,88,0.12),transparent_32%)]" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#90968d]">
          <span>{mode}</span><span className="flex items-center gap-2 text-[#a8ff58]"><span className="h-1.5 w-1.5 rounded-full bg-[#a8ff58]" />Local view</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {labels.map((label, index) => (
            <button key={label} onClick={() => previewToast(label)} className="border border-white/10 bg-black/20 p-4 text-left transition-colors hover:border-[#a8ff58]">
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#7d847a]">0{index + 1} / {label}</span>
              <span className="mt-5 block font-display text-xl text-[#f2f1ea]">Configure</span>
              <span className="mt-2 block h-px w-full bg-[#a8ff58]/50" />
            </button>
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_1.4fr]">
          <div className="border border-white/10 p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#7d847a]">Session status</p>
            <p className="mt-5 font-display text-3xl text-[#f2f1ea]">Ready <span className="text-[#a8ff58]">/</span> idle</p>
          </div>
          <div className="relative overflow-hidden border border-white/10 p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#7d847a]">Illustrative signal</p>
            <div className="mt-6 flex h-10 items-end gap-1">
              {[16, 29, 18, 36, 26, 46, 31, 60, 45, 70, 56, 82, 68].map((height, index) => <span key={index} style={{ height: `${height}%` }} className="w-full bg-gradient-to-t from-[#a8ff58]/20 to-[#a8ff58]" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Disclosure() {
  return <div className="flex items-start gap-3 border border-[#a8ff58]/25 bg-[#a8ff58]/5 p-4 text-xs leading-6 text-[#c7ccc4]"><CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#a8ff58]" /><p>This is an independent interface preview. It does not automate activity, connect third-party accounts, make financial claims, or replace responsible-use decisions.</p></div>;
}

export function SafetyLine() {
  return <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8b9288]"><ShieldCheck className="h-4 w-4 text-[#a8ff58]" />Limits are part of the interface, not a footnote.</div>;
}

export function CheckLine({ children }: { children: React.ReactNode }) {
  return <div className="flex items-start gap-3 text-sm leading-6 text-[#bdc2ba]"><Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#a8ff58]" />{children}</div>;
}

