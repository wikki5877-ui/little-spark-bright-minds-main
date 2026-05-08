import { motion } from "motion/react";

const steps = [
  { n: "01", emoji: "📞", title: "Знайомство", text: "Спілкуємось, обговорюємо потреби дитини та сім'ї." },
  { n: "02", emoji: "🔍", title: "Діагностика", text: "Визначаємо сильні сторони, складнощі та цілі розвитку." },
  { n: "03", emoji: "🎯", title: "Програма", text: "Складаю індивідуальний план занять — терапія, ігри, вправи." },
  { n: "04", emoji: "🌱", title: "Заняття", text: "Регулярна робота: терапія, підтримка, маленькі перемоги." },
  { n: "05", emoji: "💌", title: "Звіт батькам", text: "Розповідаю про прогрес, даю поради для дому." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">5 простих кроків 🌟</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">Як проходить наша робота</h2>
          <p className="font-hand text-xl text-foreground/60 mt-3">від першого дзвінка — до перших успіхів</p>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, type: "spring", damping: 18 }}
              whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }}
              className="paper-card p-5 bg-white/95 shadow-card text-center"
            >
              <div className="text-4xl mb-2">{s.emoji}</div>
              <div className="font-display text-xl text-primary mb-1">{s.n}</div>
              <h3 className="font-display text-2xl mb-2">{s.title}</h3>
              <p className="font-hand text-base text-foreground/70 leading-snug">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}