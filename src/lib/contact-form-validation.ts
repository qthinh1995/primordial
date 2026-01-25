// Types for form data and validation errors
export interface ContactFormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface ContactFormErrorMessages {
  fullNameRequired: string;
  fullNameMinLength: string;
  emailRequired: string;
  emailInvalid: string;
  phoneRequired: string;
  phoneInvalid: string;
  phoneMinLength: string;
}

/**
 * Validates an email address format
 * @param email - The email address to validate
 * @returns true if the email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a phone number
 * @param phone - The phone number to validate
 * @returns true if the phone number has at least 8 digits, false otherwise
 */
export function validatePhone(phone: string): boolean {
  // Remove spaces and non-digit characters for validation
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 8;
}

/**
 * Validates the entire contact form
 * @param formData - The form data to validate
 * @param errorMessages - The error messages to use for validation errors
 * @returns An object containing validation errors (empty if valid)
 */
export function validateContactForm(
  formData: ContactFormData,
  errorMessages: ContactFormErrorMessages
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  // Validate full name
  if (!formData.fullName.trim()) {
    errors.fullName = errorMessages.fullNameRequired;
  } else if (formData.fullName.trim().length < 2) {
    errors.fullName = errorMessages.fullNameMinLength;
  }

  // Validate email
  if (!formData.email.trim()) {
    errors.email = errorMessages.emailRequired;
  } else if (!validateEmail(formData.email.trim())) {
    errors.email = errorMessages.emailInvalid;
  }

  // Validate phone
  if (!formData.phone.trim()) {
    errors.phone = errorMessages.phoneRequired;
  } else if (!validatePhone(formData.phone)) {
    errors.phone = errorMessages.phoneInvalid;
  }

  return errors;
}
