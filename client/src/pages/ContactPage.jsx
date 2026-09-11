import React, { useState, useEffect } from "react";
import { Mail, Phone, Send, CheckCircle2, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloatButton from "../components/WhatsAppFloatButton";
import { SERVICES_DATA } from "../data/servicesData";

const COLORS = {
  primary: "#082B5C",
  secondary: "#00706F",
  accent: "#F45B16",
  bg: "#F7F8F5",
  neutral: "#46515B",
};
const PHONE = "+1 (778) 858-6004";
const PHONE_HREF = "tel:+17788586004";
const EMAIL = "info@pestexit-ontario.com";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: COLORS.bg, color: COLORS.neutral }} className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section style={{ backgroundColor: COLORS.primary }} className="py-14 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3" style={{ fontFamily: "Archivo, sans-serif" }}>
            Contact Us
          </h1>
          <p className="text-white/80 max-w-xl">
            Have a pest problem or a question? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
        {/* Contact info */}
        <div className="lg:col-span-1 space-y-5">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#eef1f0" }}>
                <Phone size={18} style={{ color: COLORS.secondary }} />
              </div>
              <div>
                <p className="text-xs" style={{ color: COLORS.neutral }}>Call us</p>
                <a href={PHONE_HREF} className="font-semibold" style={{ color: COLORS.primary }}>{PHONE}</a>
              </div>
            </div>
            <p className="text-xs" style={{ color: COLORS.neutral }}>Mon–Sat: 8:00am – 8:00pm</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#eef1f0" }}>
                <Mail size={18} style={{ color: COLORS.secondary }} />
              </div>
              <div>
                <p className="text-xs" style={{ color: COLORS.neutral }}>Email us</p>
                <a href={`mailto:${EMAIL}`} className="font-semibold break-all" style={{ color: COLORS.primary }}>{EMAIL}</a>
              </div>
            </div>
            <p className="text-xs" style={{ color: COLORS.neutral }}>We reply within 24 hours.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#eef1f0" }}>
                <MapPin size={18} style={{ color: COLORS.secondary }} />
              </div>
              <div>
                <p className="text-xs" style={{ color: COLORS.neutral }}>Service area</p>
                <p className="font-semibold" style={{ color: COLORS.primary }}>Southwestern &amp; Southern Ontario</p>
              </div>
            </div>
            <p className="text-xs" style={{ color: COLORS.neutral }}>Including London, Kitchener, Hamilton &amp; more.</p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle2 size={56} style={{ color: COLORS.secondary }} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>Thank you!</h3>
              <p className="text-sm">Your message has been received. Our team will reach out to you shortly.</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-1" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
                Send us a message
              </h2>
              <p className="text-sm mb-6">Fill out the form and we'll be in touch.</p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 sm:col-span-2"
                  style={{ borderColor: "#d8dce0" }}
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  required
                  className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2"
                  style={{ borderColor: "#d8dce0" }}
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2"
                  style={{ borderColor: "#d8dce0" }}
                />
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 sm:col-span-2"
                  style={{ borderColor: "#d8dce0" }}
                >
                  <option value="">Select a Subject *</option>
                  {SERVICES_DATA.map((s) => (
                    <option key={s.slug} value={s.name}>{s.name}</option>
                  ))}
                  <option value="General Enquiry">General Enquiry</option>
                </select>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  rows={5}
                  required
                  className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 sm:col-span-2"
                  style={{ borderColor: "#d8dce0" }}
                />

                <label className="sm:col-span-2 flex items-start gap-2 text-xs cursor-pointer">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                    required
                    className="mt-0.5 accent-orange-500"
                  />
                  <span>I agree to be contacted regarding my enquiry and accept the privacy policy.</span>
                </label>

                <button
                  type="submit"
                  className="sm:col-span-2 rounded-md py-3 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:-translate-y-0.5 active:scale-95"
                  style={{ backgroundColor: COLORS.accent }}
                >
                  Submit <Send size={16} />
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}