"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface StoufferImageScrollProps {
  images: string[];
}

export function StoufferImageScroll({ images }: StoufferImageScrollProps) {
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
    <div className="right-1/2 left-1/2 relative mt-16 -mr-[50vw] -ml-[50vw] pl-4 md:pl-0 w-screen">
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide"
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
  );
}
