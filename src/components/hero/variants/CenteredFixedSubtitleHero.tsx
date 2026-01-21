"use client";

import { UnifiedHero } from "@/components/hero/UnifiedHero";

interface CenteredFixedSubtitleHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export function CenteredFixedSubtitleHero({
  title,
  subtitle,
  image,
}: CenteredFixedSubtitleHeroProps) {
  return (
    <UnifiedHero
      sectionClassName="h-[600px]"
      backgroundClassName="z-[1]"
      image={image}
      imageAlt={title}
      overlayClassName="bg-linear-to-b from-transparent via-black/48 to-black/60"
    >
      <div className="relative z-[2] flex h-full flex-col items-center justify-center gap-6 px-4 py-16 text-center md:gap-8 md:px-20">
        <h1 className="font-display text-[32px] font-normal leading-normal tracking-[-1.28px] text-white md:text-[72px] md:leading-[80px] md:tracking-[-2.88px]">
          {title}
        </h1>
        <p className="max-w-3xl font-sans text-base font-normal leading-6 tracking-[-0.32px] text-[#eaeaea] md:text-lg md:leading-[1.4] md:tracking-[-0.54px]">
          {subtitle}
        </p>
      </div>
    </UnifiedHero>
  );
}
