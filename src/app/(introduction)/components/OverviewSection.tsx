import Image from "next/image";
import { Container } from "@/components/ui/container";

type Img = { src: string; alt: string };

interface OverviewSectionProps {
  leftImage: Img & { objectPosition?: string };
  title: string; // can contain \n
  eyebrow: string;
  paragraphs: string[];
  thumbs: Img[]; // expect 2
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
        {/* Desktop đúng khối: 648 + 632, canh như mẫu */}
       <div className=" grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-[648px_632px] lg:gap-[64px]">
          {/* LEFT IMAGE: 648 x 864 */}
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
        <div className="min-w-0 lg:w-[632px] lg:h-[864px] lg:flex lg:flex-col lg:gap-4">
          <h2 className="whitespace-pre-line font-display text-[44px] leading-[1.15] tracking-[-0.6px] text-foreground">
            {title}
          </h2>

          <div className="mt-6 h-px w-full bg-accent/70" />

          <p className="mt-8 font-sans text-base font-semibold text-foreground">
            {eyebrow}
          </p>

          <div className="mt-4 space-y-6 font-sans text-[15px] leading-[1.8] text-foreground/70">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* THUMBS: nằm ngay sau text (đúng Figma) */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            {thumbs.slice(0, 2).map((t, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-muted aspect-[304/228] lg:h-[228px] lg:aspect-auto"
              >
                <Image src={t.src} alt={t.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

  {/* Spacer để phần dư nằm dưới thumbs, không nằm trên */}
  <div className="hidden lg:block lg:flex-1" />
</div>

        </div>
      </Container>
    </section>
  );
}
