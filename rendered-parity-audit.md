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
