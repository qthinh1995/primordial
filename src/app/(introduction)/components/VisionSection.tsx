"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";

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
  valueStatement: string;
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
    <>
      {/* Vision Content Section */}
      <section
        ref={sectionRef}
        className={`py-[120px] transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Container>
          <div className="flex md:flex-row flex-col md:items-center gap-16">
            {/* Text Content */}
            <div className="flex flex-col flex-1 gap-10">
              <h2 className="font-display font-normal text-[44px] text-black leading-[1.4] tracking-[-1.76px]">
                {title}
              </h2>
              <div
                className={`font-sans text-lg leading-[1.4] tracking-[-0.54px] text-foreground transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {content.map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
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
                  <div className="relative w-[144px] h-[190px] overflow-hidden shrink-0">
                    <Image
                      src={teamMember.image}
                      alt={teamMember.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="font-display font-semibold text-foreground text-xl leading-7 tracking-[-0.6px]">
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
              )}
            </div>

            {/* Image */}
            <div
              className={`relative h-[510px] w-full shrink-0 md:w-[764px] transition-all duration-1000 delay-300 ${
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
      <section className="relative flex justify-center items-center p-[120px] h-[512px]">
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
          <p
            className={`mx-auto max-w-[960px] text-center font-display text-[32px] font-normal leading-[1.2] text-white transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            {valueStatement}
          </p>
        </Container>
      </section>
    </>
  );
}
