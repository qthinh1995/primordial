"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface WhatIsLumoraSectionProps {
  title: string;
  paragraphs: {
    text: string;
    isBold?: boolean;
    isHighlight?: boolean;
    boldPhrases?: string[];
  }[];
  images: {
    src: string;
    alt: string;
  }[];
}

export function WhatIsLumoraSection({
  title,
  paragraphs,
  images,
}: WhatIsLumoraSectionProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>();

  const renderBoldPhrases = (text: string, boldPhrases: string[] = []) => {
    if (!boldPhrases || boldPhrases.length === 0) return text;

    const pattern = new RegExp(
      `(${boldPhrases
        .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})`,
      "g"
    );

    const parts = text.split(pattern);

    return parts.map((part, index) => {
      if (boldPhrases.includes(part)) {
        return (
          <span key={index} className="font-bold">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`py-[120px] max-md:py-16 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Container className="px-4 md:px-12">
        <div className="flex flex-col gap-16 max-md:gap-10">
          {/* Content Row */}
          <div className="flex max-md:flex-col gap-16 max-md:gap-10">
            {/* Title */}
            <h2
              className={`font-display font-semibold text-[24px] leading-8 tracking-[-0.72px] text-[#2c2c2c] w-[208px] shrink-0 max-md:w-full max-md:text-center transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {title}
            </h2>

            {/* Paragraphs */}
            <div
              className={`flex-1 font-sans text-xl max-md:text-base leading-7 max-md:leading-6 tracking-[-0.6px] max-md:tracking-[-0.32px] text-[#2c2c2c] transition-all duration-1000 delay-150 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`${
                    index !== paragraphs.length - 1 ? "mb-7 max-md:mb-4" : ""
                  } ${paragraph.isBold ? "font-bold" : ""} ${
                    paragraph.isHighlight ? "italic text-[#d21c27]" : ""
                  }`}
                >
                  {/*renderBoldPhrases */}
                  {renderBoldPhrases(
                    paragraph.text,
                    paragraph.boldPhrases || []
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Divider for mobile */}
          <div className="hidden max-md:block bg-[#b17e08] w-full h-px" />

          {/* Images Row */}
          <div
            className={`flex gap-6 max-md:flex-col max-md:gap-3 items-start transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            {/* First Image - Portrait small */}
            <div className="max-md:hidden relative w-[240px] h-[320px] shrink-0">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image - Portrait medium */}
            <div className="max-md:hidden relative w-[320px] h-[427px] shrink-0">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Third Image - Landscape large */}
            <div className="relative flex-1 max-md:w-full aspect-[648/432] max-md:aspect-[648/432]">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Mobile: First two images side by side */}
            <div className="hidden max-md:flex gap-3 w-full">
              <div className="relative flex-1 aspect-[648/864]">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1 aspect-[648/864]">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
