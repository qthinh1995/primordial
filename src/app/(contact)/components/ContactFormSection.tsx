"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ContactFormSectionProps {
  title: string;
  description: string;
  form: {
    fullNameLabel: string;
    fullNamePlaceholder: string;
    fullNameRequired: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailRequired: string;
    phoneLabel: string;
    phonePlaceholder: string;
    phoneRequired: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
  };
}

export function ContactFormSection({
  title,
  description,
  form,
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+84",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-white px-4 md:px-0 py-16 md:py-[120px] w-full">
      <div className="max-w-[1344px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left side - Title and Description */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-normal text-black text-[32px] leading-normal md:text-[44px] md:leading-[1.4] tracking-[-1.28px] md:tracking-[-1.76px] text-center md:text-left">
                {title}
              </h2>
              <p className="font-sans font-normal text-[#2c2c2c] text-base leading-6 md:text-lg md:leading-[1.4] tracking-[-0.32px] md:tracking-[-0.54px] text-center md:text-left">
                {description}
              </p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="flex-1 px-0 md:px-10">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 md:gap-5"
            >
              {/* Full Name Input */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <label className="font-sans font-semibold text-[#1f1f1f] text-xs md:text-sm leading-4 md:leading-5 tracking-[-0.28px]">
                    {form.fullNameLabel}
                  </label>
                  <span className="font-sans font-normal text-[#9e9e9e] text-xs md:text-sm leading-4 md:leading-5">
                    {form.fullNameRequired}
                  </span>
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={form.fullNamePlaceholder}
                  className="bg-white border border-[#bebebe] rounded px-4 py-3 md:py-4 font-sans font-normal text-sm md:text-base leading-5 md:leading-6 tracking-[-0.28px] md:tracking-[-0.32px] text-black placeholder:text-[#9e9e9e] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <label className="font-sans font-semibold text-[#1f1f1f] text-xs md:text-sm leading-4 md:leading-5 tracking-[-0.28px]">
                    {form.emailLabel}
                  </label>
                  <span className="font-sans font-normal text-[#9e9e9e] text-xs md:text-sm leading-4 md:leading-5">
                    {form.emailRequired}
                  </span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={form.emailPlaceholder}
                  className="bg-white border border-[#bebebe] rounded px-4 py-3 md:py-4 font-sans font-normal text-sm md:text-base leading-5 md:leading-6 tracking-[-0.28px] md:tracking-[-0.32px] text-black placeholder:text-[#9e9e9e] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <label className="font-sans font-semibold text-[#1f1f1f] text-xs md:text-sm leading-4 md:leading-5 tracking-[-0.28px]">
                    {form.phoneLabel}
                  </label>
                  <span className="font-sans font-normal text-[#9e9e9e] text-xs md:text-sm leading-4 md:leading-5">
                    {form.phoneRequired}
                  </span>
                </div>
                <div className="flex gap-3">
                  {/* Country Code Dropdown */}
                  <div className="relative">
                    <select
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          countryCode: e.target.value,
                        }))
                      }
                      className="appearance-none bg-white border border-[#bebebe] rounded px-3 py-3 md:py-4 pr-8 font-sans font-normal text-sm md:text-base leading-5 md:leading-6 tracking-[-0.28px] md:tracking-[-0.32px] text-[#1f1f1f] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                    >
                      <option value="+84">+ 84</option>
                      <option value="+1">+ 1</option>
                      <option value="+44">+ 44</option>
                      <option value="+61">+ 61</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-[#1f1f1f] pointer-events-none" />
                  </div>
                  {/* Phone Number */}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={form.phonePlaceholder}
                    className="flex-1 bg-white border border-[#bebebe] rounded px-4 py-3 md:py-4 font-sans font-normal text-sm md:text-base leading-5 md:leading-6 tracking-[-0.28px] md:tracking-[-0.32px] text-black placeholder:text-[#9e9e9e] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label className="font-sans font-semibold text-[#1f1f1f] text-xs md:text-sm leading-4 md:leading-5 tracking-[-0.28px]">
                  {form.messageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={form.messagePlaceholder}
                  rows={4}
                  className="bg-white border border-[#bebebe] rounded px-4 py-3 md:py-4 font-sans font-normal text-sm md:text-base leading-5 md:leading-6 tracking-[-0.28px] md:tracking-[-0.32px] text-black placeholder:text-[#9e9e9e] resize-none focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#2c2c2c] hover:bg-[#1f1f1f] transition-colors text-white font-sans font-semibold text-sm md:text-base leading-normal md:leading-6 tracking-[-0.32px] uppercase px-6 md:px-8 py-4 md:py-5 rounded-full"
              >
                {form.submitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
