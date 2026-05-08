import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Олена · мама Артемки", text: "За три місяці син почав сам йти на контакт з іншими дітьми. Наталія — справжній янгол для нашої сім'ї.", emoji: "💛" },
  { name: "Ірина · мама Софійки", text: "Іпотерапія змінила нашу донечку. Уперше за довгий час я побачила її щиру усмішку.", emoji: "🐴" },
  { name: "Андрій · тато Максимка", text: "Підхід дуже теплий і професійний. Дитина чекає кожне заняття як свято.", emoji: "🌟" },
  { name: "Тетяна · няня", text: "Курс для нянь — це золото. Тепер знаю, як працювати з особливими дітками впевнено.", emoji: "🎓" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];
  return (
    <section id="reviews" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">відгуки батьків 💌</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">Що кажуть сім'ї</h2>
        </motion.div>

        <div className="relative paper-card bg-white/95 shadow-float p-6 md:p-14 min-h-[260px]">
          <div className="absolute -top-6 left-8 text-7xl text-primary/30 font-display leading-none">“</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{r.emoji}</div>
              <p className="font-hand text-lg md:text-2xl text-foreground/80 leading-relaxed">{r.text}</p>
              <p className="font-display text-lg md:text-xl text-primary mt-6">— {r.name}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Відгук ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2.5 bg-primary/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}