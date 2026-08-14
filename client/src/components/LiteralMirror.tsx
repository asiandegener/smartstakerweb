/**
 * STYLE REMINDER — Literal SmartStaker mirror: render reference-faithful markup
 * at full width without adding a second shell, chrome, or reinterpretive styling.
 */
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { literalMirrors } from "@/lib/literalMirrors";

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

export function LiteralMirror() {
  const [location, setLocation] = useLocation();
  const frameRef = useRef<HTMLIFrameElement>(null);
  const route = normalizePath(location);
  const source = literalMirrors[route] ?? literalMirrors["/"];

  useEffect(() => {
    const navigateFromFrame = (event: MessageEvent) => {
      if (event.data?.type !== "smartstaker-navigate" || typeof event.data.path !== "string") return;
      const target = normalizePath(event.data.path);
      if (literalMirrors[target]) setLocation(target);
    };

    window.addEventListener("message", navigateFromFrame);
    return () => window.removeEventListener("message", navigateFromFrame);
  }, [setLocation]);

  const handleFrameLoad = () => {
    const documentInFrame = frameRef.current?.contentDocument;
    if (!documentInFrame) return;

    document.title = documentInFrame.title || "SmartStaker";

    const textWalker = documentInFrame.createTreeWalker(documentInFrame.body, NodeFilter.SHOW_TEXT);
    let textNode = textWalker.nextNode();
    while (textNode) {
      const parentTag = textNode.parentElement?.tagName;
      if (parentTag !== "SCRIPT" && parentTag !== "STYLE") {
        textNode.nodeValue = textNode.nodeValue?.replace(/\bsmartstaker\b/gi, "SmartStaker") ?? "";
      }
      textNode = textWalker.nextNode();
    }

    documentInFrame.addEventListener(
      "click",
      (event) => {
        const target = event.target as Element | null;
        const anchor = target?.closest<HTMLAnchorElement>("a[href]");
        if (!anchor || anchor.target === "_blank") return;

        const rawHref = anchor.getAttribute("href");
        if (!rawHref || rawHref.startsWith("#")) return;

        const destination = new URL(rawHref, documentInFrame.baseURI);
        const destinationPath = normalizePath(destination.pathname);

        if (destination.hostname === "sspilot.cc" && literalMirrors[destinationPath]) {
          event.preventDefault();
          setLocation(destinationPath);
        }
      },
      true,
    );
  };

  return (
    <main className="literal-mirror-root" aria-label="SmartStaker public site">
      <iframe
        key={source}
        ref={frameRef}
        className="literal-mirror-frame"
        title="SmartStaker"
        src={source}
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        onLoad={handleFrameLoad}
      />
    </main>
  );
}
