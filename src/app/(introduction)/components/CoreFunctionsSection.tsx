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

  function toggle(i: number) {
    setOpenIndex((cur) => (cur === i ? -1 : i));
  }

  return (
    <section className="bg-background py-[120px]">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
          <h2 className="font-display text-[44px] leading-[1.1] text-foreground">
            {title}
          </h2>

          <div className="min-w-0">
            <div className="border bg-[#f6f2e8]">
              {items.map((it, i) => {
                const isOpen = i === openIndex;

                return (
                  <div key={i} className="border-b last:border-b-0">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                      onClick={() => toggle(i)}
                    >
                      <span className="font-serif text-[16px] text-foreground">
                        {i + 1}. {it.title}
                      </span>

                      <span
                        className={cn(
                          "select-none font-sans text-xl leading-none text-foreground/70",
                          isOpen && "text-foreground"
                        )}
                        aria-hidden
                      >
                        {isOpen ? "×" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-0">
                        <p className="font-sans text-sm leading-[1.7] text-foreground/70">
                          {it.description}
                        </p>
                      </div>
                    )}
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
