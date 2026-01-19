"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface CoreFunctionsSectionProps {
  title: string;
  defaultOpenIndex?: number;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export function CoreFunctionsSection({
  title,
  defaultOpenIndex = 0,
  items,
}: CoreFunctionsSectionProps) {
  const safeDefault = useMemo(() => {
    if (!items?.length) return -1;
    const idx = Number.isFinite(defaultOpenIndex) ? defaultOpenIndex : 0;
    return Math.max(0, Math.min(items.length - 1, idx));
  }, [defaultOpenIndex, items]);

  const [openIndex, setOpenIndex] = useState<number>(safeDefault);

  const fmt = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="bg-background py-[64px] md:py-[120px]">
      <Container className="px-4 md:px-12">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[416px_1fr] lg:gap-20">
          <span className="md:hidden mb-[-20px] text-red-500 font-san font-bold text-center">PRIMORDIAL COMPANY LIMITED</span>
          <h2 className="font-display text-center text-[32px] leading-[1.12] tracking-[-0.6px] text-foreground md:text-[44px] lg:whitespace-nowrap">
            {title}
          </h2>

          <div className="min-w-0">
            <div className="w-full border border-black/20 bg-transparent">
              {items.map((it, i) => {
                const isOpen = i === openIndex;

                return (
                  <div key={i} className="border-b border-black/20 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
                      className={cn(
                        "flex w-full items-center justify-between text-left",
                        "gap-4 md:gap-6",
                        "px-4 py-4 md:px-8 md:py-6",
                        "transition-colors hover:bg-black/[0.02]",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/15"
                      )}
                      aria-expanded={isOpen}
                    >
                      <span className="min-w-0 font-display font-bold text-lg leading-[1.35] text-foreground md:text-[22px]">
                        {fmt(i + 1)}. {it.title}
                      </span>

                      <span className="shrink-0 select-none font-sans text-[22px] leading-none text-foreground/80 md:text-[26px]">
                        {isOpen ? "×" : "+"}
                      </span>
                    </button>

                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="bg-[#f6f2e8] px-4 pb-6 md:px-8 md:pb-8">
                          <p className="font-sans text-base leading-[1.75] tracking-[-0.2px] text-foreground/70 md:text-base">
                            {it.description}
                          </p>
                          <div className="mt-5 md:mt-6 h-px w-full bg-[#C9A35A]" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
