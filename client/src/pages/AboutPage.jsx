import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Leaf, Bird, MapPin, ShieldCheck, CheckCircle2, ArrowRight, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloatButton from "../components/WhatsAppFloatButton";
import logo from "../../images/logo.jpeg";

const WIKI = "https://commons.wikimedia.org/wiki/Special:FilePath/";
const IMG = {
  team: WIKI + "A_day_in_the_life-_Pest_Management_Journeyman.jpeg",
  house: WIKI + "Suburban_tract_house.JPG",
  wildlife: WIKI + "Raccoon_(Procyon_lotor),_portrait.jpg",
};

const COLORS = {
  primary: "#082B5C",
  secondary: "#00706F",
  accent: "#F45B16",
  bg: "#F7F8F5",
  neutral: "#46515B",
};

const WHY = [
  { icon: Leaf, title: "Eco-Friendly Solutions", text: "We use non-toxic, eco-conscious pest control methods safe for your home, family, and the environment." },
  { icon: Bird, title: "Humane Wildlife Removal", text: "Ethical removal of raccoons, squirrels, and other wildlife using humane techniques that respect animals and property." },
  { icon: MapPin, title: "Local Ontario Experts", text: "Locally owned and operated — we understand Ontario's seasonal pest challenges inside and out." },
  { icon: ShieldCheck, title: "Licensed & Trusted", text: "Fully certified, insured, and trusted by hundreds of Ontario homeowners and businesses." },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div style={{ backgroundColor: COLORS.bg, color: COLORS.neutral }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: COLORS.primary }} className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-semibold mb-3" style={{ color: "#7fd9d8" }}>About PESTEXIT</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Archivo, sans-serif" }}>
              Protecting Ontario Homes, <span style={{ color: COLORS.accent }}>One Pest at a Time</span>
            </h1>
            <p className="text-white/85 max-w-xl">
              PESTEXIT is a locally owned pest control company serving Southwestern and Southern Ontario.
              We combine eco-friendly methods, humane wildlife practices, and years of hands-on experience
              to deliver reliable, long-lasting pest solutions for homes and businesses.
            </p>
          </div>
       
        </div>
      </section>

      {/* Who we are */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg h-80">
          <img src={IMG.team} alt="PESTEXIT technician at work" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide mb-2" style={{ color: COLORS.secondary }}>Who We Are</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
            Your Neighbourhood Pest Experts
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            For years, PESTEXIT has been the trusted choice for families and businesses dealing with
            unwanted pests. From bed bugs and cockroaches to raccoons and wasps, we've helped thousands
            of Ontario residents reclaim their spaces.
          </p>
          <p className="text-sm leading-relaxed mb-6">
            Our certified technicians use the latest tools and eco-friendly products to solve pest
            problems at the source — not just the symptoms. Every job comes with a satisfaction guarantee.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Licensed & Insured Technicians",
              "Customized Treatment Plans",
              "Safe for Families & Pets",
              "Satisfaction Guaranteed",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={18} style={{ color: COLORS.secondary }} className="mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-wide mb-2" style={{ color: COLORS.secondary }}>Our Mission</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
            Safe Homes. Humane Solutions. Lasting Results.
          </h2>
          <p className="text-sm leading-relaxed">
            We believe pest control should protect both people and the environment. That's why we prioritize
            eco-friendly treatments, humane wildlife relocation, and long-term prevention over quick fixes.
            Whether you're dealing with a single wasp nest or a full-scale rodent problem, we treat your
            property like our own — with care, precision, and respect.
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-semibold tracking-wide mb-2 text-center" style={{ color: COLORS.secondary }}>
            Why Choose PESTEXIT
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
            What Sets Us Apart
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#eef1f0" }}>
                    <Icon size={20} style={{ color: COLORS.secondary }} />
                  </div>
                  <h4 className="font-bold mb-2 text-base" style={{ color: COLORS.primary }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide mb-2" style={{ color: COLORS.secondary }}>Our Promise</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
              We Don't Just Fix Problems — We Prevent Them
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Every service starts with a free inspection and a customized plan. We don't use one-size-fits-all
              treatments — we tailor our approach to your property, your pest, and your lifestyle.
            </p>
            <p className="text-sm leading-relaxed mb-6">
              And our work doesn't stop at treatment. We provide ongoing prevention advice, follow-up
              inspections, and warranties so you can rest easy knowing the problem won't return.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm text-white hover:opacity-90 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.accent }}
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-80">
            <img src={IMG.house} alt="Protected Ontario home" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}