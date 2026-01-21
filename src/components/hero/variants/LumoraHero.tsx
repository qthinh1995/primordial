"use client";

import { useEffect, useState } from "react";

import { UnifiedHero } from "@/components/hero/UnifiedHero";

interface LumoraHeroProps {
  tag: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

export function LumoraHero({
  tag,
  title,
  subtitle,
  description,
  image,
}: LumoraHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <UnifiedHero
      sectionClassName="flex h-[1024px] w-full flex-col justify-end overflow-hidden max-md:h-[600px]"
      backgroundClassName="bottom-[-300px] max-md:bottom-0 z-[1]"
      image={image}
      imageAlt={title}
      overlayClassName="bg-linear-to-b from-black/20 via-black/50 to-black"
    >
      <div
        className={`relative z-[2] px-12 pb-20 transition-all duration-1000 max-md:px-4 max-md:pb-0 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-start gap-20 max-md:h-[500px] max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-6">
            <div className="shrink-0 flex flex-col gap-3 max-md:text-center">
              <p className="font-sans text-base font-bold uppercase leading-6 tracking-[-0.32px] text-white">
                {tag}
              </p>
              <h1 className="font-display text-[72px] font-normal leading-[80px] tracking-[-2.88px] text-white max-md:text-[32px] max-md:leading-normal max-md:tracking-[-1.28px]">
                {title}
                {subtitle ? (
                  <>
                    <br />
                    {subtitle}
                  </>
                ) : null}
              </h1>
            </div>

            <div className="flex flex-1 flex-col gap-5 text-white max-md:text-center">
              <p className="font-sans text-lg leading-[1.4] tracking-[-0.54px] text-[#eaeaea] max-md:text-base max-md:leading-6 max-md:tracking-[-0.32px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UnifiedHero>
  );
}
