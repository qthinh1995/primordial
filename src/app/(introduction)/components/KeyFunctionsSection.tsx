"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Function {
  title: string;
  description: ReactNode;
}

interface KeyFunctionsSectionProps {
  title: string;
  functions: Function[];
}

export function KeyFunctionsSection({
  title,
  functions,
}: KeyFunctionsSectionProps) {
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLElement>();
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // First item expanded by default

  const toggleFunction = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-[64px] md:py-[120px] transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <Container className="px-4 md:px-12">
        <div className="flex md:flex-row flex-col md:items-start gap-10 md:gap-16">
          {/* Title */}
          <div className="w-full md:w-[416px] shrink-0">
            <span className="md:hidden block w-full font-sans font-bold text-red-500 text-center italic">
              PRIMORDIAL COMPANY LIMITED
            </span>
            <h2 className="font-display font-normal text-[32px] text-black md:text-[44px] text-center uppercase leading-[1.4] tracking-[-1.76px]">
              {title}
            </h2>
          </div>

          {/* Functions List */}
          <div className="flex flex-col flex-1">
            {functions.map((func, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col border-b transition-all duration-300",
                    isExpanded
                      ? "bg-[#f7f2e6] border-[#b39355] p-6"
                      : "border-[#9e9e9e] px-6 py-2"
                  )}
                >
                  <button
                    onClick={() => toggleFunction(index)}
                    className="flex justify-between items-center gap-4 text-left"
                  >
                    <h3
                      className={cn(
                        "flex-1 font-display font-bold text-lg md:text-xl leading-7 tracking-[-0.6px]",
                        isExpanded ? "text-accent" : "text-foreground"
                      )}
                    >
                      {func.title}
                    </h3>
                    <div className="size-6 shrink-0">
                      {isExpanded ? (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                  {isExpanded && (
                    <div
                      className={cn(
                        "mt-5 font-sans text-foreground text-base leading-6 tracking-[-0.32px] transition-all duration-500",
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      )}
                    >
                      {func.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
