"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Monitor, Apple, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden grid-bg">
      {/* Radial glow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 gradient-line" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-20"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 text-xs tracking-widest uppercase border-primary/30 text-primary bg-primary/5"
          >
            SMARTSTAKER · THE ALL-IN-ONE STAKE BOT
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Automate Stake.{" "}
          <br className="hidden sm:block" />
          Claim every{" "}
          <span className="text-gradient italic font-light">code</span>.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-8"
        >
          Auto Dice, Limbo, Mines, Plinko and 31+ slot providers. Built-in Stake
          code claimer, reload claimer and bonus hunting. Free on Windows, macOS
          and Linux.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8 text-base"
            asChild
          >
            <a href="#download">
              <Download className="size-5" /> Download SmartStaker
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:border-primary/50 hover:bg-primary/5 gap-2 px-8 h-12 text-base"
            asChild
          >
            <a href="https://stake.com" target="_blank" rel="noopener noreferrer">
              Sign up to Stake <ExternalLink className="size-4" />
            </a>
          </Button>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <Download className="size-3.5 text-primary" /> Free download
          </span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5">
            <ExternalLink className="size-3.5 text-primary" /> Free for affiliates
          </span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5">
            <Monitor className="size-3.5 text-primary" /> Windows
          </span>
          <span className="text-muted-foreground/50">·</span>
          <span className="flex items-center gap-1.5">
            <Apple className="size-3.5 text-primary" /> macOS
          </span>
          <span className="text-muted-foreground/50">·</span>
          <span className="flex items-center gap-1.5">
            <Terminal className="size-3.5 text-primary" /> Linux
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
