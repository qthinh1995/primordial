import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface PartnershipSectionProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
}

export function PartnershipSection({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  image,
}: PartnershipSectionProps) {
  return (
    <section className="flex min-h-[1024px] items-center justify-center bg-background py-[120px]">
      <Container>
        <div className="flex flex-col items-center gap-12">
          {/* Text Content */}
          <div className="mx-auto flex max-w-[1272px]] flex-col items-center gap-6 px-9 text-center">
            <div className="flex flex-col items-center gap-3">
              <p className="font-sans text-base font-bold leading-6 tracking-[-0.32px] text-accent">
                {badge}
              </p>
              <h2 className="font-display text-[44px] font-normal leading-[48px] tracking-[-1.76px] uppercase text-foreground">
                {title}
              </h2>
            </div>
            <p className="font-sans text-xl leading-[28px] tracking-[-0.6px] text-foreground">
              {description}
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[423/141] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black">
              <Image
                src={image}
                alt="Primordial Hospitium Partnership"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Button */}
          <Link href={buttonHref}>
            <Button variant="default">{buttonText}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
