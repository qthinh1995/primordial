"use client";

import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Pillar {
  title: string;
  tag: string;
  description: ReactNode;
  logoImage: string;
  logoType: "Stouffer Hotels" | "Hoteliers Without Borders" | "Lumora";
  link?: string;
}

interface PillarsSectionProps {
  subtitle: string;
  title: string;
  description: ReactNode;
  pillars: Pillar[];
}

export function PillarsSection({
  subtitle,
  title,
  description,
  pillars,
}: PillarsSectionProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`py-[64px] md:py-[120px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Container className="px-4 md:px-12">
        <div className="flex md:flex-row flex-col gap-16">
          {/* Left Column - Title */}
          <div className="w-full md:w-[416px] shrink-0">
            <div className="flex flex-col gap-3 mb-8">
              <p className="font-sans font-bold text-[#d21c27] text-[16px] md:text-left text-center tracking-[-0.32px]">
                {subtitle}
              </p>
              <h2 className="font-display font-normal text-[32px] text-black md:text-[44px] md:text-left text-center uppercase leading-[1.4] tracking-[-1.76px]">
                {title}
              </h2>
            </div>
            <div className="font-sans text-[#2c2c2c] text-base md:text-lg md:text-left text-center leading-[1.4] tracking-[-0.54px]">
              {description}
            </div>
          </div>

          {/* Right Column - Pillars */}
          <div className="md:flex md:flex-col flex-1 gap-6 grid">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`bg-[#f7f2e6] w-full h-[428px] md:h-[204px] flex flex-col md:flex-row gap-4 md:gap-6 p-5 md:p-6 transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Logo */}
                <div className="relative flex justify-center items-center bg-white md:my-auto w-[120px] h-[56px] shrink-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={pillar.logoImage}
                      alt={pillar.title}
                      fill
                      sizes="120px"
                      className={`object-contain ${index === pillars.length - 1 ? "p-2" : ""}`}
                    />
                  </div>
                </div>

                <div className="flex flex-col flex-1 gap-2">
                  {/* Tag */}
                  <div className="md:flex md:justify-between">
                    <p className="md:order-2 font-sans font-bold text-[#d21c27] text-[14px] md:leading-[2] tracking-[-0.28px]">
                      {pillar.tag}
                    </p>

                    <h3 className="md:order-1 font-sans font-semibold text-[#2c2c2c] text-xl leading-[1.4] tracking-[-0.6px]">
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="font-sans text-[#2c2c2c] text-base leading-6 tracking-[-0.32px]">
                    {pillar.description}
                  </div>
                </div>
                {/* Arrow Button */}
                {pillar.link && (
                  <Link
                    href={pillar.link}
                    className="top-4 right-4 md:static absolute flex justify-center items-center bg-[#e4d4b4] md:my-auto rounded-[2px] w-[40px] h-[40px] shrink-0"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
