"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/ui/animated-section";

interface TPOItem {
  title: string;
  content: string;
}

interface TPOModelSectionProps {
  title: string;
  description: React.ReactNode;
  items: TPOItem[];
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TPOModelSection({
  title,
  description,
  items,
}: TPOModelSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-[120px] max-md:py-16">
      <Container>
        <AnimatedSection className="flex gap-16 max-lg:flex-col items-start">
          {/* Left Column - Title and Description */}
          <div className="w-[648px] max-lg:w-full px-16 max-md:px-0 flex-shrink-0">
            <h2 className="font-display font-normal text-[44px] max-md:text-[32px] leading-[1.4] tracking-[-1.76px] max-md:tracking-[-1.28px] text-black mb-6">
              {title}
            </h2>
            <div className="font-sans text-lg max-md:text-base leading-[1.4] tracking-[-0.54px] max-md:tracking-[-0.32px] text-[var(--grey-500)]">
              {description}
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="flex-1 w-full flex flex-col gap-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border-b transition-all duration-300 ${
                    isOpen
                      ? "bg-[var(--brown-yellow-50)] border-[var(--yellow-600)] p-6"
                      : "border-[var(--grey-200)] px-6 py-2"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="font-display font-bold text-xl max-md:text-lg leading-7 text-[var(--grey-500)] flex-1 pr-4">
                      {item.title}
                    </h3>
                    {isOpen ? (
                      <CloseIcon className="text-[var(--grey-500)] flex-shrink-0" />
                    ) : (
                      <PlusIcon className="text-[var(--grey-500)] flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[500px] mt-5" : "max-h-0"
                    }`}
                  >
                    <p className="font-sans text-base leading-6 tracking-[-0.32px] text-[var(--grey-500)]">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
