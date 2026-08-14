"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Gamepad2,
  BarChart3,
  Zap,
  Gift,
  LineChart,
  Users,
  Download,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PerformanceSection() {
  return (
    <section className="relative py-20 sm:py-28" id="features">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <AnimatedSection className="text-center">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 text-xs tracking-widest uppercase border-primary/30 text-primary bg-primary/5"
          >
            EXCLUSIVE — NEVER SEEN ELSEWHERE
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Engineered for{" "}
            <span className="text-gradient">Performance</span>
          </h2>
        </AnimatedSection>

        {/* Multi-Slot Spin */}
        <AnimatedSection>
          <div className="terminal-frame p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <Gamepad2 className="size-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold font-display">
                  Spin Multiple Slots Simultaneously
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Run multiple slot providers at the same time with independent bet
                controls. SmartStaker&apos;s multi-spin engine lets you play 5, 10,
                or even 20 slots in parallel — something no other bot can do.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* 3 Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <AnimatedSection>
            <div className="terminal-frame p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <Gamepad2 className="size-5" />
                </div>
                <h3 className="font-semibold">20 Originals & 31+ Providers</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  All Stake Originals supported
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  Hacksaw, Pragmatic, Nolimit & more
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  New providers added regularly
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  Custom bet configurations per game
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="terminal-frame p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <Zap className="size-5" />
                </div>
                <h3 className="font-semibold">Bonus Hunt Dashboard</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Track your bonus hunt from start to finish. See total cost,
                current value, and potential profit in real time. Smart alerts
                notify you when bonuses are ready to open.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="terminal-frame p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <BarChart3 className="size-5" />
                </div>
                <h3 className="font-semibold">Smart Analytics & Alerts</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Detailed graphs, profit/loss tracking, and streak analysis.
                Configure custom alerts for balance thresholds, bonus triggers,
                or strategy milestones.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Code Claimer & Reload Claimer */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="terminal-frame p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <Gift className="size-5" />
                </div>
                <h3 className="text-lg font-semibold">Code Claimer</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  Auto-claim Stake codes from multiple sources
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  Instant notifications on successful claims
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  Claim history with full transparency
                </li>
              </ul>
            </div>
            <div className="terminal-frame p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <Gift className="size-5" />
                </div>
                <h3 className="text-lg font-semibold">Reload Claimer</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  Auto-detect and claim reload bonuses
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  Smart scheduling based on VIP level
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  Never miss a reload opportunity
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Progress & Tracking */}
        <AnimatedSection>
          <div className="terminal-frame p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 text-primary shrink-0">
                <LineChart className="size-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold font-display">
                Progress & Tracking
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
              Monitor your wagering progress towards VIP milestones, track daily
              profit/loss, and review your complete betting history with advanced
              filtering and export capabilities.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Wager Tracking", "VIP Progress", "P&L Reports", "Data Export"].map(
                (tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-primary/20 text-primary bg-primary/5"
                  >
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Referral Program */}
        <AnimatedSection>
          <div className="terminal-frame p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <Users className="size-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold font-display">
                  Referral Program
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
                SmartStaker is completely free for affiliates. Share your referral
                link and earn while your referrals automate their Stake experience.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                asChild
              >
                <a href="#download">
                  <Download className="size-5" /> Download Free
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
