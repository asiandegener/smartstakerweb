"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SSPRFPromo() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-12 sm:py-16" ref={ref}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="terminal-frame p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              SSPRF — Stake Player Rewards{" "}
              <span className="text-gradient">Forecaster</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Track your progress towards the next reward tier with real-time forecasts.
              SmartStaker analyzes your wagering patterns to predict exactly when you&apos;ll
              hit the next milestone.
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-8">
              {[
                "Real-time wagering progress",
                "Tier milestone predictions",
                "Reward value estimates",
                "Historical trend analysis",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <a href="#download">Download SmartStaker Free</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
