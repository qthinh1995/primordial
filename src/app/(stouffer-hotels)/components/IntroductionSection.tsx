"use client";

import Image from "next/image";

interface IntroductionSectionProps {
  sectionTitle: string;
  paragraphs: {
    text: string;
    boldPhrases?: string[];
  }[];
  image: string;
}

export function IntroductionSection({
  sectionTitle,
  paragraphs,
  image,
}: IntroductionSectionProps) {
  // Function to render text with bold phrases
  const renderTextWithBold = (text: string, boldPhrases: string[] = []) => {
    if (boldPhrases.length === 0) {
      return text;
    }

    // Create a regex pattern that matches any of the bold phrases
    const pattern = new RegExp(
      `(${boldPhrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
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
      return part;
    });
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:py-20 md:px-12">
      <div className="max-w-[1344px] mx-auto">
        {/* Desktop Layout */}
        <div className="flex flex-col gap-10 md:gap-16">
          {/* Header & Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            {/* Title */}
            <h2 className="font-display font-semibold text-[24px] text-[#2c2c2c] tracking-[-0.72px] leading-8 w-full md:w-[208px] md:shrink-0 text-center md:text-left">
              {sectionTitle}
            </h2>

            {/* Mobile Divider */}
            <div className="w-full h-px bg-primary md:hidden" />

            {/* Content */}
            <div className="flex-1 font-sans font-normal text-base md:text-xl text-[#2c2c2c] tracking-[-0.32px] md:tracking-[-0.6px] leading-6 md:leading-7 space-y-4 md:space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {renderTextWithBold(paragraph.text, paragraph.boldPhrases)}
                </p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[3/1]">
            <Image
              src={image}
              alt={sectionTitle}
              fill
              sizes="(max-width: 768px) 100vw, 1344px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
