"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { Sparkles, Mail, Lock, User, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Shaxsiylashtirilgan imkoniyatlar tavsiyalari",
  "AI-quvvatli karyera yo'l xaritalari",
  "Mentorlar va mutaxassislar bilan bog'lanish",
  "Tayyorgarlik markazlari va resurslarga kirish",
  "Jamoadorlarni topish va hamkorlik qilish",
];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register form submitted:", formData);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-['Sora']">E-ACTS</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
              Hisobingizni Yarating
            </h1>
            <p className="text-muted-foreground mb-8">
              Darsdan tashqari sayohatingizni boshlash va global imkoniyatlarni kashf qilish
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  To'liq Ism
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Ismingiz va familiyangiz"
                    className="pl-10 bg-secondary/30"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail Manzil
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="sizning@email.com"
                    className="pl-10 bg-secondary/30"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Parol
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Kamida 8 ta belgi"
                    className="pl-10 bg-secondary/30"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                  Parolni Tasdiqlash
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Parolni qaytadan kiriting"
                    className="pl-10 bg-secondary/30"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, agreeToTerms: checked as boolean })
                  }
                  required
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                  Men{" "}
                  <Link href="/terms" className="text-emerald-400 hover:underline">
                    Foydalanish Shartlari
                  </Link>{" "}
                  va{" "}
                  <Link href="/privacy" className="text-emerald-400 hover:underline">
                    Maxfiylik Siyosati
                  </Link>
                  ni o'qib chiqdim va qabul qilaman
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 h-12"
                disabled={!formData.agreeToTerms}
              >
                Hisobni Yaratish
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Allaqachon hisobingiz bormi?{" "}
                <Link href="/auth/signin" className="text-emerald-400 hover:underline font-medium">
                  Kirish
                </Link>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-border/40">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Yoki quyidagilar bilan davom eting
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <img src="/github-icon.svg" alt="GitHub" className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2"
          >
            <div className="glass-card rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold font-['Sora'] mb-6">
                Nima Olasiz
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-border/40">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                    alt="Student"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-foreground italic mb-1">
                      "E-ACTS o'zimning darsdan tashqari sayohatimni transformatsiya qildi. Ilgari bilmagan imkoniyatlarni topdim!"
                    </p>
                    <p className="text-xs text-muted-foreground">
                      - Malika U., Kompyuter Fanlari Talabasi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}