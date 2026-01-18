"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface StoufferSectionProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  images: string[];
}

export function StoufferSection({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  images,
}: StoufferSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId: number;
    let isDragging = false;
    const start = () => (isDragging = true);
    const end = () => (isDragging = false);

    el.addEventListener("mousedown", start);
    el.addEventListener("mouseup", end);
    el.addEventListener("mouseleave", end);
    el.addEventListener("touchstart", start);
    el.addEventListener("touchend", end);

    const loop = () => {
      if (!isDragging) {
        el.scrollLeft += 0.8;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      rafId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mousedown", start);
      el.removeEventListener("mouseup", end);
      el.removeEventListener("mouseleave", end);
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchend", end);
    };
  }, []);

  return (
    <section className="bg-muted py-[64px] md:py-[120px] overflow-hidden">
      <Container className="px-4 md:px-12">
        <div className="mx-auto max-w-[960px] flex flex-col items-center gap-4 md:gap-6 text-center">
          <p className="font-sans text-base font-bold tracking-[-0.32px] text-accent">
            {badge}
          </p>

          <h2 className="font-display md:mt-[-20px] text-[32px] md:text-[44px] tracking-[-1.76px] text-foreground">
            {title}
          </h2>

          <p className="font-sans text-lg mt-4 leading-[1.4] tracking-[-0.54px] text-foreground">
            {description}
          </p>

          <Link href={buttonHref}>
            <Button className="mt-8 md:mt-4">{buttonText}</Button>
          </Link>
        </div>
      </Container>

      {/* FULL WIDTH SCROLL */}
      <div className="mt-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pl-4 md:pl-0">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className={`
                relative shrink-0 overflow-hidden h-[400px] md:h-[320px]
                ${
                  index % images.length === 0
                    ? "w-[85vw] max-w-[420px] md:w-[427px]"
                    : index % images.length === 1
                    ? "w-[70vw] max-w-[260px] md:w-[214px]"
                    : index % images.length === 2
                    ? "w-[85vw] max-w-[420px] md:w-[426px]"
                    : index % images.length === 3
                    ? "w-[75vw] max-w-[280px] md:w-[240px]"
                    : "w-[90vw] max-w-[640px] md:w-[640px]"
                }
              `}
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
