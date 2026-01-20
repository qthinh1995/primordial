"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  tag: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

export function Hero({ tag, title, subtitle, description, image }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-[1024px] max-md:h-[600px] overflow-hidden flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 bottom-[-300px] max-md:bottom-0 bg-black z-[1]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div
        className={`relative z-[2] px-12 max-md:px-4 pb-20 max-md:pb-0 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex gap-20 max-md:flex-col max-md:gap-6 items-start max-md:items-center max-md:justify-center max-md:h-[500px]">
            {/* Left Column - Title */}
            <div className="flex flex-col gap-3 shrink-0 max-md:text-center">
              <p className="font-sans font-bold text-base leading-6 tracking-[-0.32px] text-white uppercase">
                {tag}
              </p>
              <h1 className="font-display font-normal text-[72px] max-md:text-[32px] text-white leading-[80px] max-md:leading-normal tracking-[-2.88px] max-md:tracking-[-1.28px]">
                {title}
                {subtitle && (
                  <>
                    <br />
                    {subtitle}
                  </>
                )}
              </h1>
            </div>

            {/* Right Column - Description */}
            <div className="flex flex-col gap-5 flex-1 text-white max-md:text-center">
              <p className="font-sans text-lg max-md:text-base leading-[1.4] max-md:leading-6 tracking-[-0.54px] max-md:tracking-[-0.32px] text-[#eaeaea]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
