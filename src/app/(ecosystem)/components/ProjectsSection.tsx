"use client";

import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  title: string;
  description: ReactNode;
  image: string;
}

interface ProjectsSectionProps {
  title: string;
  description: ReactNode;
  projects: Project[];
}

export function ProjectsSection({
  title,
  description,
  projects,
}: ProjectsSectionProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`pb-[64px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Container className="px-4 md:px-12">
        <div className="flex flex-col gap-16 md:py-[120px]">
          {/* Header */}
          <div className="flex md:flex-row flex-col gap-6 md:gap-20">
            <div className="flex-1 max-w-[648px]">
              <span className="block w-full font-sans font-bold text-center text-base text-red-500 md:hidden py-2">
                WORK · TALENT PLATFORM
              </span>
              <h2 className="font-display font-normal text-[32px] text-center md:text-left md:text-[44px] text-black leading-[1.4] tracking-[-1.76px]">
                {title}
              </h2>
            </div>
            <div className="flex-1 font-sans text-[#2c2c2c] text-center text-base md:text-left md:text-lg leading-[1.4] tracking-[-0.54px]">
              {description}
            </div>
          </div>

          {/* Project Cards */}
          <div className="flex md:flex-row flex-col gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex-1 bg-[#f7f2e6] flex flex-col gap-4 p-6 transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative w-full aspect-[386/200]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans font-bold text-[#121212] text-lg leading-[1.4] tracking-[-0.54px]">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[#2c2c2c] text-lg leading-[1.4] tracking-[-0.54px]">
                    {project.description}
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
