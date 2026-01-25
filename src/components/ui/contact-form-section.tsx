"use client";

import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactForm } from "@/components/ui/contact-form";
import { cn } from "@/lib/utils";

export interface ContactFormSectionProps {
  // Locale for internalized translations
  locale: "en" | "vi";
  // Section title and description (context-specific, e.g., contact vs partnership)
  title?: string;
  description?: string;
  // Layout variant
  variant?: "centered" | "two-column";
  // Optional styling overrides
  className?: string;
}

export function ContactFormSection({
  locale,
  title,
  description,
  variant = "centered",
  className,
}: ContactFormSectionProps) {
  const formContent = <ContactForm locale={locale} variant={variant} />;

  // Centered variant
  if (variant === "centered") {
    const sectionContent = (
      <div className={cn("flex flex-col items-center gap-10", className)}>
        {/* Header */}
        {title && (
          <div className="max-w-[960px] text-center">
            <h2 className="mb-6 font-display font-normal text-[44px] text-black max-md:text-[32px] leading-[1.4] tracking-[-1.76px] max-md:tracking-[-1.28px]">
              {title}
            </h2>
            {description && (
              <p className="font-sans text-[var(--grey-500)] max-md:text-base text-lg leading-[1.4] tracking-[-0.54px] max-md:tracking-[-0.32px]">
                {description}
              </p>
            )}
          </div>
        )}
        {formContent}
      </div>
    );

    return (
      <section className="py-[64px] max-md:py-16 md:py-[120px]">
        <Container className="px-4 md:px-12">{sectionContent}</Container>
      </section>
    );
  }

  return (
    <section className={className}>
      <div className="bg-white px-4 md:px-0 py-16 md:py-[120px] w-full">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex md:flex-row flex-col gap-8 md:gap-16">
            {/* Left side - Title and Description */}
            {(title || description) && (
              <div className="flex flex-col flex-1 gap-6">
                <div className="flex flex-col gap-6">
                  {title && (
                    <h2 className="font-display font-normal text-[32px] text-black md:text-[44px] md:text-left text-center leading-normal md:leading-[1.4] tracking-[-1.28px] md:tracking-[-1.76px]">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p className="font-sans font-normal text-[#2c2c2c] text-base md:text-lg md:text-left text-center leading-6 md:leading-[1.4] tracking-[-0.32px] md:tracking-[-0.54px]">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Right side - Contact Form */}
            <div className="flex-1 px-0 md:px-10">{formContent}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
