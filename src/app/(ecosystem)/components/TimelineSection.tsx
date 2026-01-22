"use client";

import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ReactNode } from "react";

interface Phase {
  number: string;
  title: string;
  subtitle: string;
  description: ReactNode;
}

interface TimelineSectionProps {
  title: string;
  description: ReactNode;
  phases: Phase[];
}

export function TimelineSection({
  title,
  description,
  phases,
}: TimelineSectionProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`bg-[#f9f6ef] py-[120px] transition-opacity duration-1000 hidden md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Container>
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-6 items-center text-center max-w-[960px] mx-auto">
            <h2 className="font-display font-normal text-[44px] text-black leading-[1.4] tracking-[-1.76px]">
              {title}
            </h2>
            <div className="font-sans text-lg leading-[1.4] tracking-[-0.54px] text-[#2c2c2c]">
              {description}
            </div>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-[10px]">
            {/* Timeline Line with Dots */}
            <div className="relative flex items-start justify-between">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#c5a25d] -translate-y-1/2" />

              {/* Dots */}
              {phases.map((_, index) => (
                <div
                  key={index}
                  className="relative z-10 flex items-center justify-center"
                  style={{ width: "432px" }}
                >
                  <div className="relative size-[40px] flex items-center justify-center">
                    {/* Outer Square */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#f9f6ef] border-[#b39355] border-[0.5px] border-solid rounded-[2px] size-[28px] rotate-45" />
                    </div>
                    {/* Inner Dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#d21c27] rounded-[2px] size-3 rotate-45" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Phase Content */}
            <div className="flex md:flex-row flex-col gap-6 pt-10">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`flex-1 flex flex-col gap-6 px-3 transition-all duration-1000 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col">
                    <div className="font-display font-bold text-[20px] leading-[28px] text-[#1f1f1f]">
                      <p className="mb-0">{phase.number}</p>
                      <p className="text-[#d21c27]">{phase.title}</p>
                    </div>
                  </div>
                  <div className="font-sans text-lg leading-[1.4] tracking-[-0.54px] text-[#2c2c2c]">
                    <p className="font-bold mb-2">{phase.subtitle}</p>
                    <p>{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
