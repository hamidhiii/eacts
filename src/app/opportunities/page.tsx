"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  Clock,
  Bookmark,
  Share2,
  ExternalLink,
  X,
  Users,
  Trophy,
  Briefcase,
  GraduationCap,
  Presentation,
  Wrench,
  Globe,
  Building,
} from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Globe, count: 48 },
  { id: "events", label: "Events", icon: Calendar, count: 12 },
  { id: "competitions", label: "Competitions", icon: Trophy, count: 8 },
  { id: "hackathons", label: "Hackathons", icon: Users, count: 6 },
  { id: "internships", label: "Internships", icon: Briefcase, count: 10 },
  { id: "seminars", label: "Seminars", icon: Presentation, count: 5 },
  { id: "workshops", label: "Workshops", icon: Wrench, count: 4 },
  { id: "clubs", label: "Clubs", icon: Building, count: 7 },
  { id: "exchange", label: "Exchange Programs", icon: GraduationCap, count: 6 },
];

const opportunities = [
  {
    id: 1,
    title: "Google Solution Challenge 2025",
    category: "competitions",
    organization: "Google Developer Student Clubs",
    description: "Build a solution to address one of the United Nations' 17 Sustainable Development Goals using Google technology.",
    deadline: "March 31, 2025",
    location: "Online",
    eligibility: "University students worldwide",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop",
    tags: ["Tech", "Social Impact", "Google"],
    featured: true,
  },
  {
    id: 2,
    title: "Central Asian Hackathon 2025",
    category: "hackathons",
    organization: "TechHub Central Asia",
    description: "48-hour hackathon bringing together the best developers from Central Asia to solve regional challenges.",
    deadline: "February 15, 2025",
    location: "Tashkent, Uzbekistan",
    eligibility: "Students and professionals",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
    tags: ["Hackathon", "Networking", "Prizes"],
    featured: true,
  },
  {
    id: 3,
    title: "AIESEC Global Volunteer Program",
    category: "exchange",
    organization: "AIESEC",
    description: "Volunteer abroad and develop your leadership skills while making a positive impact on communities worldwide.",
    deadline: "Rolling Applications",
    location: "Multiple Countries",
    eligibility: "18-30 years old",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop",
    tags: ["Volunteer", "International", "Leadership"],
    featured: false,
  },
  {
    id: 4,
    title: "Microsoft Imagine Cup",
    category: "competitions",
    organization: "Microsoft",
    description: "Global technology competition empowering students to use their creativity and passion for technology.",
    deadline: "April 15, 2025",
    location: "Online + Finals in Seattle",
    eligibility: "Students 16+",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=400&h=200&fit=crop",
    tags: ["Tech", "Innovation", "Microsoft"],
    featured: true,
  },
  {
    id: 5,
    title: "Data Science Summer Internship",
    category: "internships",
    organization: "Huawei Uzbekistan",
    description: "3-month paid internship program for aspiring data scientists. Work on real-world projects with industry experts.",
    deadline: "January 31, 2025",
    location: "Tashkent, Uzbekistan",
    eligibility: "3rd-4th year CS students",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    tags: ["Data Science", "Paid", "Mentorship"],
    featured: false,
  },
  {
    id: 6,
    title: "AI & Machine Learning Workshop",
    category: "workshops",
    organization: "IT Park Uzbekistan",
    description: "Intensive 2-day workshop on practical AI and ML applications. Hands-on projects with industry mentors.",
    deadline: "February 5, 2025",
    location: "IT Park, Tashkent",
    eligibility: "Intermediate programmers",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    tags: ["AI", "Workshop", "Hands-on"],
    featured: false,
  },
  {
    id: 7,
    title: "Youth Leadership Summit 2025",
    category: "events",
    organization: "UN Youth",
    description: "Annual summit bringing together young leaders to discuss global challenges and create actionable solutions.",
    deadline: "March 1, 2025",
    location: "Almaty, Kazakhstan",
    eligibility: "18-25 years old",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
    tags: ["Leadership", "UN", "Networking"],
    featured: false,
  },
  {
    id: 8,
    title: "GDSC Lead Applications",
    category: "clubs",
    organization: "Google Developer Student Clubs",
    description: "Lead a community of student developers at your university. Organize events, workshops, and hackathons.",
    deadline: "August 31, 2025",
    location: "Your University",
    eligibility: "University students",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=200&fit=crop",
    tags: ["Leadership", "Google", "Community"],
    featured: false,
  },
  {
    id: 9,
    title: "Entrepreneurship Seminar Series",
    category: "seminars",
    organization: "Startup Grind Tashkent",
    description: "Weekly seminars featuring successful entrepreneurs sharing their journey and insights.",
    deadline: "Open Registration",
    location: "Hybrid",
    eligibility: "Anyone interested",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=200&fit=crop",
    tags: ["Startup", "Mentorship", "Free"],
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  events: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  competitions: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  hackathons: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  internships: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  seminars: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  workshops: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  clubs: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  exchange: "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

export default function OpportunitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [savedItems, setSavedItems] = useState<number[]>([]);

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesCategory = selectedCategory === "all" || opp.category === selectedCategory;
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSave = (id: number) => {
    setSavedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-4">
            All <span className="text-gradient">Opportunities</span> in One Place
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover events, competitions, internships, and more. Filter by category and never miss an opportunity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search opportunities..."
            className="pl-12 h-14 text-lg bg-secondary/30 border-border/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-primary text-white"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-md ${
                selectedCategory === category.id
                  ? "bg-white/20"
                  : "bg-secondary"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredOpportunities.map((opp, i) => (
              <motion.div
                key={opp.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={opp.image}
                    alt={opp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  {opp.featured && (
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-gradient-primary text-white text-xs font-medium">
                      Featured
                    </div>
                  )}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-medium border ${categoryColors[opp.category]}`}>
                    {categories.find((c) => c.id === opp.category)?.label}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs text-muted-foreground mb-2">{opp.organization}</div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                    {opp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {opp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {opp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>Deadline: {opp.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <span>{opp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span>{opp.eligibility}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button className="flex-1 bg-gradient-primary hover:opacity-90" size="sm">
                      Apply Now
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSave(opp.id)}
                      className={savedItems.includes(opp.id) ? "text-emerald-400 border-emerald-500/50" : ""}
                    >
                      <Bookmark className={`w-4 h-4 ${savedItems.includes(opp.id) ? "fill-current" : ""}`} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredOpportunities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No opportunities found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}