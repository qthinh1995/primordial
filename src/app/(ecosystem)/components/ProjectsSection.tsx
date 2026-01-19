"use client";

import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
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
            <p className="flex-1 font-sans text-lg leading-[1.4] tracking-[-0.54px] text-[#2c2c2c]">
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
                <div className="relative aspect-[386/200] w-full">
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
                  <h3 className="font-sans font-bold text-lg leading-[1.4] tracking-[-0.54px] text-[#121212]">
                    {project.title}
                  </h3>
                  <p className="font-sans text-lg leading-[1.4] tracking-[-0.54px] text-[#2c2c2c]">
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
