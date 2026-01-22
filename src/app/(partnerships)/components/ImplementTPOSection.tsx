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
    <section className="bg-[var(--yellow-50)] py-[64px] md:py-[120px] max-md:py-16 overflow-hidden">
      <Container className="px-4 md:px-12">
        <div className="flex gap-16 max-lg:flex-col items-center">
          {/* LEFT – IMAGES */}
          <div className="flex-1 relative h-[520px] max-md:h-[400px] w-full">
            {/* IMAGE 1 – TRÁI → PHẢI */}
            <AnimatedSection
              className="absolute top-0 left-0 w-[480px] max-md:w-[280px] h-[320px] max-md:h-[200px]"
              hiddenClassName="-translate-x-24 opacity-0"
              visibleClassName="translate-x-0 opacity-100"
              transitionClassName="transition-all duration-1000 ease-out"
            >
              <Image
                src={image1}
                alt="TPO implementation"
                fill
                sizes="(max-width: 768px) 280px, 480px"
                className="object-cover"
                priority
              />
            </AnimatedSection>

            {/* IMAGE 2 – PHẢI → TRÁI */}
            <AnimatedSection
              className="absolute bottom-0 right-0 w-[480px] max-md:w-[280px] h-[320px] max-md:h-[200px]"
              hiddenClassName="translate-x-24 opacity-0"
              visibleClassName="translate-x-0 opacity-100"
              transitionClassName="transition-all duration-1000 ease-out delay-150"
            >
              <Image
                src={image2}
                alt="TPO partnership"
                fill
                sizes="(max-width: 768px) 280px, 480px"
                className="object-cover"
              />
            </AnimatedSection>
          </div>

          {/* RIGHT – CONTENT */}
          <AnimatedSection className="w-[648px] max-lg:w-full px-16 max-md:px-0 flex-shrink-0">
            <h2 className="font-display font-normal text-[44px] max-md:text-center max-md:text-[32px] leading-[1.4] tracking-[-1.76px] max-md:tracking-[-1.28px] text-black mb-6">
              {title}
            </h2>
            <div className="font-sans text-lg max-md:text-base leading-[1.4] tracking-[-0.54px] max-md:tracking-[-0.32px] text-[var(--grey-500)]">
              {description}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
