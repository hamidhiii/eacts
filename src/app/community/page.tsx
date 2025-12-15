"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  Bell,
  HelpCircle,
  TrendingUp,
  Send,
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Pin,
  Search,
  Plus,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Posts", icon: MessageSquare },
  { id: "discussions", label: "Discussions", icon: MessageCircle },
  { id: "announcements", label: "Announcements", icon: Bell },
  { id: "qa", label: "Q&A", icon: HelpCircle },
  { id: "progress", label: "Progress Updates", icon: TrendingUp },
];

const posts = [
  {
    id: 1,
    type: "announcement",
    author: "E-ACTS Team",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=faces",
    time: "2 hours ago",
    title: "Google Solution Challenge 2025 Registration is Now Open!",
    content: "Great news! Registration for Google Solution Challenge 2025 is officially open. Join our prep hub to connect with teammates and mentors.",
    likes: 156,
    comments: 42,
    pinned: true,
    tags: ["Competition", "Google", "Announcement"],
  },
  {
    id: 2,
    type: "discussion",
    author: "Dilshod Karimov",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    time: "5 hours ago",
    title: "Tips for winning hackathons - My experience from 10+ events",
    content: "After participating in numerous hackathons, I wanted to share some insights that helped me win 3 of them. First, focus on the problem statement...",
    likes: 89,
    comments: 23,
    pinned: false,
    tags: ["Tips", "Hackathon", "Experience"],
  },
  {
    id: 3,
    type: "qa",
    author: "Malika Umarova",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    time: "8 hours ago",
    title: "How to prepare for Microsoft Imagine Cup?",
    content: "I'm planning to participate in Imagine Cup next year. What skills should I focus on? Any recommendations for resources or past projects to study?",
    likes: 34,
    comments: 18,
    pinned: false,
    tags: ["Question", "Microsoft", "Preparation"],
  },
  {
    id: 4,
    type: "progress",
    author: "Jasur Alimov",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    time: "1 day ago",
    title: "We made it to the finals! 🎉",
    content: "Our team just got selected for the Central Asian Hackathon finals! Thanks to everyone in the prep hub who helped us prepare. The mentor sessions were incredibly valuable.",
    likes: 234,
    comments: 56,
    pinned: false,
    tags: ["Success", "Hackathon", "Team"],
  },
];

const activeChats = [
  { name: "Google SC 2025 Team", members: 4, unread: 3 },
  { name: "CA Hackathon Prep", members: 12, unread: 0 },
  { name: "Startup Founders", members: 8, unread: 7 },
];

const topContributors = [
  { name: "Dr. Sarah Chen", points: 1250, role: "Mentor" },
  { name: "Dilshod Karimov", points: 890, role: "Member" },
  { name: "Alex Morrison", points: 756, role: "Mentor" },
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-4">
            Community & <span className="text-gradient">Discussions</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with fellow students, share experiences, and learn from mentors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass-card rounded-2xl p-4">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${selectedCategory === category.id
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Your Chats
              </h3>
              <div className="space-y-2">
                {activeChats.map((chat, i) => (
                  <button key={i} className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-secondary/50 transition-colors text-left">
                    <div>
                      <div className="text-sm font-medium">{chat.name}</div>
                      <div className="text-xs text-muted-foreground">{chat.members} members</div>
                    </div>
                    {chat.unread > 0 && (
                      <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">
                        {chat.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Top Contributors
              </h3>
              <div className="space-y-3">
                {topContributors.map((user, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium">
                        {i + 1}
                      </span>
                      <div>
                        <div className="text-sm font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.role}</div>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400">{user.points} pts</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search discussions..."
                  className="pl-12 h-12 bg-secondary/30 border-border/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="bg-gradient-primary hover:opacity-90 h-12">
                <Plus className="w-5 h-5 mr-2" />
                New Post
              </Button>
            </div>

            <div className="glass-card rounded-2xl p-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <Textarea
                    placeholder="Share something with the community..."
                    className="min-h-[80px] bg-secondary/30 border-border/50 resize-none"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="cursor-pointer hover:bg-secondary">
                        Discussion
                      </Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-secondary">
                        Question
                      </Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-secondary">
                        Progress
                      </Badge>
                    </div>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      <Send className="w-4 h-4 mr-1" />
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className={`glass-card rounded-2xl p-5 ${post.pinned ? "border-emerald-500/30" : ""}`}
                >
                  {post.pinned && (
                    <div className="flex items-center gap-1 text-emerald-400 text-xs mb-3">
                      <Pin className="w-3 h-3" />
                      Pinned
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <Image
                      src={post.avatar}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{post.author}</span>
                        <span className="text-xs text-muted-foreground">• {post.time}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.content}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-emerald-400 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-emerald-400 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </button>
                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-emerald-400 transition-colors">
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                        <button className="ml-auto text-muted-foreground hover:text-foreground">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline">Load More Posts</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}