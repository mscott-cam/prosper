import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must be less than 100 characters." })
    .refine(
      (val) => {
        const words = val.trim().split(/\s+/);
        return words.length >= 2 && words.every((word) => word.length > 0);
      },
      { message: "Please enter your full name (first and last name)." }
    ),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(254), // RFC 5321 max email length
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        if (val.length > 20) return false; // Max international phone length
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        return phoneRegex.test(val) && val.replace(/\D/g, "").length >= 10;
      },
      { message: "Please enter a valid phone number." }
    ),
  referralSource: z.string().max(500).optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(3000, { message: "Message is too long." }),
});

// Rate limiting helper (consider using a proper rate limiter in production)
const submissionTracker = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS = 3; // 3 submissions per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const submissions = submissionTracker.get(ip) || [];

  // Remove old submissions outside the window
  const recentSubmissions = submissions.filter(
    (time) => now - time < RATE_LIMIT_WINDOW
  );

  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    return true;
  }

  recentSubmissions.push(now);
  submissionTracker.set(ip, recentSubmissions);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    const validatedData = contactSchema.parse(body);

    // Sanitize data for email (escape any HTML/special characters)
    const sanitize = (str: string) => str.replace(/[<>]/g, "");

    const emailContent = `
      New Contact Form Submission
      Name: ${sanitize(validatedData.name)}
      Email: ${validatedData.email}
      ${validatedData.phone ? `Phone: ${sanitize(validatedData.phone)}\n` : ""}
      ${
        validatedData.referralSource
          ? `How they heard about us: ${sanitize(validatedData.referralSource)}\n`
          : ""
      }
      Message: ${sanitize(validatedData.message)}

      --------------------
      Submitted on ${new Date().toLocaleString("en-US", {
        timeZone: "America/Chicago",
        dateStyle: "full",
        timeStyle: "short",
      })}
    `;

    const { data, error } = await resend.emails.send({
      from: "Prosper Contact Form <rachel@prosperplantscapes.com>",
      to: process.env.EMAIL_TO || "rachel@prosperplantscapes.com",
      subject: `New Contact Form Submission from ${validatedData.name}`,
      text: emailContent,
      replyTo: validatedData.email,
    });

    if (error) {
      // Log error but don't expose internal details
      console.error("Email send error:", {
        timestamp: new Date().toISOString(),
        error: error.message || "Unknown error",
      });
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Success response with security headers
    const response = NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );

    // Add security headers
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");

    return response;
  } catch (error) {
    // Log error securely without exposing sensitive details
    console.error("Contact form error:", {
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error",
    });

    if (error instanceof z.ZodError) {
      // Don't expose full error details to client
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
