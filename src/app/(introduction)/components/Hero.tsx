"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";

interface HeroProps {
  title: string;
  image: string;
}

export function Hero({ title, image }: HeroProps) {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/49 to-transparent" />

      {/* Content */}
      <div className="z-10 relative flex justify-center items-center h-full">
        <Container className="z-10">
          <div className="mx-auto px-4 max-w-[800px] text-center">
            <h1 className="font-display font-normal text-[72px] text-white max-md:text-[48px] leading-[80px] max-md:leading-[56px] tracking-[-2.88px]">
              {title}
            </h1>
          </div>
        </Container>
      </div>
    </section>
  );
}
