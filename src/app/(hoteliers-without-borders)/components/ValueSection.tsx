"use client";

import Image from "next/image";

interface ValueCardProps {
  title: string;
  items: string[];
}

interface ValueSectionProps {
  title: string;
  subtitle: string;
  suitableFor: ValueCardProps;
  coreValue: ValueCardProps;
  highlightText: string;
  highlightBoldText: string;
  image: string;
}

export function ValueSection({
  title,
  subtitle,
  suitableFor,
  coreValue,
  highlightText,
  highlightBoldText,
  image,
}: ValueSectionProps) {
  return (
    <section className="w-full bg-[#f9f6ef] py-16 px-4 md:py-[120px] md:px-12">
      <div className="max-w-[1344px] mx-auto">
        <div className="flex flex-col gap-10 md:gap-16">
          {/* Header */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <h2 className="font-display font-normal text-[32px] md:text-[44px] text-black tracking-[-1.28px] md:tracking-[-1.76px] leading-normal md:leading-[1.4] text-center md:text-left">
              {title}
            </h2>
            <p className="font-sans font-normal text-base md:text-lg text-[#2c2c2c] tracking-[-0.32px] md:tracking-[-0.54px] leading-6 md:leading-[1.4] text-center md:text-left max-w-[763px]">
              {subtitle.split("**").map((part, index) => {
                if (index % 2 === 1) {
                  return (
                    <span key={index} className="font-bold">
                      {part}
                    </span>
                  );
                }
                return part;
              })}
            </p>
          </div>

          {/* Content - Cards and Image */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            {/* Cards Container */}
            <div className="flex flex-col gap-5 w-full lg:flex-1">
              {/* Suitable For Card */}
              <div className="bg-[#f7f2e6] border border-[#d8c192] p-4 md:p-6">
                <div className="flex flex-col gap-5">
                  <h3 className="font-display font-bold text-[18px] md:text-[20px] text-[#2c2c2c] leading-7">
                    {suitableFor.title}
                  </h3>
                  <ul className="font-sans font-normal text-base text-[#2c2c2c] tracking-[-0.32px] leading-6">
                    {suitableFor.items.map((item, index) => (
                      <li key={index} className="ml-6 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Core Value Card */}
              <div className="bg-[#f7f2e6] border border-[#d8c192] p-4 md:p-6">
                <div className="flex flex-col gap-5">
                  <h3 className="font-display font-bold text-[18px] md:text-[20px] text-[#2c2c2c] leading-7">
                    {coreValue.title}
                  </h3>
                  <ul className="font-sans font-normal text-base text-[#2c2c2c] tracking-[-0.32px] leading-6">
                    {coreValue.items.map((item, index) => (
                      <li key={index} className="ml-6 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Highlight Text */}
              <p className="font-sans font-normal text-base md:text-lg text-[#2c2c2c] tracking-[-0.32px] md:tracking-[-0.54px] leading-6 md:leading-[1.4]">
                {highlightText}{" "}
                <span className="font-bold text-accent">
                  {highlightBoldText}
                </span>
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full lg:flex-1 aspect-[4/3]">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 632px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
