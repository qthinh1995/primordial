"use client";

import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Phase {
  number: string;
  title: string;
  description: string;
  note?: string;
}

interface WhenActivatedSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  phases: Phase[];
}

export function WhenActivatedSection({
  title,
  subtitle,
  description,
  phases,
}: WhenActivatedSectionProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`bg-[#f9f6ef] py-[120px] max-md:py-16 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Container>
        <div className="flex flex-col gap-16 max-md:gap-10">
          {/* Header */}
          <div className="flex flex-col gap-6 items-center text-center max-w-[960px] mx-auto">
            <div className="flex flex-col gap-1 items-center">
              <h2 className="font-display font-normal text-[44px] max-md:text-[32px] text-black leading-[1.4] max-md:leading-normal tracking-[-1.76px] max-md:tracking-[-1.28px]">
                {title}
              </h2>
              {subtitle && (
                <p className="font-sans italic text-lg max-md:text-base leading-[1.4] tracking-[-0.54px] text-black">
                  {subtitle}
                </p>
              )}
            </div>
            <p className="font-sans text-lg max-md:text-base leading-[1.4] max-md:leading-6 tracking-[-0.54px] max-md:tracking-[-0.32px] text-[#2c2c2c]">
              {description}
            </p>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-[10px]">
            {/* Desktop: Timeline Line with Dots */}
            <div className="relative flex items-start justify-between max-md:hidden">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#c5a25d] -translate-y-1/2" />

              {/* Dots */}
              {phases.map((_, index) => (
                <div
                  key={index}
                  className="relative z-10 flex items-center"
                  style={{ width: "432px" }}
                >
                  <TimelineDot />
                </div>
              ))}
            </div>

            {/* Mobile: Vertical Timeline */}
            <div className="hidden max-md:flex gap-5">
              {/* Vertical line with dots */}
              <div className="flex flex-col gap-[60px] items-center relative">
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 w-px bg-[#c5a25d] left-1/2 -translate-x-1/2" />

                {/* Dots */}
                {phases.map((_, index) => (
                  <div
                    key={index}
                    className="relative z-10 flex-1 flex items-start justify-center"
                  >
                    <TimelineDot />
                  </div>
                ))}
              </div>

              {/* Phase Content for Mobile */}
              <div className="flex flex-col gap-[60px] flex-1">
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-6 transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex flex-col">
                      <p className="font-display font-bold text-lg leading-7 text-[#1f1f1f]">
                        {phase.number}
                      </p>
                      <p className="font-display font-bold text-lg leading-7 text-[#d21c27]">
                        {phase.title}
                      </p>
                    </div>
                    <div className="font-sans text-base leading-6 tracking-[-0.32px] text-[#2c2c2c]">
                      <p>{phase.description}</p>
                      {phase.note && (
                        <p className="mt-4 italic">{phase.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Phase Content */}
            <div className="flex gap-6 pt-10 max-md:hidden">
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
                    <p className="font-display font-bold text-xl leading-7 text-[#1f1f1f]">
                      {phase.number}
                    </p>
                    <p className="font-display font-bold text-xl leading-7 text-[#d21c27]">
                      {phase.title}
                    </p>
                  </div>
                  <div className="font-sans text-lg leading-[1.4] tracking-[-0.54px] text-[#2c2c2c]">
                    <p>{phase.description}</p>
                    {phase.note && <p className="mt-4 italic">{phase.note}</p>}
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

function TimelineDot() {
  return (
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
  );
}
