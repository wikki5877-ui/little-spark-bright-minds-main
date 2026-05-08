import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-yanush.png";

const links = [
  { id: "about", label: "Про мене" },
  { id: "services", label: "Напрямки" },
  { id: "how", label: "Як це працює" },
  { id: "stats", label: "Цифри" },
  { id: "price", label: "Вартість" },
  { id: "certificates", label: "Дипломи" },
  { id: "reviews", label: "Відгуки" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Контакт" },
];

export function NavBar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [0, 1]);
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let cur = links[0].id;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y) cur = l.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{ opacity }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-3"
      >
        <motion.a
          href="#about"
          onClick={(e) => { e.preventDefault(); go("about"); }}
          whileHover={{ scale: 1.08, rotate: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 pl-1 pr-4 py-1 rounded-full bg-white/85 backdrop-blur-md shadow-soft border border-white"
        >
          <YanushAvatar />
          <YanushWordmark className="text-2xl" />
        </motion.a>
        <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-soft border border-white">
          <span className="px-3 font-display text-xl text-primary">Наталія 💛</span>
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => go(l.id)}
            className={`relative px-3 py-1.5 rounded-full font-hand text-sm transition-colors ${
              active === l.id ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {active === l.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-gradient-ribbon -z-0"
                transition={{ type: "spring", damping: 22, stiffness: 260 }}
              />
            )}
            <span className="relative z-10">{l.label}</span>
          </button>
        ))}
        </div>
      </motion.nav>

      {/* Mobile floating logo */}
      <motion.a
        href="#about"
        onClick={(e) => { e.preventDefault(); go("about"); }}
        whileTap={{ scale: 0.92 }}
        className="fixed top-3 left-3 z-50 md:hidden flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-white/85 backdrop-blur-md shadow-soft border border-white"
      >
        <YanushAvatar size="sm" />
        <YanushWordmark className="text-lg pr-1" />
      </motion.a>

      {/* Mobile burger button */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Меню"
        className="fixed top-3 right-3 z-50 md:hidden h-12 w-12 rounded-full bg-white/90 backdrop-blur-md shadow-soft border border-white flex flex-col items-center justify-center gap-1.5"
      >
        <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="block h-[2px] w-6 bg-foreground rounded-full" />
        <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block h-[2px] w-6 bg-foreground rounded-full" />
        <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="block h-[2px] w-6 bg-foreground rounded-full" />
      </button>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-72 max-w-[85vw] bg-white shadow-float md:hidden pt-20 px-4 overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => go(l.id)}
                    className={`text-left font-display text-xl px-4 py-3 rounded-2xl transition-colors ${
                      active === l.id ? "bg-gradient-ribbon text-primary-foreground" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
                <div className="mt-4 px-4 py-3 font-hand text-foreground/60">Наталія 💛</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function YanushAvatar({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-12 w-12" : "h-14 w-14";
  return (
    <div className={`relative ${dim}`}>
      {/* pulsing rainbow ring */}
      <motion.span
        aria-hidden
        className="absolute -inset-[3px] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #ff3b6b, #ffb43a, #ffe24a, #4ade80, #3aa3ff, #a855f7, #ff3b6b)",
          filter: "blur(0.5px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.span
        aria-hidden
        className="absolute -inset-[6px] rounded-full opacity-60"
        style={{
          background:
            "conic-gradient(from 180deg, #ff3b6b, #ffb43a, #4ade80, #3aa3ff, #a855f7, #ff3b6b)",
          filter: "blur(6px)",
        }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={logo}
        alt="Януш"
        className={`relative ${dim} rounded-full object-cover ring-2 ring-white shadow-soft bg-white`}
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function YanushWordmark({ className = "" }: { className?: string }) {
  const letters: { ch: string; color: string }[] = [
    { ch: "Я", color: "#2f7ddc" },
    { ch: "н", color: "#f5b400" },
    { ch: "у", color: "#ef3b3b" },
    { ch: "ш", color: "#3fb950" },
  ];
  return (
    <span className={`font-display drop-shadow-sm whitespace-nowrap ${className}`}>
      {letters.map((l, i) => (
        <motion.span
          key={i}
          style={{ color: l.color, display: "inline-block" }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
        >
          {l.ch}
        </motion.span>
      ))}
    </span>
  );
}