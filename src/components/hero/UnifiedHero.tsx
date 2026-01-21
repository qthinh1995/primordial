"use client";

import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface UnifiedHeroProps {
  /** Section wrapper classes (layout/height/etc.) */
  sectionClassName?: string;
  /** Background wrapper classes (z-index, offsets, etc.) */
  backgroundClassName?: string;
  /** Overlay classes applied to an absolute `div` layered on top of the image */
  overlayClassName?: string;
  image: string;
  imageAlt: string;
  imagePriority?: boolean;
  children: ReactNode;
}

export function UnifiedHero({
  sectionClassName,
  backgroundClassName,
  overlayClassName,
  image,
  imageAlt,
  imagePriority = true,
  children,
}: UnifiedHeroProps) {
  return (
    <section
      className={cn("relative w-full overflow-hidden", sectionClassName)}
    >
      <div className={cn("absolute inset-0 bg-black", backgroundClassName)}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority={imagePriority}
        />
        {overlayClassName ? (
          <div className={cn("absolute inset-0", overlayClassName)} />
        ) : null}
      </div>

      {children}
    </section>
  );
}
