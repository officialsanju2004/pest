import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Mail, Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react";
import logo from "../../images/logo.jpeg";
import { SERVICES_DATA } from "../data/servicesData";

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
  { label: "Our Services", to: "/#services", hasDropdown: true },
 
  { label: "Service Areas", to: "/#areas" },
  { label: "Blog", to: "/#blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);       // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close all menus when route changes
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const handleNavClick = (to) => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);

    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate home then scroll — simplest approach is to let router handle it
        window.location.href = to;
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
          <p className="hidden sm:block">
            Serving Homes &amp; Businesses Across Southwestern and Southern Ontario
          </p>
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
            <span
              className="font-bold text-lg"
              style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}
            >
              PESTEXIT
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity"
                    style={{ color: COLORS.primary }}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200"
                      style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div
                      className="bg-white rounded-xl shadow-2xl border overflow-hidden"
                      style={{
                        borderColor: "#e6e9ec",
                        width: "min(720px, 92vw)",
                        maxHeight: "70vh",
                      }}
                    >
                      <div className="px-5 py-3 border-b" style={{ borderColor: "#eef1f0" }}>
                        <p className="text-xs font-semibold tracking-wide" style={{ color: COLORS.secondary }}>
                          Our Pest Control Services
                        </p>
                      </div>
                      <div
                        className="grid grid-cols-2 gap-0 overflow-y-auto"
                        style={{ maxHeight: "calc(70vh - 44px)" }}
                      >
                        {SERVICES_DATA.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="flex items-start gap-3 px-5 py-3 transition-colors"
                            style={{ borderBottom: "1px solid #f3f5f6" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#f7f8f5";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "transparent";
                            }}
                            onClick={() => setServicesOpen(false)}
                          >
                            {service.img && (
                              <img
                                src={service.img}
                                alt=""
                                className="w-9 h-9 rounded-md object-cover shrink-0 mt-0.5"
                                loading="lazy"
                              />
                            )}
                            <div className="min-w-0">
                              <p
                                className="text-sm font-semibold leading-snug truncate"
                                style={{ color: COLORS.primary }}
                              >
                                {service.name}
                              </p>
                              <p
                                className="text-xs mt-0.5 line-clamp-2 leading-snug"
                                style={{ color: "#6b7580" }}
                              >
                                {service.blurb}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div
                        className="px-5 py-3 flex items-center justify-between border-t"
                        style={{ borderColor: "#eef1f0", backgroundColor: "#fbfbfa" }}
                      >
                        <p className="text-xs" style={{ color: COLORS.neutral || "#46515B" }}>
                          Not sure what you need? We can help.
                        </p>
                        <Link
                          to="/contact"
                          className="text-xs font-semibold inline-flex items-center gap-1"
                          style={{ color: COLORS.accent }}
                          onClick={() => setServicesOpen(false)}
                        >
                          Get a Free Quote →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ color: COLORS.primary }}
                >
                  {link.label}
                </Link>
              )
            )}
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between text-sm font-medium py-2"
                    style={{ color: COLORS.primary }}
                    aria-expanded={mobileServicesOpen}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200"
                      style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div
                      className="ml-2 pl-3 border-l flex flex-col gap-0.5 mb-2"
                      style={{ borderColor: "#e6e9ec" }}
                    >
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="text-sm py-2 hover:opacity-70"
                          style={{ color: "#46515B" }}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <Link
                        to="/#services"
                        className="text-sm py-2 font-semibold"
                        style={{ color: COLORS.accent }}
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm font-medium py-2"
                  style={{ color: COLORS.primary }}
                  onClick={() => handleNavClick(link.to)}
                >
                  {link.label}
                </Link>
              )
            )}
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