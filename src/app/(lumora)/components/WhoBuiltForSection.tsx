"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ReactNode } from "react";

interface TextBlock {
  title: string;
  items: string[];
}

interface WhoBuiltForSectionProps {
  title: string;
  description: ReactNode;
  suitedFor: TextBlock;
  coreValue: TextBlock;
  conclusion: {
    text: string;
    highlight: string;
  };
  image: string;
}

export function WhoBuiltForSection({
  title,
  description,
  suitedFor,
  coreValue,
  conclusion,
  image,
}: WhoBuiltForSectionProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`py-[120px] max-md:py-16 bg-white transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Container>
        <div className="flex flex-col gap-16 max-md:gap-6">
          {/* Header */}
          <div
            className={`flex flex-col gap-6 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <h2 className="font-display font-normal text-[44px] max-md:text-[32px] text-black leading-[1.4] max-md:leading-normal tracking-[-1.76px] max-md:tracking-[-1.28px] uppercase max-md:text-center">
              {title}
            </h2>
            <div className="font-sans text-lg max-md:text-base leading-[1.4] max-md:leading-6 tracking-[-0.54px] max-md:tracking-[-0.32px] text-[#2c2c2c] max-w-[763px]">
              {description}
            </div>
          </div>

          {/* Content */}
          <div className="flex gap-12 max-md:flex-col max-md:gap-6">
            {/* Left Column - Text Blocks */}
            <div
              className={`flex-1 flex flex-col gap-5 transition-all duration-1000 delay-150 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {/* Suited For Block */}
              <div className="bg-[#f7f2e6] border border-[#d8c192] p-6 max-md:p-4">
                <div className="flex flex-col gap-5">
                  <h3 className="font-display font-bold text-xl max-md:text-lg leading-7 text-[#2c2c2c]">
                    {suitedFor.title}
                  </h3>
                  <ul className="font-sans text-base leading-6 tracking-[-0.32px] text-[#2c2c2c] list-disc pl-6">
                    {suitedFor.items.map((item, index) => (
                      <li key={index} className="mb-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Core Value Block */}
              <div className="bg-[#f7f2e6] border border-[#d8c192] p-6 max-md:p-4">
                <div className="flex flex-col gap-5">
                  <h3 className="font-display font-bold text-xl max-md:text-lg leading-7 text-[#2c2c2c]">
                    {coreValue.title}
                  </h3>
                  <ul className="font-sans text-base leading-6 tracking-[-0.32px] text-[#2c2c2c] list-disc pl-6">
                    {coreValue.items.map((item, index) => (
                      <li key={index} className="mb-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Conclusion */}
              <p className="font-sans text-lg max-md:text-base leading-[1.4] max-md:leading-6 tracking-[-0.54px] max-md:tracking-[-0.32px] text-[#2c2c2c]">
                {conclusion.text}{" "}
                <span className="font-bold text-[#d21c27]">
                  {conclusion.highlight}
                </span>
              </p>
            </div>

            {/* Right Column - Image */}
            <div
              className={`flex-1 relative aspect-[632/474] transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Image
                src={image}
                alt="Lumora experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
