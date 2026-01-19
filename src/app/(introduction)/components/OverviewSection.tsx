import Image from "next/image";
import { Container } from "@/components/ui/container";

type Img = { src: string; alt: string };

interface OverviewSectionProps {
  leftImage: Img & { objectPosition?: string };
  title: string; // supports \n
  eyebrow: string;
  paragraphs: string[];
  thumbs: Img[]; // 2 thumbs
}

export function OverviewSection({
  leftImage,
  title,
  eyebrow,
  paragraphs,
  thumbs,
}: OverviewSectionProps) {
  return (
    <section className="bg-background py-[72px] md:py-[120px]">
      <Container className="px-4 md:px-12">
        <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-[648px_632px] lg:gap-[64px]">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[648px]">
            <div className="relative w-full overflow-hidden bg-muted aspect-[648/864] lg:h-[864px] lg:aspect-auto">
              <Image
                src={leftImage.src}
                alt={leftImage.alt}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: leftImage.objectPosition ?? "50% 50%" }}
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="min-w-0 lg:w-[632px] lg:h-[864px] lg:flex lg:flex-col">
            <h2 className="lg:whitespace-pre-line font-display text-[32px] leading-[1.15] tracking-[-0.6px] text-foreground md:text-[44px]">
              {title}
            </h2>

            <div className="mt-6 h-px w-full bg-accent/70" />

            <p className="mt-7 md:mt-8 font-sans text-2xl font-semibold text-foreground">
              {eyebrow}
            </p>

            <div className="mt-4 space-y-5 md:space-y-6 font-sans font-normal text-base leading-[1.8] md:text-base">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-2 gap-3 md:gap-6">
              {thumbs.slice(0, 2).map((t, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden bg-muted aspect-[304/228] lg:h-[228px] lg:aspect-auto"
                >
                  <Image src={t.src} alt={t.alt} fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="hidden lg:block lg:flex-1" />
          </div>
        </div>
      </Container>
    </section>
  );
}
