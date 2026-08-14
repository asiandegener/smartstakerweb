/**
 * STYLE REMINDER — Terminal Ledger product template: editorial product story on a graphite grid,
 * dense but calm controls, no success or profit implication, previews stay visibly non-live.
 */

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { CheckLine, Disclosure, Eyebrow, FAQList, FeatureGrid, GhostAction, MetricStrip, PreviewConsole, PrimaryAction, SafetyLine, Workflow } from "@/components/PageElements";
import { getProductPage } from "@/lib/siteData";

export default function ProductPage({ slug }: { slug: string }) {
  const page = getProductPage(slug);
  if (!page) return <MissingProduct />;
  const usesHeroImage = page.slug === "stake-bot" || page.slug === "download";

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">{usesHeroImage ? <img src={page.image} alt="" className="h-full w-full object-cover opacity-35" /> : <ProductTexture />}<div className="absolute inset-0 bg-gradient-to-r from-[#0c0e0d] via-[#0c0e0d]/60 to-[#0c0e0d]/20" /></div>
        <div className="relative mx-auto max-w-[1440px]"><Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-[#a6ada4] transition-colors hover:text-[#a8ff58]"><ArrowLeft className="h-3.5 w-3.5" /> Back to system</Link><div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"><div><Eyebrow>{page.eyebrow}</Eyebrow><h1 className="mt-7 max-w-4xl font-display text-[clamp(4rem,8vw,8rem)] leading-[0.83] tracking-[-0.06em] text-[#f2f1e9]">{page.title}<br />{page.italic && <em className="font-normal text-[#a8ff58]">{page.italic}</em>}</h1><p className="mt-8 max-w-xl text-base leading-8 text-[#b1b7ae] sm:text-lg">{page.description}</p><div className="mt-9 flex flex-wrap gap-3"><PrimaryAction label="View preview access" /><GhostAction label="Inspect controls" /></div></div><div className="lg:hidden">{usesHeroImage ? <img src={page.image} alt="Abstract product detail environment" className="aspect-[16/10] w-full border border-white/10 object-cover" /> : <ProductTexture />}</div></div><div className="mt-16 max-w-3xl"><MetricStrip metrics={page.metrics} /></div></div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-[1440px]"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><div><Eyebrow>Control surface</Eyebrow><h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-[-0.045em] text-[#f1f0e9] sm:text-6xl">The configuration should explain itself.</h2></div><div className="max-w-xl justify-self-end"><p className="text-base leading-8 text-[#a9afa8]">The control study uses a direct framing: configure the condition, see the limit, and understand the intended workflow without mistaking the interface for an assurance of outcome.</p><div className="mt-6"><SafetyLine /></div></div></div><div className="mt-14"><PreviewConsole labels={page.console.labels} mode={page.console.mode} /></div></div></section>

      <section className="border-y border-white/10 bg-[#111412] px-4 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-[1440px]"><Eyebrow>Visible mechanics</Eyebrow><h2 className="mt-5 max-w-2xl font-display text-5xl leading-[0.94] tracking-[-0.045em] text-[#f1f0e9] sm:text-6xl">Every setting should clarify the session, not obscure it.</h2><div className="mt-14"><FeatureGrid features={page.features} /></div></div></section>

      <section className="px-4 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-[1440px]"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><div><Eyebrow>From plan to record</Eyebrow><h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-[-0.045em] text-[#f1f0e9] sm:text-6xl">A three-part discipline.</h2></div><div className="space-y-3"><CheckLine>Surface the objective before selecting the configuration.</CheckLine><CheckLine>Make exits, pacing, and intended limits visible at top level.</CheckLine><CheckLine>Use the record to reflect rather than to claim prediction.</CheckLine></div></div><div className="mt-16"><Workflow steps={page.steps} /></div></div></section>

      <section className="border-y border-white/10 bg-[#111412] px-4 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><Eyebrow>Common questions</Eyebrow><h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-[-0.045em] text-[#f1f0e9] sm:text-6xl">Read the boundary line.</h2><div className="mt-8"><Disclosure /></div></div><FAQList faqs={page.faqs} /></div></section>

      <section className="px-4 py-20 sm:px-8"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 border-t border-white/20 pt-6 sm:flex-row sm:items-center"><p className="max-w-xl font-display text-3xl text-[#f1f0e9]">Browse the other product views <em className="font-normal text-[#a8ff58]">in the system.</em></p><Link href="/stake-bot" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.13em] text-[#d0d4cc] hover:text-[#a8ff58]">Return to platform <ArrowUpRight className="h-4 w-4" /></Link></div></section>
    </>
  );
}

function MissingProduct() {
  return <section className="px-4 py-32 sm:px-8"><div className="mx-auto max-w-2xl border-l border-[#a8ff58] pl-6"><Eyebrow>Route not found</Eyebrow><h1 className="mt-5 font-display text-6xl text-[#f1f0e9]">This product view is not in the preview.</h1><Link href="/" className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#a8ff58]">Return home <ArrowUpRight className="h-4 w-4" /></Link></div></section>;
}

function ProductTexture() {
  return <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#121714]"><div className="absolute inset-0 [background:radial-gradient(circle_at_70%_20%,rgba(168,255,88,.18),transparent_28%),linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:auto,34px_34px,34px_34px]" /><div className="absolute left-[12%] top-[18%] h-[42%] w-[62%] border border-white/20 bg-[#151b17]/80 shadow-2xl" /><div className="absolute bottom-[17%] right-[7%] h-[34%] w-[49%] border border-[#a8ff58]/40 bg-[#0b0e0c]/90 p-4"><p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#a8ff58]">Instrument panel</p><div className="mt-6 flex h-8 items-end gap-1">{[20,48,35,64,55,88,72].map((height, index) => <span key={index} style={{ height: `${height}%` }} className="w-full bg-[#a8ff58]/80" />)}</div></div></div>;
}
