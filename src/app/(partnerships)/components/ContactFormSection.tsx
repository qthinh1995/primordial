"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";

interface FormLabels {
  title: string;
  description: string;
  fullName: string;
  fullNamePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  message: string;
  messagePlaceholder: string;
  required: string;
  submitButton: string;
  countryCode: string;
}

interface ContactFormSectionProps {
  labels: FormLabels;
}

export function ContactFormSection({ labels }: ContactFormSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: labels.countryCode,
    phone: "",
    message: "",
  });

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

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section ref={sectionRef} className="py-[120px] max-md:py-16">
      <Container>
        <div
          className={`flex flex-col items-center gap-10 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="text-center max-w-[960px]">
            <h2 className="font-display font-normal text-[44px] max-md:text-[32px] leading-[1.4] tracking-[-1.76px] max-md:tracking-[-1.28px] text-black mb-6">
              {labels.title}
            </h2>
            <p className="font-sans text-lg max-md:text-base leading-[1.4] tracking-[-0.54px] max-md:tracking-[-0.32px] text-[var(--grey-500)]">
              {labels.description}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[880px] flex flex-col gap-6"
          >
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1">
                <span className="font-sans font-semibold text-sm leading-5 tracking-[-0.28px] text-[var(--grey-700)]">
                  {labels.fullName}
                </span>
                <span className="font-sans text-sm leading-5 tracking-[-0.28px] text-[var(--grey-200)]">
                  {labels.required}
                </span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder={labels.fullNamePlaceholder}
                className="w-full p-4 bg-white border border-[var(--grey-100)] rounded text-base leading-6 tracking-[-0.32px] text-[var(--grey-500)] placeholder:text-[var(--grey-200)] focus:outline-none focus:border-[var(--yellow-500)] transition-colors"
              />
            </div>

            {/* Email and Phone Row */}
            <div className="flex gap-6 max-md:flex-col">
              {/* Email */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="flex items-center gap-1">
                  <span className="font-sans font-semibold text-sm leading-5 tracking-[-0.28px] text-[var(--grey-700)]">
                    {labels.email}
                  </span>
                  <span className="font-sans text-sm leading-5 tracking-[-0.28px] text-[var(--grey-200)]">
                    {labels.required}
                  </span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={labels.emailPlaceholder}
                  className="w-full p-4 bg-white border border-[var(--grey-100)] rounded text-base leading-6 tracking-[-0.32px] text-[var(--grey-500)] placeholder:text-[var(--grey-200)] focus:outline-none focus:border-[var(--yellow-500)] transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="flex items-center gap-1">
                  <span className="font-sans font-semibold text-sm leading-5 tracking-[-0.28px] text-[var(--grey-700)]">
                    {labels.phone}
                  </span>
                  <span className="font-sans text-sm leading-5 tracking-[-0.28px] text-[var(--grey-200)]">
                    {labels.required}
                  </span>
                </label>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-3 py-4 bg-white border border-[var(--grey-100)] rounded shrink-0">
                    <span className="font-sans text-base leading-6 tracking-[-0.32px] text-[var(--grey-700)]">
                      {formData.countryCode}
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[var(--grey-500)]"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder={labels.phonePlaceholder}
                    className="flex-1 p-4 bg-white border border-[var(--grey-100)] rounded text-base leading-6 tracking-[-0.32px] text-[var(--grey-500)] placeholder:text-[var(--grey-200)] focus:outline-none focus:border-[var(--yellow-500)] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1">
                <span className="font-sans font-semibold text-sm leading-5 tracking-[-0.28px] text-[var(--grey-700)]">
                  {labels.message}
                </span>
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={labels.messagePlaceholder}
                rows={4}
                className="w-full p-4 bg-white border border-[var(--grey-100)] rounded text-base leading-6 tracking-[-0.32px] text-[var(--grey-500)] placeholder:text-[var(--grey-200)] focus:outline-none focus:border-[var(--yellow-500)] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-5 px-8 bg-[var(--grey-500)] hover:bg-black text-white font-sans font-semibold text-base leading-6 tracking-[-0.32px] rounded-full transition-colors"
            >
              {labels.submitButton}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
