# Rendered Parity Audit

## 2026-08-15 — Homepage comparison

| Route | Rendered result | Key observation |
|---|---|---|
| `https://sspilot.cc/` | Complete dark desktop homepage with interactive header, typography, hero, and scrollable content. | The visual reference renders normally in the connected browser. |
| SmartStaker preview `/` | Empty dark canvas containing only the application root. | The literal-mirror page is failing to render in the real browser; this is the immediate blocking mismatch. |

**Correction priority:** Diagnose the SmartStaker runtime failure before measuring fine-grained visual or copy parity.

## Root-cause finding

The mapped homepage asset at `/manus-storage/home_a19ae5b3.html` loads successfully when opened directly, including the full SmartStaker-branded reference markup. However, the SmartStaker application embeds that externally hosted asset in an iframe, which renders blank inside the preview. The final CloudFront response does not expose a permissive cross-origin policy, so the correct fix is to serve the mirror content within the SmartStaker application’s own route rendering rather than depending on an external iframe.

The captured reference markup depends on relative `/_next` CSS, font, image, and script paths. A correction must preserve their `https://sspilot.cc` origin when rendering the captured document; otherwise the HTML can load but its page-specific visual system and images will not.

## Live presentation correction

The live SSPilot homepage currently renders in dark mode in the connected browser: charcoal-black background, light text, teal emphasis, a compact header with wordmark at left, a theme toggle, Stake and Download controls, and a hamburger menu instead of the full desktop navigation. The embedded SmartStaker capture currently loads as the reference light theme with its wide navigation visible. The corrective rendering must therefore default the mirrored document to the live dark theme and retain its viewport-dependent collapsed header behavior.

## Remaining user-visible architecture failure

At the same connected-browser viewport, the corrected SmartStaker iframe now visually matches the live SSPilot hero palette, type scale, and collapsed header position above the fold. However, the browser reports no document content below the SmartStaker viewport while the live SSPilot document continues for thousands of pixels. The full reference page is trapped inside a `100vh` iframe, creating an inner-frame scrollbar and preventing the app from behaving like a normal, naturally scrollable page. The stripped client scripts also leave the live theme-toggle control without its hydrated icon or behavior. This is still visibly and functionally unlike the reference and must be replaced with direct in-page rendering of the captured body markup, with the required reference styles and essential controls restored outside an iframe.

## Direct-render correction verification

The iframe has now been removed. The captured body is inserted directly into the SmartStaker document, while the original reference stylesheets and HTML font-variable classes are applied to the host page. The connected browser now reports the same full-page height as SSPilot on the homepage (8,942 pixels below the initial viewport) and a representative product route remains fully scrollable (5,737 pixels below the initial viewport). The header, serif display typography, dark default palette, asset presentation, and theme-control icon now visually align above the fold. The theme control was also tested and switches to the equivalent light presentation. The only remaining stripped-client interactions to restore before final delivery are responsive-menu and Games-menu expansion behavior.

## Live responsive-menu observation

On the reference at the connected-browser mobile breakpoint, the header menu control changes from a hamburger to a close icon and opens an in-flow dark navigation panel directly beneath the fixed header. The panel exposes the route list in this order: Stake Bot, SSPRF, Dice, Limbo, Mines, Plinko, Slots, Strategy, Stats, Code Claimer, Reload Claimer, then the remaining navigation links below the initial viewport. SmartStaker must reproduce this route list, open/close affordance, and normal internal routing because its client scripts are intentionally removed from the captured markup.

## Responsive-menu correction verification

SmartStaker now exposes the same mobile route order, shows the same in-flow dark menu panel beneath the fixed header, and changes its hamburger affordance to a close icon while open. The connected browser confirms that the outer document remains at the live reference’s full page height with the menu active. The desktop Games control has also been restored as an anchored dropdown using the same five game routes. The next verification is a representative internal menu navigation to confirm that captured page links stay within the SmartStaker application.

The representative mobile-menu navigation test passed: selecting **Stake Bot** from SmartStaker’s restored mobile menu changed the in-app route to `/stake-bot`, set the matching SmartStaker title, and loaded the full 5,737-pixel product document without navigating to SSPilot. The menu automatically closed after navigation, matching expected mobile navigation behavior.
