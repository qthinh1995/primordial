"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/ui/animated-section";

interface ImplementTPOSectionProps {
  title: string;
  description: React.ReactNode;
  image1: string;
  image2: string;
}

export function ImplementTPOSection({
  title,
  description,
  image1,
  image2,
}: ImplementTPOSectionProps) {
  return (
    <section className="bg-[var(--yellow-50)] py-[64px] md:py-[120px] overflow-hidden">
      <Container className="px-4 md:px-12">
        <div className="flex max-lg:flex-col items-center gap-12">
          {/* LEFT – IMAGES */}
          <div className="hidden md:block relative flex-1 w-full">
            <div className="relative w-full h-[520px]">
              <AnimatedSection
                className="top-0 left-0 absolute w-[480px] h-[320px]"
                hiddenClassName="-translate-x-24 opacity-0"
                visibleClassName="translate-x-0 opacity-100"
                transitionClassName="transition-all duration-1000 ease-out"
              >
                <Image
                  src={image1}
                  alt="TPO implementation"
                  fill
                  className="object-cover"
                  priority
                />
              </AnimatedSection>

              <AnimatedSection
                className="right-0 bottom-0 absolute w-[480px] h-[320px]"
                hiddenClassName="translate-x-24 opacity-0"
                visibleClassName="translate-x-0 opacity-100"
                transitionClassName="transition-all duration-1000 ease-out delay-150"
              >
                <Image
                  src={image2}
                  alt="TPO partnership"
                  fill
                  className="object-cover"
                />
              </AnimatedSection>
            </div>
          </div>
          {/* RIGHT – CONTENT */}
          <AnimatedSection className="flex-shrink-0 px-16 max-md:px-0 w-[648px] max-lg:w-full">
            <h2 className="mb-6 font-display font-normal text-[44px] text-black max-md:text-[32px] max-md:text-center leading-[1.4] tracking-[-1.76px] max-md:tracking-[-1.28px]">
              {title}
            </h2>
            <div className="font-sans text-[var(--grey-500)] max-md:text-base text-lg leading-[1.4] tracking-[-0.54px] max-md:tracking-[-0.32px]">
              {description}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
