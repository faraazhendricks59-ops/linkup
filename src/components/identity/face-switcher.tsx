"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  User,
  MapPin,
  EyeOff,
  Briefcase,
  Calendar,
  ChevronDown,
} from "lucide-react";

const faces = [
  { id: "PUBLIC", label: "Public", icon: User, description: "Your main identity" },
  { id: "LOCAL", label: "Local", icon: MapPin, description: "Neighborhood mode" },
  { id: "ANONYMOUS", label: "Anonymous", icon: EyeOff, description: "Whisper & truth" },
  { id: "PROFESSIONAL", label: "Pro", icon: Briefcase, description: "Verified work identity" },
  { id: "EVENT", label: "Event", icon: Calendar, description: "Temporary event face" },
] as const;

export function FaceSwitcher() {
  const [active, setActive] = useState<(typeof faces)[number]["id"]>("PUBLIC");
  const [open, setOpen] = useState(false);

  const current = faces.find((f) => f.id === active)!;

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() => setOpen(!open)}
      >
        <current.icon className="h-3.5 w-3.5" />
        {current.label}
        <ChevronDown className="h-3.5 w-3.5 opacity-50" />
      </Button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border border-surface-200 bg-white shadow-lg dark:border-surface-800 dark:bg-surface-900">
          <div className="p-2">
            <p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-surface-400">
              Switch face
            </p>
            {faces.map((face) => (
              <button
                key={face.id}
                onClick={() => {
                  setActive(face.id);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-sm transition-colors",
                  active === face.id
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300"
                    : "hover:bg-surface-100 dark:hover:bg-surface-800"
                )}
              >
                <face.icon className="h-4 w-4 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{face.label}</span>
                    {active === face.id && (
                      <Badge variant="soft" className="text-[10px]">
                        Active
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-surface-500">{face.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
