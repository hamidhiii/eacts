"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bell,
  Map,
  BookOpen,
  ArrowRight,
  Search,
  Users,
  Trophy,
  Rocket,
  Target,
  Star,
  CheckCircle,
  Play,
  Calendar,
  Globe,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Smart Announcements",
    description: "Never miss an opportunity. Get personalized alerts for events, competitions, internships, and more.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Map,
    title: "Personalized Roadmaps",
    description: "AI-powered career paths tailored to your goals, interests, and current skill level.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: BookOpen,
    title: "Prep Hubs",
    description: "Join preparation groups for international competitions with mentor guidance and resources.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Team Matching",
    description: "Find teammates for hackathons, projects, and competitions based on complementary skills.",
    color: "from-orange-500 to-amber-500",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and tell us about your interests, goals, and academic background.",
  },
  {
    number: "02",
    title: "Get Personalized Recommendations",
    description: "Our AI analyzes your profile and suggests relevant opportunities and roadmaps.",
  },
  {
    number: "03",
    title: "Connect & Grow",
    description: "Join prep hubs, connect with mentors, and start your extracurricular journey.",
  },
];

const testimonials = [
  {
    name: "Dilshod Karimov",
    role: "Software Engineering Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    quote: "E-ACTS helped me discover Google Solution Challenge and guided me through the entire preparation process. Now I'm a global finalist!",
  },
  {
    name: "Malika Umarova",
    role: "Business Administration",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    quote: "The roadmap feature showed me exactly what steps to take for my consulting career. I landed my dream internship thanks to E-ACTS.",
  },
  {
    name: "Jasur Alimov",
    role: "Data Science Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    quote: "Found my hackathon team through E-ACTS. We went on to win first place at the Central Asian Datathon!",
  },
];

const partners = [
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Huawei", logo: "/logos/huawei.svg" },
  { name: "AIESEC", logo: "/logos/aiesec.svg" },
];

const stats = [
  { value: "10K+", label: "Active Students" },
  { value: "500+", label: "Opportunities" },
  { value: "50+", label: "Partner Organizations" },
  { value: "95%", label: "Success Rate" },
];

const upcomingEvents = [
  {
    title: "Google Solution Challenge 2025",
    date: "Jan 15 - Mar 31, 2025",
    type: "Competition",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Central Asian Hackathon",
    date: "Feb 20-22, 2025",
    type: "Hackathon",
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    title: "AIESEC Exchange Program",
    date: "Applications Open",
    type: "Exchange",
    color: "bg-violet-500/10 text-violet-500",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Your Extracurricular Journey Starts Here</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-['Sora'] leading-tight mb-6">
              Build Your{" "}
              <span className="text-gradient">Extracurricular</span>
              <br />
              Journey with E-ACTS
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover opportunities, create personalized roadmaps, and prepare for global 
              competitions—all in one platform designed for ambitious students.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/opportunities">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 h-14 glow-green">
                  Explore Opportunities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/roadmap">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-border/60 hover:bg-secondary/50">
                  <Map className="mr-2 w-5 h-5" />
                  Build Your Roadmap
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
              The Problem We Solve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Students miss 70% of opportunities because information is scattered across 
              multiple platforms. E-ACTS brings everything together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-red-400 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                Without E-ACTS
              </h3>
              <ul className="space-y-4">
                {[
                  "Missed deadlines for competitions",
                  "No clear path to achieve goals",
                  "Overwhelmed by scattered information",
                  "Struggling to find teammates",
                  "No mentor guidance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border-emerald-500/20"
            >
              <h3 className="text-xl font-semibold mb-6 text-emerald-400 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Rocket className="w-4 h-4" />
                </div>
                With E-ACTS
              </h3>
              <ul className="space-y-4">
                {[
                  "Smart alerts for every opportunity",
                  "AI-powered personalized roadmaps",
                  "All information in one place",
                  "Team matching for competitions",
                  "Connect with experienced mentors",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful features designed to accelerate your extracurricular journey
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-emerald-500/30 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get started in minutes and begin your journey to success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-8 h-full">
                  <div className="text-6xl font-bold text-gradient opacity-20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
              Success Stories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of students who transformed their careers with E-ACTS
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
                Upcoming Events & Competitions
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Stay ahead with the latest opportunities. Never miss a deadline again.
              </p>
              <div className="space-y-4">
                {upcomingEvents.map((event, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-emerald-500/30 transition-colors cursor-pointer"
                  >
                    <div className={`px-3 py-1 rounded-lg text-xs font-medium ${event.color}`}>
                      {event.type}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <Link href="/opportunities">
                <Button variant="outline" className="mt-6">
                  View All Opportunities
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
                <p className="text-muted-foreground mb-6">
                  Access opportunities from around the world, curated for Central Asian students
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-secondary/30">
                    <div className="text-2xl font-bold text-gradient">25+</div>
                    <div className="text-xs text-muted-foreground">Countries</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30">
                    <div className="text-2xl font-bold text-gradient">100+</div>
                    <div className="text-xs text-muted-foreground">Universities</div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
              Trusted Partners
            </h2>
            <p className="text-muted-foreground text-lg">
              We collaborate with leading organizations to bring you the best opportunities
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {["Google", "Microsoft", "Huawei", "AIESEC", "UN", "Samsung"].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-bold text-muted-foreground"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
            <div className="relative">
              <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Join thousands of ambitious students already using E-ACTS to achieve their goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/auth/register">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 h-14">
                    Get Started for Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}