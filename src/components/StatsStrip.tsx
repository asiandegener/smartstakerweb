"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

export function StatsStrip() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { value: "20", label: "ORIGINALS" },
    { value: "31+", label: "PROVIDERS" },
    { value: "12+", label: "FEATURES" },
  ];

  return (
    <section className="relative py-12 sm:py-16 border-y border-border/50" ref={ref}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-5xl font-bold font-display text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm tracking-widest text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
