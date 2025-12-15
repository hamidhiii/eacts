"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Calendar,
  Clock,
  Search,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Target,
  Sparkles,
  Globe,
  UserPlus,
  CheckCircle,
  Star,
} from "lucide-react";

const prepHubs = [
  {
    id: 1,
    title: "Google Solution Challenge 2025",
    category: "Competition",
    participants: 234,
    deadline: "Mar 31, 2025",
    status: "active",
    skills: ["Mobile Dev", "Web Dev", "AI/ML"],
    mentors: 5,
    description: "Join the preparation group for Google's annual competition focusing on UN SDGs.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Microsoft Imagine Cup",
    category: "Competition",
    participants: 156,
    deadline: "Apr 15, 2025",
    status: "active",
    skills: ["Azure", "AI", "Innovation"],
    mentors: 3,
    description: "Prepare for the world's premier student technology competition.",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Central Asian Hackathon",
    category: "Hackathon",
    participants: 89,
    deadline: "Feb 20, 2025",
    status: "active",
    skills: ["Full Stack", "Problem Solving"],
    mentors: 4,
    description: "48-hour hackathon prep with experienced mentors from the region.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
  },
  {
    id: 4,
    title: "Y Combinator Startup School",
    category: "Startup",
    participants: 67,
    deadline: "Ongoing",
    status: "active",
    skills: ["Entrepreneurship", "Pitching"],
    mentors: 2,
    description: "Learn startup fundamentals with fellow aspiring entrepreneurs.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop",
  },
];

const upcomingCompetitions = [
  {
    name: "IEEE Xtreme Programming",
    date: "Oct 2025",
    participants: "15,000+",
    prize: "$30,000",
  },
  {
    name: "ACM ICPC Regionals",
    date: "Nov 2025",
    participants: "50,000+",
    prize: "Scholarships",
  },
  {
    name: "NASA Space Apps Challenge",
    date: "Oct 2025",
    participants: "36,000+",
    prize: "$15,000",
  },
];

const skillCategories = [
  "All Skills",
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Data Science",
  "Entrepreneurship",
  "Design",
  "Leadership",
];

export default function PrepHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All Skills");

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            <span>Competition Preparation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-4">
            International Summits & <span className="text-gradient">Competitions</span> Prep
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join preparation groups, find teammates, and get mentor guidance for global competitions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search prep hubs..."
              className="pl-12 h-12 bg-secondary/30 border-border/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {skillCategories.slice(0, 5).map((skill) => (
              <button
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${selectedSkill === skill
                    ? "bg-gradient-primary text-white"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              Active Prep Hubs
            </h2>

            {prepHubs.map((hub, i) => (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-40 sm:h-auto relative overflow-hidden">
                    <Image
                      src={hub.image}
                      alt={hub.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 hidden sm:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent sm:hidden" />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        {hub.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        {hub.participants} members
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        {hub.mentors} mentors
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{hub.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{hub.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hub.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 rounded-lg bg-secondary/50 text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Deadline: {hub.deadline}</span>
                      </div>
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                        <UserPlus className="w-4 h-4 mr-1" />
                        Join Hub
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-400" />
                Upcoming Global Competitions
              </h3>
              <div className="space-y-4">
                {upcomingCompetitions.map((comp, i) => (
                  <div key={i} className="p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="font-medium text-sm mb-2">{comp.name}</div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {comp.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {comp.participants}
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-emerald-400">Prize: {comp.prize}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-400" />
                Hub Features
              </h3>
              <div className="space-y-3">
                {[
                  { icon: UserPlus, label: "Find Teammates", desc: "Match with complementary skills" },
                  { icon: Users, label: "Mentor Guidance", desc: "Learn from past winners" },
                  { icon: BookOpen, label: "Resource Sharing", desc: "Access study materials" },
                  { icon: MessageSquare, label: "Strategy Discussions", desc: "Plan with your team" },
                  { icon: CheckCircle, label: "Submission Support", desc: "Review before deadline" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/30 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{feature.label}</div>
                      <div className="text-xs text-muted-foreground">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-6 border-emerald-500/20"
            >
              <h3 className="font-semibold text-lg mb-2">Create Your Own Hub</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Starting a team for a competition? Create a prep hub and invite members.
              </p>
              <Button variant="outline" className="w-full">
                Create Prep Hub
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}