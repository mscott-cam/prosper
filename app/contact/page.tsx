"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { CustomCursor } from "@/components/custom-cursor";
import { Reveal } from "@/components/motion/reveal";
import { LeafMark } from "@/components/marks/leaf-mark";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your full name." })
    .refine(
      (val) => {
        const words = val.trim().split(/\s+/);
        return words.length >= 2 && words.every((word) => word.length > 0);
      },
      { message: "Please enter your full name (first and last name)." },
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
      { message: "Please enter a valid phone number." },
    ),
  referralSource: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Please share at least a sentence about the room." }),
});

type FormData = z.infer<typeof formSchema>;

const fieldClass =
  "w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 font-display text-lg text-ink placeholder:font-sans placeholder:text-[0.95rem] placeholder:text-ink-soft/60 focus:border-clay focus:outline-none focus:ring-0 transition-colors";

const labelClass =
  "marginalia mb-3 block text-ink-soft";

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast({
        title: "Sent.",
        description: "Thank you for your inquiry — we'll be in touch shortly.",
      });

      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-bone text-ink">
      <CustomCursor />
      <SiteNav variant="solid" />

      {/* Hero / Intro */}
      <section className="relative bg-bone pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Reveal as="div" className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8">
              <p className="marginalia flex items-center gap-3 text-ink-soft">
                <span className="inline-block h-px w-10 bg-clay" />
                № 003 — Inquire
              </p>
              <h1 className="mt-10 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] tracking-tightest-display text-ink">
                Begin a <em className="font-light">project</em>.
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 md:pt-16">
              <div className="border-l border-ink/20 pl-6">
                <p className="marginalia text-clay">— A note</p>
                <p className="mt-4 font-display text-lg italic leading-snug text-ink-soft md:text-xl">
                  Tell us about the room, the light, the way you spend the day —
                  we&apos;ll draft a proposal within the week.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="relative bg-bone pb-32 md:pb-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="h-px w-full bg-ink/15" />
          <div className="grid grid-cols-12 gap-12 pt-16 md:gap-20 md:pt-24">
            {/* Form */}
            <div className="col-span-12 md:col-span-7">
              <Reveal as="div" delay={0.05}>
                <p className="marginalia text-clay">— The form</p>
                <h2 className="mt-4 font-display text-4xl italic text-ink md:text-5xl">
                  Schedule a consultation.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                  Complete the lines below and we&apos;ll be in touch as soon as
                  we can — usually within a day or two.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-12 space-y-10"
                  noValidate
                >
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        maxLength={100}
                        autoComplete="name"
                        {...register("name")}
                        className={`${fieldClass} ${
                          errors.name ? "border-clay" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-2 marginalia text-clay">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        autoComplete="tel"
                        {...register("phone")}
                        className={`${fieldClass} ${
                          errors.phone ? "border-clay" : ""
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-2 marginalia text-clay">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      maxLength={254}
                      autoComplete="email"
                      {...register("email")}
                      className={`${fieldClass} ${
                        errors.email ? "border-clay" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-2 marginalia text-clay">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="referralSource" className={labelClass}>
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      id="referralSource"
                      maxLength={500}
                      {...register("referralSource")}
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Project details *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      maxLength={3000}
                      placeholder="Tell us about your space, timeline, budget range, and any specific preferences…"
                      {...register("message")}
                      className={`${fieldClass} resize-none ${
                        errors.message ? "border-clay" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-2 marginalia text-clay">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-cursor="hover"
                      className="group inline-flex items-center gap-4 rounded-full bg-clay px-9 py-4 font-mono text-[0.78rem] uppercase tracking-[0.24em] text-bone transition-colors hover:bg-clay-deep disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending…" : "Send inquiry"}
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>

            {/* Aside: image + contact info */}
            <aside className="col-span-12 md:col-span-5">
              <Reveal as="div" delay={0.15} className="space-y-12">
                <figure className="relative aspect-[4/5] overflow-hidden bg-bone-warm shadow-[0_30px_80px_-40px_rgba(31,42,27,0.45)]">
                  <Image
                    src="/images/conference_room.jpeg"
                    alt="A Prosper Plantscapes conference room install"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-sage/25 mix-blend-multiply" />
                </figure>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <LeafMark size={20} className="mt-1 text-moss" />
                    <div>
                      <p className="marginalia text-clay">— Studio</p>
                      <p className="mt-3 font-display text-xl italic text-ink">
                        Prosper Plantscapes
                      </p>
                      <p className="marginalia mt-2 text-ink-soft">
                        Austin · Texas
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-ink/15" />

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="marginalia text-ink-soft">Email</p>
                      <a
                        href="mailto:info@prosperplantscapes.com"
                        className="mt-3 block font-display text-base italic text-ink hover:text-clay"
                        data-cursor="hover"
                      >
                        info@prosperplantscapes.com
                      </a>
                    </div>
                    <div>
                      <p className="marginalia text-ink-soft">Instagram</p>
                      <a
                        href="https://instagram.com/prosperplantscapes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block font-display text-base italic text-ink hover:text-clay"
                        data-cursor="hover"
                      >
                        @prosperplantscapes ↗
                      </a>
                    </div>
                  </div>

                  <div className="h-px w-full bg-ink/15" />

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="marginalia text-ink-soft">Hours</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink">
                        Mon — Fri <br /> 9:00 — 5:00
                      </p>
                      <p className="marginalia mt-2 text-ink-soft">
                        Weekends by appointment
                      </p>
                    </div>
                    <div>
                      <p className="marginalia text-ink-soft">Service area</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink">
                        Austin &<br /> Central Texas
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
