"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface Logo {
  src: string;
  alt: string;
}

interface LogosSectionProps {
  logos: Logo[];
}

export function LogosSection({ logos }: LogosSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (isAnimating && scrollContainer) {
        scrollPosition += scrollSpeed;

        // Reset position when we've scrolled through one set of logos
        const singleSetWidth = scrollContainer.scrollWidth / 3;
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAnimating]);

  return (
    <section
      className="bg-[var(--yellow-50)] w-full py-6 overflow-hidden"
      onMouseEnter={() => setIsAnimating(false)}
      onMouseLeave={() => setIsAnimating(true)}
    >
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scrollbar-hide"
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex-shrink-0 w-[280px] h-[131px] flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={90}
              className="object-contain max-h-[90px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
