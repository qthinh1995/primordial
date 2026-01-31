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
      subject: `[Primodial] Thư mời liên hệ từ khách hàng ${body.fullName}`,
      html: `
        <h2>Thư mời liên hệ từ khách hàng</h2>
        <p>Bạn nhận được thư mời liên hệ từ khách hàng với thông tin như sau:</p>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; margin: 20px 0;">
          <p><strong>Họ và tên:</strong> ${body.fullName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Số điện thoại:</strong> ${fullPhoneNumber}</p>
          ${body.message ? `<p><strong>Tin nhắn:</strong></p><p style="white-space: pre-wrap;">${body.message.replaceAll("\n", "<br>")}</p>` : ""}
        </div>
        
        <hr>
        <p style="color: #999; font-size: 12px;">Gửi lúc: ${new Date().toLocaleString("vi-VN")}</p>
      `,
      text: `
Thư mời liên hệ từ khách hàng

Bạn nhận được thư mời liên hệ từ khách hàng với thông tin như sau:

Họ và tên: ${body.fullName}
Email: ${body.email}
Số điện thoại: ${fullPhoneNumber}
${body.message ? `Tin nhắn:\n${body.message}` : ""}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gửi lúc: ${new Date().toLocaleString("vi-VN")}
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
