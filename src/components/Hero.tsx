import { motion } from "motion/react";
import iconHeart from "@/assets/icon-heart.png";
import iconBulb from "@/assets/icon-bulb.png";

const heroBgVideo = "/videos/hero-bg.mp4";
const heroVideo = "/videos/hero-teacher.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-warm pt-20 md:pt-8 pb-20">
      {/* background cartoon animation */}
      <video
        src={heroBgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.96_0.04_85)]/70 via-[oklch(0.96_0.04_85)]/40 to-[oklch(0.96_0.04_85)]/90" />
      {/* floating decor */}
      <img
        src={iconHeart}
        alt=""
        className="absolute top-20 left-[6%] w-8 md:w-12 opacity-70 animate-drift"
        loading="lazy"
      />
      <img
        src={iconBulb}
        alt=""
        className="absolute top-40 right-[6%] w-10 md:w-14 opacity-80 animate-float"
        loading="lazy"
      />
      <div className="absolute -top-10 right-1/3 w-32 h-32 rounded-full bg-[oklch(0.9_0.1_240)] blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-[oklch(0.92_0.1_85)] blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 text-center lg:text-left"
          >
            <motion.span
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: -3 }}
              transition={{ delay: 0.4, type: "spring", damping: 12 }}
              className="inline-block ribbon px-6 py-2 font-hand text-lg mb-6"
            >
              ❤️ Працюю тільки з особливими дітьми
            </motion.span>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Привіт!
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 18, -8, 18, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
                style={{ transformOrigin: "70% 70%" }}
              >
                👋
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Я —{" "}
              </motion.span>
              <span className="relative inline-block align-baseline">
                {/* word-by-word reveal */}
                {["дитячий", "психолог"].map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="relative z-10 inline-block text-[oklch(0.55_0.18_50)] mr-3"
                    initial={{ opacity: 0, y: 30, rotate: -4, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.8 + wi * 0.25,
                      type: "spring",
                      damping: 12,
                      stiffness: 140,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                {/* underline squiggle */}
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 9 Q 60 0, 120 7 T 240 6 T 298 5"
                    stroke="oklch(0.62 0.17 245)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.7, duration: 1, ease: "easeInOut" }}
                  />
                </svg>
              </span>
              <br />
              <motion.span
                className="font-hand text-2xl md:text-4xl text-foreground/70 inline-block mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.6 }}
              >
                Наталія
              </motion.span>
            </h1>

            <p className="font-hand text-lg md:text-2xl text-foreground/75 mt-8 max-w-md mx-auto lg:mx-0">
              Розвиток, терапія та підтримка дітей з особливими потребами 💛
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#services"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-ribbon text-primary-foreground font-bold text-sm md:text-base shadow-soft hover:scale-105 transition-transform"
              >
                Наші напрямки
              </a>
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-white/80 backdrop-blur text-foreground font-bold text-sm md:text-base border-2 border-primary/20 hover:border-primary transition-colors"
              >
                Зв'язатись 💌
              </a>
            </motion.div>
          </motion.div>

          {/* right: video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", damping: 16 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-ribbon rounded-[3rem] blur-2xl opacity-30" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-float border-4 border-white aspect-square bg-white">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/40 rounded-[2.5rem] pointer-events-none" />
            </div>
            {/* sticker */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3, type: "spring", damping: 10 }}
              className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 ribbon px-3 md:px-5 py-1.5 md:py-2 font-display text-base md:text-2xl rotate-[-8deg] max-w-[80%]"
            >
              Вірю в кожну особливу дитину!
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
