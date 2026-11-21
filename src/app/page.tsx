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
            Infinite circles.{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              One Linkup.
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-2xl text-lg text-surface-600 dark:text-surface-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The unified social graph for skill-swapping, local communities, creator feedback,
            accountability, anonymous industry truth, live events, and mentorship — all under one
            multi-face identity.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="gradient" size="xl" className="group">
              Start building circles
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              See how it works
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Layers Grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-surface-900 dark:text-white">
              Seven layers. One graph.
            </h2>
            <p className="text-surface-600 dark:text-surface-400">
              Switch faces. Carry reputation. Move value across every layer.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-white p-6 shadow-sm transition-all hover:shadow-brand dark:border-surface-800 dark:bg-surface-900"
              >
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${layer.color} text-white shadow-md`}
                >
                  <layer.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-surface-900 dark:text-white">
                  {layer.title}
                </h3>
                <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                  {layer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-brand-gradient p-12 text-center text-white shadow-brand-lg">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Linkup?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-brand-100">
            Join the graph. Bring your skills, your neighborhood, your industry truth, and your
            goals.
          </p>
          <Button
            size="xl"
            className="bg-white text-brand-700 hover:bg-brand-50 shadow-lg"
          >
            Create your first circle
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-200 px-6 py-10 dark:border-surface-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Logo size="sm" variant="full" />
          <p className="text-sm text-surface-500">
            © {new Date().getFullYear()} Linkup. One identity. Infinite circles.
          </p>
        </div>
      </footer>
    </div>
  );
}
