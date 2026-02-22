"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
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
      className="py-24 bg-navy-900 text-white"
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
            <span className="text-gold-500 font-medium text-sm tracking-widest uppercase mb-4">
              Inquire
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Secure Your Position
            </h2>
            <p className="text-slate-300 leading-relaxed mb-10">
              Speak with our team about acquiring premium digital assets or
              discussing custom acquisition services for your organization.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-800 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-gold-500" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 tracking-widest uppercase mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:invest@voltura.com"
                    className="text-white hover:text-gold-500 transition-colors"
                  >
                    invest@voltura.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-800 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-gold-500" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 tracking-widest uppercase mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+15125670000"
                    className="text-white hover:text-gold-500 transition-colors"
                  >
                    +1 (512) 567-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-800 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold-500" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 tracking-widest uppercase mb-1">
                    Location
                  </span>
                  <span className="text-slate-300">
                    Austin, Texas, USA
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
            className="bg-white p-8 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight size={32} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
                  Inquiry Received
                </h3>
                <p className="text-slate-600">
                  Thank you for your interest. A member of our team will contact
                  you within 24-48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-gold-600 hover:text-gold-700 font-medium"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-slate-500 tracking-widest uppercase mb-2"
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
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-navy-900 focus:outline-none transition-colors text-navy-900"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-medium text-slate-500 tracking-widest uppercase mb-2"
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
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-navy-900 focus:outline-none transition-colors text-navy-900"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="asset"
                    className="block text-xs font-medium text-slate-500 tracking-widest uppercase mb-2"
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
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-navy-900 focus:outline-none transition-colors text-navy-900"
                    placeholder="Domain or Asset ID"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-500 tracking-widest uppercase mb-2"
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
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-navy-900 focus:outline-none transition-colors text-navy-900"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-500 tracking-widest uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-navy-900 focus:outline-none transition-colors text-navy-900 resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-navy-900 text-white font-medium tracking-wide hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="underline hover:text-slate-500">
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
