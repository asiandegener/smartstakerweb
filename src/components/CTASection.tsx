"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-28" ref={sectionRef} id="download">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="terminal-frame p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
          </div>

          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 gradient-line" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Ready to{" "}
              <span className="text-gradient">Level Up</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
              Join thousands of players who automate their Stake experience with
              SmartStaker. Free forever.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-10 text-lg"
              asChild
            >
              <a href="#">
                <Download className="size-5" /> Download SmartStaker Free
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
