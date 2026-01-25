"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { StoufferImageScroll } from "./StoufferImageScroll";

interface StoufferSectionProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  images: string[];
}

export function StoufferSection({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  images,
}: StoufferSectionProps) {
  return (
    <section className="bg-muted py-[64px] md:py-[120px] overflow-hidden">
      <Container className="px-4 md:px-12">
        <div className="flex flex-col items-center gap-4 md:gap-6 mx-auto max-w-[960px] text-center">
          <p className="font-sans font-bold text-accent text-base tracking-[-0.32px]">
            {badge}
          </p>

          <h2 className="md:mt-[-20px] font-display text-[32px] text-foreground md:text-[44px] tracking-[-1.76px]">
            {title}
          </h2>

          <p className="mt-4 font-sans text-foreground text-lg leading-[1.4] tracking-[-0.54px]">
            {description}
          </p>

          <Link href={buttonHref}>
            <Button className="mt-8 md:mt-4">{buttonText}</Button>
          </Link>
        </div>
      </Container>

      <StoufferImageScroll images={images} />
    </section>
  );
}
