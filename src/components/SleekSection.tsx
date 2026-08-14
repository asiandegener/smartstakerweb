"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

const screenshots = [
  { src: "/screenshots/smartstaker_sleek.png", alt: "SmartStaker Sleek UI" },
  { src: "/screenshots/smartstaker_hero.png", alt: "SmartStaker Hero Dashboard" },
  { src: "/screenshots/smartstaker_what.png", alt: "SmartStaker What Is" },
  { src: "/screenshots/smartstaker_perf.png", alt: "SmartStaker Performance" },
  { src: "/screenshots/smartstaker_faq.png", alt: "SmartStaker FAQ" },
  { src: "/screenshots/screenshot-full.png", alt: "SmartStaker Full View" },
];

export function SleekSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    queueMicrotask(() => {
      onSelect();
    });
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative py-20 sm:py-28" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Sleek.{" "}
            <span className="text-gradient">Powerful</span>. Intuitive.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A beautiful interface designed for both beginners and power users.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {screenshots.map((screenshot, i) => (
                <div
                  key={i}
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="terminal-frame overflow-hidden aspect-video"
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full border-border hover:border-primary/50 hover:bg-primary/5"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full border-border hover:border-primary/50 hover:bg-primary/5"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
