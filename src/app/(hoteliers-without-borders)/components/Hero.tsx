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
      <div className="relative z-10 flex flex-col justify-center md:justify-end min-h-screen px-4 py-10 md:px-20 md:pb-20 md:pt-[120px] max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:gap-20 gap-6 items-center md:items-start w-full">
          {/* Left - Tagline & Title */}
          <div className="flex flex-col gap-2 md:gap-3 w-full md:flex-1">
            {/* Tagline - only visible on desktop */}
            <p className="hidden md:block font-sans font-bold text-white text-base uppercase leading-6 tracking-[-0.32px]">
              {tagline}
            </p>
            {/* Title */}
            <h1 className="font-display font-normal text-white text-[32px] leading-normal md:text-[72px] md:leading-[80px] tracking-[-1.28px] md:tracking-[-2.88px] text-center md:text-left">
              {title}
            </h1>
          </div>

          {/* Right - Description */}
          <div className="flex flex-col gap-5 w-full md:flex-1">
            <p className="font-sans font-normal text-[#eaeaea] md:text-white text-base md:text-lg leading-6 md:leading-[1.4] tracking-[-0.32px] md:tracking-[-0.54px] text-center md:text-left">
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
