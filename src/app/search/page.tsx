"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Calendar,
  Users,
  Trophy,
  Briefcase,
  GraduationCap,
  Wrench,
  Globe,
  MapPin,
  SlidersHorizontal,
  X,
  ArrowRight,
  Clock,
} from "lucide-react";

const recommendedKeywords = [
  { label: "Events", icon: Calendar, color: "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20" },
  { label: "Clubs", icon: Users, color: "bg-orange-500/10 text-orange-400 hover:bg-orange-500/20" },
  { label: "Hackathons", icon: Trophy, color: "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20" },
  { label: "Internships", icon: Briefcase, color: "bg-amber-500/10 text-amber-400 hover:bg-amber-500/20" },
  { label: "Exchange Programs", icon: GraduationCap, color: "bg-teal-500/10 text-teal-400 hover:bg-teal-500/20" },
  { label: "Workshops", icon: Wrench, color: "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20" },
];

const fields = [
  "Technology & IT",
  "Business & Finance",
  "Engineering",
  "Healthcare",
  "Arts & Design",
  "Social Sciences",
  "Natural Sciences",
  "Education",
];

const locations = [
  "All Locations",
  "Tashkent, Uzbekistan",
  "Almaty, Kazakhstan",
  "Online Only",
  "Central Asia",
  "International",
];

const levels = [
  "All Levels",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Professional",
];

const recentSearches = [
  "Google Solution Challenge",
  "Data Science internships",
  "Leadership workshops",
  "Hackathons in Tashkent",
];

const trendingOpportunities = [
  {
    title: "Microsoft Imagine Cup 2025",
    type: "Competition",
    deadline: "Apr 15, 2025",
    color: "text-emerald-400",
  },
  {
    title: "AIESEC Summer Exchange",
    type: "Exchange",
    deadline: "Feb 28, 2025",
    color: "text-teal-400",
  },
  {
    title: "Tech Startup Bootcamp",
    type: "Workshop",
    deadline: "Jan 20, 2025",
    color: "text-cyan-400",
  },
  {
    title: "UN Youth Ambassador Program",
    type: "Event",
    deadline: "Mar 1, 2025",
    color: "text-blue-400",
  },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedField, setSelectedField] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  const clearFilters = () => {
    setSelectedField("");
    setSelectedLocation("");
    setSelectedLevel("");
    setIsOnline(null);
  };

  const activeFiltersCount = [selectedField, selectedLocation, selectedLevel, isOnline].filter(Boolean).length;

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Smart Search</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-4">
            What Kind of Activities Are You{" "}
            <span className="text-gradient">Looking For?</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Find the perfect opportunities tailored to your interests and goals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
            <Input
              placeholder="Search for events, competitions, internships..."
              className="pl-14 pr-32 h-16 text-lg bg-secondary/30 border-border/50 rounded-2xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className={`relative ${activeFiltersCount > 0 ? "text-emerald-400" : ""}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-5 h-5" />
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90 h-12 px-6">
                Search
              </Button>
            </div>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-6 glass-card rounded-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filters</h3>
                {activeFiltersCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear all
                    <X className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Field</label>
                  <Select value={selectedField} onValueChange={setSelectedField}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select field" />
                    </SelectTrigger>
                    <SelectContent>
                      {fields.map((field) => (
                        <SelectItem key={field} value={field}>
                          {field}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Level</label>
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Format</label>
                  <div className="flex gap-2">
                    <Button
                      variant={isOnline === true ? "default" : "outline"}
                      size="sm"
                      className={`flex-1 ${isOnline === true ? "bg-gradient-primary" : ""}`}
                      onClick={() => setIsOnline(isOnline === true ? null : true)}
                    >
                      <Globe className="w-4 h-4 mr-1" />
                      Online
                    </Button>
                    <Button
                      variant={isOnline === false ? "default" : "outline"}
                      size="sm"
                      className={`flex-1 ${isOnline === false ? "bg-gradient-primary" : ""}`}
                      onClick={() => setIsOnline(isOnline === false ? null : false)}
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      Offline
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-4">Recommended Keywords</h3>
          <div className="flex flex-wrap gap-3">
            {recommendedKeywords.map((keyword, i) => (
              <motion.button
                key={keyword.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                onClick={() => setSearchQuery(keyword.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${keyword.color}`}
              >
                <keyword.icon className="w-4 h-4" />
                {keyword.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-semibold">Recent Searches</h3>
            </div>
            <div className="space-y-2">
              {recentSearches.map((search, i) => (
                <button
                  key={i}
                  onClick={() => setSearchQuery(search)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors text-sm text-muted-foreground hover:text-foreground flex items-center justify-between group"
                >
                  <span>{search}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <h3 className="font-semibold">Trending Opportunities</h3>
            </div>
            <div className="space-y-3">
              {trendingOpportunities.map((opp, i) => (
                <Link
                  key={i}
                  href="/opportunities"
                  className="block px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium group-hover:text-emerald-400 transition-colors">
                        {opp.title}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {opp.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {opp.deadline}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/opportunities">
            <Button variant="outline" size="lg">
              Browse All Opportunities
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}