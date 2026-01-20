"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  description: string | React.ReactNode;
  image: string;
}

export function Hero({ title, description, image }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-[600px] overflow-hidden flex flex-col items-center justify-center">
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
      <div
        className={`relative z-[2] px-12 max-md:px-4 text-center max-w-[800px] mx-auto transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h1 className="font-display font-normal text-[72px] max-md:text-[40px] text-white leading-[80px] max-md:leading-[48px] tracking-[-2.88px] max-md:tracking-[-1.6px] mb-4">
          {title}
        </h1>
        <div className="font-sans text-lg max-md:text-base leading-[1.4] tracking-[-0.54px] max-md:tracking-[-0.32px] text-[#eaeaea]">
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      </div>
    </section>
  );
}
