import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .refine(
      (val) => {
        const words = val.trim().split(/\s+/);
        return words.length >= 2 && words.every((word) => word.length > 0);
      },
      { message: "Please enter your full name (first and last name)." }
    ),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        return phoneRegex.test(val) && val.replace(/\D/g, "").length >= 10;
      },
      { message: "Please enter a valid phone number." }
    ),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactSchema.parse(body);

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${validatedData.name}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><em>Submitted on ${new Date().toLocaleString("en-US", {
        timeZone: "America/Chicago",
        dateStyle: "full",
        timeStyle: "short",
      })}</em></p>
    `;

    const { data, error } = await resend.emails.send({
      from: "Prosper Contact Form <scott@kordial.io>",
      to: process.env.EMAIL_TO || "info@prosperplantscapes.com",
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: emailContent,
      replyTo: validatedData.email,
    });

    if (error) {
      console.error("Email send error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
