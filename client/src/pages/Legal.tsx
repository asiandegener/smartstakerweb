/**
 * STYLE REMINDER — Terminal Ledger legal pages: unembellished, calm, left aligned, with clear
 * independent-preview scope and no fake company credentials or operational policy claims.
 */

import { Eyebrow } from "@/components/PageElements";

const privacySections = [
  ["What this preview is", "SmartStaker is a static frontend prototype. It does not provide a downloadable client, game automation, payment service, account connection, or cloud dashboard."],
  ["Information collection", "This prototype does not intentionally request platform credentials, API keys, financial information, or account identifiers. Standard hosting and browser telemetry may be collected by the deployment environment according to its own service terms."],
  ["External services", "The visual product pages mention concepts such as messaging and account context solely as interface examples. This build does not connect to Telegram, gaming platforms, wallets, or affiliates."],
  ["Your choices", "Do not enter passwords, access tokens, or personal financial information into a preview environment. If this becomes a live product, the policy must be revised to describe the actual data flows, retention, lawful basis, security controls, and contact channel."],
];

const termSections = [
  ["Preview terms", "This website is an independent product-design preview. It is offered for demonstration and evaluation and is not a gambling service, financial product, prediction system, or promise of an outcome."],
  ["No affiliation", "SmartStaker is not affiliated with SSPilot, Stake, or any gaming platform. Names of product categories on the site describe reference-style page roles, not partnerships or endorsements."],
  ["Responsible use", "Gambling involves financial risk and may be addictive. People must comply with applicable law, platform terms, and age restrictions. Nothing on this preview constitutes gambling, financial, legal, or therapeutic advice."],
  ["No warranty", "The prototype is provided as-is. The current build contains no live integrations, downloads, account actions, or transaction features, and no result or return is represented or guaranteed."],
];

export function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy, stated plainly." : "Terms, without the fog.";
  const intro = isPrivacy ? "The boundaries of this prototype are intentionally narrow: no live account connection, no credential request, no product telemetry claim." : "A clear account of what this preview is, what it does not do, and the responsibilities that remain with any visitor.";
  const sections = isPrivacy ? privacySections : termSections;
  return <><section className="border-b border-white/10 px-4 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24"><div className="mx-auto max-w-4xl"><Eyebrow>{isPrivacy ? "Privacy policy" : "Terms of use"}</Eyebrow><h1 className="mt-7 font-display text-[clamp(4rem,8vw,7rem)] leading-[0.84] tracking-[-0.06em] text-[#f1f0e9]">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-[#adb3aa]">{intro}</p><p className="mt-10 font-mono text-[10px] uppercase tracking-[0.13em] text-[#7c837a]">Last updated · August 2026</p></div></section><section className="px-4 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-4xl divide-y divide-white/10">{sections.map(([heading, content], index) => <section key={heading} className="grid gap-5 py-10 sm:grid-cols-[0.2fr_0.8fr]"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a8ff58]">0{index + 1}</p><div><h2 className="font-display text-3xl text-[#f1f0e9]">{heading}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#a9afa8]">{content}</p></div></section>)}</div></section></>;
}
