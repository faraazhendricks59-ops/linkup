"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "wordmark";
  animated?: boolean;
}

const sizeMap = {
  sm: { icon: 24, text: "text-lg" },
  md: { icon: 32, text: "text-xl" },
  lg: { icon: 40, text: "text-2xl" },
  xl: { icon: 56, text: "text-4xl" },
};

export function Logo({ className, size = "md", variant = "full", animated = false }: LogoProps) {
  const { icon, text } = sizeMap[size];

  const IconMark = (
    <svg
      width={icon}
      height={icon}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Outer ring - connection */}
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="url(#brandGradient)"
        strokeWidth="3"
        fill="none"
        opacity="0.9"
      />
      {/* Inner nodes representing people/circles */}
      <circle cx="32" cy="20" r="5" fill="url(#brandGradient)" />
      <circle cx="20" cy="38" r="5" fill="url(#brandGradient)" />
      <circle cx="44" cy="38" r="5" fill="url(#brandGradient)" />
      {/* Connection lines */}
      <path
        d="M32 25 L20 33 M32 25 L44 33 M20 38 L44 38"
        stroke="url(#brandGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0c8ce9" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>
    </svg>
  );

  const Wordmark = (
    <span
      className={cn(
        "font-bold tracking-tight bg-brand-gradient bg-clip-text text-transparent",
        text
      )}
    >
      Linkup
    </span>
  );

  const content = (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      {(variant === "full" || variant === "icon") && IconMark}
      {(variant === "full" || variant === "wordmark") && Wordmark}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
