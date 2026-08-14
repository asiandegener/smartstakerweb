/**
 * STYLE REMINDER — Terminal Ledger: analytical copy, dark technical editorial tone,
 * signal-lime reserved for active states, and every live-looking action remains a preview.
 */

export type Metric = { value: string; label: string };
export type FAQ = { question: string; answer: string };

export type ProductPageData = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  image: string;
  metrics: Metric[];
  features: { title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  faqs: FAQ[];
  console: { labels: string[]; mode: string };
};

export const images = {
  hero: "/manus-storage/smartstaker-hero_ba87ec41.png",
  mark: "/manus-storage/smartstaker-signal-mark_82299648.png",
  dice: "/manus-storage/smartstaker-dice-panel_fa9f1f6a.png",
  analytics: "/manus-storage/smartstaker-analytics-panel_7840f7e1.png",
  signal: "/manus-storage/smartstaker-telegram-panel_85eee774.png",
};

const commonFaqs: FAQ[] = [
  {
    question: "Is this a working automation product?",
    answer:
      "No. SmartStaker is a static product-site preview built to demonstrate information architecture and interface direction. It does not connect to gaming platforms, accounts, wallets, bots, or downloads.",
  },
  {
    question: "Does automation change expected value?",
    answer:
      "No. Operational consistency does not remove a house edge, eliminate variance, or guarantee a financial result. This preview intentionally frames every control as a planning and visibility concept rather than an advantage claim.",
  },
  {
    question: "What do the controls on this page do?",
    answer:
      "They are visual product-preview elements only. Selecting them shows how a finished SmartStaker interface could be organized, without performing an account action or placing any activity.",
  },
];

export const productPages: ProductPageData[] = [
  {
    slug: "stake-bot",
    navLabel: "Platform",
    eyebrow: "The SmartStaker platform",
    title: "Every session,",
    italic: "legible before it moves.",
    description:
      "A single control surface for planning automated session logic, observing presets, and keeping stop conditions visible. This is a product-interface preview, not a live gambling tool.",
    image: images.hero,
    metrics: [
      { value: "12", label: "Planning modules" },
      { value: "4", label: "Session views" },
      { value: "0", label: "Live connections" },
    ],
    features: [
      { title: "One operating surface", copy: "Frame the session, its pacing, and its boundaries in one visible workspace." },
      { title: "Guardrails at the center", copy: "Make stop conditions part of the first decision—not a setting buried after it." },
      { title: "Session memory", copy: "Read the imagined workflow through coherent logs, milestones, and summary states." },
    ],
    steps: [
      { title: "Frame", copy: "Choose a game model and clarify the purpose of the session." },
      { title: "Set limits", copy: "Expose stop conditions, frequency, and time caps before starting." },
      { title: "Review", copy: "Return to a single readable surface for outcomes and context." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Session mode", "Stop condition", "Activity pace"], mode: "Platform preview" },
  },
  {
    slug: "ssprf",
    navLabel: "Signal relay",
    eyebrow: "SmartStaker signal relay",
    title: "Keep the signal",
    italic: "without the noise.",
    description:
      "A companion concept for routing selected session events into a compact, composed alerts feed. The page models the product workflow without connecting a chat account or external service.",
    image: images.signal,
    metrics: [
      { value: "01", label: "Unified feed" },
      { value: "03", label: "Priority levels" },
      { value: "100%", label: "Preview only" },
    ],
    features: [
      { title: "Priority routing", copy: "Separate general activity from milestones that actually warrant attention." },
      { title: "Readable context", copy: "Pair an alert with the state, session, and control that generated it." },
      { title: "Quiet by design", copy: "Use a low-noise default so the essential signal stays visible." },
    ],
    steps: [
      { title: "Select", copy: "Identify which imagined events matter to a session plan." },
      { title: "Route", copy: "Choose a destination and an appropriate priority tier." },
      { title: "Acknowledge", copy: "Return to the session record with the relevant context preserved." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Alert source", "Priority band", "Delivery cadence"], mode: "Relay preview" },
  },
  {
    slug: "stake-dice",
    navLabel: "Dice view",
    eyebrow: "SmartStaker Dice view",
    title: "Make each rule",
    italic: "visible at a glance.",
    description:
      "A dice workflow concept that puts chance range, pacing, win/loss responses, and stop conditions into a single inspectable panel. No wagers or predictions are performed.",
    image: images.dice,
    metrics: [
      { value: "0.01–98%", label: "Chance range concept" },
      { value: "03", label: "Response states" },
      { value: "01", label: "Readout surface" },
    ],
    features: [
      { title: "Chance-first view", copy: "Keep the selected likelihood and its payout relationship in the same visual field." },
      { title: "Conditional logic", copy: "Compare hypothetical on-win and on-loss settings without hiding their risk." },
      { title: "Session exits", copy: "Place round count, time cap, and stop conditions before any activity begins." },
    ],
    steps: [
      { title: "Choose", copy: "Model a likelihood and a direction as a hypothetical configuration." },
      { title: "Bound", copy: "Expose maximum rounds and stop conditions in the top-level plan." },
      { title: "Inspect", copy: "Read a non-live outcome timeline and log treatment." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Win chance", "On-loss response", "Round ceiling"], mode: "Dice preview" },
  },
  {
    slug: "stake-limbo",
    navLabel: "Limbo view",
    eyebrow: "SmartStaker Limbo view",
    title: "Set the target.",
    italic: "See the trade-off.",
    description:
      "A target-multiplier planning interface that surfaces the relationship between frequency, payout, pace, and session exits. It is a visual concept, not a connected tool.",
    image: images.dice,
    metrics: [
      { value: "1.01×", label: "Minimum target concept" },
      { value: "03", label: "Boundary controls" },
      { value: "∞", label: "No profit promise" },
    ],
    features: [
      { title: "Target clarity", copy: "Make the chosen target multiplier the primary visual reference point." },
      { title: "Pace disclosure", copy: "Keep frequency and exposure cues adjacent to the planning controls." },
      { title: "Exit discipline", copy: "Treat ending a session as a first-class setting, not an afterthought." },
    ],
    steps: [
      { title: "Target", copy: "Pick a hypothetical multiplier range to visualize the plan." },
      { title: "Constrain", copy: "Set an imagined time, loss, or round boundary." },
      { title: "Read", copy: "Use a static timeline to understand the workflow at a glance." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Target multiplier", "Pace", "Session limit"], mode: "Limbo preview" },
  },
  {
    slug: "stake-mines",
    navLabel: "Mines view",
    eyebrow: "SmartStaker Mines view",
    title: "Reveal the rules.",
    italic: "Not a prediction.",
    description:
      "A grid-first planning concept for showing selected risk, reveal count, cashout discipline, and session bounds. The interface contains no predictive capability.",
    image: images.dice,
    metrics: [
      { value: "5×5", label: "Grid framing" },
      { value: "24", label: "Risk positions" },
      { value: "0", label: "Prediction claims" },
    ],
    features: [
      { title: "Risk on the grid", copy: "Use the grid to make the selected risk level tangible before proceeding." },
      { title: "Cashout discipline", copy: "Show the intended exit point as a visible commitment." },
      { title: "Clear boundaries", copy: "Pair each planning choice with an explicit time or session threshold." },
    ],
    steps: [
      { title: "Map", copy: "Choose a hypothetical mine count and reveal intent." },
      { title: "Commit", copy: "Declare a cashout point and session boundary up front." },
      { title: "Review", copy: "Return to a simple grid log without suggesting predictability." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Grid risk", "Reveal cap", "Cashout rule"], mode: "Mines preview" },
  },
  {
    slug: "stake-plinko",
    navLabel: "Plinko view",
    eyebrow: "SmartStaker Plinko view",
    title: "Risk level,",
    italic: "made explicit.",
    description:
      "A planning page for comparing risk modes, row counts, pace, and stop conditions without representing that a system can change chance or expected value.",
    image: images.dice,
    metrics: [
      { value: "08–16", label: "Rows concept" },
      { value: "03", label: "Risk modes" },
      { value: "01", label: "Visible exit plan" },
    ],
    features: [
      { title: "Mode comparison", copy: "See low, medium, and high risk as distinct planning states rather than a vague slider." },
      { title: "Distribution view", copy: "Use a restrained visual readout for the shape of hypothetical outcomes." },
      { title: "Pre-committed limits", copy: "Pin the session’s limits next to the configuration surface." },
    ],
    steps: [
      { title: "Select", copy: "Choose a hypothetical risk mode and row depth." },
      { title: "Define", copy: "Set a non-live pace and session boundary." },
      { title: "Observe", copy: "Review an illustrative distribution panel." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Risk mode", "Rows", "Stop condition"], mode: "Plinko preview" },
  },
  {
    slug: "stake-slots",
    navLabel: "Sessions view",
    eyebrow: "SmartStaker sessions view",
    title: "Parallel views.",
    italic: "One calm surface.",
    description:
      "A multi-session dashboard concept for showing independent activity lanes, progress markers, and pause states without connecting to providers or running parallel activity.",
    image: images.hero,
    metrics: [
      { value: "04", label: "Visual lanes" },
      { value: "31+", label: "Provider-style filters" },
      { value: "01", label: "Unified summary" },
    ],
    features: [
      { title: "Parallel lanes", copy: "Keep each imagined session distinct while preserving a single total readout." },
      { title: "Milestone markers", copy: "Use quiet, legible signals to mark a collected bonus or pause state." },
      { title: "Summary before story", copy: "Read cost, duration, and boundaries before scrolling into secondary detail." },
    ],
    steps: [
      { title: "Arrange", copy: "Select up to four visual lanes for a planning surface." },
      { title: "Bound", copy: "Give each lane an independent limit and stop logic." },
      { title: "Summarize", copy: "Compare the static session cards as one controlled workspace." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Session lanes", "Pause trigger", "Summary mode"], mode: "Sessions preview" },
  },
  {
    slug: "stake-strategy",
    navLabel: "Strategy view",
    eyebrow: "SmartStaker strategy view",
    title: "A plan is not",
    italic: "an advantage.",
    description:
      "A strategy-library layout for comparing flat, progression, and exit disciplines while clearly preserving the role of chance, variance, and risk.",
    image: images.analytics,
    metrics: [
      { value: "04", label: "Planning models" },
      { value: "01", label: "Risk-first framing" },
      { value: "0%", label: "Guaranteed returns" },
    ],
    features: [
      { title: "Model comparison", copy: "Present each configuration as a trade-off, not a route to a promised result." },
      { title: "Risk language", copy: "Use direct vocabulary for drawdown, streaks, and the limits of progression systems." },
      { title: "Exit logic", copy: "Give stop conditions equal visual weight with any imagined entry logic." },
    ],
    steps: [
      { title: "Compare", copy: "Read the operational differences among planning models." },
      { title: "Stress test", copy: "Surface exposure and variance language beside each selection." },
      { title: "Choose limits", copy: "Treat a decision to end as part of the core workflow." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Planning model", "Risk disclosure", "Exit rule"], mode: "Strategy preview" },
  },
  {
    slug: "stake-stats",
    navLabel: "Analytics view",
    eyebrow: "SmartStaker analytics view",
    title: "Replace hunches",
    italic: "with a readable record.",
    description:
      "A statistics-first view that organizes hypothetical sessions into clear measures, trend context, and export-ready visual states without consuming account data.",
    image: images.analytics,
    metrics: [
      { value: "08", label: "Readout modules" },
      { value: "03", label: "Time scopes" },
      { value: "01", label: "Clear narrative" },
    ],
    features: [
      { title: "Session telemetry", copy: "Place duration, activity volume, and imagined result context in one measure strip." },
      { title: "Trend framing", copy: "Use time windows to prevent a single short streak from becoming a story." },
      { title: "Export posture", copy: "Show how a clean static report could be prepared for later review." },
    ],
    steps: [
      { title: "Scope", copy: "Select a non-live session, week, or all-time reading frame." },
      { title: "Read", copy: "Compare compact metrics with a calm illustrated trend panel." },
      { title: "Reflect", copy: "Use the record to examine decisions rather than claim prediction." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Time scope", "Metric set", "Export treatment"], mode: "Analytics preview" },
  },
  {
    slug: "stake-code-claimer",
    navLabel: "Code monitor",
    eyebrow: "SmartStaker code monitor",
    title: "A queue,",
    italic: "not a promise.",
    description:
      "A message-monitoring layout that demonstrates filters, eligibility context, and activity history without reading Telegram, claiming a code, or connecting a platform account.",
    image: images.signal,
    metrics: [
      { value: "03", label: "Filter concepts" },
      { value: "01", label: "Eligibility view" },
      { value: "0", label: "Connected bots" },
    ],
    features: [
      { title: "Filter logic", copy: "Arrange amount, activity requirement, and timing concepts as explicit visible fields." },
      { title: "Queue context", copy: "Pair each imagined alert with its source and the reason it meets a filter." },
      { title: "No silent action", copy: "Keep the confirmation state clear rather than implying an automatic account action." },
    ],
    steps: [
      { title: "Set", copy: "Model the desired filter and alert categories." },
      { title: "Review", copy: "Inspect an illustrative queue of potential signals." },
      { title: "Decide", copy: "Present a non-live choice point rather than an automated claim." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Source filter", "Value band", "Review state"], mode: "Code monitor preview" },
  },
  {
    slug: "stake-reload-claimer",
    navLabel: "Reload monitor",
    eyebrow: "SmartStaker reload monitor",
    title: "Make the timing",
    italic: "plainly visible.",
    description:
      "A timing-monitor concept for showing eligibility, countdown context, and a manual decision point. It never opens a website, refreshes an account, or submits a claim.",
    image: images.signal,
    metrics: [
      { value: "30s", label: "Illustrative pulse" },
      { value: "01", label: "Eligibility surface" },
      { value: "0", label: "Account actions" },
    ],
    features: [
      { title: "Countdown context", copy: "Keep a potential time window and its source in a readable dedicated surface." },
      { title: "Eligibility cues", copy: "Clarify the imagined state before surfacing a next-step prompt." },
      { title: "Manual control", copy: "End with a visible, non-automated human decision point." },
    ],
    steps: [
      { title: "Observe", copy: "Read an illustrative timing state and its description." },
      { title: "Check", copy: "Compare it with an imagined eligibility condition." },
      { title: "Act manually", copy: "Keep any actual external action outside this static preview." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Timing state", "Eligibility", "Manual review"], mode: "Reload monitor preview" },
  },
  {
    slug: "download",
    navLabel: "Preview access",
    eyebrow: "SmartStaker preview access",
    title: "See the system",
    italic: "before it becomes a system.",
    description:
      "A transparent access page for this design prototype. It intentionally does not offer an installer, request an account, or collect personal information.",
    image: images.hero,
    metrics: [
      { value: "Web", label: "Preview format" },
      { value: "0", label: "Installers" },
      { value: "0", label: "Account requests" },
    ],
    features: [
      { title: "Clear scope", copy: "A direct explanation that this is a site prototype, not a downloadable application." },
      { title: "No credential request", copy: "No account identifiers, keys, or connections are captured by this frontend." },
      { title: "Transparent next step", copy: "The primary call-to-action returns visitors to the product tour." },
    ],
    steps: [
      { title: "Explore", copy: "Review the product and game views at your own pace." },
      { title: "Inspect", copy: "Use the guides to understand the site’s risk-aware framing." },
      { title: "Return", copy: "Navigate back through the tour without downloading anything." },
    ],
    faqs: commonFaqs,
    console: { labels: ["Preview format", "Installation", "Account state"], mode: "Access preview" },
  },
];

export const articleRegistry = [
  {
    slug: "provably-fair-what-it-shows-and-what-it-doesnt",
    category: "Foundations",
    title: "What verification can show—and what it cannot.",
    description: "A practical reading of committed outcomes, audit trails, and the difference between verification and a prediction claim.",
    minutes: "7 min",
  },
  {
    slug: "session-limits-that-remain-visible",
    category: "Session design",
    title: "Place the exit rule before the entry rule.",
    description: "Why time caps, loss limits, and a clear stop condition should be visually central to any session workflow.",
    minutes: "5 min",
  },
  {
    slug: "variance-is-not-a-product-testimonial",
    category: "Variance",
    title: "A short run is not a product testimonial.",
    description: "How noisy samples, selection bias, and streaks distort conclusions about tools, configurations, and outcomes.",
    minutes: "8 min",
  },
  {
    slug: "read-the-house-edge-before-the-interface",
    category: "Foundations",
    title: "Read the house edge before the interface.",
    description: "A concise reminder that a polished dashboard does not change the mathematics of a negative-expectation game.",
    minutes: "4 min",
  },
  {
    slug: "a-calm-record-is-better-than-a-loud-chart",
    category: "Analytics",
    title: "A calm record is better than a loud chart.",
    description: "Designing a session log that supports reflection rather than chasing a dramatic short-term narrative.",
    minutes: "6 min",
  },
  {
    slug: "progression-systems-and-the-cost-of-speed",
    category: "Strategy",
    title: "Progression systems and the cost of speed.",
    description: "Why increasing pace can compound exposure without turning a planning model into an advantage.",
    minutes: "9 min",
  },
];

export function getProductPage(slug: string) {
  return productPages.find((page) => page.slug === slug);
}

export function titleFromSlug(slug: string) {
  return slug
    .replace(/^(stake-|smartstaker-)/, "")
    .replace(/-2026$/, "")
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
