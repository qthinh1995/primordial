import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface LumoraSectionProps {
  badge: string;
  title: string;
  description: string;
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
    <section className="bg-muted py-[120px]">
      <Container>
        <div className="flex flex-col gap-16">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="font-sans text-base font-bold leading-6 tracking-[-0.32px] text-accent">
                {badge}
              </p>
              <h2 className="font-display text-[44px] font-normal leading-[1.4] tracking-[-1.76px] text-foreground">
                {title}
              </h2>
            </div>
            <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4">
              <p className="max-w-[879px] font-sans text-lg leading-[1.4] tracking-[-0.54px] text-foreground max-md:max-w-full">
                {description}
              </p>
              <Link href={buttonHref} className="shrink-0">
                <Button variant="default">{buttonText}</Button>
              </Link>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex gap-6 max-md:flex-col">
            {images.map((image, index) => (
              <div          
                key={index}
                className="relative aspect-[432/518] flex-1 overflow-hidden max-md:aspect-[4/3]"
              >
                <Image
                  src={image}
                  alt={`Lumora image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
