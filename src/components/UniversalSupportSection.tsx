"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const originalGames = [
  "Dragon Tower",
  "Blue Samurai",
  "Keno",
  "Pump",
  "Diamonds",
  "Dice",
  "Limbo",
  "Mines",
  "Hilo",
  "Tome of Life",
  "Plinko",
  "Flip",
  "Rock Paper Scissors",
  "Scarab Spin",
  "Snakes",
  "Darts",
  "Cases",
  "Wheel",
  "Bars",
  "Chicken",
];

const providers = [
  "Hacksaw Gaming",
  "Backseat Gaming",
  "Bullshark Games",
  "Pragmatic Play",
  "Twist Gaming",
  "Titan Gaming",
  "Popiplay",
  "Penguin King",
  "BGaming",
  "Push Gaming",
  "Massive Studios",
  "Endorphina",
  "Relax Gaming",
  "Print Studios",
  "Thunderkick",
  "TrueLab",
  "OneTouch",
  "AvatarUX",
  "Peter & Sons",
  "NoLimit City",
  "Shady Lady",
  "Jade Rabbit",
  "Just Slots",
  "Hacksaw OpenRGS",
  "Fat Panda",
  "Stake Engine",
  "Play'n GO",
  "Red Tiger",
  "Sexy Rabbit",
  "Slotmill",
  "Gamomat",
];

function InfiniteScrollRow({
  items,
  direction = "left",
}: {
  items: string[];
  direction?: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className={`flex gap-3 whitespace-nowrap ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="terminal-frame px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors shrink-0 cursor-default"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function UniversalSupportSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-28" ref={sectionRef} id="games">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Games &{" "}
            <span className="text-gradient">Providers</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            SmartStaker supports all Stake Originals and 31+ slot providers, with
            more being added regularly.
          </p>
        </motion.div>

        {/* Original Games */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h3 className="text-lg font-semibold mb-4 text-center tracking-wide">
            Original Games
          </h3>
          <InfiniteScrollRow items={originalGames} direction="left" />
        </motion.div>

        {/* Supported Providers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-center tracking-wide">
            Supported Providers
          </h3>
          <InfiniteScrollRow items={providers} direction="right" />
        </motion.div>
      </div>
    </section>
  );
}
