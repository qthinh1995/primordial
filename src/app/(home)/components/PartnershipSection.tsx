import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface PartnershipSectionProps {
  badge: string;
  title: ReactNode;
  description: ReactNode;
  buttonText: string;
  buttonHref: string;
  image: string;
  classwidth: string;
}

export function PartnershipSection({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  image,
  classwidth,
}: PartnershipSectionProps) {
  return (
    <section className="bg-background py-[64px] md:py-[120px]">
      {/* TEXT */}
      <Container className="px-4 md:px-12">
        <div className="flex flex-col items-center gap-6 mx-auto max-w-[1272px] text-center">
          <p className="font-sans font-bold text-accent text-base tracking-[-0.32px]">
            {badge}
          </p>

          <h2 className="mt-[-10px] md:mt-0 font-display text-[32px] text-foreground md:text-[44px] uppercase leading-[1.2] tracking-[-0.04em] md:tracking-[-0.04em] whitespace-nowrap">
            {title}
          </h2>

          <div className={classwidth}>{description}</div>

          <div className="md:hidden">
            <Link href={buttonHref}>
              <Button size="lg">{buttonText}</Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* IMAGE – FULL BLEED */}
      <div className="right-1/2 left-1/2 relative mt-12 -mr-[50vw] -ml-[50vw] w-screen">
        <div className="relative w-full aspect-[4/3] md:aspect-[16/6] overflow-hidden">
          <Image
            src={image}
            alt="Primordial Hospitium Partnership"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center mt-12">
        <Link href={buttonHref}>
          <Button size="lg">{buttonText}</Button>
        </Link>
      </div>
    </section>
  );
}
