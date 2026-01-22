"use client";

import { UnifiedHero } from "@/components/hero/UnifiedHero";
import { AnimatedSection } from "@/components/ui/animated-section";

interface LumoraHeroProps {
  tag: string;
  title: string;
  subtitle?: string;
  description: string;
  subdescription: string;
  image: string;
}

export function LumoraHero({
  tag,
  title,
  subtitle,
  description,
  subdescription,
  image,
}: Readonly<LumoraHeroProps>) {
  return (
    <UnifiedHero
      sectionClassName="flex min-h-screen w-full flex-col justify-end overflow-hidden max-md:h-[600px]"
      backgroundClassName="bottom-[-30px] max-md:bottom-0 z-[1]"
      image={image}
      imageAlt={title}
      overlayClassName="bg-linear-to-b from-black/20 via-black/50 to-black"
    >
      <AnimatedSection
        trigger="mount"
        className="z-2 relative px-12 max-md:px-4 pb-20 max-md:pb-0"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-md:flex-col max-md:justify-center items-start max-md:items-center gap-20 max-md:gap-6 max-md:h-[500px]">
            <div className="flex flex-col gap-3 max-md:text-center shrink-0">
              <p className="font-sans font-bold text-white text-base uppercase leading-6 tracking-[-0.32px] hidden md:block">
                {tag}
              </p>
              <h1 className="font-display font-normal text-[72px] text-white max-md:text-[32px] leading-[80px] max-md:leading-normal tracking-[-2.88px] max-md:tracking-[-1.28px]">
                {title}
                {subtitle ? (
                  <>
                    <br />
                    {subtitle}
                  </>
                ) : null}
              </h1>
            </div>

            <div className="flex flex-col flex-1 gap-5 text-white max-md:text-center">
              <p className="font-sans text-[#eaeaea] max-md:text-base text-lg leading-[1.4] max-md:leading-6 tracking-[-0.54px] max-md:tracking-[-0.32px]">
                {description}
              </p>
              <p className="font-sans text-sm hidden md:block ">
                {subdescription}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </UnifiedHero>
  );
}
