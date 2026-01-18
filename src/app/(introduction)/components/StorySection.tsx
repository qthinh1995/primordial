"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";

interface StorySectionProps {
  title: string;
  overviewTitle: string;
  content: string[];
  image: string;
  imageAlt: string;
  additionalImages?: string[];
}

export function StorySection({
  title,
  overviewTitle,
  content,
  image,
  imageAlt,
  additionalImages = [],
}: StorySectionProps) {
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
      className={`py-[120px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Container>
        <div className="flex md:flex-row flex-col md:items-start gap-16">
          {/* Image */}
          <div className="relative w-full md:w-[648px] h-[864px] shrink-0">
            <div
              className={`h-full w-full transition-all duration-1000 delay-200 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col flex-1 gap-10">
            <h2 className="font-display font-normal text-[44px] text-black uppercase leading-[1.4] tracking-[-1.76px]">
              {title}
            </h2>

            {/* Divider */}
            <div className="border-primary border-b w-full h-px" />

            {/* Overview Section */}
            <div className="flex flex-col gap-6">
              <h3 className="font-sans font-bold text-foreground text-2xl leading-8 tracking-[-0.72px]">
                {overviewTitle}
              </h3>
              <div
                className={`flex flex-col gap-6 font-sans text-lg leading-6 tracking-[0.18px] text-foreground transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Additional Images */}
            {additionalImages.length > 0 && (
              <div
                className={`mt-auto flex gap-6 transition-all duration-1000 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {additionalImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative flex-1 aspect-[403/302.25]"
                  >
                    <Image
                      src={img}
                      alt={`${imageAlt} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
