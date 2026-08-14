"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Bot, BarChart3, Zap, Shield } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Bot,
    title: "Smart Automation",
    description:
      "Set it and forget it. SmartStaker runs your strategies 24/7 with precision, handling bets, stops, and resets automatically across all supported games.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Live dashboards track every bet, profit, and streak. Visualize your performance with charts that update in real time, so you always know where you stand.",
  },
  {
    icon: Zap,
    title: "Bonus Hunting",
    description:
      "Automatically detect and claim bonus rounds across slot providers. SmartStaker hunts bonuses while you sit back and watch the wins roll in.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your API key never leaves your machine. SmartStaker runs locally — no cloud, no middleman, no risk of data leaks or unauthorized access.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="terminal-frame p-6 group hover:border-primary/30 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="size-5" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function WhatIsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-28" id="stake-bot">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left: Text block */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              What is{" "}
              <span className="text-gradient">SmartStaker</span>?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SmartStaker is a desktop application that automates your Stake.com
                experience. From running complex betting strategies across original
                games to spinning dozens of slot providers simultaneously, it handles
                the tedious work so you can focus on results.
              </p>
              <p>
                With built-in code claiming, reload hunting, and bonus detection,
                SmartStaker ensures you never miss a freebie. It&apos;s designed for
                both casual players who want to automate simple strategies and power
                users who demand full control over every parameter.
              </p>
              <p>
                Best of all? It&apos;s completely free to download and use. No
                subscriptions, no hidden fees — just powerful automation at your
                fingertips.
              </p>
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
