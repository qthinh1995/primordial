"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/48 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-[2] flex flex-col gap-6 md:gap-8 items-center justify-center h-full px-4 md:px-20 py-16 text-center">
        <h1 className="font-display font-normal text-white text-[32px] leading-normal md:text-[72px] md:leading-[80px] tracking-[-1.28px] md:tracking-[-2.88px]">
          {title}
        </h1>
        <p className="font-sans font-normal text-[#eaeaea] text-base leading-6 md:text-lg md:leading-[1.4] tracking-[-0.32px] md:tracking-[-0.54px] max-w-3xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
