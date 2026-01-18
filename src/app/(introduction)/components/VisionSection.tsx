import Image from "next/image";
import { Container } from "@/components/ui/container";

type Img = { src: string; alt: string };

interface VisionSectionProps {
  title: string;
  paragraphs: string[];
  feature: {
    avatar: Img;
    name: string;
    role: string;
    bio: string;
  };
  rightImage: Img;
}

export function VisionSection({
  title,
  paragraphs,
  feature,
  rightImage,
}: VisionSectionProps) {
  return (
    <section className="bg-background py-[120px]">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* LEFT */}
          <div className="min-w-0">
            <h2 className="font-display text-[44px] leading-[1.1] text-foreground">
              {title}
            </h2>

            <div className="mt-6 space-y-4 font-sans text-[15px] leading-[1.7] text-foreground/70">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* FEATURE */}
            <div className="mt-10 grid grid-cols-[96px_1fr] items-start gap-5">
              <div className="relative h-24 w-24 overflow-hidden bg-muted">
                <Image
                  src={feature.avatar.src}
                  alt={feature.avatar.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <div className="font-sans font-semibold text-foreground">
                  {feature.name}
                </div>
                <div className="mt-1 font-serif text-sm italic text-accent">
                  {feature.role}
                </div>
                <p className="mt-3 font-sans text-sm leading-[1.7] text-foreground/70">
                  {feature.bio}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
            <Image
              src={rightImage.src}
              alt={rightImage.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
