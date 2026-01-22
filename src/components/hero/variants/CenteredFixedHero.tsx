"use client";

import { Container } from "@/components/ui/container";
import { UnifiedHero } from "@/components/hero/UnifiedHero";
import { ReactNode } from "react";

interface CenteredFixedHeroProps {
  title: string;
  description?: ReactNode;
  image: string;
}

export function CenteredFixedHero({
  title,
  description,
  image,
}: CenteredFixedHeroProps) {
  return (
    <UnifiedHero
      sectionClassName="h-[600px]"
      image={image}
      imageAlt={title}
      overlayClassName="bg-linear-to-b from-black/70 via-black/49 to-transparent"
    >
      <div className="relative z-10 flex h-full items-center justify-center">
        <Container className="z-10">
          <div className="mx-auto max-w-[820px] px-4 text-center">
            <h1 className="mb-4 font-display font-normal text-[72px] leading-[80px] tracking-[-2.88px] text-white max-md:text-[32px] max-md:leading-[56px]">
              {title}
            </h1>
            {description ? (
              <div className="font-sans text-lg leading-[1.4] tracking-[-0.54px] text-[#eaeaea] max-md:text-base">
                {description}
              </div>
            ) : null}
          </div>
        </Container>
      </div>
    </UnifiedHero>
  );
}
