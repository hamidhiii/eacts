"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bell,
  Map,
  BookOpen,
  ArrowRight,
  Users,
  Rocket,
  Target,
  Star,
  CheckCircle,
  Calendar,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Aqlli Xabarnomalar",
    description: "Hech qanday imkoniyatni o'tkazib yubormang. Tadbirlar, tanlovlar, amaliyotlar va boshqalar haqida shaxsiylashtirilgan ogohlantirishlarni oling.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Map,
    title: "Shaxsiylashtirilgan Yo'l Xaritalari",
    description: "Maqsadlaringiz, qiziqishlaringiz va hozirgi ko'nikmalaringizga moslashtirilgan AI-quvvatli karyera yo'llari.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: BookOpen,
    title: "Tayyorgarlik Markazlari",
    description: "Mentor rahbarligi va resurslar bilan xalqaro tanlovlarga tayyorgarlik guruhlariga qo'shiling.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Jamoa Moslashtirish",
    description: "Hakatonlar, loyihalar va tanlovlar uchun qo'shimcha ko'nikmalarga ega jamoadorlarni toping.",
    color: "from-orange-500 to-amber-500",
  },
];

const steps = [
  {
    number: "01",
    title: "Profilingizni Yarating",
    description: "Ro'yxatdan o'ting va qiziqishlaringiz, maqsadlaringiz va ta'lim foniningiz haqida bizga ayting.",
  },
  {
    number: "02",
    title: "Shaxsiylashtirilgan Tavsiyalar Oling",
    description: "AI sizning profilingizni tahlil qiladi va tegishli imkoniyatlar va yo'l xaritalarini taklif qiladi.",
  },
  {
    number: "03",
    title: "Bog'laning va O'sib Boring",
    description: "Tayyorgarlik markazlariga qo'shiling, mentorlar bilan bog'laning va darsdan tashqari sayohatingizni boshlang.",
  },
];

const testimonials = [
  {
    name: "Dilshod Karimov",
    role: "Dasturiy Ta'minot Muhandisligi Talabasi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    quote: "E-ACTS menga Google Solution Challenge-ni kashf qilishga yordam berdi va butun tayyorgarlik jarayonida yo'l ko'rsatdi. Endi men global finalchiman!",
  },
  {
    name: "Malika Umarova",
    role: "Biznes Boshqaruvi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    quote: "Yo'l xaritasi funksiyasi konsalting karyeramga erishish uchun qanday qadamlar qo'yish kerakligini aniq ko'rsatdi. E-ACTS tufayli orzuimdagi amaliyotga ega bo'ldim.",
  },
  {
    name: "Jasur Alimov",
    role: "Ma'lumotlar Fanlari Talabasi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    quote: "E-ACTS orqali hakaton jamoamni topdim. Markaziy Osiyo Datathon-da birinchi o'rinni egallashimizga erishdik!",
  },
];

const stats = [
  { value: "10K+", label: "Faol Talabalar" },
  { value: "500+", label: "Imkoniyatlar" },
  { value: "50+", label: "Hamkorlar" },
  { value: "95%", label: "Muvaffaqiyat Darajasi" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium">Markaziy Osiyo Talabalari Uchun #1 Platforma</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-['Sora'] leading-tight mb-8"
            >
              Imkoniyatlaringizni <br />
              <span className="text-gradient">Kashf Qiling</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Global tanlovlar, amaliyotlar va tadbirlarni toping. AI-quvvatli yo&apos;l xaritalari va mentorlik bilan muvaffaqiyatga erishing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/auth/register">
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20">
                  Boshlash
                  <Rocket className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/opportunities">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-emerald-500/20 hover:bg-emerald-500/5">
                  Imkoniyatlarni Ko&apos;rish
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/40 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
              Nima Uchun <span className="text-gradient">E-ACTS?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Biz sizning darsdan tashqari faoliyatingizni keyingi bosqichga olib chiqish uchun barcha vositalarni taqdim etamiz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-6">
                Muvaffaqiyatga Erishish <br />
                <span className="text-gradient">Juda Oson</span>
              </h2>
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="text-5xl font-bold text-emerald-500/20 font-['Sora']">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/auth/register">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Hoziroq Boshlash
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
              <div className="glass-card rounded-3xl p-8 relative border-emerald-500/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Yangi Imkoniyat Topildi</div>
                      <div className="text-sm text-muted-foreground">Google Solution Challenge 2025</div>
                    </div>
                    <Button size="sm" variant="ghost" className="ml-auto text-emerald-400">
                      Ko&apos;rish
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Mentor Bilan Uchrashuv</div>
                      <div className="text-sm text-muted-foreground">Ertaga, 14:00 da</div>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">14 soat qoldi</div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold">Yangi Yutuq!</div>
                      <div className="text-sm text-muted-foreground">Ilk Qadam</div>
                    </div>
                    <Star className="w-4 h-4 text-amber-400 ml-auto fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
              Talabalar <span className="text-gradient">Nima Deyishadi?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Minglab talabalar E-ACTS orqali o&apos;z maqsadlariga erishmoqdalar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-6">
              Sayohatni Boshlashga Tayyormisiz?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Bugun ro&apos;yxatdan o&apos;ting va minglab imkoniyatlarga kirish huquqiga ega bo&apos;ling.
              Karyerangizni keyingi bosqichga olib chiqing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register">
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-primary hover:opacity-90 shadow-lg shadow-emerald-500/20">
                  Bepul Ro&apos;yxatdan O&apos;tish
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                  Ko&apos;proq Ma&apos;lumot
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Kredit karta talab qilinmaydi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>14 kunlik bepul sinov</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}