"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Eye,
  Users,
  TrendingUp,
  Award,
  Globe,
  Heart,
  ArrowRight,
  Linkedin,
  Twitter,
} from "lucide-react";

const stats = [
  { value: "10K+", label: "Active Students" },
  { value: "500+", label: "Opportunities Posted" },
  { value: "50+", label: "Partner Organizations" },
  { value: "85%", label: "Employment Rate" },
];

const team = [
  {
    name: "Jasur Yusupov",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    bio: "Former Google intern, passionate about empowering Central Asian youth.",
  },
  {
    name: "Malika Karimova",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    bio: "Ex-Microsoft PM, building products that matter for students.",
  },
  {
    name: "Bobur Alimov",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    bio: "Full-stack developer with a passion for scalable systems.",
  },
  {
    name: "Dilnoza Azimova",
    role: "Head of Partnerships",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
    bio: "Building bridges between students and global organizations.",
  },
];

const partners = [
  "Google", "Microsoft", "Huawei", "AIESEC", "UN Youth", "Samsung",
  "IT Park", "Westminster University", "Inha University", "KPMG"
];

const values = [
  {
    icon: Target,
    title: "Student-First",
    description: "Every decision we make puts students' success at the center.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Breaking barriers to bring world-class opportunities to Central Asia.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description: "Building a supportive ecosystem where students help each other grow.",
  },
  {
    icon: TrendingUp,
    title: "Impact Focused",
    description: "Measuring success by the real-world outcomes we create for youth.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>About E-ACTS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-6">
            Empowering the Next Generation of{" "}
            <span className="text-gradient">Central Asian Leaders</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe every student deserves access to world-class opportunities, 
            mentorship, and guidance to build successful careers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold font-['Sora'] mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To democratize access to extracurricular opportunities for students in Central Asia 
              and beyond. We connect ambitious young people with competitions, internships, 
              mentorship programs, and global events that accelerate their personal and 
              professional growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold font-['Sora'] mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A world where geography doesn't determine opportunity. We envision Central Asian 
              students competing and winning at the highest global stages, founding successful 
              companies, and leading international organizations—all powered by the foundations 
              they build through E-ACTS.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold font-['Sora'] text-center mb-8">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-3xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold font-['Sora'] mb-2">Impact on Youth Employment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just about activities—we're about outcomes. Our platform helps students 
              build the experience and networks they need to succeed in their careers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-emerald-400 mb-2">85%</div>
              <p className="text-sm text-muted-foreground">of active users land internships or jobs within 6 months</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-emerald-400 mb-2">3x</div>
              <p className="text-sm text-muted-foreground">higher interview success rate for E-ACTS members</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-emerald-400 mb-2">150+</div>
              <p className="text-sm text-muted-foreground">competition wins by our community members</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold font-['Sora'] text-center mb-8">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-2xl object-cover mx-auto mb-4"
                />
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-emerald-400 mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-3">{member.bio}</p>
                <div className="flex justify-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold font-['Sora'] mb-8">Our Partners</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {partners.map((partner, i) => (
              <span key={i} className="text-xl font-bold text-muted-foreground">
                {partner}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card rounded-3xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold font-['Sora'] mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Whether you're a student, mentor, or organization, there's a place for you at E-ACTS.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register">
              <Button className="bg-gradient-primary hover:opacity-90">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">
                Partner With Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}