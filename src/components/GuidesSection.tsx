"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const guides = [
  {
    badge: "GUIDE",
    title: "Getting Started with SmartStaker",
    description:
      "A complete walkthrough of setting up SmartStaker, connecting your Stake account, and running your first automated strategy in under 5 minutes.",
    date: "Dec 15, 2024",
  },
  {
    badge: "STRATEGY",
    title: "Advanced Dice Strategies for 2025",
    description:
      "Explore proven dice strategies including Martingale, Fibonacci, and custom patterns. Learn how to configure stop-losses and take-profits for optimal results.",
    date: "Dec 10, 2024",
  },
  {
    badge: "GUIDE",
    title: "Maximizing Bonus Hunt Profits",
    description:
      "Discover the best practices for bonus hunting across slot providers. Learn which providers offer the highest RTP bonuses and how to track your hunts efficiently.",
    date: "Dec 5, 2024",
  },
];

export function GuidesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-28" ref={sectionRef} id="blog">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Latest{" "}
            <span className="text-gradient">Posts</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Tips, strategies, and tutorials to get the most out of SmartStaker.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {guides.map((guide, i) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a
                href="#"
                className="terminal-frame p-6 block group hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="text-[10px] tracking-widest border-primary/30 text-primary bg-primary/5"
                  >
                    {guide.badge}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {guide.date}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {guide.description}
                </p>
                <span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="size-3.5" />
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
