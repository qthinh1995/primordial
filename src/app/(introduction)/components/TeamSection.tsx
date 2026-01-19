"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamSectionProps {
  title: string;
  description: string;
  members: TeamMember[];
}

export function TeamSection({ title, description, members }: TeamSectionProps) {
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
    <section
      ref={sectionRef}
      className={cn(
        "py-[120px] transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <Container>
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex md:flex-row flex-col md:justify-between md:items-start gap-16">
            <h2 className="font-display font-normal text-[44px] text-black uppercase leading-[1.4] tracking-[-1.76px] shrink-0">
              {title}
            </h2>
            <p className="max-w-[648px] font-sans text-foreground text-lg leading-[1.4] tracking-[-0.54px]">
              {description}
            </p>
          </div>

          {/* Team Cards */}
          <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
                  <h3 className="font-display font-semibold text-foreground text-xl leading-7 tracking-[-0.6px]">
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
