"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";
import {
  Home,
  Zap,
  MapPin,
  MessageSquare,
  Target,
  EyeOff,
  Calendar,
  GraduationCap,
  Bell,
  MessageCircle,
  User,
  Settings,
} from "lucide-react";

const mainNav = [
  { href: "/app", label: "Home", icon: Home },
  { href: "/app/skills", label: "Skill Swap", icon: Zap },
  { href: "/app/local", label: "Local", icon: MapPin },
  { href: "/app/feedback", label: "Feedback", icon: MessageSquare },
  { href: "/app/squads", label: "Squads", icon: Target },
  { href: "/app/whisper", label: "Whisper", icon: EyeOff },
  { href: "/app/events", label: "Events", icon: Calendar },
  { href: "/app/mentorship", label: "Mentorship", icon: GraduationCap },
];

const secondaryNav = [
  { href: "/app/messages", label: "Messages", icon: MessageCircle },
  { href: "/app/notifications", label: "Notifications", icon: Bell },
  { href: "/app/profile", label: "Profile", icon: User },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-surface-200 bg-white dark:border-surface-800 dark:bg-surface-950">
      <div className="flex h-16 items-center px-5">
        <Logo size="sm" />
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-surface-400">
          Layers
        </p>
        {mainNav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300"
                  : "text-surface-600 hover:bg-surface-100 hover:text-surface-900 dark:text-surface-400 dark:hover:bg-surface-900 dark:hover:text-surface-50"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}

        <div className="my-4 border-t border-surface-200 dark:border-surface-800" />

        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-surface-400">
          Account
        </p>
        {secondaryNav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300"
                  : "text-surface-600 hover:bg-surface-100 hover:text-surface-900 dark:text-surface-400 dark:hover:bg-surface-900 dark:hover:text-surface-50"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-surface-200 p-4 dark:border-surface-800">
        <div className="flex items-center gap-3 rounded-xl bg-surface-50 p-3 dark:bg-surface-900">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
            U
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">You</p>
            <p className="truncate text-xs text-surface-500">Public face</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
