"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/contact-form-validation";
import { Label } from "./label";
import { Input } from "./input";
import { Select } from "./select";
import { Textarea } from "./textarea";
import { COUNTRY_CODES } from "@/lib/constants";

// Translations for form labels
const translations = {
  en: {
    fullName: "Full Name",
    fullNamePlaceholder: "Nguyen Ngoc Giao",
    email: "Email",
    emailPlaceholder: "JaneSmith@gmail.com",
    phone: "Phone number",
    phonePlaceholder: "234 234 235",
    message: "Message",
    messagePlaceholder: "Enter your message here",
    required: "(Required)",
    submitButton: "SUBMIT",
    submitting: "SUBMITTING...",
    successMessage: "Thank you! Your message has been sent successfully.",
    errorMessage: "Something went wrong. Please try again later.",
    countryCode: "+84",
    errors: {
      fullNameRequired: "Full name is required",
      fullNameMinLength: "Full name must be at least 2 characters",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      phoneRequired: "Phone number is required",
      phoneInvalid: "Please enter a valid phone number",
      phoneMinLength: "Phone number must be at least 8 digits",
    },
  },
  vi: {
    fullName: "Họ & Tên",
    fullNamePlaceholder: "Nguyễn Ngọc Giao",
    email: "Email",
    emailPlaceholder: "JaneSmith@gmail.com",
    phone: "Số điện thoại",
    phonePlaceholder: "234 234 235",
    message: "Lời nhắn",
    messagePlaceholder: "Nhập lời nhắn của bạn tại đây",
    required: "(Bắt buộc)",
    submitButton: "GỬI THÔNG TIN",
    submitting: "ĐANG GỬI...",
    successMessage: "Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.",
    errorMessage: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
    countryCode: "+84",
    errors: {
      fullNameRequired: "Họ và tên là bắt buộc",
      fullNameMinLength: "Họ và tên phải có ít nhất 2 ký tự",
      emailRequired: "Email là bắt buộc",
      emailInvalid: "Vui lòng nhập địa chỉ email hợp lệ",
      phoneRequired: "Số điện thoại là bắt buộc",
      phoneInvalid: "Vui lòng nhập số điện thoại hợp lệ",
      phoneMinLength: "Số điện thoại phải có ít nhất 8 chữ số",
    },
  },
};

export interface ContactFormProps {
  readonly locale: "en" | "vi";
  readonly variant?: "centered" | "two-column";
}

export function ContactForm({
  locale,
  variant = "centered",
}: ContactFormProps) {
  // Get translations based on locale
  const t = translations[locale];

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    countryCode: t.countryCode,
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateContactForm(formData, t.errors);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear any previous errors and status
    setErrors({});
    setSubmitStatus("idle");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      // Success - reset form and show success message
      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        countryCode: t.countryCode,
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "flex flex-col gap-5 md:gap-6 w-full",
        variant === "centered" && "max-w-[880px]",
        variant === "two-column" && "gap-5 md:gap-5"
      )}
    >
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <Label required requiredText={t.required} variant={variant}>
          {t.fullName}
        </Label>
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder={t.fullNamePlaceholder}
          variant={variant}
          error={!!errors.fullName}
          errorMessage={errors.fullName}
        />
      </div>

      {/* Email and Phone Row */}
      <div className="flex max-md:flex-col gap-6">
        {/* Email */}
        <div className="flex flex-col flex-1 gap-2">
          <Label required requiredText={t.required} variant={variant}>
            {t.email}
          </Label>
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t.emailPlaceholder}
            variant={variant}
            error={!!errors.email}
            errorMessage={errors.email}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col flex-1 gap-2">
          <Label required requiredText={t.required} variant={variant}>
            {t.phone}
          </Label>
          <div className="flex gap-3">
            {/* Country Code Dropdown */}
            <Select
              value={formData.countryCode}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  countryCode: e.target.value,
                }))
              }
              options={COUNTRY_CODES}
              variant={variant}
              wrapperClassName="gap-0 shrink-0"
            />
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t.phonePlaceholder}
              variant={variant}
              error={!!errors.phone}
              wrapperClassName="gap-0 flex-1"
            />
          </div>
          {errors.phone && (
            <span className="font-sans text-red-500 text-sm">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <Label variant={variant}>{t.message}</Label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={t.messagePlaceholder}
          rows={4}
          variant={variant}
        />
      </div>

      {/* Submit Status Messages */}
      {submitStatus === "success" && (
        <div className="bg-green-50 px-4 py-3 border border-green-200 rounded-lg font-sans text-green-800 text-sm">
          {t.successMessage}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 px-4 py-3 border border-red-200 rounded-lg font-sans text-red-800 text-sm">
          {t.errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "px-8 py-5 rounded-full w-full font-sans font-semibold text-white text-base leading-6 tracking-[-0.32px] transition-colors",
          variant === "centered"
            ? "bg-[var(--grey-500)] hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
            : "bg-[#2c2c2c] hover:bg-[#1f1f1f] px-6 md:px-8 py-4 md:py-5 text-sm md:text-base uppercase leading-normal md:leading-6 disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? t.submitting : t.submitButton}
      </button>
    </form>
  );
}
