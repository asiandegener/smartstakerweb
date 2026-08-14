/**
 * STYLE REMINDER — Literal SmartStaker mirror: direct-render captured reference
 * markup at full document height. Preserve reference visual styling and wording;
 * do not wrap it in a second visual shell or trap it in a nested scrolling frame.
 */
import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "wouter";
import { embeddedMirrors } from "@/lib/embeddedMirrors";

const referenceOrigin = "https://sspilot.cc";

type ReferenceDocument = {
  title: string;
  bodyMarkup: string;
  stylesheetHrefs: string[];
  htmlClassNames: string[];
};

function normalizePath(path: string) {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

function absoluteReferenceUrl(value: string) {
  if (!value || value.startsWith("#") || value.startsWith("data:") || value.startsWith("blob:")) return value;
  return new URL(value, `${referenceOrigin}/`).href;
}

function createReferenceDocument(markup: string): ReferenceDocument {
  const parsed = new DOMParser().parseFromString(markup, "text/html");
  const stylesheetHrefs = Array.from(parsed.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"][href]'))
    .map((link) => absoluteReferenceUrl(link.getAttribute("href") || ""))
    .filter(Boolean);

  parsed.querySelectorAll("script").forEach((script) => script.remove());
  parsed.querySelectorAll<HTMLElement>("[src], [poster]").forEach((element) => {
    for (const attribute of ["src", "poster"]) {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, absoluteReferenceUrl(value));
    }
  });
  parsed.querySelectorAll<HTMLElement>("[srcset]").forEach((element) => {
    const srcset = element.getAttribute("srcset");
    if (!srcset) return;
    const absoluteSrcset = srcset
      .split(",")
      .map((candidate) => {
        const [url, ...descriptor] = candidate.trim().split(/\s+/);
        return [absoluteReferenceUrl(url), ...descriptor].join(" ");
      })
      .join(", ");
    element.setAttribute("srcset", absoluteSrcset);
  });

  return {
    title: parsed.title.replace(/SSPilot/g, "SmartStaker") || "SmartStaker",
    bodyMarkup: parsed.body.innerHTML,
    stylesheetHrefs,
    htmlClassNames: Array.from(parsed.documentElement.classList),
  };
}

function themeIconMarkup(isDark: boolean) {
  const icon = isDark
    ? '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>'
    : '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"></path>';
  const name = isDark ? "sun" : "moon";
  return `<svg data-smartstaker-theme-icon="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${name} w-4 h-4" aria-hidden="true">${icon}</svg>`;
}

function menuIconMarkup(isOpen: boolean) {
  const paths = isOpen
    ? '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
    : '<path d="M4 12h16"></path><path d="M4 6h16"></path><path d="M4 18h16"></path>';
  return `<svg data-smartstaker-menu-icon="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${isOpen ? "x" : "menu"} w-5 h-5" aria-hidden="true">${paths}</svg>`;
}

const gameRoutes = [
  ["/stake-dice", "Dice"],
  ["/stake-limbo", "Limbo"],
  ["/stake-mines", "Mines"],
  ["/stake-plinko", "Plinko"],
  ["/stake-slots", "Slots"],
] as const;

const mobileRoutes = [
  ["/stake-bot", "Stake Bot"],
  ["/ssprf", "SSPRF"],
  ...gameRoutes,
  ["/stake-strategy", "Strategy"],
  ["/stake-stats", "Stats"],
  ["/stake-code-claimer", "Code Claimer"],
  ["/stake-reload-claimer", "Reload Claimer"],
  ["/blog", "Blog"],
] as const;

function linkMarkup(routes: readonly (readonly [string, string])[], className: string) {
  return routes.map(([href, label]) => `<a href="${href}" class="${className}">${label}</a>`).join("");
}

export function LiteralMirror() {
  const [location, setLocation] = useLocation();
  const rootRef = useRef<HTMLElement>(null);
  const route = normalizePath(location);
  const sourceMarkup = embeddedMirrors[route] ?? embeddedMirrors["/"];
  const referenceDocument = useMemo(() => createReferenceDocument(sourceMarkup), [sourceMarkup]);

  useEffect(() => {
    document.title = referenceDocument.title;
    document.documentElement.classList.add(...referenceDocument.htmlClassNames);
    document.documentElement.classList.add("dark");

    const loadedStylesheets = referenceDocument.stylesheetHrefs.map((href) => {
      const existing = document.head.querySelector<HTMLLinkElement>(`link[data-smartstaker-reference-style="${href}"]`);
      if (existing) return null;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.smartstakerReferenceStyle = href;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      loadedStylesheets.forEach((link) => link?.remove());
      document.documentElement.classList.remove(...referenceDocument.htmlClassNames);
    };
  }, [referenceDocument]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const navigateFromReference = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || event.defaultPrevented) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#")) return;
      const destination = new URL(rawHref, `${referenceOrigin}/`);
      const destinationPath = normalizePath(destination.pathname);

      if (
        (destination.hostname === "sspilot.cc" || destination.hostname === "smartstaker.app") &&
        embeddedMirrors[destinationPath]
      ) {
        event.preventDefault();
        setLocation(destinationPath);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    const themeButton = Array.from(root.querySelectorAll<HTMLButtonElement>("button")).find((button) =>
      button.textContent?.includes("Toggle theme"),
    );
    const renderThemeIcon = () => {
      if (!themeButton) return;
      themeButton.querySelector("[data-smartstaker-theme-icon]")?.remove();
      const isDark = document.documentElement.classList.contains("dark");
      themeButton.setAttribute("aria-pressed", String(isDark));
      themeButton.insertAdjacentHTML("beforeend", themeIconMarkup(isDark));
    };
    const toggleTheme = (event: MouseEvent) => {
      event.preventDefault();
      document.documentElement.classList.toggle("dark");
      renderThemeIcon();
    };

    const header = root.querySelector<HTMLElement>("header");
    const menuButton = header?.querySelector<HTMLButtonElement>('button[aria-label="Toggle menu"]');
    const mobileMenu = document.createElement("div");
    mobileMenu.className = "lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-md";
    mobileMenu.hidden = true;
    mobileMenu.dataset.smartstakerMobileMenu = "true";
    mobileMenu.innerHTML = `<div class="max-w-7xl mx-auto px-6 lg:px-8 py-2 grid gap-0.5">${linkMarkup(mobileRoutes, "block px-2.5 py-2.5 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors")}</div>`;

    const renderMenuIcon = (isOpen: boolean) => {
      if (!menuButton) return;
      menuButton.querySelector("[data-smartstaker-menu-icon]")?.remove();
      menuButton.insertAdjacentHTML("beforeend", menuIconMarkup(isOpen));
      menuButton.setAttribute("aria-expanded", String(isOpen));
    };
    const toggleMobileMenu = (event: MouseEvent) => {
      event.preventDefault();
      const nextOpen = mobileMenu.hidden;
      mobileMenu.hidden = !nextOpen;
      renderMenuIcon(nextOpen);
    };
    if (header && menuButton) {
      header.appendChild(mobileMenu);
      renderMenuIcon(false);
      menuButton.addEventListener("click", toggleMobileMenu);
    }

    const gamesButton = Array.from(header?.querySelectorAll<HTMLButtonElement>("button") ?? []).find(
      (button) => button.textContent?.trim().startsWith("Games"),
    );
    const gamesMenu = document.createElement("div");
    gamesMenu.className = "absolute top-full left-0 mt-2 w-44 border border-border bg-background shadow-lg py-1 z-50";
    gamesMenu.hidden = true;
    gamesMenu.dataset.smartstakerGamesMenu = "true";
    gamesMenu.innerHTML = linkMarkup(gameRoutes, "block px-3 py-2 font-mono text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors");
    const toggleGamesMenu = (event: MouseEvent) => {
      event.preventDefault();
      const nextOpen = gamesMenu.hidden;
      gamesMenu.hidden = !nextOpen;
      gamesButton?.setAttribute("aria-expanded", String(nextOpen));
    };
    if (gamesButton?.parentElement) {
      gamesButton.parentElement.appendChild(gamesMenu);
      gamesButton.addEventListener("click", toggleGamesMenu);
    }

    renderThemeIcon();
    root.addEventListener("click", navigateFromReference, true);
    themeButton?.addEventListener("click", toggleTheme);
    return () => {
      root.removeEventListener("click", navigateFromReference, true);
      themeButton?.removeEventListener("click", toggleTheme);
      menuButton?.removeEventListener("click", toggleMobileMenu);
      gamesButton?.removeEventListener("click", toggleGamesMenu);
      mobileMenu.remove();
      gamesMenu.remove();
    };
  }, [route, setLocation]);

  return (
    <main ref={rootRef} className="literal-mirror-root" aria-label="SmartStaker public site">
      <div className="literal-mirror-document" dangerouslySetInnerHTML={{ __html: referenceDocument.bodyMarkup }} />
    </main>
  );
}
