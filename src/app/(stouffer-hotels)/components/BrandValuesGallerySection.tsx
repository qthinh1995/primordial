"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BrandValuesGallerySectionProps {
  title: string;
  description: string | React.ReactNode;
  images: string[];
}

export function BrandValuesGallerySection({
  title,
  description,
  images,
}: BrandValuesGallerySectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scrollLeft = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -400, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: 400, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-white py-16 md:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col gap-10 md:gap-16">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-6 md:items-end md:justify-between">
            {/* Text Content */}
            <div className="flex flex-col gap-4 md:gap-6 flex-1">
              <h2 className="font-display font-normal text-[32px] md:text-[44px] text-black tracking-[-1.28px] md:tracking-[-1.76px] leading-normal text-center md:text-left uppercase md:normal-case">
                {title}
              </h2>
              <div className="font-sans font-normal text-base md:text-lg text-[#2c2c2c] tracking-[-0.32px] md:tracking-[-0.54px] leading-6 md:leading-[1.4] text-center md:text-left">
                {description}
              </div>
            </div>

            {/* Navigation Buttons - Desktop only */}
            <div className="hidden md:flex gap-6 shrink-0">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className="flex items-center justify-center p-3 rounded-full bg-white/90 backdrop-blur-[2px] shadow-[0px_2px_8px_0px_rgba(17,17,17,0.08)] transition-opacity disabled:opacity-40 hover:bg-white"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className="flex items-center justify-center p-3 rounded-full bg-white/90 backdrop-blur-[2px] shadow-[0px_2px_8px_0px_rgba(17,17,17,0.08)] transition-opacity disabled:opacity-40 hover:bg-white"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>

          {/* Gallery */}
          <div className="w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative shrink-0 w-[280px] h-[336px] md:w-[364px] md:h-[436px] bg-black"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover pointer-events-none select-none"
                    sizes="(max-width: 768px) 280px, 364px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
