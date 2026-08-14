/**
 * STYLE REMINDER — Terminal Ledger home: a left-anchored editorial hero over a dark grid,
 * wide physical modules, signal-lime only for active decisions, and clear preview boundaries.
 */

import { ArrowDownRight, ArrowUpRight, CircleGauge, Eye, ListFilter, RadioTower } from "lucide-react";
import { Link } from "wouter";
import { Disclosure, Eyebrow, GhostAction, MetricStrip, PrimaryAction, SafetyLine } from "@/components/PageElements";
import { images, productPages, articleRegistry } from "@/lib/siteData";

const pillars = [
  { icon: ListFilter, index: "01", title: "Plan in public", copy: "Bring cadence, response conditions, and stops into one up-front configuration surface." },
  { icon: CircleGauge, index: "02", title: "Read the session", copy: "Use quiet metrics, visible limits, and legible summaries to see the system before the story." },
  { icon: RadioTower, index: "03", title: "Route the signal", copy: "Treat alerts and milestones as structured context—not a source of noise or urgency." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="relative z-10 max-w-3xl">
            <Eyebrow>Decision context, first</Eyebrow>
            <h1 className="mt-7 font-display text-[clamp(3.8rem,8vw,8.5rem)] leading-[0.82] tracking-[-0.065em] text-[#f3f1e9]">
              A clearer way<br />to frame <em className="font-normal text-[#a8ff58]">the session.</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#b4b9b1] sm:text-lg">
              SmartStaker is an independent product-site preview for bringing operational clarity to automated-play workflows—without hiding the role of limits, variance, or human judgment.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryAction label="Inspect the product tour" href="/stake-bot" />
              <GhostAction label="Read the design scope" />
            </div>
            <div className="mt-10"><SafetyLine /></div>
          </div>

          <div className="relative isolate min-h-[340px] lg:min-h-[560px]">
            <div className="absolute -right-[12%] top-[5%] h-[105%] w-[105%] border border-[#a8ff58]/15" />
            <img src={images.hero} alt="Abstract SmartStaker technical control environment" className="absolute inset-0 h-full w-full object-cover object-center grayscale-[10%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0d] via-[#0c0e0d]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[#0c0e0d]/75 p-4 backdrop-blur-sm sm:flex sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#a8ff58]">System frame / 01</p>
                <p className="mt-2 font-display text-2xl text-[#f2f1e9]">Configure before the noise.</p>
              </div>
              <ArrowDownRight className="mt-4 h-7 w-7 text-[#a8ff58] sm:mt-0" />
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-14 max-w-[1440px]"><MetricStrip metrics={[{ value: "12", label: "Visible planning modules" }, { value: "15", label: "Reference-style public routes" }, { value: "0", label: "Account connections" }]} /></div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div><Eyebrow>Built around the decision</Eyebrow><h2 className="mt-5 max-w-md font-display text-5xl leading-[0.94] tracking-[-0.045em] text-[#f1f0e9] sm:text-6xl">The interface is part of the discipline.</h2></div>
            <p className="max-w-xl text-base leading-8 text-[#a9afa8]">The reference architecture is reimagined as a composed system of modules: what is being planned, what can end the session, what needs attention, and what should remain a quiet record.</p>
          </div>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return <article key={pillar.index} className="bg-[#111412] p-6 sm:p-8"><div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[0.16em] text-[#a8ff58]">{pillar.index}</span><Icon className="h-5 w-5 text-[#a8ff58]" /></div><h3 className="mt-16 font-display text-3xl text-[#f1f0e9]">{pillar.title}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-[#a9afa8]">{pillar.copy}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111412] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><Eyebrow>Product map</Eyebrow><h2 className="mt-5 font-display text-5xl tracking-[-0.045em] text-[#f1f0e9] sm:text-6xl">A view for the<br /><em className="font-normal text-[#a8ff58]">relevant question.</em></h2></div><Link href="/stake-bot" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#c8cdc4] hover:text-[#a8ff58]">See the platform <ArrowUpRight className="h-4 w-4" /></Link></div>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {productPages.filter((page) => page.slug !== "download").slice(0, 9).map((page, index) => (
              <Link key={page.slug} href={`/${page.slug}`} className="group relative min-h-[238px] overflow-hidden bg-[#111412] p-6 transition-colors hover:bg-[#151b17]">
                {index === 0 && <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_85%_20%,rgba(168,255,88,.22),transparent_25%),linear-gradient(120deg,transparent_20%,rgba(255,255,255,.04)_20.5%,transparent_21%)]" />}
                <div className="relative flex h-full flex-col justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a8ff58]">{String(index + 1).padStart(2, "0")} / {page.eyebrow.replace("SmartStaker ", "")}</span><div><h3 className="max-w-[14rem] font-display text-3xl leading-none text-[#f1f0e9]">{page.title} {page.italic && <em className="font-normal">{page.italic}</em>}</h3><span className="mt-6 inline-flex h-8 w-8 items-center justify-center border border-white/20 text-[#a8ff58] transition-all group-hover:border-[#a8ff58] group-hover:translate-x-1"><ArrowUpRight className="h-4 w-4" /></span></div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative min-h-[400px] overflow-hidden border border-white/10 bg-[#101411]"><div className="absolute inset-0 [background:radial-gradient(circle_at_78%_16%,rgba(168,255,88,.2),transparent_28%),linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:auto,32px_32px,32px_32px]" /><div className="absolute left-[14%] top-[22%] h-40 w-[58%] border border-white/15 bg-[#151a16]/90 p-4 shadow-2xl"><p className="font-mono text-[9px] uppercase tracking-[0.13em] text-[#a8ff58]">Signal / high priority</p><div className="mt-8 flex items-end gap-1">{[24,42,38,68,53,82,65,95].map((height, index) => <span key={index} style={{ height: `${height}%` }} className="h-12 w-full bg-[#a8ff58]/80" />)}</div></div><div className="absolute bottom-[20%] right-[8%] w-[56%] border border-white/15 bg-[#0c0e0d]/90 p-4"><p className="font-mono text-[9px] uppercase tracking-[0.13em] text-[#8d948b]">Context preserved</p><div className="mt-4 h-px w-full bg-[#a8ff58]/60" /><div className="mt-3 h-px w-2/3 bg-white/15" /></div><div className="absolute inset-0 bg-gradient-to-tr from-[#0c0e0d] via-transparent to-transparent" /><div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-[#0c0e0d]/85 p-5 backdrop-blur"><p className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#a8ff58]">Signal relay / 02</p><p className="mt-2 font-display text-2xl text-[#f1f0e9]">The alert belongs with the context.</p></div></div>
          <div><Eyebrow>Signal, without the urgency</Eyebrow><h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.045em] text-[#f1f0e9] sm:text-6xl">A calmer record makes room for better decisions.</h2><p className="mt-6 max-w-xl text-base leading-8 text-[#a9afa8]">SmartStaker’s visual language is deliberately legible at a glance: clear status cues, less decorative noise, and a visible line between a configured plan and a live action.</p><div className="mt-8"><Disclosure /></div><div className="mt-8"><PrimaryAction label="Explore signal relay" href="/ssprf" /></div></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111412] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><Eyebrow>Notes from the guide desk</Eyebrow><h2 className="mt-5 font-display text-5xl tracking-[-0.045em] text-[#f1f0e9] sm:text-6xl">Read the limit<br />before the interface.</h2></div><Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.13em] text-[#c8cdc4] hover:text-[#a8ff58]">All guides →</Link></div><div className="mt-14 grid gap-5 lg:grid-cols-3">{articleRegistry.slice(0, 3).map((article, index) => <Link key={article.slug} href={`/blog/${article.slug}`} className="group border-t border-white/20 pt-5"><span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#a8ff58]">{String(index + 1).padStart(2, "0")} / {article.category}</span><h3 className="mt-9 font-display text-3xl leading-[1.02] text-[#f1f0e9] transition-colors group-hover:text-[#a8ff58]">{article.title}</h3><p className="mt-4 text-sm leading-7 text-[#a9afa8]">{article.description}</p><span className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#d6dad2]">Read note <ArrowUpRight className="h-3.5 w-3.5" /></span></Link>)}</div></div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-[1440px] gap-10 border border-[#a8ff58]/30 bg-[#a8ff58]/5 p-7 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><Eyebrow>Static preview / independent build</Eyebrow><h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.9] tracking-[-0.05em] text-[#f1f0e9] sm:text-7xl">Inspect the system. <em className="font-normal text-[#a8ff58]">Keep the decision yours.</em></h2></div><div className="lg:justify-self-end"><PrimaryAction label="Open preview access" href="/download" /><p className="mt-4 max-w-xs text-xs leading-6 text-[#a9afa8]">No download, account, or payment request is available in this static build.</p></div></div></section>
    </>
  );
}
