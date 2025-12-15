"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code,
  Lightbulb,
  Trophy,
  ArrowRight,
  Check,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  Clock,
} from "lucide-react";

const goals = [
  {
    id: "software-engineer",
    title: "Dasturiy Ta&apos;minot Muhandisi",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    description: "Katta texnologiya kompaniyalarida ishlash uchun texnik ko'nikmalarni rivojlantiring",
  },
  {
    id: "entrepreneur",
    title: "Tadbirkor",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    description: "O&apos;z startapingizni yarating va biznes ko&apos;nikmalarini rivojlantiring",
  },
  {
    id: "researcher",
    title: "Tadqiqotchi",
    icon: GraduationCap,
    color: "from-violet-500 to-purple-500",
    description: "Akademik yo'lni davom ettiring va tadqiqotda mukammallikni egallang",
  },
  {
    id: "consultant",
    title: "Konsultant",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-500",
    description: "Yetakchi konsalting firmalarida strategik muammo hal qilishda ustun bo'ling",
  },
];

const roadmaps = {
  "software-engineer": {
    title: "Dasturiy Ta&apos;minot Muhandisi Yo&apos;l Xaritasi",
    description: "FAANG va yetakchi texnologiya kompaniyalarida o&apos;rningizni topish uchun asosiy ko&apos;nikmalarni rivojlantiring",
    timeline: "2-3 yil",
    phases: [
      {
        title: "1-Yil: Asoslar",
        items: [
          "Ma'lumotlar Tuzilmalari va Algoritmlarni o'zlashtirish",
          "Dasturlash tillarini o'rganing (Python, Java, yoki C++)",
          "Shaxsiy loyihalar va GitHub portfelini yaratish",
          "Leetcode/Codeforces-da muammo hal qilishni mashq qilish",
          "Birinchi amaliyot yoki ishga murojaat qilish",
        ],
      },
      {
        title: "2-Yil: Ixtisoslashuv",
        items: [
          "Web/Mobil/Backend kabi yo'nalishni tanlash",
          "Tegishli freymvork va kutubxonalarni o'rganing",
          "Yetakchi texnologiya kompaniyalarida amaliyot",
          "Hakatonlarda qatnashing va yutuqlar qo'lga kiriting",
          "Aloqa va mentorlar bilan bog'lanish",
        ],
      },
      {
        title: "3-Yil: Professional",
        items: [
          "To'liq vaqtli ishlar uchun intervyu jarayonlariga tayyorlaning",
          "Murakkab tizim dizaynini o'rganing",
          "Open source-ga hissa qo'shing",
          "Texnik blogging yoki gapirishni boshlang",
          "FAANG/yetakchi texnologiya kompaniyalariga murojaat qilish",
        ],
      },
    ],
    opportunities: [
      "Google Solution Challenge",
      "Dasturiy Ta&apos;minot Muhandisligi Amaliyotlari",
      "Hakaton va Dasturlash Tanlovlari",
      "GDSC Yetakchilik Ro'llari",
    ],
    skills: [
      "Dasturlash",
      "Ma'lumotlar Tuzilmalari",
      "Algoritmlar",
      "Tizim Dizayni",
      "Git/GitHub",
      "Agile",
    ],
  },
  entrepreneur: {
    title: "Tadbirkor Yo'l Xaritasi",
    description: "Muvaffaqiyatli startup yaratish va biznes ko'nikmalarini rivojlantiring",
    timeline: "2-4 yil",
    phases: [
      {
        title: "1-Yil: Asoslar va Idea Tasdiqlash",
        items: [
          "Tadbirkorlik asoslari va biznes modellarini o'rganing",
          "Muammoni aniqlang va bozorni tadqiq qiling",
          "Minimal Foydalanish Mahsuloti (MVP) yaratish",
          "Potensial foydalanuvchilar bilan suhbat o'tkazing",
          "Startup hakatonlarda qatnashing",
        ],
      },
      {
        title: "2-Yil: Startapni Boshlash",
        items: [
          "Asoschi jamoani yig'ing",
          "Biznes rejasi va pitch deck yaratish",
          "Dastlabki foydalanuvchilar va ma'lumotlarni yig'ing",
          "Startup tezlatuvchilariga murojaat qiling",
          "Ilk moliyalashtirish yoki bootstrapping",
        ],
      },
      {
        title: "3-4 Yil: O'sish va Kengayish",
        items: [
          "Mahsulotni bozorga moslashtirish (Product-Market Fit)",
          "Investor va mentorlar bilan bog'lanish",
          "Jamoani yollash va boshqarish",
          "Marketing va mijozlarni jalb qilish",
          "Biznesni kengaytirish yoki mahsulot pivoti",
        ],
      },
    ],
    opportunities: [
      "Startup Hakatonlar",
      "Tezlatuvchi Dasturlar",
      "Biznes Plan Tanlovlari",
      "Tarmoq Tadbirlari",
    ],
    skills: [
      "Biznes Strategiyasi",
      "Marketing",
      "Moliya",
      "Yetakchilik",
      "Pitch Qilish",
      "MVP Rivojlanishi",
    ],
  },
  researcher: {
    title: "Tadqiqotchi Yo'l Xaritasi",
    description: "Akademik yo'lni davom ettiring va tadqiqotda mukammallikni egallang",
    timeline: "4-6 yil",
    phases: [
      {
        title: "1-2 Yil: Akademik Asos",
        items: [
          "Yuqori GPA va kuchli akademik rekord",
          "Tadqiqot metodologiyasini o'rganing",
          "Laboratoriya ishlarida yoki tadqiqot loyihalarida yordam berish",
          "Qiziqish sohasiga xos kurslar oling",
          "Tadqiqot konferensiyalariga qatnashing",
        ],
      },
      {
        title: "3-4 Yil: Tadqiqot Tajribasi",
        items: [
          "Professor yoki tadqiqot guruhiga qo'shiling",
          "Tadqiqot maqolalarini yozing va nashr etish",
          "Magistratura yoki PhD dasturlariga murojaat qiling",
          "Konferensiyalarda taqdimotlar qiling",
          "Tadqiqot grantlari yoki stipendiyalar uchun murojaat qiling",
        ],
      },
      {
        title: "5-6 Yil: Mutaxassis",
        items: [
          "Magistr yoki PhD dasturini yakunlang",
          "Yuqori ta'sirli jurnallarda nashr etish",
          "Xalqaro hamkorliklar yaratish",
          "Ilmiy jamoaga hissa qo'shing",
          "Akademik yoki sanoat tadqiqot lavozimlari",
        ],
      },
    ],
    opportunities: [
      "Tadqiqot Amaliyotlari",
      "Konferensiyalar va Jurnallar",
      "Tadqiqot Grantlari",
      "Doktorantura Dasturlari",
    ],
    skills: [
      "Tadqiqot Metodologiyasi",
      "Ma'lumotlarni Tahlil Qilish",
      "Ilmiy Yozuv",
      "Kritik Fikrlash",
      "Statistik Tahlil",
      "Loyiha Boshqaruvi",
    ],
  },
  consultant: {
    title: "Konsultant Yo'l Xaritasi",
    description: "Yetakchi konsalting firmalarida strategik muammo hal qilishda ustun bo'ling",
    timeline: "2-3 yil",
    phases: [
      {
        title: "1-Yil: Asos va Ko'nikmalar",
        items: [
          "Biznes asosiylari va ramkalarni o'rganing",
          "Case study muammolarini mashq qiling",
          "Moliya va strategiya kurslarini oling",
          "Excel va taqdimot ko'nikmalarini rivojlantiring",
          "Biznes klublar yoki konsaltingga qo'shiling",
        ],
      },
      {
        title: "2-Yil: Tajriba va Tarmoq",
        items: [
          "Konsalting firmalarida amaliyot qiling",
          "Case study tanlovlarida qatnashing",
          "Alumni va sanoat professionallar bilan bog'lanish",
          "Yetakchilik lavozimlarini egilash",
          "McKinsey, BCG, Bain-ga murojaat qiling",
        ],
      },
      {
        title: "3-Yil: Qabul va Mukammallik",
        items: [
          "Intervyular uchun tayyorgarlik ko'ring (case+qism)",
          "Final davralari uchun kuchli profil yarating",
          "To'liq vaqtli takliflar yoki amaliyotlar",
          "Ixtisoslashishni tanlash (strategiya, operatsiyalar, texnologiya)",
          "Konsalting karyerangizni boshlash",
        ],
      },
    ],
    opportunities: [
      "Konsalting Amaliyotlari",
      "Case Study Tanlovlari",
      "Biznes Strategiya Tadbirlari",
      "Yetakchilik Dasturlar",
    ],
    skills: [
      "Muammolarni Hal Qilish",
      "Biznes Tahlil",
      "Strategik Fikrlash",
      "Taqdimot",
      "Excel Moliya Modellari",
      "Mijozlar Bilan Munosabat",
    ],
  },
};

export default function RoadmapPage() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const selectedRoadmap = selectedGoal ? roadmaps[selectedGoal as keyof typeof roadmaps] : null;

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>AI-Quvvatli Shaxsiylashtirilgan Yo&apos;l Xaritalari</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-['Sora'] mb-4">
            Sizning Karyera <span className="text-gradient">Yo&apos;l Xaritangiz</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Maqsadingizni tanlang va muvaffaqiyatga erishish uchun qadamma-qadam yo&apos;lingizni oling.
            Qiziqishlaringiz va ko&apos;nikmalaringizga moslashtirilgan.
          </p>
        </motion.div>

        {!selectedGoal ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, i) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedGoal(goal.id)}
                className="glass-card rounded-2xl p-6 cursor-pointer hover:border-emerald-500/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${goal.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <goal.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {goal.description}
                </p>
                <div className="flex items-center text-emerald-400 text-sm font-medium">
                  Yo&apos;l Xaritasini Ko&apos;rish
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => setSelectedGoal(null)}
                className="mb-4"
              >
                ← Orqaga
              </Button>

              <div className="glass-card rounded-2xl p-8 mb-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${goals.find(g => g.id === selectedGoal)?.color} flex items-center justify-center flex-shrink-0`}>
                    {(() => {
                      const Icon = goals.find(g => g.id === selectedGoal)?.icon;
                      return Icon ? <Icon className="w-8 h-8 text-white" /> : null;
                    })()}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold font-['Sora'] mb-2">
                      {selectedRoadmap?.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-4">
                      {selectedRoadmap?.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <Badge variant="secondary" className="gap-1">
                        <Clock className="w-3 h-3" />
                        {selectedRoadmap?.timeline}
                      </Badge>
                      <Badge variant="secondary" className="gap-1">
                        <Target className="w-3 h-3" />
                        {selectedRoadmap?.phases.length} Bosqich
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-2xl font-bold font-['Sora'] flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                    Yo&apos;l Xaritasi Bosqichlari
                  </h3>

                  {selectedRoadmap?.phases.map((phase, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card rounded-xl p-6"
                    >
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                          <span className="text-emerald-400 font-bold">{i + 1}</span>
                        </div>
                        {phase.title}
                      </h4>
                      <ul className="space-y-3">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="glass-card rounded-xl p-6 sticky top-24">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-emerald-400" />
                      Tegishli Imkoniyatlar
                    </h4>
                    <ul className="space-y-2">
                      {selectedRoadmap?.opportunities.map((opp, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {opp}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-6 border-t border-border/40">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-emerald-400" />
                        Asosiy Ko&apos;nikmalar
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedRoadmap?.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90">
                      Boshlash
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}