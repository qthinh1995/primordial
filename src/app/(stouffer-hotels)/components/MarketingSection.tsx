"use client";

import Image from "next/image";

interface MarketingSectionProps {
  title: string;
  description: string | React.ReactNode;
  image1: string;
  image2: string;
}

export function MarketingSection({
  title,
  description,
  image1,
  image2,
}: MarketingSectionProps) {
  return (
    <section className="w-full bg-[#f9f6ef] py-16 px-4 md:py-[120px] md:px-12">
      <div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Left Side - Images (stacked offset layout) */}
        <div className="relative w-full lg:flex-1 h-[400px] md:h-[520px]">
          {/* Top Left Image */}
          <div className="absolute top-0 left-0 w-[65%] md:w-[480px] h-[240px] md:h-[320px]">
            <Image
              src={image1}
              alt="Marketing image 1"
              fill
              sizes="(max-width: 768px) 65vw, 480px"
              className="object-cover"
            />
          </div>
          {/* Bottom Right Image */}
          <div className="absolute bottom-0 right-0 w-[65%] md:w-[480px] h-[240px] md:h-[320px]">
            <Image
              src={image2}
              alt="Marketing image 2"
              fill
              sizes="(max-width: 768px) 65vw, 480px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[648px] lg:pl-10 flex flex-col justify-center">
          <div className="flex flex-col gap-6">
            {/* Title */}
            <h2 className="font-display font-normal text-[32px] md:text-[44px] text-black tracking-[-1.28px] md:tracking-[-1.76px] leading-normal text-center lg:text-left uppercase lg:normal-case">
              {title}
            </h2>
            {/* Description */}
            <div className="font-sans font-normal text-[16px] md:text-[18px] text-[#2c2c2c] tracking-[-0.32px] md:tracking-[-0.54px] leading-6 md:leading-[1.4] text-center lg:text-left">
              {description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
