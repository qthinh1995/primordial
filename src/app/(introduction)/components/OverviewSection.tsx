import Image from "next/image";
import { Container } from "@/components/ui/container";

type Img = { src: string; alt: string };

interface OverviewSectionProps {
  leftImage: Img & { objectPosition?: string };
  title: string; // can contain \n
  eyebrow: string;
  paragraphs: string[];
  thumbs: Img[]; // exactly 2 in design
}

export function OverviewSection({
  leftImage,
  title,
  eyebrow,
  paragraphs,
  thumbs,
}: OverviewSectionProps) {
  return (
    <section className="bg-background py-[120px]">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* LEFT BIG IMAGE */}
          <div className="w-full max-w-[520px]">
            <div className="relative aspect-square w-full overflow-hidden bg-muted">
              <Image
                src={leftImage.src}
                alt={leftImage.alt}
                fill
                className="object-cover"
                style={{
                  objectPosition: leftImage.objectPosition ?? "50% 50%",
                }}
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="min-w-0">
            <h2 className="whitespace-pre-line font-display text-[44px] leading-[1.15] tracking-[-0.6px] text-foreground">
              {title}
            </h2>

            <div className="mt-6 h-px w-full bg-border" />

            <p className="mt-6 font-sans text-sm font-semibold text-foreground/80">
              {eyebrow}
            </p>

            <div className="mt-4 space-y-4 font-sans text-[15px] leading-[1.7] text-foreground/70">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {thumbs.slice(0, 2).map((t, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden bg-muted"
                >
                  <Image src={t.src} alt={t.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
