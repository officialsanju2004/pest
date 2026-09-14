import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

import logo from "../../images/logo.jpeg";
import { SERVICES_DATA } from "../data/servicesData";

const COLORS = { primary: "#082B5C" };
const PHONE = "+1 (778) 858-6004";
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

export default function Footer() {
  return (
    <footer id="contact" className="text-white" style={{ backgroundColor: "#061f43" }}>
      <div className="max-w-7xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="PESTEXIT Logo" className="h-12 w-auto object-contain" />
            <span className="font-bold text-lg">PESTEXIT</span>
          </div>
          <p className="text-sm text-white/70 mb-4">
            Expert pest control services for homes &amp; businesses across Southwestern and Southern Ontario.
          </p>
          <div className="flex gap-3">
            <Facebook size={16} className="hover:text-orange-300 cursor-pointer transition-colors" />
            <Instagram size={16} className="hover:text-orange-300 cursor-pointer transition-colors" />
            <Linkedin size={16} className="hover:text-orange-300 cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm text-white/70">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-orange-300 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Our Services</h5>
          <ul className="space-y-2 text-sm text-white/70">
            {SERVICES_DATA.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-orange-300 transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Contact Us</h5>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone size={14} /> {PHONE}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} /> {EMAIL}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-xs text-center text-white/60">
          © {new Date().getFullYear()} PESTEXIT. All Rights Reserved.
        </p>
         <p className="text-xs text-center text-white/60">
         Developed and Managed by Growth Flow Media.
        </p>
      </div>
    </footer>
  );
}