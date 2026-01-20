"use client";

import Image from "next/image";

interface WhatIsStoufferSectionProps {
  title: string;
  description: string;
  isTitle: string;
  isList: string[];
  isNotTitle: string;
  isNotList: string[];
  image: string;
}

export function WhatIsStoufferSection({
  title,
  description,
  isTitle,
  isList,
  isNotTitle,
  isNotList,
  image,
}: WhatIsStoufferSectionProps) {
  return (
    <section className="w-full bg-white py-16 px-4 md:py-20 md:px-12">
      <div className="max-w-[1344px] mx-auto flex flex-col gap-10 md:gap-16 items-center">
        {/* Header Content */}
        <div className="flex flex-col gap-6 items-center text-center max-w-[960px] w-full">
          <h2 className="font-display font-normal text-[32px] md:text-[44px] text-black tracking-[-1.28px] md:tracking-[-1.76px] leading-normal">
            {title}
          </h2>
          <p className="font-sans font-normal text-[16px] md:text-[18px] text-[#2c2c2c] tracking-[-0.32px] md:tracking-[-0.54px] leading-6 md:leading-[1.4]">
            {description}
          </p>
        </div>

        {/* Main Content - Image and Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-start w-full">
          {/* Image */}
          <div className="relative w-full lg:w-[648px] aspect-[704/469] lg:aspect-auto lg:h-[432px] shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 648px"
              className="object-cover"
            />
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-4 p-4 bg-[#f7f2e6] border border-[#d8c192] w-full lg:flex-1 lg:self-stretch">
            {/* Is Card */}
            <div className="bg-white px-5 py-6 flex-1">
              <div className="flex flex-col gap-5">
                <h3 className="font-display font-bold text-[18px] md:text-[20px] text-[#d21c27] leading-7">
                  {isTitle}
                </h3>
                <ul className="font-sans font-normal text-[16px] md:text-[18px] text-[#1f1f1f] tracking-[-0.32px] md:tracking-[-0.54px] space-y-0">
                  {isList.map((item, index) => (
                    <li
                      key={index}
                      className="ml-6 list-disc leading-6 md:leading-[1.4]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Is Not Card */}
            <div className="bg-white px-5 py-6 flex-1">
              <div className="flex flex-col gap-5">
                <h3 className="font-display font-bold text-[18px] md:text-[20px] text-[#d21c27] leading-7">
                  {isNotTitle}
                </h3>
                <ul className="font-sans font-normal text-[16px] md:text-[18px] text-[#1f1f1f] tracking-[-0.32px] md:tracking-[-0.54px] space-y-0">
                  {isNotList.map((item, index) => (
                    <li
                      key={index}
                      className="ml-6 list-disc leading-6 md:leading-[1.4]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
