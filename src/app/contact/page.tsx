"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "E-mail",
    value: "hello@e-acts.com",
    description: "Bizga xat yuboring",
  },
  {
    icon: MapPin,
    title: "Ofis",
    value: "Toshkent, O'zbekiston",
    description: "Bizni Markaziy Osiyoda toping",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+998 (90) 123-45-67",
    description: "Dush-Jum, 9:00-18:00",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
            <span className="text-gradient">Bog'lanish</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Savollaringiz bormi? Takliflaringiz bormi? Hamkorlik qilmoqchimisiz? 
            Biz sizdan eshitishni istashimiz! Bizga xabar yuboring va tez orada javob beramiz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">{info.title}</h3>
              <p className="text-foreground font-medium mb-1">{info.value}</p>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold font-['Sora'] mb-6">
              Xabar Yuboring
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ism
                </label>
                <Input
                  id="name"
                  placeholder="Sizning ismingiz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary/30"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="sizning@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary/30"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Mavzu
                </label>
                <Input
                  id="subject"
                  placeholder="Xabaringiz nima haqida?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-secondary/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Xabar
                </label>
                <Textarea
                  id="message"
                  placeholder="Bizga xabaringizni yozing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-secondary/30 resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                <Send className="w-4 h-4 mr-2" />
                Xabar Yuborish
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tez-tez So'raladigan Savollar</h3>
                  <p className="text-muted-foreground text-sm">
                    Sizning savolingizga javobni allaqachon SSS bo'limida topishingiz mumkin. 
                    Bizga murojaat qilishdan oldin ko'rib chiqing!
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                SSS-ni Ko'rish
              </Button>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Javob Vaqti</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Biz odatda 24-48 soat ichida javob beramiz. Shoshilinch masalalar uchun 
                    bizga telefon orqali murojaat qiling.
                  </p>
                  <div className="text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      Dush-Jum: 9:00 - 18:00
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                      Shan-Yak: Yopiq
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
              <h3 className="text-xl font-semibold mb-2">Hamkorlik Imkoniyatlari</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Universitet, tashkilot yoki kompaniya bo'lib, hamkorlik qilishni xohlaysizmi? 
                Bizning jamoa bilan maxsus hamkorlik imkoniyatlarini muhokama qilish uchun bog'laning.
              </p>
              <Button variant="outline" className="w-full border-emerald-500/50 hover:bg-emerald-500/10">
                Hamkorlik Haqida So'rash
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}