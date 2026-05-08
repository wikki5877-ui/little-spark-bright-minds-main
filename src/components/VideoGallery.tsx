import { motion } from "motion/react";

// Add videos here as you upload them. Each item: { src, poster?, title }
const videos: { src: string; poster?: string; title: string }[] = [
  // Example: { src: "/videos/lesson-1.mp4", title: "Заняття з конем" },
];

export function VideoGallery() {
  return (
    <section id="videos" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">наші моменти 🎬</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">Відео з занять</h2>
          <p className="font-hand text-xl text-foreground/60 mt-3">маленькі історії великих перемог</p>
        </motion.div>

        {videos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="paper-card bg-white/80 backdrop-blur p-12 text-center shadow-card max-w-2xl mx-auto"
          >
            <div className="text-6xl mb-4 animate-float">🎥</div>
            <p className="font-display text-2xl text-foreground mb-2">Скоро тут з'являться відео</p>
            <p className="font-hand text-lg text-foreground/60">
              надішліть мені файли — і я красиво розставлю їх у цьому блоці 💛
            </p>
          </motion.div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <motion.div
                key={v.src}
                initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
                transition={{ delay: i * 0.08, type: "spring", damping: 16 }}
                className="group paper-card overflow-hidden bg-white p-3 shadow-card"
              >
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <video
                    src={v.src}
                    poster={v.poster}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-hand text-base text-foreground/75 mt-3 px-1 leading-tight">{v.title}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}