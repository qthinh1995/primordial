"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ReactNode } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface VisionSectionProps {
  title: string;
  content: string[];
  teamMember?: TeamMember;
  image: string;
  valueStatement: ReactNode;
  valueImage: string;
}

export function VisionSection({
  title,
  content,
  teamMember,
  image,
  valueStatement,
  valueImage,
}: VisionSectionProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <>
      {/* Vision Content Section */}
      <section
        ref={sectionRef}
        className={`py-[64px] md:py-[120px] transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Container className="px-4 md:px-12">
          <div className="flex md:flex-row flex-col md:items-center gap-16">
            {/* Text Content */}
            <div className="flex flex-col md:flex-1 lg:flex-2 gap-10">
              <h2 className="font-display font-normal text-[32px] text-black md:text-[44px] leading-[1.4] tracking-[-1.76px]">
                {title}
              </h2>
              <div
                className={`font-sans text-base md:text-lg leading-[1.4] tracking-[-0.54px] text-foreground transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {content.map((paragraph, index) => (
                  <p key={index} className="mb- last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Team Member Info */}
              {teamMember && (
                <div
                  className={`mt-4 flex gap-5 transition-all duration-1000 delay-400 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <div className="md:flex gap-4 grid grid-2">
                    <div className="relative w-full md:w-[144px] aspect-[3/4] overflow-hidden shrink-0">
                      <Image
                        src={teamMember.image}
                        alt={teamMember.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex md:flex-col flex-2 gap-5 grid grid-2">
                      <div className="flex flex-col gap-3 md:gap-0">
                        <p className="mt-4 md:mt-0 font-display font-semibold text-foreground md:text-xl leading-7 tracking-[-0.6px] text:lg">
                          {teamMember.name}
                        </p>
                        <p className="font-display font-normal text-accent text-sm italic uppercase leading-normal">
                          {teamMember.role}
                        </p>
                      </div>
                      <p className="font-sans text-foreground text-base leading-6 tracking-[-0.32px]">
                        {teamMember.bio}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Image */}
            <div
              className={`relative h-[228px]  md:w-[764px] md:h-[510px] shrink-0 transition-all duration-1000 delay-300 md:flex-1 lg:flex-3 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* Value Statement Section */}
      <section className="relative flex justify-center items-center py-[64px] md:py-[120px] w-full h-[244px] md:h-[512px]">
        <div className="absolute inset-0">
          <Image
            src={valueImage}
            alt="Value statement background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/66" />
        </div>
        <Container className="z-10 relative">
          <div
            className={`mx-auto max-w-[960px] text-center text-2xl font-display md:text-[32px] font-normal leading-[1.2] text-white transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            {valueStatement}
          </div>
        </Container>
      </section>
    </>
  );
}
