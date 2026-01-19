"use client";

import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Pillar {
  title: string;
  tag: string;
  description: string;
  logoImage: string;
  logoType: "Stouffer Hotels" | "Hoteliers Without Borders" | "Lumora";
  link?: string;
}

interface PillarsSectionProps {
  subtitle: string;
  title: string;
  description: string;
  pillars: Pillar[];
}

export function PillarsSection({
  subtitle,
  title,
  description,
  pillars,
}: PillarsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-[120px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Container>
        <div className="flex md:flex-row flex-col gap-16">
          {/* Left Column - Title */}
          <div className="w-full shrink-0 md:w-[416px]">
            <div className="flex flex-col gap-3 mb-8">
              <p className="font-sans font-bold text-[16px] text-[#d21c27] tracking-[-0.32px] text-center md:text-left">
                {subtitle}
              </p>
              <h2 className="font-display font-normal text-[44px] text-black leading-[1.4] tracking-[-1.76px] uppercase">
                {title}
              </h2>
            </div>
            <p className="font-sans text-lg leading-[1.4] tracking-[-0.54px] text-[#2c2c2c]">
              {description}
            </p>
          </div>

          {/* Right Column - Pillars */}
          <div className="flex flex-1 flex-col gap-3">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`bg-[#f7f2e6] flex gap-6 p-6 transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Logo */}
                <div className="bg-white h-[56px] w-[120px] shrink-0 relative flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={pillar.logoImage}
                      alt={pillar.title}
                      fill
                      sizes="120px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center gap-2 justify-between">
                    <h3 className="font-sans font-semibold text-[20px] text-[#2c2c2c] leading-[28px] tracking-[-0.6px] flex-1">
                      {pillar.title}
                    </h3>
                    <p className="font-sans font-bold text-[14px] text-[#d21c27] leading-[20px] tracking-[-0.28px] text-right">
                      {pillar.tag}
                    </p>
                  </div>
                  <p className="font-sans text-base leading-6 tracking-[-0.32px] text-[#2c2c2c]">
                    {pillar.description}
                  </p>
                </div>

                {/* Arrow Button */}
                {pillar.link && (
                  <Link
                    href={pillar.link}
                    className="bg-[#e4d4b4] p-2 rounded-[2px] shrink-0 flex items-center justify-center"
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
