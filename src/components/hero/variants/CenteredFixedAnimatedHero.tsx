"use client";

import type { ReactNode } from "react";

import { UnifiedHero } from "@/components/hero/UnifiedHero";
import { AnimatedSection } from "@/components/ui/animated-section";

interface CenteredFixedAnimatedHeroProps {
  title: string;
  description: ReactNode;
  image: string;
}

export function CenteredFixedAnimatedHero({
  title,
  description,
  image,
}: Readonly<CenteredFixedAnimatedHeroProps>) {
  return (
    <UnifiedHero
      sectionClassName="h-[600px] flex flex-col items-center justify-center"
      backgroundClassName="z-[1]"
      image={image}
      imageAlt={title}
      overlayClassName="bg-linear-to-b from-transparent via-black/48 to-black/60"
    >
      <AnimatedSection
        trigger="mount"
        className="z-2 relative mx-auto px-12 max-md:px-4 max-w-[800px] text-center"
      >
        <h1 className="mb-4 font-display font-normal text-[72px] text-white max-md:text-[40px] leading-[80px] max-md:leading-[48px] tracking-[-2.88px] max-md:tracking-[-1.6px]">
          {title}
        </h1>
        <div className="font-sans text-[#eaeaea] max-md:text-base text-lg leading-[1.4] tracking-[-0.54px] max-md:tracking-[-0.32px]">
          {description}
        </div>
      </AnimatedSection>
    </UnifiedHero>
  );
}
