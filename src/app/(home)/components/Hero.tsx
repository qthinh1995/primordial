"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";

interface HeroProps {
  title: string;
  description: string;
  images: string[];
}

export function Hero({ title, description, images }: HeroProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Banner Slides */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              <div className="absolute inset-0 bg-black">
                <Image
                  src={image}
                  alt={`Hero slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/49 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <Container className="z-10">
          <div className="mx-auto max-w-[960px] text-center px-4">
            <h1 className="mb-6 font-display text-[72px] font-normal leading-[80px] tracking-[-2.88px] text-white max-md:text-[48px] max-md:leading-[56px]">
              {title}
            </h1>
            <p className="font-sans text-lg leading-[1.4] tracking-[-0.54px] text-[#eaeaea] max-md:text-base">
              {description}
            </p>
          </div>
        </Container>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              selectedIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
