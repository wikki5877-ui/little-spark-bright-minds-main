import { motion } from "motion/react";
import { Music2, Pause, Play, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "yanush-music-enabled";
const audioFiles = import.meta.glob("../../public/audio/*.{mp3,wav,ogg,m4a,aac}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
const AUDIO_SRC = Object.values(audioFiles)[0] ?? null;

type AudioState = "idle" | "playing" | "paused" | "blocked" | "unavailable";

export function FloatingMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioState, setAudioState] = useState<AudioState>("idle");
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    if (!AUDIO_SRC) {
      setAudioState("unavailable");
    }
  }, []);

  const attemptPlay = async () => {
    const audio = audioRef.current;

    if (!audio || !AUDIO_SRC) return false;

    try {
      audio.muted = false;
      await audio.play();
      setAudioState("playing");
      return true;
    } catch {
      setAudioState("blocked");
      return false;
    }
  };

  useEffect(() => {
    const savedPreference = window.localStorage.getItem(STORAGE_KEY);

    if (savedPreference === "off") {
      setIsEnabled(false);
      setAudioState("paused");
      return;
    }

    let removed = false;
    let detachInteractionListeners: (() => void) | null = null;

    const tryAutoStart = async () => {
      if (removed) return;

      const started = await attemptPlay();

      if (started) return;

      const startOnInteraction = async () => {
        const played = await attemptPlay();

        if (!played) return;
        detachInteractionListeners?.();
      };

      detachInteractionListeners = () => {
        window.removeEventListener("pointerdown", startOnInteraction);
        window.removeEventListener("keydown", startOnInteraction);
        window.removeEventListener("touchstart", startOnInteraction);
      };

      window.addEventListener("pointerdown", startOnInteraction);
      window.addEventListener("keydown", startOnInteraction);
      window.addEventListener("touchstart", startOnInteraction);
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
      window.localStorage.setItem(STORAGE_KEY, "off");
      return;
    }

    setIsEnabled(true);
    window.localStorage.setItem(STORAGE_KEY, "on");
    await attemptPlay();
  };

  const isPlaying = audioState === "playing";
  const isUnavailable = audioState === "unavailable";

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
