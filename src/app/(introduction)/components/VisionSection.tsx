import Image from "next/image";
import { Container } from "@/components/ui/container";

type Img = { src: string; alt: string };

interface VisionSectionProps {
  title: string;
  paragraphs: string[]; // supports **bold**
  feature: {
    avatar: Img;
    name: string;
    role: string;
    bio: string;
  };
  rightImage: Img & { objectPosition?: string };
}

function renderBold(p: string) {
  return String(p).split("**").map((part, j) =>
    j % 2 === 1 ? (
      <strong key={j} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <span key={j}>{part}</span>
    )
  );
}

export function VisionSection({
  title,
  paragraphs,
  feature,
  rightImage,
}: VisionSectionProps) {
  return (
    <section className="bg-background py-[72px] md:py-[120px]">
      <Container className="px-4 md:px-12">
        <div className="mx-auto grid max-w-[1416px] grid-cols-1 items-start gap-12 lg:grid-cols-[516px_764px] lg:gap-16">
          {/* LEFT */}
          <div className="min-w-0">
            <h2 className="font-display text-[32px] leading-[2] tracking-[-0.6px] text-foreground md:text-[44px] lg:mb-10">
              {title}
            </h2>

            <div className="mt-6 space-y-5 font-sans text-base font-normal leading-[1.6] md:text-base lg:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i}>{renderBold(p)}</p>
              ))}
            </div>

            {/* FEATURE */}
            <div className=" flex flex-col mt-10 md:mt-12 md:grid md:grid-cols-[120px_1fr] items-start gap-6 md:gap-8">
              <div className="relative h-[455px] w-full md:h-[120px] md:w-[120px] overflow-hidden bg-muted">
                <Image
                  src={feature.avatar.src}
                  alt={feature.avatar.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <div className="font-serif text-lg leading-[1.4] text-foreground">
                  <span className="md:hidden">Bao Nguyen</span>
                  <span className="hidden md:inline">{feature.name}</span>
                </div>

                <div className="mt-1 font-display text-sm italic tracking-[0.08em] text-accent">
                  <span className="md:hidden">CO-FOUNDER & DIRECTOR OF BUSINESS DEVELOPMENT</span>
                  <span className="hidden md:inline">{feature.role}</span>
                </div>

                <p className="mt-4 font-sans text-sm leading-[1.75] md:text-[15px]">
                  {feature.bio}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:flex lg:items-center my-auto">
            <div className="relative w-full overflow-hidden bg-muted aspect-[764/510] lg:h-[510px] lg:aspect-auto">
              <Image
                src={rightImage.src}
                alt={rightImage.alt}
                fill
                priority
                className="object-cover"
                style={{
                  objectPosition: rightImage.objectPosition ?? "50% 50%",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
