import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, ChevronDown, ChevronUp, ShieldCheck, Leaf, Clock } from "lucide-react";
import { SERVICES_DATA } from "../data/servicesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloatButton from "../components/WhatsAppFloatButton";

const COLORS = {
  primary: "#082B5C",
  secondary: "#00706F",
  accent: "#F45B16",
  bg: "#F7F8F5",
  neutral: "#46515B",
};
const PHONE = "+1 (778) 858-6004";
const PHONE_HREF = "tel:+17788586004";

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  return (
    <div style={{ backgroundColor: COLORS.bg, color: COLORS.neutral }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: COLORS.primary }}>
        <div className="absolute inset-0 opacity-25">
          <img src={service.hero} alt={service.name} className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 text-white">
          <div className="text-xs mb-3 text-white/70">
            <Link to="/" className="hover:text-orange-300">Home</Link> &nbsp;/&nbsp;{" "}
            <Link to="/#services" className="hover:text-orange-300">Services</Link> &nbsp;/&nbsp;{" "}
            <span>{service.name}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl" style={{ fontFamily: "Archivo, sans-serif" }}>
            {service.name}
          </h1>
          <p className="max-w-2xl text-white/85 mb-6">{service.blurb}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm text-white hover:opacity-90 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.accent }}
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm border-2 border-white text-white hover:bg-white/10 transition-all"
            >
              <Phone size={16} /> Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Intro + hero image */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold tracking-wide mb-2" style={{ color: COLORS.secondary }}>
            About This Service
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
            Professional {service.name}
          </h2>
          <p className="text-sm leading-relaxed mb-6">{service.intro}</p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} style={{ color: COLORS.accent }} />
              <span className="text-sm">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf size={18} style={{ color: COLORS.accent }} />
              <span className="text-sm">Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} style={{ color: COLORS.accent }} />
              <span className="text-sm">Fast Service</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg h-80">
          <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Signs */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-semibold tracking-wide mb-2" style={{ color: COLORS.secondary }}>
            Warning Signs
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
            Signs You Need {service.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.signs.map((sign) => (
              <div key={sign} className="flex items-start gap-3 bg-white border rounded-lg p-4" style={{ borderColor: "#e6e9ec" }}>
                <CheckCircle2 size={20} style={{ color: COLORS.secondary }} className="mt-0.5 shrink-0" />
                <p className="text-sm">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-semibold tracking-wide mb-2" style={{ color: COLORS.secondary }}>
            Our Approach
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
            How We Handle {service.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4"
                  style={{ backgroundColor: COLORS.secondary }}
                >
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-semibold tracking-wide mb-2" style={{ color: COLORS.secondary }}>
            FAQs
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
            Common Questions
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div key={faq.q} className="bg-white border rounded-lg px-5 py-4" style={{ borderColor: "#e6e9ec" }}>
                <button
                  className="w-full flex items-center justify-between text-left gap-3"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span className="text-base font-semibold" style={{ color: COLORS.primary }}>
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp size={18} style={{ color: COLORS.accent }} />
                  ) : (
                    <ChevronDown size={18} style={{ color: COLORS.accent }} />
                  )}
                </button>
                {openFaq === idx && <p className="text-sm mt-3 leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: COLORS.primary }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-6 text-white">
          <div className="max-w-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to solve your pest problem?</h3>
            <p className="text-sm text-white/80">Get a free quote today — fast response, safe treatment.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm text-white hover:opacity-90 transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: COLORS.accent }}
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}