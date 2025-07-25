"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Navigation */}
      <nav className="px-8 py-8 fade-in">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="flex-shrink-0 transform transition-transform duration-200 hover:scale-105"
            >
              <Image
                src="/images/prosper-white-logo.png"
                alt="Prosper Plantscapes Logo"
                width={56}
                height={56}
                className="rounded-2xl object-contain opacity-80 transition-opacity duration-200 hover:opacity-100"
              />
            </Link>
            <div className="flex space-x-8 text-sm uppercase tracking-widest">
              <Link
                href="/services"
                className="text-charcoal transition-colors hover:text-stone-600"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-charcoal transition-colors hover:text-stone-600"
              >
                About
              </Link>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <Link
              href="/"
              className="text-charcoal font-display text-3xl font-light tracking-[0.3em]"
            >
              PROSPER PLANTSCAPES
            </Link>
          </div>

          <div className="flex space-x-8 text-sm uppercase tracking-widest">
            <Link
              href="/contact"
              className="text-charcoal transition-colors hover:text-stone-600"
            >
              Contact
            </Link>
            <Link
              href="https://instagram.com/prosperplantscapes"
              className="text-charcoal transition-colors hover:text-stone-600"
            >
              Instagram
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-sage px-8 py-20">
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
      <section className="bg-white px-8 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-24 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="slide-in-left">
              <h2 className="text-charcoal font-heading mb-8 text-2xl font-light">
                Schedule a Consultation
              </h2>
              <p className="mb-12 leading-relaxed text-stone-600">
                Complete the form below and we'll contact you within 24 hours to
                discuss your project and schedule an initial consultation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
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
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus:border-charcoal rounded-2xl border-stone-200 bg-transparent"
                    />
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="focus:border-charcoal rounded-2xl border-stone-200 bg-transparent"
                    />
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:border-charcoal rounded-2xl border-stone-200 bg-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-charcoal font-heading mb-3 block text-xs uppercase tracking-widest"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="focus:border-charcoal text-charcoal w-full rounded-2xl border border-stone-200 bg-transparent px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">Consultation</option>
                    <option value="design">Design</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="all-services">All Services</option>
                  </select>
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="focus:border-charcoal resize-none rounded-2xl border-stone-200 bg-transparent"
                    placeholder="Tell us about your space, timeline, budget range, and any specific requirements or preferences..."
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-charcoal hover:bg-sage hover:text-charcoal w-full rounded-2xl py-4 text-sm uppercase tracking-wider text-white transition-colors"
                >
                  Send Inquiry
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
                      hello@prosperplantscapes.com
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
                  className="block text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-sm text-gray-300 transition-colors hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm text-gray-300 transition-colors hover:text-white"
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
                  <p className="mb-3">hello@prosperplantscapes.com</p>
                </div>
                <Link
                  href="https://instagram.com/prosperplantscapes"
                  className="block text-sm text-gray-300 transition-colors hover:text-white"
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
