import { motion } from "motion/react";
import { useState, type ReactNode } from "react";

interface Props {
  title: string;
  icon: string;
  items: string[];
  accent?: "sky" | "pink" | "cream" | "sun";
  delay?: number;
  className?: string;
}

const accentMap = {
  sky: "from-[oklch(0.93_0.07_240)] to-[oklch(0.88_0.09_235)]",
  pink: "from-[oklch(0.95_0.04_15)] to-[oklch(0.9_0.07_10)]",
  cream: "from-[oklch(0.97_0.03_85)] to-[oklch(0.93_0.05_80)]",
  sun: "from-[oklch(0.96_0.06_90)] to-[oklch(0.9_0.12_85)]",
};

export function FloatingBlock({ title, icon, items, accent = "sky", delay = 0, className = "" }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, type: "spring", damping: 18 }}
      className={className}
    >
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.03, rotate: 1 }}
        whileTap={{ scale: 0.97 }}
        className={`relative w-full text-left paper-card shadow-card bg-gradient-to-br ${accentMap[accent]} p-5 md:p-6 cursor-pointer group overflow-hidden`}
      >
        <div className="flex items-center gap-3">
          <img src={icon} alt="" width={56} height={56} className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-md animate-float" loading="lazy" />
          <h3 className="font-display text-2xl md:text-3xl text-foreground leading-none">{title}</h3>
          <span className="ml-auto text-primary text-2xl font-display select-none">{open ? "−" : "+"}</span>
        </div>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0, marginTop: open ? 16 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <ul className="font-hand text-base md:text-lg text-foreground/85 space-y-2 pl-1">
            {items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">♥</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        {!open && (
          <p className="font-hand text-sm text-foreground/60 mt-2 italic">натисни, щоб відкрити ✨</p>
        )}
      </motion.button>
    </motion.div>
  );
}
