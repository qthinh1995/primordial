import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface LumoraSectionProps {
  badge: string;
  title: ReactNode;
  description: ReactNode;
  buttonText: string;
  buttonHref: string;
  images: string[];
}

export function LumoraSection({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  images,
}: LumoraSectionProps) {
  return (
    <section className="bg-muted py-[64px] md:py-[120px]">
      <Container className="px-4 md:px-12">
        <div className="flex flex-col gap-16">
          {/* TEXT */}
          <div className="flex flex-col items-center md:items-start gap-6 md:text-left text-center">
            <div className="flex flex-col gap-3">
              <p className="font-sans font-bold text-accent text-base tracking-[-0.32px]">
                {badge}
              </p>

              <h2 className="font-display text-[32px] text-foreground md:text-[44px] leading-[40px] md:leading-[1.4] tracking-[-1.2px] md:tracking-[-1.76px]">
                {title}
              </h2>
            </div>

            <div className="flex md:flex-row flex-col md:justify-between items-center md:items-start gap-10 w-full">
              <div className="md:space-y-6 max-w-[879px] font-sans text-[16px] text-foreground md:text-lg md:text-left text-center leading-[1.6] md:leading-[1.4] tracking-[-0.3px] md:tracking-[-0.54px]">
                {description}
              </div>

              <Link href={buttonHref} className="md:mt-12 shrink-0">
                <Button>{buttonText}</Button>
              </Link>
            </div>
          </div>
          <div className="flex gap-4 md:gap-6 md:px-0 overflow-x-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative md:flex-1 min-w-[320px] md:min-w-0 aspect-[320/481] md:aspect-[432/518]"
              >
                <Image
                  src={image}
                  alt={`Lumora image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
