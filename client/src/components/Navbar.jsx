import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../../images/logo.jpeg";

const COLORS = {
  primary: "#082B5C",
  secondary: "#00706F",
  accent: "#F45B16",
};

const PHONE = "+1 (778) 858-6004";
const PHONE_HREF = "tel:+17788586004";
const EMAIL = "info@pestexit-ontario.com";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/#services" },
  { label: "Common Pests", to: "/#pests" },
  { label: "Service Areas", to: "/#areas" },
  { label: "Blog", to: "/#blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (to) => {
    setMenuOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top bar */}
      <div style={{ backgroundColor: COLORS.primary }} className="text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <p className="hidden sm:block">Serving Homes & Businesses Across Southwestern and Southern Ontario</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1 hover:text-orange-300 transition-colors">
              <Mail size={14} /> {EMAIL}
            </a>
            <a href={PHONE_HREF} className="flex items-center gap-1 hover:text-orange-300 transition-colors">
              <Phone size={14} /> {PHONE}
            </a>
            <div className="hidden md:flex items-center gap-2">
              <Facebook size={14} className="hover:text-orange-300 cursor-pointer transition-colors" />
              <Instagram size={14} className="hover:text-orange-300 cursor-pointer transition-colors" />
              <Linkedin size={14} className="hover:text-orange-300 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => handleNavClick("/")}>
            <img src={logo} alt="PESTEXIT Logo" className="h-12 w-auto object-contain" />
            <span className="font-bold text-lg" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
              PESTEXIT
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: COLORS.primary }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm text-white hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: COLORS.accent }}
          >
            Get a Free Quote
          </Link>

          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X style={{ color: COLORS.primary }} /> : <Menu style={{ color: COLORS.primary }} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium"
                style={{ color: COLORS.primary }}
                onClick={() => handleNavClick(link.to)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="w-full mt-2 rounded-md py-3 text-white font-semibold text-sm text-center"
              style={{ backgroundColor: COLORS.accent }}
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
}