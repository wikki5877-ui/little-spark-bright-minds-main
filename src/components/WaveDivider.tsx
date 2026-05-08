type Props = { flip?: boolean; color?: string };
export function WaveDivider({ flip = false, color = "oklch(1 0 0 / 0.5)" }: Props) {
  return (
    <div className={`w-full leading-[0] overflow-hidden ${flip ? "rotate-180" : ""}`} aria-hidden>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16">
        <path
          d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,50 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}