import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FloatingBlock } from "@/components/FloatingBlock";
import { NavBar } from "@/components/NavBar";
import { Preloader } from "@/components/Preloader";
import { HowItWorks } from "@/components/HowItWorks";
import { Counters } from "@/components/Counters";
import { Faq } from "@/components/Faq";
import { Testimonials } from "@/components/Testimonials";
import { ParentVideoTestimonials } from "@/components/ParentVideoTestimonials";
import { BookingForm } from "@/components/BookingForm";
import { WaveDivider } from "@/components/WaveDivider";
import { VideoGallery } from "@/components/VideoGallery";
import bgPattern from "@/assets/bg-pattern.jpg";
import iconBooks from "@/assets/icon-books.png";
import iconBulb from "@/assets/icon-bulb.png";
import iconGlobe from "@/assets/icon-globe.png";
import iconMug from "@/assets/icon-mug.png";
import iconHeart from "@/assets/icon-heart.png";
import nataliiaPortrait from "@/assets/nataliia-portrait.webp";
import yanushPoster from "@/assets/yanush-poster.jpg";
import cert1 from "@/assets/certificates/cert-1.jpg";
import cert2 from "@/assets/certificates/cert-2.jpg";
import cert3 from "@/assets/certificates/cert-3.jpg";
import cert4 from "@/assets/certificates/cert-4.jpg";
import cert5 from "@/assets/certificates/cert-5.jpg";
import cert6 from "@/assets/certificates/cert-6.jpg";
import cert7 from "@/assets/certificates/cert-7.jpg";
import cert8 from "@/assets/certificates/cert-8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Наталія — дитячий психолог для особливих дітей · Батьківський клуб ЯНУШ" },
      {
        name: "description",
        content:
          "Розвиток та підтримка дітей з особливими потребами: іпотерапія, каністерапія, акватерапія, поведінкова терапія, психологічний супровід. Курси для нянь.",
      },
    ],
  }),
  component: Index,
});

const blocks = [
  {
    title: "Про мене",
    icon: iconHeart,
    accent: "pink" as const,
    items: ["Позитивна", "Віддана справі", "Творча", "Вірю в кожну особливу дитину"],
  },
  {
    title: "Моя професія",
    icon: iconBooks,
    accent: "cream" as const,
    items: [
      "Дитячий психолог",
      "Робота з особливими дітьми",
      "Дипломи та сертифікати підтверджують кваліфікацію",
    ],
  },
  {
    title: "Чому я люблю свою роботу",
    icon: iconBulb,
    accent: "sun" as const,
    items: ["Щодня різне та цікаве", "Бачу їхні успіхи", "Можу змінювати майбутнє"],
  },
];

const services = [
  {
    name: "Іпотерапія",
    emoji: "🐴",
    desc: "Терапія за допомогою коней — м'яко розвиває моторику, рівновагу та довіру.",
  },
  {
    name: "Каністерапія",
    emoji: "🐶",
    desc: "Заняття з собаками — знімають тривогу, розкривають емоції та комунікацію.",
  },
  {
    name: "Акватерапія",
    emoji: "💧",
    desc: "Робота у воді — релаксація, зняття м'язового напруження, сенсорна інтеграція.",
  },
  {
    name: "Адаптивна фізкультура",
    emoji: "🤸",
    desc: "Спеціальні вправи під можливості дитини — сила, координація, постава.",
  },
  {
    name: "Психологічний супровід",
    emoji: "💬",
    desc: "Підтримка дитини та сім'ї на кожному етапі розвитку.",
  },
  {
    name: "Поведінкова терапія",
    emoji: "🧩",
    desc: "Формуємо корисні звички, навички спілкування та самостійності.",
  },
  { name: "Масаж", emoji: "✋", desc: "Дитячий лікувально-розвивальний масаж." },
  {
    name: "Курси для нянь",
    emoji: "🎓",
    desc: "50 годин практики · сертифікат · робота з особливими дітьми.",
  },
];

const accentColors = [
  "from-[oklch(0.93_0.07_240)] to-[oklch(0.85_0.12_245)]",
  "from-[oklch(0.95_0.05_15)] to-[oklch(0.88_0.1_10)]",
  "from-[oklch(0.96_0.06_90)] to-[oklch(0.88_0.14_85)]",
  "from-[oklch(0.93_0.07_160)] to-[oklch(0.85_0.11_165)]",
  "from-[oklch(0.93_0.07_300)] to-[oklch(0.85_0.11_295)]",
  "from-[oklch(0.95_0.05_55)] to-[oklch(0.88_0.1_50)]",
  "from-[oklch(0.93_0.07_200)] to-[oklch(0.85_0.11_205)]",
  "from-[oklch(0.95_0.05_340)] to-[oklch(0.88_0.1_335)]",
];

const dreams = [
  { label: "Моя мета", text: "Розвивати потенціал кожної особливої дитини", icon: iconGlobe },
  { label: "Моя мрія", text: "Щоб світ став добрішим до особливих дітей", icon: iconBulb },
  { label: "Моя суперсила", text: "Віра в кожну дитину — без винятків", icon: iconMug },
];

const certificates = [
  { src: cert1, label: "Магістр психології · Дніпровський гуманітарний університет" },
  { src: cert2, label: "Нейрофізіологічний антистрес масаж" },
  { src: cert3, label: "Рефлекторний масаж стоп · Ієрогліф" },
  { src: cert4, label: "Дитячий реабілітолог · Модуль A" },
  { src: cert5, label: "Дитячий реабілітолог · Модуль B" },
  { src: cert6, label: "Основи анатомії та фізіології опорно-рухового апарату" },
  { src: cert7, label: "Грамота за професійні досягнення" },
  { src: cert8, label: "Корекційна гімнастика та терапевтичний масаж для дітей 0-6 років" },
];

const locationAddress = "м. Дніпро, вул. Старозаводська, 11A";
const mapQuery = encodeURIComponent("Dnipro, Starozavodska 11A");
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`;
const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const emailAddress = "Nataliiavasilievna11@gmail.com";
const instagramUrl =
  "https://www.instagram.com/nataliiakrivenchenko?utm_source=qr&igsh=bmUycTFlemJraGhn";
const facebookUrl = "https://www.facebook.com/share/1Fa9ysgzVG/";

function Index() {
  const [openCert, setOpenCert] = useState<number | null>(null);
  return (
    <main
      className="relative bg-background"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: "600px",
        backgroundRepeat: "repeat",
      }}
    >
      <Preloader />
      <NavBar />
      {/* Floating parallax decor */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed top-[15%] left-[3%] text-6xl opacity-20 z-0 hidden md:block"
      >
        ☁️
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ y: [0, 16, 0], x: [0, -14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed top-[55%] right-[4%] text-5xl opacity-20 z-0 hidden md:block"
      >
        🍃
      </motion.div>
      <div className="bg-background/40">
        <Hero />
        <WaveDivider />

        {/* Dreams ribbon strip */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center font-display text-4xl md:text-6xl text-foreground mb-3"
            >
              Що мене надихає
            </motion.h2>
            <p className="text-center font-hand text-xl text-foreground/60 mb-14">
              три речі, які ведуть мене щодня
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {dreams.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -3 : 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 0, scale: 1.04 }}
                  transition={{ delay: i * 0.15, type: "spring", damping: 16 }}
                  className="paper-card p-8 shadow-card text-center bg-white/90 backdrop-blur"
                >
                  <img
                    src={d.icon}
                    alt=""
                    width={120}
                    height={120}
                    className="w-24 h-24 mx-auto mb-4 animate-float"
                    loading="lazy"
                  />
                  <span className="inline-block ribbon px-4 py-1 font-hand text-sm mb-3">
                    {d.label}
                  </span>
                  <p className="font-display text-2xl text-foreground leading-snug">{d.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services - with whom we work */}
        <section id="services" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">
                наші напрямки ✨
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-foreground">
                З чим ми працюємо
              </h2>
              <p className="font-hand text-xl text-foreground/60 mt-3">
                наведи на картку — побачиш деталі
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, rotate: 0, scale: 1.04 }}
                  transition={{ delay: i * 0.06, type: "spring", damping: 16 }}
                  className={`group relative paper-card overflow-hidden bg-gradient-to-br ${accentColors[i]} p-6 shadow-card cursor-default`}
                >
                  <div className="text-5xl mb-3 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6 inline-block">
                    {s.emoji}
                  </div>
                  <h3 className="font-display text-2xl text-foreground leading-tight mb-2">
                    {s.name}
                  </h3>
                  <p className="font-hand text-base text-foreground/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                    {s.desc}
                  </p>
                  <p className="font-hand text-sm text-foreground/50 italic group-hover:opacity-0 transition-opacity">
                    наведи ✨
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />
        <Counters />

        {/* Price */}
        <section id="price" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">
                прайс 💛
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-foreground">Вартість</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="paper-card p-8 bg-gradient-to-br from-[oklch(0.96_0.06_90)] to-[oklch(0.9_0.12_85)] shadow-card"
              >
                <div className="text-4xl mb-2">⏱️</div>
                <h3 className="font-display text-2xl md:text-3xl mb-2">Заняття</h3>
                <p className="font-hand text-lg text-foreground/70 mb-4">
                  1.5 години індивідуальної роботи
                </p>
                <div className="font-display text-4xl md:text-5xl text-primary">600 грн</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="paper-card p-8 bg-gradient-to-br from-[oklch(0.93_0.07_240)] to-[oklch(0.85_0.12_245)] shadow-card"
              >
                <div className="text-4xl mb-2">🎓</div>
                <h3 className="font-display text-2xl md:text-3xl mb-2">Курси для нянь</h3>
                <p className="font-hand text-lg text-foreground/70 mb-4">
                  50 годин практики · сертифікат
                </p>
                <div className="font-display text-4xl md:text-5xl text-primary">3000 грн</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Yanush poster */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-ribbon rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-float border-4 border-white">
                  <img
                    src={yanushPoster}
                    alt="Батьківський клуб ЯНУШ — розвиток та підтримка дітей з особливими потребами"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.25_0.1_270)]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div>
                <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">
                  батьківський клуб
                </span>
                <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">ЯНУШ</h2>
                <p className="font-hand text-xl text-foreground/75 leading-relaxed">
                  Спільнота для батьків особливих дітей. Тут ми разом вчимося, ділимося досвідом та
                  віримо в кожну дитину.
                </p>
                <p className="font-display text-xl md:text-2xl text-primary mt-6 italic">
                  «Я — психолог, який вірить в кожну особливу дитину»
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About / Floating blocks */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">
                про мене ✨
              </span>
              <h2 className="font-display text-3xl md:text-6xl text-foreground">
                Кривенченко Наталія
              </h2>
              <p className="font-hand text-xl text-foreground/60 mt-3">
                натисни на будь-яку картку, щоб дізнатись більше
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] items-center mb-10"
            >
              <div className="relative max-w-md mx-auto w-full">
                <div className="absolute -inset-5 bg-gradient-ribbon rounded-[2.8rem] blur-2xl opacity-30" />
                <div className="relative paper-card overflow-hidden bg-white/95 p-3 md:p-4 shadow-float">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-[oklch(0.95_0.02_80)]">
                    <img
                      src={nataliiaPortrait}
                      alt="Кривенченко Наталія"
                      loading="lazy"
                      className="h-full w-full object-cover scale-[1.09] rotate-[5deg] translate-x-2 -translate-y-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.28_0.05_250)]/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 font-hand text-sm text-foreground shadow-soft">
                    реальне фото
                  </div>
                  <div className="absolute -bottom-3 right-4 ribbon px-4 py-2 font-display text-lg rotate-[5deg] shadow-soft">
                    Наталія 💛
                  </div>
                </div>
              </div>

              <div className="paper-card bg-white/92 p-6 md:p-8 shadow-card">
                <span className="inline-flex rounded-full bg-[oklch(0.96_0.04_80)] px-4 py-2 font-hand text-sm text-foreground/80 shadow-soft">
                  дитячий психолог
                </span>
                <h3 className="font-display text-4xl md:text-5xl leading-tight text-foreground mt-5">
                  Тепла присутність, професійний погляд і щира віра в кожну дитину
                </h3>
                <p className="font-hand text-lg md:text-xl leading-relaxed text-foreground/70 mt-5">
                  У роботі важливі не лише методики, а й контакт, довіра та відчуття безпеки для
                  дитини й батьків. Кожне заняття будується з урахуванням індивідуальних
                  особливостей дитини, її темпу розвитку та реальних потреб сім'ї.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 mt-6">
                  <div className="rounded-[1.25rem] border border-[oklch(0.88_0.03_240)] bg-[oklch(0.99_0.01_240)] px-4 py-4 shadow-soft">
                    <p className="font-hand text-sm uppercase tracking-[0.08em] text-foreground/45">
                      підхід
                    </p>
                    <p className="font-display text-2xl text-foreground mt-1">
                      турбота + структура
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-[oklch(0.9_0.03_80)] bg-[oklch(0.99_0.01_80)] px-4 py-4 shadow-soft">
                    <p className="font-hand text-sm uppercase tracking-[0.08em] text-foreground/45">
                      фокус
                    </p>
                    <p className="font-display text-2xl text-foreground mt-1">
                      особливі діти та сім'ї
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blocks.map((b, i) => (
                <FloatingBlock key={b.title} {...b} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>

        {/* Certificates & Diplomas */}
        <section id="certificates" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">
                мої документи 🎓
              </span>
              <h2 className="font-display text-3xl md:text-6xl text-foreground">
                Дипломи та сертифікати
              </h2>
              <p className="font-hand text-xl text-foreground/60 mt-3">
                натисни на будь-яке фото, щоб роздивитися ближче
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {certificates.map((c, i) => (
                <motion.button
                  type="button"
                  key={c.label}
                  onClick={() => setOpenCert(i)}
                  initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, rotate: 0, scale: 1.05 }}
                  transition={{ delay: i * 0.08, type: "spring", damping: 16 }}
                  className="group relative paper-card overflow-hidden bg-white p-3 shadow-card cursor-zoom-in text-left"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={c.src}
                      alt={c.label}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="font-hand text-sm text-foreground/75 mt-3 px-1 leading-tight line-clamp-2">
                    {c.label}
                  </p>
                  <span className="absolute top-5 right-5 bg-white/90 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-soft">
                    🔍
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {openCert !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenCert(null)}
                className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
              >
                <motion.img
                  key={openCert}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 22 }}
                  src={certificates[openCert].src}
                  alt={certificates[openCert].label}
                  className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-float"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenCert(null);
                  }}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/95 text-foreground text-2xl flex items-center justify-center shadow-soft hover:scale-110 transition"
                  aria-label="Закрити"
                >
                  ✕
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <Testimonials />
        <ParentVideoTestimonials />
        <Faq />
        <VideoGallery />

        {/* Contact */}
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-x-0 top-10 mx-auto h-72 max-w-6xl rounded-full blur-3xl opacity-35"
            style={{
              background:
                "radial-gradient(circle, oklch(0.95 0.05 240 / 0.9) 0%, oklch(0.97 0.04 75 / 0.55) 45%, transparent 78%)",
            }}
          />

          <div className="container mx-auto max-w-6xl relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">
                де нас знайти 📍
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-foreground">
                Контакти та адреса
              </h2>
              <p className="font-hand text-xl text-foreground/60 mt-3">
                карта, пошта та соцмережі в одному зручному блоці
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className="paper-card bg-white/92 p-6 md:p-8 shadow-float"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={iconMug} alt="" className="w-18 h-18 animate-float" loading="lazy" />
                  <div>
                    <p className="font-display text-3xl md:text-4xl text-foreground">
                      Наталія Кривенченко
                    </p>
                    <p className="font-hand text-lg text-foreground/65">
                      дитячий психолог та фахівець з реабілітації
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href={mapOpenUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 rounded-[1.25rem] border border-[oklch(0.88_0.03_240)] bg-[oklch(0.99_0.01_240)] px-4 py-4 shadow-soft transition-transform hover:-translate-y-1"
                  >
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.94_0.05_240)] text-primary">
                      <MapPin size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-hand text-sm uppercase tracking-[0.08em] text-foreground/45">
                        адреса
                      </span>
                      <span className="mt-1 block font-display text-2xl leading-tight text-foreground">
                        {locationAddress}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1 font-hand text-base text-primary">
                        відкрити маршрут
                        <ArrowUpRight size={16} />
                      </span>
                    </span>
                  </a>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-start gap-4 rounded-[1.25rem] border border-[oklch(0.9_0.03_80)] bg-[oklch(0.99_0.01_80)] px-4 py-4 shadow-soft transition-transform hover:-translate-y-1"
                  >
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.96_0.04_80)] text-[oklch(0.42_0.12_70)]">
                      <Mail size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-hand text-sm uppercase tracking-[0.08em] text-foreground/45">
                        електронна пошта
                      </span>
                      <span className="mt-1 block break-all font-display text-2xl leading-tight text-foreground">
                        {emailAddress}
                      </span>
                      <span className="mt-2 block font-hand text-base text-foreground/60">
                        натисни, щоб одразу написати листа
                      </span>
                    </span>
                  </a>

                  <a
                    href="tel:+380964805756"
                    className="flex items-start gap-4 rounded-[1.25rem] border border-[oklch(0.88_0.03_15)] bg-white px-4 py-4 shadow-soft transition-transform hover:-translate-y-1"
                  >
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.95_0.05_15)] text-[oklch(0.52_0.16_20)]">
                      <Phone size={22} />
                    </span>
                    <span>
                      <span className="block font-hand text-sm uppercase tracking-[0.08em] text-foreground/45">
                        телефон
                      </span>
                      <span className="mt-1 block font-display text-2xl leading-tight text-foreground">
                        096 480 57 56
                      </span>
                      <span className="mt-2 block font-hand text-base text-foreground/60">
                        швидкий зв'язок для запису та запитань
                      </span>
                    </span>
                  </a>
                </div>

                <div className="mt-6 rounded-[1.4rem] border border-[oklch(0.88_0.03_240)] bg-[oklch(0.985_0.01_240)] p-5 shadow-soft">
                  <p className="font-hand text-sm uppercase tracking-[0.08em] text-foreground/45">
                    соцмережі
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-ribbon px-5 py-3 font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105"
                    >
                      <Instagram size={18} />
                      Instagram
                    </a>
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.86_0.03_240)] bg-white px-5 py-3 font-bold text-foreground shadow-soft transition-transform hover:scale-105"
                    >
                      <Facebook size={18} />
                      Facebook
                    </a>
                  </div>
                </div>

                <BookingForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className="paper-card overflow-hidden bg-white/92 p-3 md:p-4 shadow-float"
              >
                <div className="rounded-[1.4rem] overflow-hidden border border-[oklch(0.88_0.03_240)] bg-[oklch(0.98_0.01_240)] h-full min-h-[420px]">
                  <iframe
                    title="Карта з адресою"
                    src={mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full min-h-[420px] w-full border-0"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="px-4 pb-10">
          <div className="container mx-auto max-w-6xl paper-card bg-white/85 px-6 py-5 text-center font-hand text-foreground/55 shadow-soft">
            зроблено з любов'ю для дітей та їхніх родин
          </div>
        </footer>
      </div>
    </main>
  );
}
