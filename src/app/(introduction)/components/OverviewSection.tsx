import Image from "next/image";
import { Container } from "@/components/ui/container";

export type OverviewSectionProps = {
  leftImage: { src: string; alt: string };
  title: string;
  eyebrow: string;
  paragraphs: string[];
  thumbs?: Array<{ src: string; alt: string }>;
  dividerColorHex?: string;
};

export function OverviewSection({
  leftImage,
  title,
  eyebrow,
  paragraphs,
  thumbs = [],
  dividerColorHex = "#C8A55A",
}: OverviewSectionProps) {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14 items-start">
          {/* LEFT IMAGE */}
          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
              <Image
                src={leftImage.src}
                alt={leftImage.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-6">
            <h2 className="whitespace-pre-line font-[var(--font-display)] text-[34px] md:text-[44px] leading-[1.15] tracking-[-0.02em] text-zinc-900">
              {title}
            </h2>

            <div
              className="mt-6 h-px w-full"
              style={{ backgroundColor: dividerColorHex, opacity: 0.7 }}
            />

            <div className="mt-8">
              <div className="text-sm font-semibold text-zinc-900">{eyebrow}</div>

              <div className="mt-4 space-y-5 text-[15px] leading-7 text-zinc-600">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {thumbs.length > 0 && (
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {thumbs.slice(0, 2).map((img, i) => (
                    <div key={i} className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 25vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
