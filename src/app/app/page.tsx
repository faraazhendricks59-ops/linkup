"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

const mockPosts = [
  {
    id: "1",
    author: "Alex Chen",
    face: "Public",
    layer: "Skill Swap",
    layerColor: "soft" as const,
    content:
      "Offering free 30-min React Server Components deep-dives this week. Looking for someone who can help me level up my Postgres indexing game in return.",
    time: "12m",
    likes: 24,
    comments: 7,
  },
  {
    id: "2",
    author: "Neighborhood Watch",
    face: "Local",
    layer: "Local",
    layerColor: "success" as const,
    content:
      "Anyone else hearing the street festival setup on 4th? Looking for people to grab coffee and check it out around 6pm.",
    time: "28m",
    likes: 11,
    comments: 4,
  },
  {
    id: "3",
    author: "Anonymous",
    face: "Anonymous",
    layer: "Whisper",
    layerColor: "secondary" as const,
    content:
      "Heard through the grapevine that a major Series B in the AI infra space is quietly shopping term sheets this month. Culture reviews coming in mixed.",
    time: "1h",
    likes: 89,
    comments: 31,
  },
  {
    id: "4",
    author: "Jordan Lee",
    face: "Public",
    layer: "Accountability",
    layerColor: "warning" as const,
    content:
      "Day 47 of writing 500 words before coffee. Streak intact. The squad accountability ping at 6am is brutal but effective.",
    time: "2h",
    likes: 56,
    comments: 12,
  },
  {
    id: "5",
    author: "Samira K.",
    face: "Public",
    layer: "Feedback",
    layerColor: "accent" as const,
    content:
      "Looking for brutal feedback on this landing page hero. Specifically conversion copy and visual hierarchy. Will return the favor on two pieces.",
    time: "3h",
    likes: 18,
    comments: 9,
  },
];

export default function AppHomePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-surface-900 dark:text-white">
          Your circles
        </h1>
        <p className="text-surface-500">Multi-layer feed · All faces</p>
      </div>

      {/* Composer */}
      <Card className="mb-6">
        <CardContent className="flex items-center gap-3 p-4">
          <Avatar className="h-10 w-10">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <button className="flex-1 rounded-xl bg-surface-100 px-4 py-2.5 text-left text-sm text-surface-500 transition hover:bg-surface-200 dark:bg-surface-800 dark:hover:bg-surface-700">
            Share something across your circles...
          </button>
          <Button size="sm" variant="gradient">
            Post
          </Button>
        </CardContent>
      </Card>

      {/* Feed */}
      <div className="space-y-4">
        {mockPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="overflow-hidden transition-shadow hover:shadow-brand">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{post.author}</span>
                      <Badge variant={post.layerColor} className="text-[10px]">
                        {post.layer}
                      </Badge>
                    </div>
                    <p className="text-xs text-surface-500">
                      {post.face} · {post.time}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon-sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="pb-3 pt-0">
                <p className="leading-relaxed text-surface-800 dark:text-surface-200">
                  {post.content}
                </p>
              </CardContent>
              <div className="flex items-center gap-1 border-t border-surface-100 px-4 py-2 dark:border-surface-800">
                <Button variant="ghost" size="sm" className="gap-1.5 text-surface-500">
                  <Heart className="h-4 w-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="gap-1.5 text-surface-500">
                  <MessageCircle className="h-4 w-4" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm" className="gap-1.5 text-surface-500">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
