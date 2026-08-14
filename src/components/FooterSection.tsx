"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

const gamesLinks = [
  "Stake Dice Bot",
  "Stake Limbo Bot",
  "Stake Mines Bot",
  "Stake Plinko Bot",
  "Stake Slots Bot",
];

const resourcesLinks = [
  "Stake Bot",
  "Code Claimer",
  "Reload Claimer",
  "Stake Strategy",
  "Stake Stats",
  "Blog & Guides",
];

const downloadLinks = [
  "Get SmartStaker Free",
  "Get Stake account",
  "Features",
];

export function FooterSection() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-gradient font-display text-2xl font-bold tracking-tight">
                SmartStaker
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The all-in-one Stake bot. Automate your strategies, claim every code,
              and hunt bonuses across all Stake Originals and 31+ slot providers.
            </p>
          </div>

          {/* Games */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Games</h4>
            <ul className="space-y-2.5">
              {gamesLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {resourcesLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Download</h4>
            <ul className="space-y-2.5">
              {downloadLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
          <div className="text-center sm:text-right space-y-1">
            <p>SmartStaker is not affiliated with Stake.com</p>
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              BeGambleAware <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
