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
        <div className="flex gap-12 max-lg:flex-col items-center">
          {/* LEFT – IMAGES */}
          <div className="flex-1 relative w-full">
            {/* MOBILE */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing">
                {[image1, image2].map((img, index) => (
                  <div
                    key={index}
                    className="relative shrink-0 w-[280px] h-[187px]"
                  >
                    <Image
                      src={img}
                      alt={`TPO image ${index + 1}`}
                      fill
                      sizes="280px"
                      className="object-cover select-none pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block relative h-[520px] w-full">
              <AnimatedSection
                className="absolute top-0 left-0 w-[480px] h-[320px]"
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
                className="absolute bottom-0 right-0 w-[480px] h-[320px]"
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
