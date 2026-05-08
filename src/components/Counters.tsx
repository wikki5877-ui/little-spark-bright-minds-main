import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 6, suffix: "", label: "років досвіду", emoji: "⏳" },
  { value: 150, suffix: "+", label: "особливих дітей", emoji: "👶" },
  { value: 7, suffix: "", label: "напрямків терапії", emoji: "🌈" },
  { value: 8, suffix: "", label: "сертифікатів", emoji: "🎓" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return c.stop;
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Counters() {
  return (
    <section id="stats" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              transition={{ delay: i * 0.08, type: "spring", damping: 18 }}
              className="paper-card p-4 md:p-6 text-center bg-white/95 shadow-card"
            >
              <div className="text-4xl mb-2">{s.emoji}</div>
              <div className="font-display text-4xl md:text-6xl text-primary leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="font-hand text-sm md:text-base text-foreground/70 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
