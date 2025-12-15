"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import {
  User,
  Settings,
  Bookmark,
  Map,
  Users,
  Award,
  MessageSquare,
  Bell,
  Edit,
  ExternalLink,
  Calendar,
  Clock,
  TrendingUp,
  CheckCircle,
  Circle,
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview", icon: User },
  { id: "saved", label: "Saved", icon: Bookmark },
  { id: "roadmap", label: "Roadmap", icon: Map },
  { id: "hubs", label: "Prep Hubs", icon: Users },
  { id: "achievements", label: "Achievements", icon: Award },
];

const savedOpportunities = [
  {
    title: "Google Solution Challenge 2025",
    type: "Competition",
    deadline: "Mar 31, 2025",
    status: "Open",
  },
  {
    title: "AIESEC Exchange Program",
    type: "Exchange",
    deadline: "Feb 28, 2025",
    status: "Open",
  },
  {
    title: "Microsoft Imagine Cup",
    type: "Competition",
    deadline: "Apr 15, 2025",
    status: "Open",
  },
];

const roadmapProgress = [
  { title: "Complete Python Course", status: "completed", date: "Dec 1" },
  { title: "Join GDSC Community", status: "completed", date: "Dec 5" },
  { title: "Build Portfolio Project", status: "in_progress", date: "Dec 20" },
  { title: "Participate in Local Hackathon", status: "pending", date: "Jan 15" },
  { title: "Register for Competition", status: "pending", date: "Jan 30" },
];

const joinedHubs = [
  { name: "Google SC 2025 Prep", members: 234, role: "Member" },
  { name: "Central Asian Hackathon", members: 89, role: "Team Lead" },
];

const achievements = [
  { title: "First Steps", desc: "Completed profile setup", icon: "🎯", earned: true },
  { title: "Explorer", desc: "Saved 5 opportunities", icon: "🔍", earned: true },
  { title: "Team Player", desc: "Joined a prep hub", icon: "👥", earned: true },
  { title: "Goal Setter", desc: "Created your roadmap", icon: "🗺️", earned: true },
  { title: "Rising Star", desc: "Complete 50% of roadmap", icon: "⭐", earned: false },
  { title: "Champion", desc: "Win a competition", icon: "🏆", earned: false },
];

const mentorFeedback = [
  {
    mentor: "Dr. Sarah Chen",
    message: "Great progress on your AI project! Keep focusing on the model optimization.",
    date: "2 days ago",
  },
  {
    mentor: "Alex Morrison",
    message: "Your pitch deck is improving. Work on the financial projections section.",
    date: "1 week ago",
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-8 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
                alt="Profile"
                width={96}
                height={96}
                className="rounded-2xl object-cover"
              />
              <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <h1 className="text-2xl font-bold font-['Sora']">Dilshod Karimov</h1>
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 w-fit">
                  Premium Member
                </Badge>
              </div>
              <p className="text-muted-foreground mb-3">Computer Science Student • Tashkent</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined Dec 2024
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  4 Achievements
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  60% Roadmap Complete
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-1" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-1" />
                Settings
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id
                ? "bg-gradient-primary text-white"
                : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Map className="w-5 h-5 text-emerald-400" />
                Roadmap Progress
              </h3>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="font-medium">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-3">
                {roadmapProgress.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.status === "completed" ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    ) : item.status === "in_progress" ? (
                      <div className="w-5 h-5 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                    <span className={`text-sm ${item.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/roadmap">
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View Full Roadmap
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                Mentor Feedback
              </h3>
              <div className="space-y-4">
                {mentorFeedback.map((feedback, i) => (
                  <div key={i} className="p-3 rounded-xl bg-secondary/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{feedback.mentor}</span>
                      <span className="text-xs text-muted-foreground">{feedback.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{feedback.message}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-emerald-400" />
                Saved Opportunities
              </h3>
              <div className="space-y-3">
                {savedOpportunities.map((opp, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div>
                      <div className="font-medium text-sm">{opp.title}</div>
                      <div className="text-xs text-muted-foreground">{opp.type} • {opp.deadline}</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">{opp.status}</Badge>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                Recent Achievements
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {achievements.slice(0, 6).map((achievement, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl text-center ${achievement.earned ? "bg-secondary/50" : "bg-secondary/20 opacity-50"
                      }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-medium truncate">{achievement.title}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === "saved" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-6">Saved Opportunities</h3>
            <div className="space-y-4">
              {savedOpportunities.map((opp, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div>
                    <div className="font-medium">{opp.title}</div>
                    <div className="text-sm text-muted-foreground">{opp.type} • Deadline: {opp.deadline}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-500/10 text-emerald-400">{opp.status}</Badge>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "roadmap" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Your Roadmap Progress</h3>
              <span className="text-emerald-400 font-medium">60% Complete</span>
            </div>
            <div className="space-y-4">
              {roadmapProgress.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.status === "completed" ? "bg-emerald-500/10" : item.status === "in_progress" ? "bg-amber-500/10" : "bg-secondary"
                    }`}>
                    {item.status === "completed" ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    ) : item.status === "in_progress" ? (
                      <Clock className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">Target: {item.date}</div>
                  </div>
                  <Badge variant="secondary" className={
                    item.status === "completed" ? "text-emerald-400" : item.status === "in_progress" ? "text-amber-400" : ""
                  }>
                    {item.status === "completed" ? "Done" : item.status === "in_progress" ? "In Progress" : "Pending"}
                  </Badge>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "hubs" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-6">Joined Prep Hubs</h3>
            <div className="space-y-4">
              {joinedHubs.map((hub, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div>
                    <div className="font-medium">{hub.name}</div>
                    <div className="text-sm text-muted-foreground">{hub.members} members • {hub.role}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Open Hub
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "achievements" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-6">Achievements</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl text-center ${achievement.earned ? "bg-secondary/50" : "bg-secondary/20 opacity-50"
                    }`}
                >
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <div className="font-semibold mb-1">{achievement.title}</div>
                  <div className="text-sm text-muted-foreground">{achievement.desc}</div>
                  {achievement.earned && (
                    <Badge className="mt-3 bg-emerald-500/10 text-emerald-400">Earned</Badge>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}