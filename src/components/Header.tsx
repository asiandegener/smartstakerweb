"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  Menu,
  Download,
  Sun,
  Moon,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Games", href: "#games" },
  { label: "Strategy", href: "#strategy" },
  { label: "Stats", href: "#stats" },
  { label: "Code Claimer", href: "#code-claimer" },
  { label: "Reload Claimer", href: "#reload-claimer" },
  { label: "Blog", href: "#blog" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position via callback
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mounted state via ref and flush synchronously
  useEffect(() => {
    mountedRef.current = true;
    // Use queueMicrotask to defer the state update outside the effect body
    queueMicrotask(() => {
      setMounted(true);
    });
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span className="text-gradient-animated font-display text-2xl font-bold tracking-tight">
              SmartStaker
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center gap-3">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground"
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground gap-1.5"
              asChild
            >
              <a href="https://stake.com" target="_blank" rel="noopener noreferrer">
                Stake <ExternalLink className="size-3" />
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-green-brand hover:bg-green-600 text-black font-semibold btn-neon gap-1.5"
              asChild
            >
              <a href="#download">
                <Download className="size-4" /> Download
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex xl:hidden items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground"
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </Button>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background border-border">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-1 mt-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-1.5"
                      asChild
                    >
                      <a href="https://stake.com" target="_blank" rel="noopener noreferrer">
                        Stake <ExternalLink className="size-3" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="w-full bg-green-brand hover:bg-green-600 text-black font-semibold btn-neon gap-1.5"
                      asChild
                    >
                      <a href="#download">
                        <Download className="size-4" /> Download
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
