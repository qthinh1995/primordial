"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/ui/animated-section";

interface ValueSectionProps {
  title: string;
  description: React.ReactNode;
  image: string;
}

export function ValueSection({ title, description, image }: ValueSectionProps) {
  return (
    <section className="py-[64px] md:py-[120px] max-md:py-16">
      <Container className="px-4 md:px-12">
        <AnimatedSection className="flex gap-10 max-lg:flex-col items-center">
          {/* Left Column - Content */}
          <div className="w-[648px] max-lg:w-full px-16 max-md:px-0 flex-shrink-0">
            <h2 className="font-display font-normal text-[44px] max-md:text-[32px] leading-[1.4] tracking-[-1.76px] max-md:tracking-[-1.28px] text-black mb-6 md:whitespace-nowrap">
              {title}
            </h2>
            <div className="font-sans text-lg max-md:text-base leading-[1.4] tracking-[-0.54px] max-md:tracking-[-0.32px] text-[var(--grey-500)]">
              {description}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 w-full">
            <div className="relative aspect-[656/492] w-full">
              <Image
                src={image}
                alt="Partnership value"
                fill
                sizes="(max-width: 768px) 100vw, 632px"
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
