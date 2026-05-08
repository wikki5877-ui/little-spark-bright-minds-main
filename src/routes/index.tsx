import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { FloatingBlock } from "@/components/FloatingBlock";
import { NavBar } from "@/components/NavBar";
import { Preloader } from "@/components/Preloader";
import { HowItWorks } from "@/components/HowItWorks";
import { Counters } from "@/components/Counters";
import { Faq } from "@/components/Faq";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";
import { WaveDivider } from "@/components/WaveDivider";
import { VideoGallery } from "@/components/VideoGallery";
import bgPattern from "@/assets/bg-pattern.jpg";
import iconBooks from "@/assets/icon-books.png";
import iconBulb from "@/assets/icon-bulb.png";
import iconGlobe from "@/assets/icon-globe.png";
import iconMug from "@/assets/icon-mug.png";
import iconHeart from "@/assets/icon-heart.png";
import yanushPoster from "@/assets/yanush-poster.jpg";
import cert1 from "@/assets/certificates/cert-1.jpg";
import cert2 from "@/assets/certificates/cert-2.jpg";
import cert3 from "@/assets/certificates/cert-3.jpg";
import cert4 from "@/assets/certificates/cert-4.jpg";
import cert5 from "@/assets/certificates/cert-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Наталія — дитячий психолог для особливих дітей · Батьківський клуб ЯНУШ" },
      { name: "description", content: "Розвиток та підтримка дітей з особливими потребами: іпотерапія, каністерапія, акватерапія, поведінкова терапія, психологічний супровід. Курси для нянь." },
    ],
  }),
  component: Index,
});

const blocks = [
  { title: "Про мене", icon: iconHeart, accent: "pink" as const, items: ["Позитивна", "Віддана справі", "Творча", "Вірю в кожну особливу дитину"] },
  { title: "Моя професія", icon: iconBooks, accent: "cream" as const, items: ["Дитячий психолог", "Робота з особливими дітьми", "Дипломи — додам фото скоро"] },
  { title: "Чому я люблю свою роботу", icon: iconBulb, accent: "sun" as const, items: ["Щодня різне та цікаве", "Бачу їхні успіхи", "Можу змінювати майбутнє"] },
];

const services = [
  { name: "Іпотерапія", emoji: "🐴", desc: "Терапія за допомогою коней — м'яко розвиває моторику, рівновагу та довіру." },
  { name: "Каністерапія", emoji: "🐶", desc: "Заняття з собаками — знімають тривогу, розкривають емоції та комунікацію." },
  { name: "Акватерапія", emoji: "💧", desc: "Робота у воді — релаксація, зняття м'язового напруження, сенсорна інтеграція." },
  { name: "Адаптивна фізкультура", emoji: "🤸", desc: "Спеціальні вправи під можливості дитини — сила, координація, постава." },
  { name: "Психологічний супровід", emoji: "💬", desc: "Підтримка дитини та сім'ї на кожному етапі розвитку." },
  { name: "Поведінкова терапія", emoji: "🧩", desc: "Формуємо корисні звички, навички спілкування та самостійності." },
  { name: "Масаж", emoji: "✋", desc: "Дитячий лікувально-розвивальний масаж." },
  { name: "Курси для нянь", emoji: "🎓", desc: "50 годин практики · сертифікат · робота з особливими дітьми." },
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
  { src: cert1, label: "Нейрофізіологічний антистрес масаж" },
  { src: cert2, label: "Магістр психології · ДГУ" },
  { src: cert3, label: "Рефлекторний масаж стоп · Ієрогліф" },
  { src: cert4, label: "Анатомія опорно-рухового апарату" },
  { src: cert5, label: "Дитячий реабілітолог · Експерт" },
];

function Index() {
  const [openCert, setOpenCert] = useState<number | null>(null);
  return (
    <main className="relative bg-background" style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }}>
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
            <p className="text-center font-hand text-xl text-foreground/60 mb-14">три речі, які ведуть мене щодня</p>

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
                  <img src={d.icon} alt="" width={120} height={120} className="w-24 h-24 mx-auto mb-4 animate-float" loading="lazy" />
                  <span className="inline-block ribbon px-4 py-1 font-hand text-sm mb-3">{d.label}</span>
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
              <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">наші напрямки ✨</span>
              <h2 className="font-display text-4xl md:text-6xl text-foreground">З чим ми працюємо</h2>
              <p className="font-hand text-xl text-foreground/60 mt-3">наведи на картку — побачиш деталі</p>
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
                  <h3 className="font-display text-2xl text-foreground leading-tight mb-2">{s.name}</h3>
                  <p className="font-hand text-base text-foreground/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                    {s.desc}
                  </p>
                  <p className="font-hand text-sm text-foreground/50 italic group-hover:opacity-0 transition-opacity">наведи ✨</p>
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
              <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">прайс 💛</span>
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
                <p className="font-hand text-lg text-foreground/70 mb-4">1.5 години індивідуальної роботи</p>
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
                <p className="font-hand text-lg text-foreground/70 mb-4">50 годин практики · сертифікат</p>
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
                <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">батьківський клуб</span>
                <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">ЯНУШ</h2>
                <p className="font-hand text-xl text-foreground/75 leading-relaxed">
                  Спільнота для батьків особливих дітей. Тут ми разом вчимося, ділимося досвідом та віримо в кожну дитину.
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
              <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">про мене ✨</span>
              <h2 className="font-display text-3xl md:text-6xl text-foreground">Кривенченко Наталія</h2>
              <p className="font-hand text-xl text-foreground/60 mt-3">натисни на будь-яку картку, щоб дізнатись більше</p>
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
              <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">мої документи 🎓</span>
              <h2 className="font-display text-3xl md:text-6xl text-foreground">Дипломи та сертифікати</h2>
              <p className="font-hand text-xl text-foreground/60 mt-3">натисни на будь-яке фото, щоб роздивитися ближче</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
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
                  <p className="font-hand text-sm text-foreground/75 mt-3 px-1 leading-tight line-clamp-2">{c.label}</p>
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
                  onClick={(e) => { e.stopPropagation(); setOpenCert(null); }}
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
        <Faq />
        <VideoGallery />

        {/* Contact */}
        <section id="contact" className="py-24 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={iconMug} alt="" className="w-28 mx-auto mb-6 animate-float" loading="lazy" />
              <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">Давайте знайомитись</h2>
              <p className="font-hand text-xl text-foreground/70 mb-8">
                Кривенченко Наталія Василівна · дитячий психолог 🇺🇦
              </p>
              <a
                href="tel:+380964805756"
                className="inline-block px-6 md:px-10 py-4 md:py-5 rounded-full bg-gradient-ribbon text-primary-foreground font-bold text-lg md:text-2xl shadow-soft hover:scale-105 transition-transform break-words"
              >
                📞 096 480 57 56
              </a>
              <p className="font-hand text-base text-foreground/50 mt-6">
                напишіть або зателефонуйте — я завжди на зв'язку 💛
              </p>
              <BookingForm />
            </motion.div>
          </div>
        </section>

        <footer className="py-10 text-center font-hand text-foreground/50">
          зроблено з ♥ для маленьких сердець
        </footer>
      </div>
    </main>
  );
}
