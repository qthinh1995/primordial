import Image from "next/image";

export type HeroProps = {
  title: string;
  image: { src: string; alt: string };
  height?: number;
  heightMobile?: number;
  overlay?: "soft" | "strong" | "none";
};

export function Hero({
  title,
  image,
  height = 600,
  heightMobile = 520,
  overlay = "soft",
}: HeroProps) {
  const overlayClass =
    overlay === "none"
      ? ""
      : overlay === "strong"
        ? "bg-gradient-to-b from-black/60 via-black/30 to-black/55"
        : "bg-gradient-to-b from-black/45 via-black/20 to-black/35";

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: `clamp(${heightMobile}px, 42vw, ${height}px)` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {overlayClass && <div className={`absolute inset-0 ${overlayClass}`} />}

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <h1 className="font-[var(--font-display)] text-white text-[44px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-center">
          {title}
        </h1>
      </div>
    </section>
  );
}
