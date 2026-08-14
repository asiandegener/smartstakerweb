"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex K.",
    role: "Affiliate",
    text: "SmartStaker completely changed my Stake experience. The code claimer alone has saved me hours, and the multi-spin feature is unreal.",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Maria S.",
    role: "Casual Player",
    text: "I was skeptical at first, but the bonus hunt dashboard is incredible. Tracking my hunts visually makes such a difference.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Jordan T.",
    role: "Power User",
    text: "Running 10 slots at once with independent controls? This is the future. No other bot comes close to SmartStaker's capabilities.",
    rating: 5,
    initials: "JT",
  },
  {
    name: "Chris R.",
    role: "Streamer",
    text: "My viewers love the real-time analytics overlay. SmartStaker makes my streams more engaging and I never miss a code drop.",
    rating: 5,
    initials: "CR",
  },
  {
    name: "Sam W.",
    role: "Affiliate",
    text: "The reload claimer pays for itself. Literally. I'm claiming reloads I would have missed, and the scheduling is perfect.",
    rating: 4,
    initials: "SW",
  },
  {
    name: "Taylor M.",
    role: "Casual Player",
    text: "Free, secure, and actually works. That's rare in this space. SmartStaker runs locally and I trust it with my API key.",
    rating: 5,
    initials: "TM",
  },
  {
    name: "Dana L.",
    role: "Power User",
    text: "The wager tracking is next level. I can see exactly where I am on my VIP grind and plan accordingly.",
    rating: 5,
    initials: "DL",
  },
  {
    name: "Riley P.",
    role: "Streamer",
    text: "Updated regularly with new providers and features. The dev team actually listens to feedback. Best Stake bot by far.",
    rating: 5,
    initials: "RP",
  },
  {
    name: "Morgan F.",
    role: "Affiliate",
    text: "SmartStaker's referral program is generous. I earn while my referrals enjoy the best automation tool available.",
    rating: 4,
    initials: "MF",
  },
  {
    name: "Casey B.",
    role: "Power User",
    text: "The strategy presets are a game-changer. I imported my favorite dice strategy and it just works perfectly.",
    rating: 5,
    initials: "CB",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`size-3.5 ${
            star <= rating ? "star-filled fill-current" : "star-empty"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5);

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
            Trusted by{" "}
            <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Join the growing community of Stake players who trust SmartStaker for
            their automation needs.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Testimonials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <InfiniteTestimonialRow items={firstRow} direction="left" />
        <InfiniteTestimonialRow items={secondRow} direction="right" />
      </motion.div>
    </section>
  );
}

function InfiniteTestimonialRow({
  items,
  direction = "left",
}: {
  items: typeof testimonials;
  direction?: "left" | "right";
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className={`flex gap-4 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{ animationDuration: "50s" }}
      >
        {doubled.map((testimonial, i) => (
          <div
            key={`${testimonial.name}-${i}`}
            className="terminal-frame p-5 shrink-0 w-[320px] sm:w-[380px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="size-9 border border-border">
                <AvatarFallback className="bg-green-brand/10 text-green-brand text-xs font-semibold">
                  {testimonial.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-semibold">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <StarRating rating={testimonial.rating} />
          </div>
        ))}
      </div>
    </div>
  );
}
