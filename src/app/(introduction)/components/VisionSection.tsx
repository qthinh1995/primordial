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
        <div className="items-start gap-14 lg:gap-20 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr]">
          {/* LEFT */}
          <div className="min-w-0">
            <h2 className="font-display text-[44px] text-foreground leading-[1.1]">
              {title}
            </h2>

            <div className="space-y-4 mt-6 font-sans text-[15px] text-foreground/70 leading-[1.7]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* FEATURE */}
            <div className="items-start gap-5 grid grid-cols-[96px_1fr] mt-10">
              <div className="relative bg-muted w-24 h-24 overflow-hidden">
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
                <div className="mt-1 font-serif text-accent text-sm italic">
                  {feature.role}
                </div>
                <p className="mt-3 font-sans text-foreground/70 text-sm leading-[1.7]">
                  {feature.bio}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative bg-muted w-full aspect-[16/9] overflow-hidden">
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
