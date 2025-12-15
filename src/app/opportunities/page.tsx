"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  MapPin,
  Clock,
  Bookmark,
  Share2,
  ExternalLink,
  X,
  Users,
  Trophy,
  Briefcase,
  GraduationCap,
  Presentation,
  Wrench,
  Globe,
  Building,
} from "lucide-react";

const categories = [
  { id: "all", label: "Barchasi", icon: Globe, count: 48 },
  { id: "events", label: "Tadbirlar", icon: Calendar, count: 12 },
  { id: "competitions", label: "Tanlovlar", icon: Trophy, count: 8 },
  { id: "hackathons", label: "Hakatonlar", icon: Users, count: 6 },
  { id: "internships", label: "Amaliyotlar", icon: Briefcase, count: 10 },
  { id: "seminars", label: "Seminarlar", icon: Presentation, count: 5 },
  { id: "workshops", label: "Ustaxonalar", icon: Wrench, count: 4 },
  { id: "clubs", label: "Klublar", icon: Building, count: 7 },
  { id: "exchange", label: "Almashinuv Dasturlari", icon: GraduationCap, count: 6 },
];

const opportunities = [
  {
    id: 1,
    title: "Google Solution Challenge 2025",
    category: "competitions",
    organization: "Google Developer Student Clubs",
    description: "Birlashgan Millatlar Tashkilotining 17 ta Barqaror Rivojlanish Maqsadlaridan birini hal qilish uchun Google texnologiyasidan foydalanib yechim yarating.",
    deadline: "31-Mart, 2025",
    location: "Onlayn",
    eligibility: "Butun dunyo bo'ylab universitet talabalari",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop",
    tags: ["Texnologiya", "Ijtimoiy Ta'sir", "Google"],
    featured: true,
  },
  {
    id: 2,
    title: "Markaziy Osiyo Hakatoni 2025",
    category: "hackathons",
    organization: "TechHub Markaziy Osiyo",
    description: "Markaziy Osiyoning eng yaxshi dasturchilari mintaqaviy muammolarni hal qilish uchun 48 soatlik hakaton.",
    deadline: "15-Fevral, 2025",
    location: "Toshkent, O'zbekiston",
    eligibility: "Talabalar va mutaxassislar",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
    tags: ["Hakaton", "Tarmoq", "Mukofotlar"],
    featured: true,
  },
  {
    id: 3,
    title: "AIESEC Global Ko'ngilli Dasturi",
    category: "exchange",
    organization: "AIESEC",
    description: "Chet elda ko'ngilli bo'ling va butun dunyo bo'ylab jamoalarga ijobiy ta'sir ko'rsatish bilan birga yetakchilik ko'nikmalaringizni rivojlantiring.",
    deadline: "Doimiy Arizalar",
    location: "Bir Nechta Mamlakatlar",
    eligibility: "18-30 yoshdagilar",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop",
    tags: ["Ko'ngilli", "Xalqaro", "Yetakchilik"],
    featured: false,
  },
  {
    id: 4,
    title: "Microsoft Imagine Cup",
    category: "competitions",
    organization: "Microsoft",
    description: "Talabalarga ijodkorliklari va texnologiyaga bo'lgan ishtiyoqlaridan foydalanishga imkon beruvchi global texnologiya tanlovi.",
    deadline: "15-Aprel, 2025",
    location: "Onlayn + Final Siettlda",
    eligibility: "16+ yoshdagi talabalar",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=400&h=200&fit=crop",
    tags: ["Texnologiya", "Innovatsiya", "Microsoft"],
    featured: true,
  },
  {
    id: 5,
    title: "Ma'lumotlar Fanlari Bo'yicha Yozgi Amaliyot",
    category: "internships",
    organization: "Huawei O'zbekiston",
    description: "Aspirant ma'lumotlar olimlari uchun 3 oylik pullik amaliyot dasturi. Sanoat mutaxassislari bilan real loyihalar ustida ishlang.",
    deadline: "31-Yanvar, 2025",
    location: "Toshkent, O'zbekiston",
    eligibility: "3-4 kurs KI talabalari",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    tags: ["Ma'lumotlar Fanlari", "Pullik", "Mentorlik"],
    featured: false,
  },
  {
    id: 6,
    title: "AI va Mashinali O'rganish Ustaxonasi",
    category: "workshops",
    organization: "IT Park O'zbekiston",
    description: "Amaliy AI va ML ilovalariga bag'ishlangan intensiv 2 kunlik ustaxona. Sanoat mentorlari bilan amaliy loyihalar.",
    deadline: "5-Fevral, 2025",
    location: "IT Park, Toshkent",
    eligibility: "O'rta darajadagi dasturchilar",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    tags: ["AI", "Ustaxona", "Amaliy"],
    featured: false,
  },
  {
    id: 7,
    title: "Yoshlar Yetakchiligi Sammiti 2025",
    category: "events",
    organization: "BMT Yoshlari",
    description: "Global muammolarni muhokama qilish va amaliy yechimlar yaratish uchun yosh yetakchilarni birlashtiruvchi yillik sammit.",
    deadline: "1-Mart, 2025",
    location: "Almati, Qozog'iston",
    eligibility: "18-25 yoshdagilar",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
    tags: ["Yetakchilik", "BMT", "Tarmoq"],
    featured: false,
  },
  {
    id: 8,
    title: "GDSC Yetakchi Arizalari",
    category: "clubs",
    organization: "Google Developer Student Clubs",
    description: "Universitetingizda talaba dasturchilari hamjamiyatiga yetakchilik qiling. Tadbirlar, ustaxonalar va hakatonlar tashkil qiling.",
    deadline: "31-Avgust, 2025",
    location: "Sizning Universitetingiz",
    eligibility: "Universitet talabalari",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=200&fit=crop",
    tags: ["Yetakchilik", "Google", "Hamjamiyat"],
    featured: false,
  },
  {
    id: 9,
    title: "Tadbirkorlik Seminar Seriyasi",
    category: "seminars",
    organization: "Startup Grind Toshkent",
    description: "Muvaffaqiyatli tadbirkorlar o'z sayohatlari va tushunchalarini baham ko'rishuvchi haftalik seminarlar.",
    deadline: "Ochiq Ro'yxatdan O'tish",
    location: "Gibrid",
    eligibility: "Qiziquvchilar hamma",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=200&fit=crop",
    tags: ["Startap", "Mentorlik", "Bepul"],
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  events: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  competitions: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  hackathons: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  internships: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  seminars: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  workshops: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  clubs: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  exchange: "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

export default function OpportunitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [savedItems, setSavedItems] = useState<number[]>([]);

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesCategory = selectedCategory === "all" || opp.category === selectedCategory;
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSave = (id: number) => {
    setSavedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
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
            Barcha <span className="text-gradient">Imkoniyatlar</span> Bir Joyda
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tadbirlar, tanlovlar, amaliyotlar va boshqalarni kashf qiling. Turkum bo&apos;yicha filtrlang va hech qanday imkoniyatni o&apos;tkazib yubormang.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Imkoniyatlarni qidirish..."
            className="pl-12 h-14 text-lg bg-secondary/30 border-border/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category.id
                  ? "bg-gradient-primary text-white"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-md ${selectedCategory === category.id
                  ? "bg-white/20"
                  : "bg-secondary"
                }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredOpportunities.map((opp, i) => (
              <motion.div
                key={opp.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all group"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={opp.image}
                    alt={opp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  {opp.featured && (
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-gradient-primary text-white text-xs font-medium">
                      Maxsus
                    </div>
                  )}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-medium border ${categoryColors[opp.category]}`}>
                    {categories.find((c) => c.id === opp.category)?.label}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs text-muted-foreground mb-2">{opp.organization}</div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                    {opp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {opp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {opp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>Muddat: {opp.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <span>{opp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span>{opp.eligibility}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button className="flex-1 bg-gradient-primary hover:opacity-90" size="sm">
                      Ariza Topshirish
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSave(opp.id)}
                      className={savedItems.includes(opp.id) ? "text-emerald-400 border-emerald-500/50" : ""}
                    >
                      <Bookmark className={`w-4 h-4 ${savedItems.includes(opp.id) ? "fill-current" : ""}`} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredOpportunities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Imkoniyatlar topilmadi</h3>
            <p className="text-muted-foreground">Qidiruv yoki filtr mezonlaringizni sozlashga harakat qiling</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}