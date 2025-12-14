"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Sparkles,
  Zap,
  Crown,
  Building,
  ArrowRight,
  Users,
  Star,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    priceYearly: "0",
    description: "Get started with basic features",
    icon: Sparkles,
    color: "text-muted-foreground",
    bgColor: "bg-secondary/50",
    features: [
      { text: "Basic announcements", included: true },
      { text: "Simple search", included: true },
      { text: "Limited roadmap preview", included: true },
      { text: "View prep hubs (no join)", included: true },
      { text: "Community access", included: true },
      { text: "AI mentor", included: false },
      { text: "Team matching", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Premium",
    price: "8",
    priceYearly: "70",
    description: "For ambitious students",
    icon: Zap,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    popular: true,
    features: [
      { text: "Full announcement access", included: true },
      { text: "Advanced search & filters", included: true },
      { text: "AI-powered roadmap", included: true },
      { text: "Join all prep hubs", included: true },
      { text: "Team matching", included: true },
      { text: "Mentor recommendations", included: true },
      { text: "Basic AI mentor", included: true },
      { text: "Priority support", included: true },
    ],
  },
  {
    name: "Pro",
    price: "20",
    priceYearly: "180",
    description: "For top university applicants",
    icon: Crown,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    features: [
      { text: "Everything in Premium", included: true },
      { text: "1-on-1 mentor sessions", included: true },
      { text: "Global hackathon prep hubs", included: true },
      { text: "Advanced AI mentor", included: true },
      { text: "University application roadmap", included: true },
      { text: "Certificate programs", included: true },
      { text: "Exclusive events access", included: true },
      { text: "Personal success manager", included: true },
    ],
  },
];

const enterprisePlans = [
  {
    name: "University",
    description: "For educational institutions",
    price: "From $500/year",
    features: [
      "Custom dashboard for administrators",
      "Bulk student accounts",
      "Event posting capabilities",
      "Analytics and reporting",
      "Student progress tracking",
    ],
  },
  {
    name: "Organization",
    description: "For companies & NGOs",
    price: "From $1,000/year",
    features: [
      "Post unlimited opportunities",
      "Employer branding",
      "Talent pipeline access",
      "Application management",
      "Custom integrations",
    ],
  },
];

const testimonials = [
  {
    name: "Aziza K.",
    role: "Premium Member",
    quote: "The personalized roadmap helped me land internships at 3 top companies.",
  },
  {
    name: "Jamshid T.",
    role: "Pro Member",
    quote: "1-on-1 mentor sessions were game-changing for my university applications.",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-4">
            Choose Your <span className="text-gradient">Growth Plan</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Start free and upgrade as you grow. All plans include access to our community.
          </p>

          <div className="inline-flex items-center gap-4 p-1 rounded-xl bg-secondary/50">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Yearly
              <Badge className="bg-emerald-500/10 text-emerald-400 text-xs">Save 2 months</Badge>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`glass-card rounded-3xl p-6 relative ${
                plan.popular ? "border-emerald-500/50 ring-1 ring-emerald-500/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white">Most Popular</Badge>
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl ${plan.bgColor} flex items-center justify-center mb-4`}>
                <plan.icon className={`w-6 h-6 ${plan.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isYearly ? plan.priceYearly : plan.price}
                </span>
                <span className="text-muted-foreground">
                  {plan.price !== "0" && `/${isYearly ? "year" : "month"}`}
                </span>
                {isYearly && plan.price !== "0" && (
                  <div className="text-xs text-emerald-400 mt-1">
                    ~${Math.round(parseInt(plan.priceYearly) / 12)}/month
                  </div>
                )}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground/50"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/auth/register">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-primary hover:opacity-90"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {plan.price === "0" ? "Get Started Free" : "Upgrade Now"}
                </Button>
              </Link>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold font-['Sora'] text-center mb-8">
            For <span className="text-gradient">Organizations</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {enterprisePlans.map((plan, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <Building className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>
                <div className="text-2xl font-bold mb-4">{plan.price}</div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Contact Sales
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-3xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold font-['Sora'] text-center mb-8">
            For <span className="text-gradient">Mentors</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Free to Join</h3>
                  <p className="text-sm text-muted-foreground">10-20% platform fee per session</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Set your own hourly rate",
                  "Flexible scheduling",
                  "Access to motivated students",
                  "Build your professional reputation",
                  "Earn while giving back",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="bg-gradient-primary hover:opacity-90">
                  Become a Mentor
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <div key={i} className="p-4 rounded-xl bg-secondary/30">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-2">&ldquo;{t.quote}&rdquo;</p>
                  <div className="text-xs text-muted-foreground">— {t.name}, {t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold font-['Sora'] mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you choose the right plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="outline">Contact Support</Button>
            </Link>
            <Link href="/faq">
              <Button variant="ghost">View FAQ</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}