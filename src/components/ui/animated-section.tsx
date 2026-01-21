"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useEffect, useState } from "react";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

type Trigger = "intersection" | "mount";

type AnimatedSectionProps<TAs extends ElementType> = {
  as?: TAs;
  trigger?: Trigger;
  /**
   * Defaults to Tailwind-friendly transition classes matching existing usage.
   * You can override per-call with `transitionClassName`.
   */
  transitionClassName?: string;
  /**
   * Defaults to the existing repeated pattern:
   * visible -> "translate-y-0 opacity-100"
   * hidden  -> "translate-y-8 opacity-0"
   */
  visibleClassName?: string;
  hiddenClassName?: string;
  /**
   * IntersectionObserver options (used when trigger="intersection").
   */
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
  /**
   * Additional classes applied to the wrapper element.
   */
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<TAs>, "as" | "children" | "className">;

export function AnimatedSection<TAs extends ElementType = "div">({
  as,
  trigger = "intersection",
  transitionClassName = "transition-all duration-1000",
  visibleClassName = "translate-y-0 opacity-100",
  hiddenClassName = "translate-y-8 opacity-0",
  threshold,
  root,
  rootMargin,
  triggerOnce,
  className,
  children,
  ...rest
}: AnimatedSectionProps<TAs>) {
  const Component = (as ?? "div") as ElementType;

  const { ref, isVisible: isIntersectVisible } = useIntersectionObserver({
    threshold,
    root,
    rootMargin,
    triggerOnce,
  });

  const [isMountedVisible, setIsMountedVisible] = useState(false);
  useEffect(() => {
    if (trigger === "mount") setIsMountedVisible(true);
  }, [trigger]);

  const isVisible = trigger === "mount" ? isMountedVisible : isIntersectVisible;

  return (
    <Component
      // `useIntersectionObserver` returns a RefObject, so we can pass it directly.
      ref={trigger === "intersection" ? ref : undefined}
      className={cn(
        transitionClassName,
        isVisible ? visibleClassName : hiddenClassName,
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
