"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is SmartStaker?",
    answer:
      "SmartStaker is a free desktop application that automates your Stake.com experience. It supports all Stake Originals (Dice, Limbo, Mines, Plinko, etc.) and 31+ slot providers. Features include auto-betting strategies, code claiming, reload claiming, bonus hunting, and real-time analytics.",
  },
  {
    question: "Is SmartStaker safe to use?",
    answer:
      "Yes. SmartStaker runs entirely on your local machine — no cloud servers, no data collection. Your API key never leaves your device. All communication goes directly between your computer and Stake's servers, just like the website. The app is open-source and regularly audited by the community.",
  },
  {
    question: "How do I get started?",
    answer:
      "Download SmartStaker for your platform (Windows, macOS, or Linux), enter your Stake API key, and you're ready to go. The setup wizard walks you through connecting your account, choosing a game, and configuring your first strategy in under 2 minutes.",
  },
  {
    question: "How does bonus hunting work?",
    answer:
      "SmartStaker's bonus hunt feature lets you buy bonuses across multiple slot providers simultaneously. The dashboard tracks your total investment, current bonus value, and potential profit in real time. When bonuses are ready, SmartStaker can open them automatically or alert you.",
  },
  {
    question: "What are the minimum system requirements?",
    answer:
      "SmartStaker is lightweight and runs on most modern systems. Minimum requirements: Windows 10+, macOS 11+, or Linux (Ubuntu 20.04+), 4GB RAM, and a stable internet connection. The app uses minimal CPU and memory, even when running multiple slots.",
  },
  {
    question: "How is my data protected?",
    answer:
      "SmartStaker stores all data locally on your machine using encrypted storage. Your API key and betting history never leave your device. There are no cloud backups, no telemetry, and no analytics tracking. You own your data, period.",
  },
  {
    question: "Can I run multiple instances?",
    answer:
      "Yes! SmartStaker supports running multiple instances on the same machine or across different devices. Each instance operates independently with its own configuration, allowing you to run different strategies simultaneously.",
  },
  {
    question: "How often are there updates?",
    answer:
      "SmartStaker receives regular updates with new features, provider support, and bug fixes. Major updates are released monthly, with hotfixes deployed as needed. The app checks for updates automatically and can update in-place with one click.",
  },
];

export function FAQSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-28" ref={sectionRef} id="faq">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Common{" "}
            <span className="text-gradient">Queries</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Everything you need to know about SmartStaker.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="terminal-frame px-6 border-b-0 data-[state=open]:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-5">
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-mono">
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
