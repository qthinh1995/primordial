import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  validateContactForm,
  type ContactFormData,
} from "@/lib/contact-form-validation";

const resend = new Resend(process.env.RESEND_API_KEY);

// Get recipient email from environment variable or use a default
const RECIPIENT_EMAIL = process.env.CONTACT_FORM_EMAIL || "contact@example.com";

// Get sender email from environment variable
// Note: For production, use a verified domain email (e.g., "Contact Form <noreply@yourdomain.com>")
// For testing, you can use "onboarding@resend.dev" which is provided by Resend
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Contact Form <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate the form data
    const errorMessages = {
      fullNameRequired: "Full name is required",
      fullNameMinLength: "Full name must be at least 2 characters",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      phoneRequired: "Phone number is required",
      phoneInvalid: "Please enter a valid phone number",
      phoneMinLength: "Phone number must be at least 8 digits",
    };

    const validationErrors = validateContactForm(body, errorMessages);

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed", errors: validationErrors },
        { status: 400 }
      );
    }

    // Format phone number with country code
    const fullPhoneNumber = `${body.countryCode} ${body.phone}`;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${fullPhoneNumber}</p>
        ${body.message ? `<p><strong>Message:</strong></p><p>${body.message.replace(/\n/g, "<br>")}</p>` : ""}
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
      text: `
New Contact Form Submission

Full Name: ${body.fullName}
Email: ${body.email}
Phone: ${fullPhoneNumber}
${body.message ? `Message:\n${body.message}` : ""}

Submitted at: ${new Date().toLocaleString()}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
