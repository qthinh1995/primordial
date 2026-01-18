"use client";

import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Function {
  title: string;
  description: string;
}

interface KeyFunctionsSectionProps {
  title: string;
  functions: Function[];
}

export function KeyFunctionsSection({
  title,
  functions,
}: KeyFunctionsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // First item expanded by default
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleFunction = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-[120px] transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <Container>
        <div className="flex flex-col gap-16 md:flex-row md:items-start">
          {/* Title */}
          <div className="w-full shrink-0 md:w-[416px]">
            <h2 className="font-display text-[44px] font-normal leading-[1.4] tracking-[-1.76px] text-black uppercase">
              {title}
            </h2>
          </div>

          {/* Functions List */}
          <div className="flex flex-1 flex-col">
            {functions.map((func, index) => {
              const isExpanded = expandedIndex === index;
              const isFirst = index === 0;

              return (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col border-b transition-all duration-300",
                    isFirst
                      ? "bg-[#f7f2e6] border-[#b39355] p-6"
                      : "border-[#9e9e9e] px-6 py-2"
                  )}
                >
                  <button
                    onClick={() => toggleFunction(index)}
                    className="flex items-center justify-between gap-4 text-left"
                  >
                    <h3 className="font-display text-xl font-bold leading-7 tracking-[-0.6px] text-foreground flex-1">
                      {func.title}
                    </h3>
                    <div className="shrink-0 size-6">
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
                    <p
                      className={cn(
                        "mt-5 font-sans text-base leading-6 tracking-[-0.32px] text-foreground transition-all duration-500",
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      )}
                    >
                      {func.description}
                    </p>
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
