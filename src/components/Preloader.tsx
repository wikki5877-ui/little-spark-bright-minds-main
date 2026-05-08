import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-warm"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: [0.9, 1.1, 0.95, 1.05, 1], opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut", times: [0, 0.3, 0.55, 0.8, 1] }}
            className="mb-4 relative"
          >
            <svg
              width="96"
              height="96"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_8px_20px_rgba(244,114,182,0.45)]"
            >
              <defs>
                <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ff8fb1" />
                  <stop offset="60%" stopColor="#ff5d8f" />
                  <stop offset="100%" stopColor="#e23a6b" />
                </linearGradient>
              </defs>
              <motion.path
                d="M12 21s-7.5-4.6-9.6-9.2C.9 8.1 3.2 4.5 6.7 4.5c2 0 3.6 1.1 4.5 2.7C12.1 5.6 13.7 4.5 15.7 4.5c3.5 0 5.8 3.6 4.3 7.3C19.5 16.4 12 21 12 21z"
                fill="url(#heartGrad)"
                stroke="#ffffff"
                strokeWidth="0.8"
                strokeLinejoin="round"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "12px 12px" }}
              />
              <circle cx="9" cy="9.5" r="1.1" fill="#fff" opacity="0.85" />
            </svg>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl text-foreground"
          >
            хвилинку…
          </motion.p>
          <div className="mt-5 h-1.5 w-44 overflow-hidden rounded-full bg-white/60">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full w-1/2 bg-gradient-ribbon"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}