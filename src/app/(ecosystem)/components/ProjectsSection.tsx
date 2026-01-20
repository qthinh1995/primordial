"use client";

import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
}

interface ProjectsSectionProps {
  title: string;
  description: string;
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
      className={`py-[80px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Container>
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex md:flex-row flex-col gap-20">
            <div className="flex-1 max-w-[648px]">
              <h2 className="font-display font-normal text-[44px] text-black leading-[1.4] tracking-[-1.76px]">
                {title}
              </h2>
            </div>
            <p className="flex-1 font-sans text-[#2c2c2c] text-lg leading-[1.4] tracking-[-0.54px]">
              {description}
            </p>
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
