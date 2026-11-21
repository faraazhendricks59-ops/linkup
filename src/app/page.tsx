"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import {
  Users,
  MapPin,
  MessageSquare,
  Target,
  EyeOff,
  Calendar,
  GraduationCap,
  Zap,
  ArrowRight,
} from "lucide-react";

const layers = [
  {
    icon: Zap,
    title: "Skill Swap",
    description: "Teach what you know. Learn what you need. Token economy keeps it fair.",
    color: "from-brand-500 to-brand-600",
  },
  {
    icon: MapPin,
    title: "Hyper-Local",
    description: "Neighborhood & campus feeds. Real-time map of people near you.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: MessageSquare,
    title: "Creator Feedback",
    description: "Structured critique on WIPs. Feedback debt forces balance.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Target,
    title: "Accountability",
    description: "Habit squads, streaks, and private shame mode when you need it.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: EyeOff,
    title: "Whisper",
    description: "Anonymous verified industry posts. Truth without the risk.",
    color: "from-slate-600 to-slate-800",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Temporary high-density communities that auto-spawn and archive.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Time-bank currency. Structured sessions. Net value leaderboard.",
    color: "from-accent-500 to-accent-600",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-950">
      {/* Nav */}
      <nav className="sticky top-0 z-50 glass border-b border-surface-200/50 dark:border-surface-800/50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Logo size="md" animated />
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button variant="gradient" size="sm">
              Get started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20">
        <div className="absolute inset-0 -z-10 bg-brand-gradient-soft opacity-60 dark:opacity-20" />
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300">
              <Users className="h-4 w-4" />
              One identity. Seven layers.
            </div>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-bold tracking-tight text-surface-900 dark:text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Infinite circles.{" \