"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";

export type CoreFunctionItem = {
  title: string;
  description: string;
};

export function CoreFunctionsSection(props: {
  title: string;
  items: CoreFunctionItem[];
  defaultOpenIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number>(
    typeof props.defaultOpenIndex === "number" ? props.defaultOpenIndex : 0
  );

  const rows = useMemo(
    () =>
      (props.items || []).map((it, i) => ({
        idx: i,
        number: `${i + 1}.`,
        ...it,
      })),
    [props.items]
  );

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16 items-start">
          <div className="md:col-span-4">
            <h2 className="font-[var(--font-display)] text-[34px] md:text-[44px] leading-[1.15] tracking-[-0.02em] text-zinc-900">
              {props.title}
            </h2>
          </div>

          <div className="md:col-span-8">
            <div className="border-t border-zinc-200">
              {rows.map((r) => {
                const isOpen = r.idx === openIndex;

                return (
                  <div key={r.idx} className="border-b border-zinc-200">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : r.idx)}
                      className={[
                        "w-full text-left flex items-start justify-between gap-6",
                        "px-6 py-5 md:px-8 md:py-6",
                        "transition-colors",
                        isOpen ? "bg-[#F3EEE2]" : "bg-white hover:bg-zinc-50",
                      ].join(" ")}
                    >
                      <div className="min-w-0 flex items-start gap-3">
                        <span className="font-[var(--font-display)] text-[16px] md:text-[18px] text-zinc-900">
                          {r.number}
                        </span>
                        <span className="font-[var(--font-display)] text-[16px] md:text-[18px] text-zinc-900">
                          {r.title}
                        </span>
                      </div>

                      <span className="shrink-0 text-zinc-700 text-xl leading-none">
                        {isOpen ? "×" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="bg-[#F3EEE2] px-6 pb-6 md:px-8 md:pb-8">
                        <p className="text-[14px] md:text-[15px] leading-7 text-zinc-700 max-w-[760px]">
                          {r.description}
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
