"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { UnifiedHero } from "@/components/hero/UnifiedHero";

interface CenteredFixedAnimatedHeroProps {
  title: string;
  description: ReactNode;
  image: string;
}

export function CenteredFixedAnimatedHero({
  title,
  description,
  image,
}: CenteredFixedAnimatedHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <UnifiedHero
      sectionClassName="h-[600px] flex flex-col items-center justify-center"
      backgroundClassName="z-[1]"
      image={image}
      imageAlt={title}
      overlayClassName="bg-linear-to-b from-transparent via-black/48 to-black/60"
    >
      <div
        className={`relative z-[2] mx-auto max-w-[800px] px-12 text-center transition-all duration-1000 max-md:px-4 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h1 className="mb-4 font-display text-[72px] font-normal leading-[80px] tracking-[-2.88px] text-white max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-1.6px]">
          {title}
        </h1>
        <div className="font-sans text-lg leading-[1.4] tracking-[-0.54px] text-[#eaeaea] max-md:text-base max-md:tracking-[-0.32px]">
          {description}
        </div>
      </div>
    </UnifiedHero>
  );
}
