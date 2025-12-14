"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Target,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Bot,
  User,
  BookOpen,
  Award,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const majors = [
  "Computer Science",
  "Business Administration",
  "Engineering",
  "Medicine",
  "Law",
  "Economics",
  "Psychology",
  "Data Science",
  "Marketing",
  "Design",
];

const interests = [
  "Artificial Intelligence",
  "Entrepreneurship",
  "Social Impact",
  "Finance",
  "Research",
  "Leadership",
  "Creative Arts",
  "Healthcare",
  "Environment",
  "Technology",
];

const reasons = [
  "Build my CV/Resume",
  "Gain practical experience",
  "Network with professionals",
  "Develop new skills",
  "Explore career options",
  "Make a social impact",
  "Win competitions",
  "Get scholarship opportunities",
];

const goals = [
  { id: "career", label: "Career Development", icon: Briefcase },
  { id: "university", label: "University Applications", icon: GraduationCap },
  { id: "skills", label: "Skill Building", icon: Lightbulb },
  { id: "leadership", label: "Leadership Experience", icon: Award },
];

const mentors = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Lead at Google",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
    expertise: ["Machine Learning", "Career Guidance"],
    rating: 4.9,
  },
  {
    name: "Alex Morrison",
    role: "Startup Founder & Investor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    expertise: ["Entrepreneurship", "Fundraising"],
    rating: 4.8,
  },
  {
    name: "Maria Gonzalez",
    role: "UN Youth Ambassador",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    expertise: ["Social Impact", "Public Speaking"],
    rating: 5.0,
  },
];

const roadmapSteps = [
  {
    month: "Month 1-2",
    title: "Foundation Building",
    items: [
      "Complete online course on Python basics",
      "Join GDSC at your university",
      "Attend 2 tech meetups",
    ],
  },
  {
    month: "Month 3-4",
    title: "Project Development",
    items: [
      "Build a portfolio project",
      "Participate in local hackathon",
      "Start contributing to open source",
    ],
  },
  {
    month: "Month 5-6",
    title: "Competition Preparation",
    items: [
      "Register for Google Solution Challenge",
      "Form a team of 4 members",
      "Develop MVP for competition",
    ],
  },
];

export default function RoadmapPage() {
  const [step, setStep] = useState(1);
  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : prev.length < 3
        ? [...prev, interest]
        : prev
    );
  };

  const toggleReason = (reason: string) => {
    setSelectedReasons((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    );
  };

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
    else setShowResults(true);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedMajor !== "";
      case 2:
        return selectedInterests.length > 0;
      case 3:
        return selectedReasons.length > 0;
      case 4:
        return selectedGoals.length > 0;
      default:
        return false;
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Check className="w-4 h-4" />
              <span>Your Personalized Roadmap is Ready!</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-4">
              Your <span className="text-gradient">Growth Roadmap</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Based on your profile, we&apos;ve created a personalized path to achieve your goals
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-2xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Your 6-Month Roadmap
                </h3>
                <div className="space-y-6">
                  {roadmapSteps.map((phase, i) => (
                    <div key={i} className="relative pl-8 pb-6 border-l-2 border-emerald-500/30 last:border-transparent last:pb-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-emerald-500" />
                      <div className="text-sm text-emerald-400 font-medium mb-1">{phase.month}</div>
                      <h4 className="font-semibold mb-3">{phase.title}</h4>
                      <ul className="space-y-2">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  Recommended Courses & Programs
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Google Data Analytics Certificate", provider: "Coursera", duration: "6 months" },
                    { title: "Machine Learning Specialization", provider: "Stanford Online", duration: "3 months" },
                    { title: "Leadership Essentials", provider: "E-ACTS Academy", duration: "4 weeks" },
                    { title: "Startup Fundamentals", provider: "Y Combinator", duration: "8 weeks" },
                  ].map((course, i) => (
                    <div key={i} className="p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
                      <div className="font-medium text-sm mb-1">{course.title}</div>
                      <div className="text-xs text-muted-foreground">{course.provider} • {course.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-emerald-400" />
                  Recommended Mentors
                </h3>
                <div className="space-y-4">
                  {mentors.map((mentor, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/30 transition-colors cursor-pointer">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{mentor.name}</div>
                        <div className="text-xs text-muted-foreground truncate">{mentor.role}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {mentor.expertise.map((exp) => (
                            <Badge key={exp} variant="secondary" className="text-[10px]">
                              {exp}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-amber-400">★ {mentor.rating}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View All Mentors
                </Button>
              </div>

              <div className="glass-card rounded-2xl p-6 border-emerald-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">E-ACTS AI Mentor</div>
                    <div className="text-xs text-muted-foreground">Get instant guidance</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our AI mentor for personalized advice, study tips, and opportunity recommendations.
                </p>
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
              </div>

              <Link href="/pricing">
                <div className="glass-card rounded-2xl p-6 border-amber-500/20 hover:border-amber-500/40 transition-colors cursor-pointer">
                  <div className="text-amber-400 text-xs font-medium mb-2">PREMIUM FEATURE</div>
                  <h4 className="font-semibold mb-2">Unlock Full Roadmap</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get 1-on-1 mentor sessions, advanced AI guidance, and priority support.
                  </p>
                  <Button variant="outline" className="w-full border-amber-500/50 text-amber-400 hover:bg-amber-500/10">
                    Upgrade to Premium
                  </Button>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
            Build Your <span className="text-gradient">Personalized Roadmap</span>
          </h1>
          <p className="text-muted-foreground">
            Answer a few questions to get a customized growth plan
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all ${
                s <= step ? "bg-emerald-500 w-12" : "bg-secondary w-8"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="glass-card rounded-3xl p-8"
          >
            {step === 1 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="font-semibold">What is your major?</h2>
                    <p className="text-sm text-muted-foreground">Select your field of study</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {majors.map((major) => (
                    <button
                      key={major}
                      onClick={() => setSelectedMajor(major)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all ${
                        selectedMajor === major
                          ? "bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400"
                          : "bg-secondary/50 border-2 border-transparent hover:border-emerald-500/30"
                      }`}
                    >
                      {major}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="font-semibold">What are your interests?</h2>
                    <p className="text-sm text-muted-foreground">Select up to 3 interests</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        selectedInterests.includes(interest)
                          ? "bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400"
                          : "bg-secondary/50 border-2 border-transparent hover:border-emerald-500/30"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="font-semibold">Why do you want to participate?</h2>
                    <p className="text-sm text-muted-foreground">Select all that apply</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {reasons.map((reason) => (
                    <button
                      key={reason}
                      onClick={() => toggleReason(reason)}
                      className={`w-full p-3 rounded-xl text-sm font-medium text-left transition-all flex items-center gap-3 ${
                        selectedReasons.includes(reason)
                          ? "bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400"
                          : "bg-secondary/50 border-2 border-transparent hover:border-emerald-500/30"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${
                        selectedReasons.includes(reason) ? "border-emerald-500 bg-emerald-500" : "border-muted-foreground"
                      }`}>
                        {selectedReasons.includes(reason) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      {reason}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="font-semibold">What are your goals?</h2>
                    <p className="text-sm text-muted-foreground">Select your primary goals</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {goals.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={`p-4 rounded-xl transition-all flex flex-col items-center gap-2 ${
                        selectedGoals.includes(goal.id)
                          ? "bg-emerald-500/20 border-2 border-emerald-500"
                          : "bg-secondary/50 border-2 border-transparent hover:border-emerald-500/30"
                      }`}
                    >
                      <goal.icon className={`w-8 h-8 ${selectedGoals.includes(goal.id) ? "text-emerald-400" : "text-muted-foreground"}`} />
                      <span className={`text-sm font-medium ${selectedGoals.includes(goal.id) ? "text-emerald-400" : ""}`}>
                        {goal.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8">
              <Button
                variant="ghost"
                onClick={prevStep}
                disabled={step === 1}
                className={step === 1 ? "invisible" : ""}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="bg-gradient-primary hover:opacity-90"
              >
                {step === 4 ? "Generate Roadmap" : "Continue"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}