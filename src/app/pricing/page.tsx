"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Sparkles,
  Zap,
  Crown,
  Users,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Bepul",
    price: "0$",
    period: "Abadiy",
    description: "Boshlash uchun muhim xususiyatlar",
    features: [
      "Asosiy imkoniyatlarni qidirish",
      "Oyiga 3 ta yo'l xaritasi yaratish",
      "Umumiy tayyorgarlik markazlariga kirish",
      "E-mail ogohlantirishlari",
      "Hamjamiyat forumiga kirish",
    ],
    notIncluded: [
      "AI shaxsiylashtirilgan tavsiyalar",
      "Mentorlar bilan bog'lanish",
      "Murakkab tahlillar",
      "Ustuvor qo'llab-quvvatlash",
    ],
    cta: "Bepul Boshlash",
    popular: false,
  },
  {
    name: "Premium",
    price: "9.99$",
    period: "oyiga",
    description: "Jiddiy talabalar uchun",
    features: [
      "Bepuldagi hamma narsa, shuningdek:",
      "Cheksiz yo'l xaritalari",
      "AI-quvvatli shaxsiylashtirilgan tavsiyalar",
      "Barcha tayyorgarlik markazlariga kirish",
      "Mentorlar bilan bog'lanish",
      "Cheksiz jamoa moslashtirish",
      "Kengaytirilgan tahlillar",
      "Ustuvor e-mail qo'llab-quvvatlash",
      "Offline kirish",
    ],
    notIncluded: [
      "Jamoalar uchun funktsiyalar",
      "Maxsus brending",
      "API kirish",
    ],
    cta: "Premium Olish",
    popular: true,
  },
  {
    name: "Jamoalar",
    price: "Boshqa",
    period: "har bir universitet",
    description: "Tashkilotlar va universitetlar uchun",
    features: [
      "Premiumdagi hamma narsa, shuningdek:",
      "Bir nechta foydalanuvchi o'rinlari",
      "Maxsus brending va oq belgi",
      "API kirish va integratsiyalar",
      "Maxsus tayyorgarlik markazlari",
      "Jamoalar boshqaruvi paneli",
      "Talabalar o'sishini kuzatish",
      "Kengaytirilgan hisobotlar",
      "Maxsus hisob menejeri",
      "Joyda o'qitish va onboarding",
    ],
    notIncluded: [],
    cta: "Aloqaga Chiqish",
    popular: false,
  },
];

const faqs = [
  {
    q: "Bepul rejadan Premiumga o'tishim mumkinmi?",
    a: "Ha! Istalgan vaqtda o'tishingiz mumkin. Yangilashda faqat prorata qismi to'lanadi va darhol barcha Premium funktsiyalariga ega bo'lasiz.",
  },
  {
    q: "Pulni qaytarish siyosati qanday?",
    a: "Biz 14 kunlik pulni qaytarish kafolatini taklif qilamiz. Agar xizmatimizdan mamnun bo'lmasangiz, to'liq qaytarish uchun bizga murojaat qiling.",
  },
  {
    q: "Premium obunani bekor qilishim mumkinmi?",
    a: "Albatta! Istalgan vaqtda obunani bekor qilishingiz mumkin. Joriy davrning oxiriga qadar Premium funktsiyalariga kirishingiz davom etadi.",
  },
  {
    q: "Talabalarga chegirmalar mavjudmi?",
    a: "Ha! Haqiqiy .edu e-mail manzili bilan ro'yxatdan o'tgan talabalar Premium rejasidan 20% chegirmani oladi.",
  },
  {
    q: "Jamoalar rejasi qanday ishlaydi?",
    a: "Jamoalar rejasi universitet klub, tashkilot yoki institutlar uchun mo'ljallangan. Talabalaringiz uchun maxsus narx olish va kengaytirilgan funktsiyalarni muhokama qilish uchun sotuvga murojaat qiling.",
  },
  {
    q: "To'lov qanday xavfsiz?",
    a: "Biz barcha to'lovlarni xavfsiz ravishda qayta ishlash uchun Stripe-dan foydalanamiz. Biz hech qachon sizning to'lov ma'lumotlaringizni saqlamaymiz.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-4">
            Sodda, <span className="text-gradient">Shaffof</span> Narxlar
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Sizning ehtiyojlaringizga mos keladigan rejani tanlang. Istalgan vaqtda yangilash, pasaytirish yoki bekor qilish.
          </p>

          <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-secondary/50">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-gradient-primary text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Oylik
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                isAnnual
                  ? "bg-gradient-primary text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yillik
              <Badge className="ml-2 bg-emerald-500/20 text-emerald-400 border-0">
                20% Tejash
              </Badge>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-8 relative ${
                plan.popular ? "border-emerald-500/50 shadow-lg shadow-emerald-500/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white border-0 px-4 py-1">
                    <Crown className="w-3 h-3 mr-1" />
                    Eng Mashhur
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {plan.price === "Boshqa" ? plan.price : (
                      isAnnual && plan.price !== "0$" 
                        ? `${(parseFloat(plan.price) * 12 * 0.8).toFixed(2)}$`
                        : plan.price
                    )}
                  </span>
                  {plan.price !== "Boshqa" && (
                    <span className="text-muted-foreground">
                      /{isAnnual ? "yil" : plan.period}
                    </span>
                  )}
                </div>
                {plan.price !== "Boshqa" && plan.price !== "0$" && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Istalgan vaqtda bekor qilish
                  </p>
                )}
              </div>

              <Button
                className={`w-full mb-6 ${
                  plan.popular
                    ? "bg-gradient-primary hover:opacity-90"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, j) => (
                  <div key={j} className="flex items-start gap-2 opacity-50">
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold font-['Sora'] text-center mb-8">
            <span className="text-gradient">Mentorlar</span> uchun
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Bepul to'lov</h3>
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
                  Mentor bo'lish
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mentorlar uchun</h3>
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
                  Mentor bo'lish
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-3xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold font-['Sora'] text-center mb-8">
            <span className="text-gradient">Savdo</span> uchun
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
                  Mentor bo'lish
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-secondary/30">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-2">&ldquo;{faq.a}&rdquo;</p>
                  <div className="text-xs text-muted-foreground">— {faq.q}</div>
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
          <h2 className="text-2xl font-bold font-['Sora'] mb-4">Savdo uchun?</h2>
          <p className="text-muted-foreground mb-6">
            Savdo uchun murojaat qilish
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="outline">Murojaat qilish</Button>
            </Link>
            <Link href="/faq">
              <Button variant="ghost">FAQ</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}