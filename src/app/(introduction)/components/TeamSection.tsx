"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamSectionProps {
  title: string;
  description: ReactNode;
  members: TeamMember[];
}

export function TeamSection({ title, description, members }: TeamSectionProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-[64px] md:py-[120px] transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <Container className="px-4 md:px-12">
        <div className="flex flex-col gap-6 md:gap-16">
          {/* Header */}
          <div className="flex md:flex-row flex-col md:justify-between md:items-start gap-6 md:gap-16">
            <h2 className="font-display font-normal text-[32px] md:text-[44px] text-black uppercase leading-[1.4] tracking-[-1.76px] shrink-0">
              {title}
            </h2>
            <div className="max-w-[648px] font-sans text-foreground text-base md:text-lg leading-[1.4] tracking-[-0.54px]">
              {description}
            </div>
          </div>

          {/* Team Cards */}
          <div className="gap-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {members.map((member, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col gap-5 transition-all duration-1000",
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative w-full aspect-[270/360] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display font-semibold text-foreground text-lg md:text-xl leading-7 tracking-[-0.6px]">
                    {member.name}
                  </h3>
                  <p className="font-display font-normal text-accent text-sm italic uppercase leading-normal">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
