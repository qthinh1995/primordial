"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface QuoteSectionProps {
  quote: React.ReactNode;
  image: string;
}

export function QuoteSection({ quote, image }: QuoteSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[512px] max-md:h-auto max-md:min-h-[400px] overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src={image}
          alt="Quote background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/48 to-black/60" />
      </div>

      {/* Quote Content */}
      <div
        className={`relative z-[2] px-12 max-md:px-4 py-[120px] max-md:py-16 text-center max-w-[960px] mx-auto transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="font-display font-normal text-[32px] max-md:text-[24px] leading-[1.5] text-white">
          {quote}
        </div>
      </div>
    </section>
  );
}
