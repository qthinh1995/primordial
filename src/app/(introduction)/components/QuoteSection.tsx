import Image from "next/image";

export type QuoteSectionProps = {
  text: string;
  image: { src: string; alt: string };
  height?: number;
  heightMobile?: number;
  overlayClassName?: string;
};

export function QuoteSection({
  text,
  image,
  height = 340,
  heightMobile = 260,
  overlayClassName = "bg-black/35",
}: QuoteSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: `clamp(${heightMobile}px, 28vw, ${height}px)` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="100vw"
      />

      <div className={`absolute inset-0 ${overlayClassName}`} />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p className="text-center font-[var(--font-display)] text-white text-[20px] md:text-[28px] leading-[1.25] tracking-[-0.01em] max-w-[860px]">
          {text}
        </p>
      </div>
    </section>
  );
}
