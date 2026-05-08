import { motion } from "motion/react";

type VideoItem = {
  src: string;
  poster?: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
  order?: number;
};

const VIDEO_FOLDER = "public/videos/lessons";
const videoFiles = import.meta.glob("../../public/videos/lessons/*.{mp4,webm,mov,m4v}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const videoMeta: Record<string, Omit<VideoItem, "src">> = {
  "Мой фильм 33.mp4": {
    featured: true,
    order: 0,
    title: "Теплий момент заняття",
    subtitle: "спокійна робота, довіра та жива взаємодія",
  },
  "20260507_131605.mp4": {
    order: 1,
    title: "Знайомство та включення",
    subtitle: "перші хвилини контакту і м'який старт заняття",
  },
  "VID_20260503_225725_848.mp4": {
    order: 2,
    title: "Практика в русі",
    subtitle: "невеликий фрагмент активної частини заняття",
  },
  "VID_20260503_235553_484.mp4": {
    order: 3,
    title: "Крок за кроком",
    subtitle: "короткий епізод з увагою до маленьких успіхів",
  },
  "VID_20260503_235709_520.mp4": {
    order: 4,
    title: "Мить з процесу",
    subtitle: "живий кадр, де видно ритм і включеність дитини",
  },
  "VID_20260504_000711_943.mp4_1.mp4": {
    order: 5,
    title: "Спокій і концентрація",
    subtitle: "делікатна робота на відчуття, баланс і контакт",
  },
  "VID_20260504_001643_657.mp4": {
    order: 6,
    title: "Навички через гру",
    subtitle: "ще один невеликий сюжет з реального заняття",
  },
  "VID_20260504_002518_292.mp4": {
    order: 7,
    title: "Триваліший фрагмент заняття",
    subtitle: "тут добре відчувається динаміка і темп всієї роботи",
  },
  "VID_20260503_235421_328.mp4_1.mp4": {
    order: 8,
    title: "Фінальні штрихи",
    subtitle: "короткий епізод на завершення підбірки",
  },
  "VID_20260503_181947_455.mp4": {
    order: 9,
    title: "Ще один щирий епізод",
    subtitle: "короткий фрагмент з живою реакцією та контактом",
  },
  "VID_20260503_230144_807.mp4": {
    order: 10,
    title: "Розвиток у процесі",
    subtitle: "тут добре видно темп заняття і послідовність дій",
  },
  "Мой фильм 32.mp4": {
    order: 11,
    title: "Великий сюжет із заняття",
    subtitle: "довший ролик, який показує хід роботи від початку до результату",
  },
};

const makeFallbackTitle = (fileName: string) =>
  fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const videos: VideoItem[] = Object.entries(videoFiles)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? path;
    const meta = videoMeta[fileName];

    return {
      src,
      title: meta?.title ?? makeFallbackTitle(fileName),
      subtitle: meta?.subtitle,
      featured: meta?.featured,
      order: meta?.order ?? Number.MAX_SAFE_INTEGER,
    };
  })
  .sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title, "uk");
  });

export function VideoGallery() {
  const featuredVideo = videos[0];
  const remainingVideos = videos.slice(1);

  return (
    <section id="videos" className="py-24 px-4 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-12 mx-auto h-64 max-w-5xl rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, oklch(0.93 0.06 240 / 0.95) 0%, oklch(0.96 0.04 75 / 0.55) 45%, transparent 75%)",
        }}
      />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">
            наші моменти 🎬
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">Відео з занять</h2>
          <p className="font-hand text-xl text-foreground/60 mt-3">
            маленькі історії великих перемог
          </p>
        </motion.div>

        {videos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="paper-card relative overflow-hidden bg-white/85 backdrop-blur p-6 md:p-8 shadow-card max-w-4xl mx-auto"
          >
            <div className="absolute top-5 right-5 text-4xl opacity-15 animate-float">🎞️</div>
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="text-left">
                <span className="inline-flex items-center rounded-full bg-[oklch(0.97_0.03_80)] px-4 py-2 font-hand text-sm text-foreground/80 shadow-soft">
                  папка для нових відео
                </span>
                <p className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-3 leading-tight">
                  Сюди вже можна додавати живі моменти з занять
                </p>
                <p className="font-hand text-lg text-foreground/70 leading-relaxed">
                  Перенеси ролики у папку нижче, а я вже підключу їх у красиву підбірку. Найкраще
                  підійдуть `mp4` або `webm`, горизонтальні відео виглядатимуть особливо охайно.
                </p>
                <div className="mt-5 rounded-[1.25rem] border border-[oklch(0.84_0.05_240)] bg-[oklch(0.98_0.01_240)] px-4 py-3 shadow-soft">
                  <p className="font-hand text-sm uppercase tracking-[0.08em] text-foreground/45">
                    куди класти файли
                  </p>
                  <p className="mt-1 break-all font-mono text-sm md:text-base text-primary">
                    {VIDEO_FOLDER}
                  </p>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-[oklch(0.9_0.03_240)] bg-gradient-to-br from-white via-[oklch(0.98_0.015_240)] to-[oklch(0.95_0.04_80)] p-5 md:p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-ribbon text-2xl text-primary-foreground shadow-soft">
                    ▶
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground">Як будемо оформляти</p>
                    <p className="font-hand text-base text-foreground/60">
                      акуратно, тепло і без порожніх заглушок
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "1-ше відео стане головним великим кадром",
                    "інші ролики ляжуть у сітку нижче",
                    "за бажанням можна додати окремі назви для кожного сюжету",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/70 bg-white/75 px-4 py-3 font-hand text-base text-foreground/75 shadow-[0_8px_20px_-18px_rgba(37,99,235,0.55)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {featuredVideo ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className="paper-card overflow-hidden bg-white/92 p-4 md:p-5 shadow-float"
              >
                <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
                  <div className="overflow-hidden rounded-[1.35rem] bg-[oklch(0.93_0.02_240)] shadow-soft">
                    <div className="aspect-video">
                      <video
                        src={featuredVideo.src}
                        poster={featuredVideo.poster}
                        controls
                        preload="metadata"
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="px-1 md:px-3">
                    <span className="inline-flex rounded-full bg-[oklch(0.94_0.05_80)] px-4 py-2 font-hand text-sm text-foreground/80">
                      головне відео
                    </span>
                    <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-foreground">
                      {featuredVideo.title}
                    </h3>
                    <p className="mt-3 font-hand text-lg leading-relaxed text-foreground/65">
                      {featuredVideo.subtitle ??
                        "Тут можна коротко підписати, що саме відбувається на занятті."}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-full border border-[oklch(0.86_0.03_240)] bg-white px-4 py-2 font-hand text-sm text-foreground/60">
                        живий фрагмент заняття
                      </span>
                      <span className="rounded-full border border-[oklch(0.9_0.03_80)] bg-[oklch(0.98_0.02_80)] px-4 py-2 font-hand text-sm text-foreground/60">
                        реальні результати та емоції
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}

            {remainingVideos.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {remainingVideos.map((v, i) => (
                  <motion.div
                    key={v.src}
                    initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
                    transition={{ delay: i * 0.08, type: "spring", damping: 16 }}
                    className="group paper-card overflow-hidden bg-white/90 p-3 shadow-card"
                  >
                    <div className="aspect-video overflow-hidden rounded-[1rem] bg-muted">
                      <video
                        src={v.src}
                        poster={v.poster}
                        controls
                        preload="metadata"
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-1 pb-1 pt-3">
                      <p className="font-display text-2xl leading-tight text-foreground">
                        {v.title}
                      </p>
                      {v.subtitle ? (
                        <p className="mt-2 font-hand text-base leading-snug text-foreground/65">
                          {v.subtitle}
                        </p>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
