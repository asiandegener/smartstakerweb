"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Terminal } from "lucide-react";

export function InlineCTABanner() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-12 sm:py-16" ref={ref}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="terminal-frame p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Terminal className="size-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-lg">20 original games, 31+ providers — all automated.</p>
              <p className="text-sm text-muted-foreground">Download SmartStaker and never miss a code again.</p>
            </div>
          </div>
          <a
            href="#download"
            className="shrink-0 px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Download Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
