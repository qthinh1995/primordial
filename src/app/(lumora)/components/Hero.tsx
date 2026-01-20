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
    <section className="relative flex flex-col justify-end w-full h-[1024px] max-md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="bottom-[-300px] max-md:bottom-0 z-[1] absolute inset-0 bg-black">
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
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-md:flex-col max-md:justify-center items-start max-md:items-center gap-20 max-md:gap-6 max-md:h-[500px]">
            {/* Left Column - Title */}
            <div className="flex flex-col gap-3 max-md:text-center shrink-0">
              <p className="font-sans font-bold text-white text-base uppercase leading-6 tracking-[-0.32px]">
                {tag}
              </p>
              <h1 className="font-display font-normal text-[72px] text-white max-md:text-[32px] leading-[80px] max-md:leading-normal tracking-[-2.88px] max-md:tracking-[-1.28px]">
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
            <div className="flex flex-col flex-1 gap-5 text-white max-md:text-center">
              <p className="font-sans text-[#eaeaea] max-md:text-base text-lg leading-[1.4] max-md:leading-6 tracking-[-0.54px] max-md:tracking-[-0.32px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
