"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function ContactSection({
  title,
  description,
  buttonText,
  buttonHref,
}: ContactSectionProps) {
  return (
    <section className="bg-[#f9f6ef] px-4 md:px-12 py-16 md:py-[120px] w-full">
      <div className="flex flex-col items-center gap-6 md:gap-6 mx-auto px-0 md:px-9 max-w-[1344px] text-center">
        {/* Title */}
        <h2 className="font-display font-normal text-[32px] text-black md:text-[44px] uppercase leading-normal md:leading-[48px] tracking-[-1.28px] md:tracking-[-1.76px]">
          {title}
        </h2>

        {/* Description */}
        <p className="max-w-full font-sans font-normal text-[#2c2c2c] text-base md:text-xl leading-6 md:leading-7 tracking-[-0.32px] md:tracking-[-0.6px]">
          {description}
        </p>

        {/* CTA Button */}
        <Link href={buttonHref}>
          <Button variant="default" size="default">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
