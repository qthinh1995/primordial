"use client";

import { UnifiedHero } from "@/components/hero/UnifiedHero";

interface FullscreenSplitHeroProps {
  tagline?: string;
  title: string;
  description: string;
  subdescription?: string;
  image: string;
}

export function FullscreenSplitHero({
  tagline,
  title,
  description,
  subdescription,
  image,
}: FullscreenSplitHeroProps) {
  return (
    <UnifiedHero
      sectionClassName="min-h-screen"
      image={image}
      imageAlt={title}
      overlayClassName="bg-linear-to-b from-black/20 via-black/40 to-black"
    >
      <div className="relative z-10 mx-auto flex min-h-screen flex-col justify-center px-4 py-10 md:justify-end md:px-20 md:pb-20 md:pt-[120px] max-w-[1440px]">
        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-start md:gap-20">
          <div className="flex w-full flex-col gap-2 md:flex-1 md:gap-3">
            {tagline ? (
              <p className="hidden font-sans text-base font-bold uppercase leading-6 tracking-[-0.32px] text-white md:block">
                {tagline}
              </p>
            ) : null}
            <h1 className="font-display text-[32px] font-normal leading-normal tracking-[-1.28px] text-white text-center md:text-left md:text-[72px] md:leading-[80px] md:tracking-[-2.88px]">
              {title}
            </h1>
          </div>

          <div className="flex w-full flex-col gap-5 md:flex-1">
            <p className="font-sans text-base font-normal leading-6 tracking-[-0.32px] text-center text-[#eaeaea] md:text-left md:text-lg md:leading-[1.4] md:tracking-[-0.54px] md:text-white">
              {description}
            </p>
            {subdescription ? (
              <p className="hidden font-sans text-sm font-normal leading-normal tracking-[-0.28px] text-white md:block">
                {subdescription}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </UnifiedHero>
  );
}
