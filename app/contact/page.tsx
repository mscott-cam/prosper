"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

// Define the form schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Please enter your full name.",
    })
    .refine(
      (val) => {
        const words = val.trim().split(/\s+/);
        return words.length >= 2 && words.every((word) => word.length > 0);
      },
      {
        message: "Please enter your full name (first and last name).",
      }
    ),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        // Basic phone validation - accepts various formats
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        return phoneRegex.test(val) && val.replace(/\D/g, "").length >= 10;
      },
      {
        message: "Please enter a valid phone number.",
      }
    ),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast({
        title: "Success!",
        description:
          "Thank you for your inquiry. We'll be in touch within 24 hours.",
      });

      reset();
    } catch (error) {
      console.error("Form submission error:", error);

      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-sage px-8 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-charcoal font-heading mb-8 text-4xl font-thin leading-tight tracking-wide md:text-5xl">
            Contact
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600">
            Begin your botanical journey with a personalized consultation. We'll
            discuss your vision and create a proposal tailored to your space.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white px-8 py-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Contact Form */}
            <div className="slide-in-left">
              <h2 className="text-charcoal font-heading mb-8 text-2xl font-light">
                Schedule a Consultation
              </h2>
              <p className="mb-12 leading-relaxed text-stone-600">
                Complete the form below and we'll contact you within 24 hours to
                discuss your project and schedule an initial consultation.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
                noValidate
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-charcoal font-heading mb-3 block text-xs uppercase tracking-widest"
                    >
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      {...register("name")}
                      className={`focus:border-charcoal rounded-2xl border-stone-200 bg-transparent h-12 lg:h-auto ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-charcoal font-heading mb-3 block text-xs uppercase tracking-widest"
                    >
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className={`focus:border-charcoal rounded-2xl border-stone-200 bg-transparent h-12 lg:h-auto ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-charcoal font-heading mb-3 block text-xs uppercase tracking-widest"
                  >
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`focus:border-charcoal rounded-2xl border-stone-200 bg-transparent h-12 lg:h-auto ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-charcoal font-heading mb-3 block text-xs uppercase tracking-widest"
                  >
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={12}
                    className={`focus:border-charcoal resize-none rounded-2xl border-stone-200 bg-transparent ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Tell us about your space, timeline, budget range, and any specific requirements or preferences..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-charcoal hover:bg-sage hover:text-charcoal w-full rounded-2xl py-4 text-sm uppercase tracking-wider text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </div>

            {/* Contact Info & Image */}
            <div className="slide-in-right space-y-12">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/sidewalk.jpeg"
                  alt="Prosper Plantscapes studio"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>

              <div>
                <h3 className="text-charcoal font-heading mb-8 text-xl font-light">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-heading mb-2 text-xs uppercase tracking-widest text-stone-500">
                      Phone
                    </p>
                    <p className="text-stone-700">(512) 555-0123</p>
                  </div>
                  <div>
                    <p className="font-heading mb-2 text-xs uppercase tracking-widest text-stone-500">
                      Email
                    </p>
                    <p className="text-stone-700">
                      info@prosperplantscapes.com
                    </p>
                  </div>
                  <div>
                    <p className="font-heading mb-2 text-xs uppercase tracking-widest text-stone-500">
                      Location
                    </p>
                    <p className="text-stone-700">Austin, Texas</p>
                  </div>
                  <div>
                    <p className="font-heading mb-2 text-xs uppercase tracking-widest text-stone-500">
                      Hours
                    </p>
                    <div className="space-y-1 text-stone-700">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-charcoal font-heading mb-8 text-xl font-light">
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-stone-600">
                  <p>Downtown Austin</p>
                  <p>South Austin</p>
                  <p>North Austin</p>
                  <p>East Austin</p>
                  <p>West Austin</p>
                  <p>Cedar Park</p>
                  <p>Round Rock</p>
                  <p>Pflugerville</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-3">
            <div>
              <div className="mb-6 flex items-center space-x-4">
                <Image
                  src="/images/prosper-white-logo.png"
                  alt="Prosper Plantscapes Logo"
                  width={48}
                  height={48}
                  className="rounded-2xl object-contain"
                />
                <div className="font-display text-xl font-light tracking-[0.2em] text-white">
                  PROSPER PLANTSCAPES
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Professional botanical curation for Austin's most important
                spaces.
              </p>
            </div>

            <div>
              <h4 className="font-heading mb-6 text-sm font-medium uppercase tracking-widest text-white">
                Navigation
              </h4>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="hover:text-cream block text-sm text-white transition-all duration-200 hover:translate-x-1"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-cream block text-sm text-white transition-all duration-200 hover:translate-x-1"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="hover:text-cream block text-sm text-white transition-all duration-200 hover:translate-x-1"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-cream block text-sm text-white transition-all duration-200 hover:translate-x-1"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-heading mb-6 text-sm font-medium uppercase tracking-widest text-white">
                Connect
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-gray-300">
                  <p className="mb-1">(512) 555-0123</p>
                  <p className="mb-3">info@prosperplantscapes.com</p>
                </div>
                <Link
                  href="https://instagram.com/prosperplantscapes"
                  className="block text-sm text-gray-300 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-700 pt-8 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              © 2024 Prosper Plantscapes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
