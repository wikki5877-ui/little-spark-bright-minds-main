import { motion } from "motion/react";

type ReviewVideoItem = {
  src: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
  order?: number;
};

const REVIEW_VIDEO_FOLDER = "public/videos/reviews";

const reviewVideoFiles = import.meta.glob("../../public/videos/reviews/*.{mp4,webm,mov,m4v}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const reviewVideoMeta: Record<string, Omit<ReviewVideoItem, "src">> = {
  "VID_20260507_143011_845.mp4.mov": {
    featured: true,
    order: 0,
    title: "Щирий відгук від мами",
    subtitle: "теплі слова про зміни, які сім'я побачила після занять",
  },
  "VID_20260507_182104_362.mp4.mov": {
    order: 2,
    title: "Коротка історія довіри",
    subtitle: "живий відгук про контакт, підтримку та спокій дитини",
  },
  "VID_20260507_182106_428.mp4.mov": {
    order: 1,
    title: "Враження після роботи",
    subtitle: "про маленькі перемоги, які стають великими для всієї родини",
  },
};

const makeFallbackTitle = (fileName: string, index: number) => {
  const cleanName = fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return cleanName.length > 0 ? cleanName : `Відгук ${index + 1}`;
};

const reviewVideos: ReviewVideoItem[] = Object.entries(reviewVideoFiles)
  .map(([path, src], index) => {
    const fileName = path.split("/").pop() ?? path;
    const meta = reviewVideoMeta[fileName];

    return {
      src,
      title: meta?.title ?? makeFallbackTitle(fileName, index),
      subtitle: meta?.subtitle,
      featured: meta?.featured,
      order: meta?.order ?? index,
    };
  })
  .sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title, "uk");
  });

export function ParentVideoTestimonials() {
  const featuredVideo = reviewVideos[0];
  const remainingVideos = reviewVideos.slice(1);

  return (
    <section id="video-reviews" className="py-24 px-4 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-16 mx-auto h-72 max-w-5xl rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(circle, oklch(0.95 0.05 15 / 0.95) 0%, oklch(0.92 0.05 240 / 0.55) 45%, transparent 78%)",
        }}
      />

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="ribbon inline-block px-5 py-1.5 font-hand text-sm mb-4">
            живі відгуки 💬
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Відео-відгуки батьків
          </h2>
          <p className="font-hand text-xl text-foreground/60 mt-3">
            щирі слова сімей про зміни, які вони бачать щодня
          </p>
        </motion.div>

        {reviewVideos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="paper-card relative overflow-hidden bg-white/90 backdrop-blur p-6 md:p-8 shadow-card max-w-4xl mx-auto"
          >
            <div className="absolute top-5 right-5 text-4xl opacity-15 animate-float">💌</div>
            <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
              <div className="text-left">
                <span className="inline-flex items-center rounded-full bg-[oklch(0.97_0.03_80)] px-4 py-2 font-hand text-sm text-foreground/80 shadow-soft">
                  папка для відео-відгуків
                </span>
                <p className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-3 leading-tight">
                  Тут збиратимемо справжні слова батьків у відео-форматі
                </p>
                <p className="font-hand text-lg text-foreground/70 leading-relaxed">
                  Перенось сюди ролики з відгуками, і блок сам покаже їх на сторінці. Найкраще
                  підійдуть `mp4` або `webm`, а вертикальні відео теж відобразяться акуратно.
                </p>
                <div className="mt-5 rounded-[1.25rem] border border-[oklch(0.84_0.05_240)] bg-[oklch(0.98_0.01_240)] px-4 py-3 shadow-soft">
                  <p className="font-hand text-sm uppercase tracking-[0.08em] text-foreground/45">
                    куди класти файли
                  </p>
                  <p className="mt-1 break-all font-mono text-sm md:text-base text-primary">
                    {REVIEW_VIDEO_FOLDER}
                  </p>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-[oklch(0.9_0.03_240)] bg-gradient-to-br from-white via-[oklch(0.985_0.015_240)] to-[oklch(0.95_0.04_15)] p-5 md:p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-ribbon text-2xl text-primary-foreground shadow-soft">
                    ❤
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground">Як це виглядатиме</p>
                    <p className="font-hand text-base text-foreground/60">
                      теплий окремий блок під довіру та репутацію
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "перше відео стане головним акцентом секції",
                    "інші відгуки підуть нижче у зручній сітці",
                    "назви можна буде налаштувати окремо під кожну сім'ю",
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
                <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                  <div className="overflow-hidden rounded-[1.35rem] bg-[oklch(0.95_0.02_240)] shadow-soft">
                    <div className="aspect-video">
                      <video
                        src={featuredVideo.src}
                        controls
                        preload="metadata"
                        playsInline
                        className="h-full w-full object-contain bg-[oklch(0.95_0.02_240)]"
                      />
                    </div>
                  </div>

                  <div className="px-1 md:px-3">
                    <span className="inline-flex rounded-full bg-[oklch(0.95_0.04_15)] px-4 py-2 font-hand text-sm text-foreground/80">
                      головний відео-відгук
                    </span>
                    <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-foreground">
                      {featuredVideo.title}
                    </h3>
                    <p className="mt-3 font-hand text-lg leading-relaxed text-foreground/65">
                      {featuredVideo.subtitle ??
                        "Тут можна коротко підписати, від кого цей відгук і про що він."}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-full border border-[oklch(0.9_0.03_240)] bg-white px-4 py-2 font-hand text-sm text-foreground/60">
                        реальний голос батьків
                      </span>
                      <span className="rounded-full border border-[oklch(0.94_0.03_15)] bg-[oklch(0.985_0.02_15)] px-4 py-2 font-hand text-sm text-foreground/60">
                        теплий доказ довіри
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}

            {remainingVideos.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {remainingVideos.map((video, i) => (
                  <motion.div
                    key={video.src}
                    initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
                    transition={{ delay: i * 0.08, type: "spring", damping: 16 }}
                    className="group paper-card overflow-hidden bg-white/90 p-3 shadow-card"
                  >
                    <div className="aspect-video overflow-hidden rounded-[1rem] bg-[oklch(0.95_0.02_240)]">
                      <video
                        src={video.src}
                        controls
                        preload="metadata"
                        playsInline
                        className="h-full w-full object-contain bg-[oklch(0.95_0.02_240)]"
                      />
                    </div>
                    <div className="px-1 pb-1 pt-3">
                      <p className="font-display text-2xl leading-tight text-foreground">
                        {video.title}
                      </p>
                      {video.subtitle ? (
                        <p className="mt-2 font-hand text-base leading-snug text-foreground/65">
                          {video.subtitle}
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
