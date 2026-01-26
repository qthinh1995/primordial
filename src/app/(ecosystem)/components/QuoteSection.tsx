"use client";

import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";

interface QuoteSectionProps {
  quote: string;
  image: string;
}

export function QuoteSection({ quote, image }: QuoteSectionProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`relative h-[300px] md:h-[512px] flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Quote background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/70 to-black/88" />
      </div>

      {/* Content */}
      <Container className="z-10 relative">
        <p
          className={`mx-auto max-w-[960px] text-center font-display text-[22px] md:text-[32px] font-normal leading-[1.5] text-white transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {quote}
        </p>
      </Container>
    </section>
  );
}
