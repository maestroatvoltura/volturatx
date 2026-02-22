"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    asset: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", organization: "", asset: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-500 font-medium text-xs tracking-widest uppercase mb-4">
              Inquire
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 mb-6 tracking-tight">
              Secure Your Position
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10">
              Discuss acquiring premium digital assets or explore custom acquisition
              services for your organization. Our team responds within 24-48 hours.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800">
                  <Mail size={16} className="text-zinc-400" />
                </div>
                <div>
                  <span className="block text-xs text-zinc-600 tracking-widest uppercase mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:invest@voltura.com"
                    className="text-zinc-300 hover:text-zinc-100 transition-colors text-sm"
                  >
                    invest@voltura.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800">
                  <Phone size={16} className="text-zinc-400" />
                </div>
                <div>
                  <span className="block text-xs text-zinc-600 tracking-widest uppercase mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+15125670000"
                    className="text-zinc-300 hover:text-zinc-100 transition-colors text-sm"
                  >
                    +1 (512) 567-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800">
                  <Globe size={16} className="text-zinc-400" />
                </div>
                <div>
                  <span className="block text-xs text-zinc-600 tracking-widest uppercase mb-1">
                    Headquarters
                  </span>
                  <span className="text-zinc-400 text-sm">
                    United States
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/30 border border-zinc-800 p-8 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight size={28} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-4">
                  Inquiry Received
                </h3>
                <p className="text-zinc-500">
                  Thank you for your interest. A member of our team will contact
                  you within 24-48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-zinc-400 hover:text-zinc-200 text-sm transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-zinc-500 tracking-widest uppercase mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-zinc-600 focus:outline-none transition-colors text-zinc-200 text-sm rounded-md"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-medium text-zinc-500 tracking-widest uppercase mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-zinc-600 focus:outline-none transition-colors text-zinc-200 text-sm rounded-md"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="asset"
                    className="block text-xs font-medium text-zinc-500 tracking-widest uppercase mb-2"
                  >
                    Asset of Interest
                  </label>
                  <input
                    type="text"
                    id="asset"
                    name="asset"
                    value={formData.asset}
                    onChange={(e) =>
                      setFormData({ ...formData, asset: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-zinc-600 focus:outline-none transition-colors text-zinc-200 text-sm rounded-md"
                    placeholder="Domain or Asset ID"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-zinc-500 tracking-widest uppercase mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-zinc-600 focus:outline-none transition-colors text-zinc-200 text-sm rounded-md"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-500 tracking-widest uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-zinc-600 focus:outline-none transition-colors text-zinc-200 text-sm resize-none rounded-md"
                    placeholder="Tell us about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-zinc-100 text-zinc-950 font-medium text-sm tracking-wide hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-md"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-zinc-400 border-t-zinc-950 rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>

                <p className="text-xs text-zinc-600 text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-zinc-400 hover:text-zinc-300 transition-colors">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
