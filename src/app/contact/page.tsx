"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Users,
  Calendar,
  Building,
  MessageSquare,
  Send,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const partnershipTypes = [
  {
    icon: Users,
    title: "Become a Mentor",
    description: "Share your expertise and guide the next generation of leaders.",
    benefits: ["Flexible schedule", "Build your network", "Give back to community"],
  },
  {
    icon: Calendar,
    title: "Host an Event",
    description: "Reach thousands of engaged students through our platform.",
    benefits: ["Targeted audience", "Full promotional support", "Analytics dashboard"],
  },
  {
    icon: Building,
    title: "Partner with E-ACTS",
    description: "Collaborate with us to create impactful programs.",
    benefits: ["Brand visibility", "Talent pipeline", "Custom solutions"],
  },
];

const faqs = [
  {
    q: "How can I become a mentor?",
    a: "Fill out the mentor application form and our team will review your profile. We look for professionals with at least 2 years of experience in their field.",
  },
  {
    q: "What does it cost to partner with E-ACTS?",
    a: "Partnership packages vary based on scope and duration. Contact us for a customized proposal that fits your organization's goals.",
  },
  {
    q: "How long does it take to get a response?",
    a: "We typically respond to all inquiries within 24-48 business hours.",
  },
];

export default function ContactPage() {
  const [formType, setFormType] = useState("general");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-4">
            Contact & <span className="text-gradient">Partnerships</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions or want to partner with us? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {partnershipTypes.map((type, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 hover:border-emerald-500/30 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <type.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Email</div>
                    <div className="text-sm text-muted-foreground">hello@e-acts.com</div>
                    <div className="text-sm text-muted-foreground">partnerships@e-acts.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Location</div>
                    <div className="text-sm text-muted-foreground">IT Park, Tashkent</div>
                    <div className="text-sm text-muted-foreground">Uzbekistan</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Phone</div>
                    <div className="text-sm text-muted-foreground">+998 90 123 45 67</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">FAQ</h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <div className="font-medium text-sm mb-1">{faq.q}</div>
                    <div className="text-sm text-muted-foreground">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-semibold text-lg mb-4">Send us a Message</h3>
                  <div className="flex gap-2 mb-6">
                    {["general", "mentor", "event", "partner"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFormType(type)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          formType === type
                            ? "bg-gradient-primary text-white"
                            : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {type === "general" && "General"}
                        {type === "mentor" && "Become Mentor"}
                        {type === "event" && "Host Event"}
                        {type === "partner" && "Partnership"}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your name" className="h-12 bg-secondary/30" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@example.com" className="h-12 bg-secondary/30" required />
                      </div>
                    </div>

                    {formType === "mentor" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="expertise">Area of Expertise</Label>
                          <Input id="expertise" placeholder="e.g., Software Engineering, Marketing" className="h-12 bg-secondary/30" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Years of Experience</Label>
                          <Input id="experience" placeholder="e.g., 5+ years" className="h-12 bg-secondary/30" />
                        </div>
                      </>
                    )}

                    {formType === "event" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="eventName">Event Name</Label>
                          <Input id="eventName" placeholder="Name of your event" className="h-12 bg-secondary/30" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventDate">Expected Date</Label>
                          <Input id="eventDate" type="date" className="h-12 bg-secondary/30" />
                        </div>
                      </>
                    )}

                    {formType === "partner" && (
                      <div className="space-y-2">
                        <Label htmlFor="org">Organization Name</Label>
                        <Input id="org" placeholder="Your organization" className="h-12 bg-secondary/30" />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more..."
                        className="min-h-[120px] bg-secondary/30 resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full h-12 bg-gradient-primary hover:opacity-90">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-3xl p-8 text-center"
        >
          <Sparkles className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold font-['Sora'] mb-2">Ready to make an impact?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join the growing community of mentors, partners, and organizations shaping the future of Central Asian youth.
          </p>
          <Button className="bg-gradient-primary hover:opacity-90">
            Start Your Journey
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}