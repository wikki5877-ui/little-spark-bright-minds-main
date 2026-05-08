import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const items = [
  { q: "З якого віку ви приймаєте дітей?", a: "Працюю з дітьми від 1.5 років. Кожна програма підбирається індивідуально під вік та особливості." },
  { q: "Чи безпечні іпотерапія та каністерапія?", a: "Так. Усі тварини спеціально підготовлені, заняття проходять під моїм наглядом і за чіткими протоколами безпеки." },
  { q: "Скільки потрібно занять, щоб побачити результат?", a: "Перші позитивні зміни помітні зазвичай через 4–6 тижнів регулярних зустрічей. Глибоку динаміку оцінюємо через 3 місяці." },
  { q: "Як підготувати дитину до першого заняття?", a: "Достатньо зручного одягу та хорошого настрою. На першу зустріч приходимо разом — щоб дитина відчула, що поряд безпечно." },
  { q: "Чи можна отримати консультацію онлайн?", a: "Так — для батьків я проводжу онлайн-консультації, а дитячі заняття проходять очно." },
  { q: "Чи видаєте сертифікат після курсу для нянь?", a: "Так, після 50 годин практики ви отримуєте офіційний сертифікат." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">часті питання 💬</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">FAQ</h2>
        </motion.div>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="paper-card bg-white/95 shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-lg md:text-2xl">{it.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-3xl text-primary leading-none shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="font-hand text-lg text-foreground/75 px-5 pb-5 leading-relaxed">{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}