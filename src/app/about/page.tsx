"use client";

import { motion } from "framer-motion";
import { Target, Heart, TrendingUp, Globe2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Maqsad Asosida",
    description: "Biz har bir talaba o'zining noyob maqsadlariga erishishiga ishonishimiz va ularning shaxsiy yo'llarini qo'llab-quvvatlaymiz.",
  },
  {
    icon: Heart,
    title: "Talabalar Birinchi",
    description: "Biz qabul qilgan har bir qaror talabalarimizning ehtiyojlari va muvaffaqiyatidan kelib chiqadi.",
  },
  {
    icon: TrendingUp,
    title: "Uzluksiz Yaxshilanish",
    description: "Biz doimiy ravishda o'rganamiz va rivojlanamiz, har doim platformamizni yaxshilash yo'llarini qidiramiz.",
  },
  {
    icon: Globe2,
    title: "Inklyuzivlik",
    description: "Biz o'z orqaga mansubligi va imkoniyatlaridan qat'i nazar har bir talaba uchun imkoniyatlarni ochish uchun ishlashimiz.",
  },
];

const stats = [
  { value: "2024", label: "Tashkil Etilgan" },
  { value: "10K+", label: "Faol Talabalar" },
  { value: "500+", label: "Imkoniyatlar Ro'yxatga olingan" },
  { value: "50+", label: "Hamkorliklar" },
];

const team = [
  {
    name: "Sarah Kim",
    role: "Asoschi va Bosh Direktor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces",
    bio: "Texnologiya bilan ta'limni birlashtirishga ishtiyoqli.",
  },
  {
    name: "Michael Chen",
    role: "Texnologiya Direktori",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
    bio: "AI va mashinali o'qitish mutaxassisi.",
  },
  {
    name: "Emily Rodriguez",
    role: "Talabalar Bilan Ishlash Bo'limi Boshlig'i",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
    bio: "Talaba rivojlanishiga bag'ishlangan.",
  },
];

const milestones = [
  { year: "2024", event: "E-ACTS tashkil etildi" },
  { year: "2024", event: "Birinchi 1000 ta foydalanuvchiga erishildi" },
  { year: "2024", event: "Yetakchi tashkilotlar bilan hamkorlik boshlandi" },
  { year: "2025", event: "AI shaxsiylashtirilgan yo'l xaritalari ishga tushirildi" },
];

const partners = [
  "Google",
  "Microsoft",
  "Huawei",
  "AIESEC",
  "Epam",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
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
              Bizning Missiyamiz
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              E-ACTS Markaziy Osiyo talabalariga imkoniyatlarni kashf qilish, global tanlovlarga tayyorgarlik ko&apos;rish
              va karyera yo&apos;llarini yaratish uchun to&apos;liq platformani taqdim etish orqali kuchga aylantirish uchun tashkil etilgan.
              Biz har bir talaba maxsus imkoniyatlarni topish va o&apos;z potentsialiga erishishga haqli ekanligiga ishonishimiz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
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
              Raqamlardagi Ta&apos;sir
            </h2>
            <p className="text-muted-foreground text-lg">
              Sayohatingizga qo&apos;shiling va farq yarating
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
              Bizning Jamoamizni Tanishing
            </h2>
            <p className="text-muted-foreground text-lg">
              Talabalar uchun imkoniyatlarni ochishga bag&apos;ishlangan maxsus jamoachi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <div className="text-emerald-400 text-sm mb-3">{member.role}</div>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-['Sora'] mb-4">
              Bizning Sayohatimiz
            </h2>
            <p className="text-muted-foreground text-lg">
              Fikirdan dunyoni o&apos;zgartiruvchi platformagacha
            </p>
          </motion.div>

          <div className="space-y-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-center gap-6"
              >
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">{milestone.year}</span>
                </div>
                <div>
                  <p className="text-lg font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
            Whether you&apos;re a student, mentor, or organization, there&apos;s a place for you at E-ACTS.
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