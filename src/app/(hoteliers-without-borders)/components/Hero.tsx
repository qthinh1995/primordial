"use client";

import Image from "next/image";

interface HeroProps {
  tagline: string;
  title: string;
  description: string;
  subdescription: string;
  image: string;
}

export function Hero({
  tagline,
  title,
  description,
  subdescription,
  image,
}: HeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Gradient Overlay - from subtle at top to black at bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="z-10 relative flex flex-col justify-center md:justify-end mx-auto px-4 md:px-20 py-10 md:pt-[120px] md:pb-20 max-w-[1440px] min-h-screen">
        <div className="flex md:flex-row flex-col items-center md:items-start gap-6 md:gap-20 w-full">
          {/* Left - Tagline & Title */}
          <div className="flex flex-col md:flex-1 gap-2 md:gap-3 w-full">
            {/* Tagline - only visible on desktop */}
            <p className="hidden md:block font-sans font-bold text-white text-base uppercase leading-6 tracking-[-0.32px]">
              {tagline}
            </p>
            {/* Title */}
            <h1 className="font-display font-normal text-[32px] text-white md:text-[72px] md:text-left text-center leading-normal md:leading-[80px] tracking-[-1.28px] md:tracking-[-2.88px]">
              {title}
            </h1>
          </div>

          {/* Right - Description */}
          <div className="flex flex-col md:flex-1 gap-5 w-full">
            <p className="font-sans font-normal text-[#eaeaea] md:text-white text-base md:text-lg md:text-left text-center leading-6 md:leading-[1.4] tracking-[-0.32px] md:tracking-[-0.54px]">
              {description}
            </p>
            {/* Sub description - only visible on desktop */}
            <p className="hidden md:block font-sans font-normal text-white text-sm leading-normal tracking-[-0.28px]">
              {subdescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
