import { motion } from "motion/react";
import { Music2, Pause, Play, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const audioFiles = import.meta.glob("../../public/audio/*.{mp3,wav,ogg,m4a,aac}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
const AUDIO_SRC = Object.values(audioFiles)[0] ?? null;

type AudioState = "idle" | "playing" | "paused" | "blocked" | "unavailable";

export function FloatingMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);
  const pausedByUserRef = useRef(false);
  const [audioState, setAudioState] = useState<AudioState>("idle");
  const [isEnabled, setIsEnabled] = useState(true);
  const [showWelcomeOverlay, setShowWelcomeOverlay] = useState(Boolean(AUDIO_SRC));

  useEffect(() => {
    if (!AUDIO_SRC) {
      setAudioState("unavailable");
      setShowWelcomeOverlay(false);
    }
  }, []);

  const attemptPlay = async () => {
    const audio = audioRef.current;

    if (!audio || !AUDIO_SRC) return false;

    try {
      audio.muted = false;
      audio.volume = 0.45;
      await audio.play();
      unlockedRef.current = true;
      setAudioState("playing");
      setShowWelcomeOverlay(false);
      return true;
    } catch {
      setAudioState("blocked");
      return false;
    }
  };

  useEffect(() => {
    let removed = false;
    let detachInteractionListeners: (() => void) | null = null;

    const startFromGesture = () => {
      const audio = audioRef.current;

      if (!audio || !AUDIO_SRC || unlockedRef.current || pausedByUserRef.current) return;

      audio.muted = false;
      audio.volume = 0.45;

      void audio
        .play()
        .then(() => {
          if (removed) return;
          unlockedRef.current = true;
          setAudioState("playing");
          setShowWelcomeOverlay(false);
          detachInteractionListeners?.();
        })
        .catch(() => {
          if (removed) return;
          setAudioState("blocked");
        });
    };

    detachInteractionListeners = () => {
      document.removeEventListener("pointerdown", startFromGesture, true);
      document.removeEventListener("click", startFromGesture, true);
      document.removeEventListener("touchstart", startFromGesture, true);
      document.removeEventListener("touchend", startFromGesture, true);
      document.removeEventListener("keydown", startFromGesture, true);
    };

    document.addEventListener("pointerdown", startFromGesture, true);
    document.addEventListener("click", startFromGesture, true);
    document.addEventListener("touchstart", startFromGesture, true);
    document.addEventListener("touchend", startFromGesture, true);
    document.addEventListener("keydown", startFromGesture, true);

    const tryAutoStart = async () => {
      if (removed) return;

      const started = await attemptPlay();

      if (started) return;
    };

    void tryAutoStart();

    return () => {
      removed = true;
      detachInteractionListeners?.();
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio || audioState === "unavailable") return;

    if (audioState === "playing") {
      audio.pause();
      setAudioState("paused");
      setIsEnabled(false);
      pausedByUserRef.current = true;
      return;
    }

    setIsEnabled(true);
    pausedByUserRef.current = false;
    await attemptPlay();
  };

  const isPlaying = audioState === "playing";
  const isUnavailable = audioState === "unavailable";

  const startWelcomePlayback = async () => {
    pausedByUserRef.current = false;
    setIsEnabled(true);
    await attemptPlay();
  };

  return (
    <>
      {AUDIO_SRC ? (
        <audio
          ref={audioRef}
          src={AUDIO_SRC}
          preload="auto"
          loop
          playsInline
          onPlay={() => setAudioState("playing")}
          onPause={() =>
            setAudioState((current) => (current === "unavailable" ? current : "paused"))
          }
          onError={() => setAudioState("unavailable")}
        />
      ) : null}

      {showWelcomeOverlay && !isUnavailable ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-[oklch(0.97_0.03_240_/_0.82)] px-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="paper-card w-full max-w-xl bg-white/96 p-7 text-center shadow-float"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-ribbon text-primary-foreground shadow-soft"
            >
              <Music2 size={34} />
            </motion.div>

            <p className="font-display text-4xl leading-tight text-foreground">
              Увімкнути мелодію?
            </p>
            <p className="mt-3 font-hand text-lg leading-relaxed text-foreground/70">
              Один дотик, і музика почне грати одразу після входу на сайт.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => void startWelcomePlayback()}
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gradient-ribbon px-6 py-3 font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105"
              >
                <Play size={18} className="mr-2" />
                Увімкнути мелодію
              </button>

              <button
                type="button"
                onClick={() => {
                  pausedByUserRef.current = true;
                  setIsEnabled(false);
                  setAudioState("paused");
                  setShowWelcomeOverlay(false);
                }}
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[oklch(0.88_0.03_240)] bg-white px-6 py-3 font-bold text-foreground shadow-soft transition-transform hover:scale-105"
              >
                Відкрити без музики
              </button>
            </div>

            {audioState === "blocked" ? (
              <p className="mt-4 font-hand text-base text-[oklch(0.56_0.18_20)]">
                Якщо звук не стартував, натисни кнопку ще раз.
              </p>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}

      <div className="fixed bottom-5 right-5 z-[70] flex items-end gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="hidden sm:block rounded-full border border-white/80 bg-white/92 px-4 py-2 shadow-float backdrop-blur"
        >
          <p className="font-hand text-sm text-foreground/75">
            {isUnavailable
              ? "додай мелодію у public/audio"
              : isPlaying
                ? "мелодія грає"
                : isEnabled
                  ? "натисни, щоб увімкнути мелодію"
                  : "мелодія вимкнена"}
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => void togglePlayback()}
          whileHover={isUnavailable ? undefined : { scale: 1.06, y: -2 }}
          whileTap={isUnavailable ? undefined : { scale: 0.97 }}
          aria-label={isPlaying ? "Вимкнути мелодію" : "Увімкнути мелодію"}
          disabled={isUnavailable}
          className={`group relative flex h-16 w-16 items-center justify-center rounded-full border shadow-float backdrop-blur transition-opacity ${
            isUnavailable
              ? "cursor-not-allowed border-white/70 bg-white/80 opacity-75"
              : "border-white/90 bg-white/95"
          }`}
        >
          <motion.span
            aria-hidden
            animate={
              isPlaying
                ? { scale: [1, 1.08, 1], opacity: [0.45, 0.8, 0.45] }
                : { scale: 1, opacity: 0.3 }
            }
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-ribbon"
            style={{ filter: "blur(10px)" }}
          />

          <span className="absolute inset-[5px] rounded-full bg-white/92" />

          <div className="relative flex flex-col items-center justify-center gap-1">
            <div className="flex items-center justify-center text-primary">
              {isUnavailable ? (
                <VolumeX size={22} />
              ) : isPlaying ? (
                <Pause size={22} />
              ) : audioState === "blocked" ? (
                <Play size={22} />
              ) : (
                <Music2 size={22} />
              )}
            </div>

            <div className="flex items-end gap-[3px]">
              {[0, 1, 2].map((bar) => (
                <motion.span
                  key={bar}
                  animate={
                    isPlaying
                      ? {
                          height: ["8px", `${16 + bar * 2}px`, "10px", `${14 - bar}px`, "8px"],
                        }
                      : { height: "6px" }
                  }
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: bar * 0.12,
                  }}
                  className="block w-[3px] rounded-full bg-primary/75"
                />
              ))}
            </div>
          </div>
        </motion.button>
      </div>
    </>
  );
}
