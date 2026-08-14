/**
 * STYLE REMINDER — SmartStaker follows the SSPilot reference: charcoal grid fields,
 * teal emphasis, pale editorial display type, compact utility navigation, and long-form page rhythm.
 */

export type FAQ = { question: string; answer: string };
export type Metric = { value: string; label: string };
export type Feature = { title: string; copy: string };
export type Step = { title: string; copy: string };
export type Setting = { label: string; value: string };

export type ProductPageData = {
  slug: string;
  kind: "product" | "game" | "download";
  badge: string;
  title: string;
  accent: string;
  description: string;
  introTitle: string;
  intro: string[];
  benefits: string[];
  features: Feature[];
  settings?: Setting[];
  steps: Step[];
  faqs: FAQ[];
  related: { label: string; href: string }[];
};

const platformFaqs: FAQ[] = [
  { question: "What is SmartStaker?", answer: "SmartStaker is presented as a desktop companion for repeatable platform workflows, including configurable play flows, session summaries, notification surfaces, and supporting tools." },
  { question: "Is SmartStaker safe to use?", answer: "Use of third-party tools can involve platform-account and financial risk. Review the platform rules that apply to you, maintain strict limits, and never use money you cannot afford to lose." },
  { question: "Does automation guarantee a result?", answer: "No. Automation can standardize a workflow but cannot predict random outcomes, remove variance, or guarantee a profit." },
  { question: "Can I run more than one session?", answer: "The product architecture includes parallel-session concepts and consolidated summary views; availability depends on the eventual desktop application release." },
];

const gameFaqs = (name: string): FAQ[] => [
  { question: `How does SmartStaker ${name} automation work?`, answer: `The ${name} configuration surface groups settings, stop conditions, and session statistics in one workflow. It does not promise prediction or an outcome.` },
  { question: "Can SmartStaker predict outcomes?", answer: "No. Randomized game outcomes are not predictable. Settings are workflow controls, not a predictive engine." },
  { question: "Can I set stop conditions?", answer: "Yes. The interface design includes configurable stop-on-profit, stop-on-loss, time, and round-count boundaries." },
  { question: "Is there a recommended strategy?", answer: "There is no universally profitable strategy. Any configuration should be tested cautiously, understood as risky, and bounded by limits." },
];

const standardFeatures: Feature[] = [
  { title: "Full workflow control", copy: "Group the primary configuration, pace, and stop conditions into one legible operating surface." },
  { title: "Focused summaries", copy: "Keep the core session readout visible with simple figures, history, and high-signal status changes." },
  { title: "Configurable limits", copy: "Make boundaries visible before the session begins instead of burying them in secondary menus." },
  { title: "Fast interaction", copy: "Use compact controls and direct local application patterns designed for repeat sessions." },
  { title: "Clear history", copy: "Pair activity with an export-ready record so a session can be reviewed without reconstructing it from memory." },
  { title: "Local-first posture", copy: "The site describes a desktop-first application pattern where sensitive configuration is retained on the user’s device." },
];

const defaultSteps: Step[] = [
  { title: "Download & install", copy: "Install the desktop companion and review the platform connection requirements before enabling a workflow." },
  { title: "Configure your session", copy: "Choose the relevant settings, pace, and boundaries for the intended workflow." },
  { title: "Set limits first", copy: "Define stop conditions, time horizons, and a round or session cap before activity begins." },
  { title: "Monitor the record", copy: "Review the visible session context and use it to maintain a disciplined stopping point." },
];

export const productPages: ProductPageData[] = [
  {
    slug: "stake-bot", kind: "product", badge: "#1 PLATFORM AUTOMATION COMPANION", title: "The SmartStaker", accent: "desktop companion", description: "A complete companion for configurable original-game workflows, parallel slot sessions, bonus tracking, promotions, and real-time session reporting.", introTitle: "What is a platform bot?", intro: ["A platform bot is a desktop workflow tool that handles repetitive session controls while a user keeps ownership of configuration, limits, and review.", "SmartStaker brings together parallel session lanes, bonus workspace views, local statistics, configurable strategies, and a signal layer so the repetitive work has one consistent surface."], benefits: ["Parallel slot-session layout", "Original-game settings for supported workflows", "Bonus workspace and progress tracking", "Session summaries and export-ready history", "Signal and notification patterns", "Local-first desktop application posture"], features: standardFeatures, steps: defaultSteps, faqs: platformFaqs, related: [{ label: "Code Claimer", href: "/stake-code-claimer" }, { label: "Reload Claimer", href: "/stake-reload-claimer" }, { label: "Strategy Guide", href: "/stake-strategy" }, { label: "Stats & Analytics", href: "/stake-stats" }]
  },
  {
    slug: "ssprf", kind: "product", badge: "SMARTSTAKER RELAY", title: "Platform chat,", accent: "routed clearly", description: "A companion signal surface that filters selected chat activity, promotions, and session updates into a concise desktop-and-mobile-friendly stream.", introTitle: "What is SmartStaker Relay?", intro: ["SmartStaker Relay is a companion-product concept for transforming high-volume platform chat into selected, readable notifications.", "Choose categories, configure delivery priorities, and keep the session context attached to the notification instead of returning to a crowded chat tab."], benefits: ["Keyword and mention filters", "Rain and big-win activity bands", "Priority delivery patterns", "Context-preserving notifications", "Compact companion workflow", "Clear, configurable alert boundaries"], features: standardFeatures, steps: [{ title: "Choose a signal", copy: "Select the activity categories that deserve a separate alert." }, { title: "Set the filter", copy: "Apply value, keyword, and priority rules to remove routine noise." }, { title: "Route the update", copy: "Send selected activity to the appropriate companion feed." }, { title: "Review in context", copy: "Return to the related session with the relevant signal and state preserved." }], faqs: platformFaqs, related: [{ label: "Stats & Analytics", href: "/stake-stats" }, { label: "Code Claimer", href: "/stake-code-claimer" }, { label: "Reload Claimer", href: "/stake-reload-claimer" }, { label: "Platform", href: "/stake-bot" }]
  },
  {
    slug: "stake-dice", kind: "game", badge: "PLATFORM ORIGINAL GAME", title: "Dice automation", accent: "& controls", description: "Configure a base amount, win chance, direction, win/loss responses, and session boundaries in one compact Dice workflow.", introTitle: "How does Dice automation work?", intro: ["Dice workflows center on a selected win chance and direction. The payout relationship shifts with the selected chance, while random results remain random.", "SmartStaker places the configuration, progression response, and session summary together so the operator can see the conditions before beginning."], benefits: ["Custom chance and direction", "Win/loss response settings", "Configurable stops", "Session-level Dice summaries"], settings: [{ label: "Bet amount", value: "Custom / Auto" }, { label: "Win chance", value: "0.01% – 98%" }, { label: "Roll direction", value: "Over / Under" }, { label: "On win", value: "Reset / Increase %" }, { label: "On loss", value: "Reset / Increase %" }, { label: "Stop on profit", value: "Configurable" }, { label: "Stop on loss", value: "Configurable" }], features: standardFeatures, steps: defaultSteps, faqs: gameFaqs("Dice"), related: [{ label: "Limbo", href: "/stake-limbo" }, { label: "Mines", href: "/stake-mines" }, { label: "Plinko", href: "/stake-plinko" }, { label: "Stats", href: "/stake-stats" }]
  },
  {
    slug: "stake-limbo", kind: "game", badge: "PLATFORM ORIGINAL GAME", title: "Limbo automation", accent: "& targets", description: "Set a target multiplier, base amount, pace, session responses, and stop conditions for a clear Limbo configuration workflow.", introTitle: "How does Limbo automation work?", intro: ["Limbo uses a selected target multiplier; the chance relationship changes with the target while each result remains random.", "The SmartStaker layout keeps target, pace, response settings, and limits in view so the configuration can be inspected before a session."], benefits: ["Target multiplier control", "Pace and response settings", "Clear session exits", "Result and history summaries"], settings: [{ label: "Bet amount", value: "Custom / Auto" }, { label: "Target multiplier", value: "1.01× and above" }, { label: "On win", value: "Reset / Increase %" }, { label: "On loss", value: "Reset / Increase %" }, { label: "Speed", value: "Configurable" }, { label: "Stop limits", value: "Configurable" }], features: standardFeatures, steps: defaultSteps, faqs: gameFaqs("Limbo"), related: [{ label: "Dice", href: "/stake-dice" }, { label: "Mines", href: "/stake-mines" }, { label: "Plinko", href: "/stake-plinko" }, { label: "Strategy", href: "/stake-strategy" }]
  },
  {
    slug: "stake-mines", kind: "game", badge: "PLATFORM ORIGINAL GAME", title: "Mines automation", accent: "& cashout rules", description: "Choose a mine count, reveal target, auto-cashout point, and session boundaries from a simple grid-first configuration surface.", introTitle: "How does Mines automation work?", intro: ["Mines workflows start with a selected mine count and reveal target. The game is random, and no grid configuration can predict tile positions.", "SmartStaker treats a cashout point and stop conditions as first-class settings so the intended exit is readable before a session begins."], benefits: ["Mine-count selection", "Reveal-count rules", "Auto-cashout configuration", "Grid-first session presentation"], settings: [{ label: "Mine count", value: "1 – 24" }, { label: "Grid", value: "5 × 5" }, { label: "Reveal target", value: "Configurable" }, { label: "Auto cashout", value: "Configurable" }, { label: "On win", value: "Reset / Increase %" }, { label: "Stop limits", value: "Configurable" }], features: standardFeatures, steps: defaultSteps, faqs: gameFaqs("Mines"), related: [{ label: "Dice", href: "/stake-dice" }, { label: "Limbo", href: "/stake-limbo" }, { label: "Plinko", href: "/stake-plinko" }, { label: "Slots", href: "/stake-slots" }]
  },
  {
    slug: "stake-plinko", kind: "game", badge: "PLATFORM ORIGINAL GAME", title: "Plinko automation", accent: "& risk modes", description: "Compare risk mode, row count, response rules, and stop conditions in one Plinko control workflow.", introTitle: "How does Plinko automation work?", intro: ["Plinko configurations use a selected risk mode and row count to define the payoff distribution; the resulting drops are still random.", "The configuration surface keeps risk, rows, pace, and boundaries together to make the intended workflow easy to inspect."], benefits: ["Low, medium, and high risk modes", "8–16 row selection", "Clear progression responses", "Session statistics views"], settings: [{ label: "Risk level", value: "Low / Medium / High" }, { label: "Rows", value: "8 – 16" }, { label: "Bet amount", value: "Custom / Auto" }, { label: "On win", value: "Reset / Increase %" }, { label: "On loss", value: "Reset / Increase %" }, { label: "Stop limits", value: "Configurable" }], features: standardFeatures, steps: defaultSteps, faqs: gameFaqs("Plinko"), related: [{ label: "Dice", href: "/stake-dice" }, { label: "Limbo", href: "/stake-limbo" }, { label: "Mines", href: "/stake-mines" }, { label: "Stats", href: "/stake-stats" }]
  },
  {
    slug: "stake-slots", kind: "product", badge: "PARALLEL SLOT WORKSPACE", title: "Run several", accent: "sessions clearly", description: "Organize up to four parallel slot lanes, bonus conditions, alerts, and a consolidated session summary from one desktop workspace.", introTitle: "A multi-session slot workspace", intro: ["SmartStaker’s slot workspace is organized around distinct lanes instead of a single opaque activity feed. Each lane has its own state, conditions, and visible pause point.", "A consolidated summary keeps duration, activity count, notifications, and progress readable without requiring the operator to switch between separate windows."], benefits: ["Parallel session lanes", "Bonus event markers", "Per-lane pause conditions", "Unified progress and summary view", "Provider and game filters", "Compact multi-session controls"], features: standardFeatures, steps: defaultSteps, faqs: platformFaqs, related: [{ label: "Stats & Analytics", href: "/stake-stats" }, { label: "Strategy", href: "/stake-strategy" }, { label: "Code Claimer", href: "/stake-code-claimer" }, { label: "Platform", href: "/stake-bot" }]
  },
  {
    slug: "stake-strategy", kind: "product", badge: "WORKFLOW STRATEGIES", title: "Build a", accent: "repeatable setup", description: "Compare configuration patterns, response logic, session limits, and recorded outcomes without confusing an interface pattern for a financial guarantee.", introTitle: "What is a workflow strategy?", intro: ["A workflow strategy describes a set of pre-defined configuration rules: start conditions, responses, limits, and review points.", "It does not remove variance or make a random result predictable. SmartStaker presents strategy as a disciplined configuration practice with visible risks and stopping points."], benefits: ["Flat and progression patterns", "Explicit risk and limit language", "Configurable responses", "Scenario comparison surfaces", "Session-boundary controls", "Guide and reference notes"], features: standardFeatures, steps: defaultSteps, faqs: platformFaqs, related: [{ label: "Dice", href: "/stake-dice" }, { label: "Limbo", href: "/stake-limbo" }, { label: "Mines", href: "/stake-mines" }, { label: "Stats", href: "/stake-stats" }]
  },
  {
    slug: "stake-stats", kind: "product", badge: "REAL-TIME ANALYTICS", title: "Every session,", accent: "in view", description: "Track activity, duration, wins, losses, multipliers, and progress with an organized session history and export-ready reports.", introTitle: "Real-time session analytics", intro: ["The analytics surface is designed to turn a long event list into readable session context. Figures, trends, and status changes stay grouped by the time frame that matters.", "Use a record to review how a configuration behaved, not to assume a short sequence can predict what comes next."], benefits: ["Profit/loss figures", "Activity and duration summaries", "Multiplier and streak readouts", "Session-history views", "Export posture", "Signal-worthy threshold alerts"], features: standardFeatures, steps: defaultSteps, faqs: platformFaqs, related: [{ label: "Slots", href: "/stake-slots" }, { label: "Strategy", href: "/stake-strategy" }, { label: "SmartStaker Relay", href: "/ssprf" }, { label: "Platform", href: "/stake-bot" }]
  },
  {
    slug: "stake-code-claimer", kind: "product", badge: "CODE MONITORING", title: "Never miss", accent: "the signal", description: "Monitor code messages, filter by value and eligibility context, and keep potential promotion activity in a clear review queue.", introTitle: "Code monitoring, organized", intro: ["Code-monitoring workflows watch selected communication sources and apply clear value, time, and eligibility filters before presenting an item in a queue.", "The goal is not to promise that any code will be available or valid; it is to keep relevant signals separated from noisy group activity."], benefits: ["Selected-source monitoring", "Value and day filters", "Eligibility context", "Review-queue presentation", "Desktop notification patterns", "Activity history"], features: standardFeatures, steps: defaultSteps, faqs: platformFaqs, related: [{ label: "Reload Claimer", href: "/stake-reload-claimer" }, { label: "SmartStaker Relay", href: "/ssprf" }, { label: "Stats", href: "/stake-stats" }, { label: "Platform", href: "/stake-bot" }]
  },
  {
    slug: "stake-reload-claimer", kind: "product", badge: "RELOAD MONITORING", title: "Keep reload", accent: "timing visible", description: "Track reload windows, eligibility patterns, alert timing, and confirmation status from one clear monitoring workspace.", introTitle: "Reload monitoring with context", intro: ["Reload workflows focus on timing, relevant eligibility notes, and compact notification states so an operator can review the condition at the right moment.", "SmartStaker is presented as a companion workspace rather than an assurance that a reload will be available, valid, or claimable."], benefits: ["Reload-window tracking", "Eligibility filters", "Timing notifications", "Clear monitoring history", "Session-status context", "Compact review workspace"], features: standardFeatures, steps: defaultSteps, faqs: platformFaqs, related: [{ label: "Code Claimer", href: "/stake-code-claimer" }, { label: "SmartStaker Relay", href: "/ssprf" }, { label: "Stats", href: "/stake-stats" }, { label: "Platform", href: "/stake-bot" }]
  },
  {
    slug: "download", kind: "download", badge: "SMARTSTAKER DESKTOP", title: "Download", accent: "SmartStaker", description: "A desktop-product landing surface for Windows, macOS, and Linux availability, installation notes, and release-channel information.", introTitle: "One desktop companion", intro: ["SmartStaker is positioned as a desktop application with a unified interface across supported operating systems.", "This public-site build is a static preview only. It does not distribute an installer, create accounts, or connect to an external platform."], benefits: ["Windows release channel", "macOS release channel", "Linux release channel", "Local installation notes", "Release-version information", "Support and update guidance"], features: standardFeatures, steps: defaultSteps, faqs: platformFaqs, related: [{ label: "Platform", href: "/stake-bot" }, { label: "Guides", href: "/blog" }, { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }]
  },
];

export const originals = ["Dragon Tower", "Blue Samurai", "Keno", "Pump", "Diamonds", "Dice", "Limbo", "Mines", "Hilo", "Tome of Life", "Plinko", "Flip", "Rock Paper Scissors", "Scarab Spin", "Snakes", "Darts", "Cases", "Wheel", "Bars", "Chicken"];
export const providers = ["Hacksaw Gaming", "Backseat Gaming", "Bullshark Games", "Pragmatic Play", "Twist Gaming", "Titan Gaming", "Popiplay", "Penguin King", "BGaming", "Push Gaming", "Massive Studios", "Endorphina", "Relax Gaming", "Print Studios", "Thunderkick", "TrueLab", "OneTouch", "AvatarUX", "Peter & Sons", "NoLimit City", "Stake Engine", "Play'n GO", "Red Tiger", "Slotmill"];

export type Article = { slug: string; category: string; title: string; description: string; date: string; reading: string };
export const articleRegistry: Article[] = [
  { slug: "provably-fair-platform-verify-every-bet-2026", category: "GUIDE", title: "Provably Fair: How Cryptographic Bet Verification Actually Works", description: "A clear guide to server seeds, client seeds, HMAC-SHA256 verification, and the distinction between verifiability and prediction.", date: "Mar 17, 2026", reading: "8 min read" },
  { slug: "mines-auto-cashout-rules-ev-curves-2026", category: "STRATEGY", title: "Mines Auto-Cashout Rules: Reveal Counts, EV Curves and Lock-In Logic", description: "How to define a cashout rule, understand its trade-offs, and maintain limits without confusing a workflow with an edge.", date: "Mar 14, 2026", reading: "9 min read" },
  { slug: "dice-bot-backtesting-variance-automation-limits-2026", category: "STRATEGY", title: "Dice Workflow Backtesting: Validating a Setup Before a Live Session", description: "Metrics, variance, data hygiene, and the common mistakes that make an apparent result look stronger than it is.", date: "Mar 10, 2026", reading: "10 min read" },
  { slug: "limbo-bot-target-multiplier-guide-2026", category: "GUIDE", title: "Limbo Target Multipliers: Reading the Chance and Payout Trade-Off", description: "A practical explanation of target multiplier configuration, outcome variance, and why limits belong next to the control.", date: "Mar 05, 2026", reading: "7 min read" },
  { slug: "bonus-hunt-workspace-session-limits-2026", category: "GUIDE", title: "Building a Bonus Workspace With Clear Session Limits", description: "A structured way to organize parallel lanes, pause points, bonus markers, and a readable session summary.", date: "Feb 27, 2026", reading: "6 min read" },
  { slug: "platform-stats-session-review-guide-2026", category: "ANALYTICS", title: "Session Statistics: Which Measures Belong in the Review", description: "Why duration, activity volume, stop conditions, and context matter more than a headline result alone.", date: "Feb 21, 2026", reading: "8 min read" },
];

export const getProductPage = (slug: string) => productPages.find((page) => page.slug === slug);
export const getArticle = (slug: string) => articleRegistry.find((article) => article.slug === slug) ?? { slug, category: "GUIDE", title: "SmartStaker Guide", description: "A product and workflow reference from the SmartStaker guide desk.", date: "Mar 17, 2026", reading: "6 min read" };
