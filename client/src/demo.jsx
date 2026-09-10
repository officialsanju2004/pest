import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Bug,
  Shield,
  Leaf,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  Rat,
  Zap,
  Bird,
  Search,
  ClipboardList,
  SprayCan,
  ShieldCheck,
  Plus,
  Minus,
  Navigation,
} from "lucide-react";
import flea from "../images/flea.png";
import termite from "../images/termite.png";
import home from "../images/home.png";
import bugandinsect from  "../images/bugandinsect.png";
import bug from "../images/bug.png";
import logo from "../images/logo.jpeg";
/**
 * PESTEXIT  — Landing Page
 * Colors:
 *  Primary   Deep Navy   #082B5C
 *  Secondary Deep Teal   #00706F
 *  Accent    Exit Orange #F45B16
 *  Background Soft White #F7F8F5
 *  Neutral   Slate Grey  #46515B
 *
 * Photography sourced from Wikimedia Commons (freely licensed, public domain
 * or CC-BY/CC-BY-SA). Swap the IMG map below for the client's own photography
 * when it's available — every <img> in this file pulls from that one map.
 * Stat labels and testimonials are marked PLACEHOLDER — replace with the
 * client's real figures and real customer reviews before launch.
 */

const COLORS = {
  primary: "#082B5C",
  secondary: "#00706F",
  accent: "#F45B16",
  bg: "#F7F8F5",
  neutral: "#46515B",
};

const WIKI = "https://commons.wikimedia.org/wiki/Special:FilePath/";
const IMG = {
  hero: WIKI + "A_day_in_the_life-_Pest_Management_Journeyman.jpeg",
  house: WIKI + "Suburban_tract_house.JPG",
  ants: WIKI + "Carpenter_ant_Tanzania_crop.jpg",
  cockroach: WIKI + "Cockroach_May_2007-1.jpg",
  bedbug: WIKI + "Adult_bed_bug,_Cimex_lectularius.jpg",
  rodent: WIKI + "House_mouse.jpg",
  wasp: WIKI + "European_paper_wasp_(nest).jpg",
  spider: WIKI + "Giant_House_Spider_(20298768656).jpg",
  termite: WIKI + "Termite_damage.JPG",
  wildlife: WIKI + "Raccoon_(Procyon_lotor),_portrait.jpg",
  bee: WIKI + "Honey_bee_(Apis_mellifera).jpg",
  bat: WIKI + "Little_Brown_Bat_FWS.jpg",
  mosquito: WIKI + "Aedes_aegypti_biting_human.jpg",
  areas: WIKI + "Markham-suburbs_aerial-edit2.jpg",
  blogWasp1: WIKI + "Wasp_nest_on_the_ground_in_forest.JPG",
  blogWasp2: WIKI + "Nest_of_the_median_wasp_(Dolichovespula_media).jpg",
  blogRodent: WIKI + "House_mouse.jpg",
};

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Common Pests", href: "#pests" },
  { label: "Service Areas", href: "#areas" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const COMMON_PESTS = [
  { name: "Ants", icon: Bug, img: IMG.ants },
  { name: "Cockroaches", icon: Bug, img: IMG.cockroach },
  { name: "Bed Bugs", icon: Bug, img: IMG.bedbug },
  { name: "Rodents", icon: Rat, img: IMG.rodent },
  { name: "Wasps & Hornets", icon: Zap, img: IMG.wasp },
  { name: "Spiders", icon: Bug, img: IMG.spider },
  { name: "Termites", icon: Bug, img: IMG.termite },
  { name: "Wildlife", icon: Bird, img: IMG.wildlife },
  { name: "& More", icon: ArrowRight },
];

const SERVICES = [
  { name: "Ant Extermination", blurb: "Targeted treatments that clear out ant colonies and seal the entry points they keep coming back through.", img: IMG.ants },
  { name: "Bed Bug Extermination", blurb: "Heat and chemical treatment options that eliminate bed bugs at every life stage with minimal disruption.", img: IMG.bedbug },
  { name: "Cockroach Extermination", blurb: "Safe, eco-friendly treatments that eliminate cockroach infestations at the source, not just the surface.", img: IMG.cockroach },
  { name: "Flea & Mite Extermination", blurb: "Full-property treatment plans that break the flea and mite life cycle in your home and yard.",img:flea },
  { name: "Hornet & Wasp Extermination", blurb: "Safe removal of hornet and wasp nests from walls, roofs, and outdoor areas to protect your family from stings.", img: IMG.wasp },
  { name: "Rodent Extermination", blurb: "Humane trapping, exclusion, and prevention that gets rid of rats and mice for good.", img: IMG.rodent },
  { name: "Spider Extermination", blurb: "Treatment and prevention plans that clear spiders from indoor and outdoor spaces.", img: IMG.spider },
  { name: "Bat Extermination", blurb: "Safe, humane bat removal with entry-point sealing so they don't return.", img: IMG.bat },
  { name: "Bee Extermination", blurb: "Careful removal of bee nests and colonies with a focus on safety for your property and family.", img: IMG.bee },
  { name: "Bug & Insect Extermination", blurb: "General insect control for the everyday bugs that make themselves at home in yours.", img: bugandinsect },
  { name: "General Pest Extermination", blurb: "Comprehensive pest control for homes and businesses, tailored to whatever is causing the problem." ,img: bug},
  { name: "General Wildlife Removal", blurb: "Humane trapping and relocation for raccoons, squirrels, and other nuisance wildlife, with cleanup after.", img: IMG.wildlife },
  { name: "Home Inspection", blurb: "Thorough inspections that detect pest activity, identify entry points, and assess infestation severity.", img: home },
  { name: "Mosquito Extermination", blurb: "Yard and property treatments that cut down mosquito populations so you can actually use your outdoor space.", img: IMG.mosquito },
  { name: "Termite Extermination", blurb: "Effective termite treatment that stops colonies before they compromise your property.", img: IMG.termite },
  { name: "Termite Inspection", blurb: "Detailed inspections that catch termite activity early, before it turns into costly structural damage." ,img: termite},
];

const WHY_CHOOSE_US = [
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    text: "We use non-toxic, eco-conscious pest control methods that are safe for your home, your family, and the environment — without compromising on results.",
  },
  {
    icon: Bird,
    title: "Humane Wildlife Removal",
    text: "Our team safely and ethically removes raccoons, squirrels, and other wildlife using humane techniques that respect both animals and property.",
  },
  {
    icon: MapPin,
    title: "Local Ontario Experts",
    text: "As a locally owned company, we understand Ontario's unique pest challenges and seasonal trends — providing tailored solutions that work.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Trusted Professionals",
    text: "With full certification, insurance, and a growing base of happy clients, we deliver reliable service you can count on, every time.",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Inspect", icon: Search, text: "We assess your property and identify the problem." },
  { num: "02", title: "Plan", icon: ClipboardList, text: "We create a customized treatment plan." },
  { num: "03", title: "Treat", icon: SprayCan, text: "We use safe and effective methods to eliminate pests." },
  { num: "04", title: "Prevent", icon: ShieldCheck, text: "We provide long-term solutions and ongoing monitoring." },
];

const SERVICE_ZONES = [
  {
    key: "primary",
    label: "Zone 1",
    title: "Primary Service Area",
    subtitle: "London, Ontario & Surrounding Communities",
    text: "Our home base — fast response times and our most frequent coverage.",
    areas: [
      "London",
      "St. Thomas",
      "Strathroy",
      "Dorchester",
      "Komoka",
      "Ilderton",
      "Thames Centre",
      "Woodstock",
      "Ingersoll",
      "Tillsonburg",
    ],
    note: null,
  },
  {
    key: "extended",
    label: "Zone 2",
    title: "Extended Service Area",
    subtitle: "Southwestern Ontario",
    text: "Regular coverage across Southwestern Ontario's major cities and communities.",
    areas: ["Kitchener-Waterloo", "Cambridge", "Brantford", "Guelph", "Sarnia", "Chatham-Kent", "Hamilton"],
    note: null,
  },
  {
    key: "longdistance",
    label: "Zone 3",
    title: "Long-Distance Service",
    subtitle: "Within ~300 km of London",
    text: "Available on request for locations further from our primary and extended zones.",
    areas: ["Windsor", "Western GTA", "Niagara Region", "& Other Nearby Locations"],
    note: "Travel charges and minimum service values may apply.",
  },
];

const BLOG_POSTS = [
  {
    title: "What Attracts Wasps to Homes and Businesses in Brampton?",
    excerpt: "A restaurant owner in downtown Brampton called us last July…",
    img: IMG.blogWasp1,
  },
  {
    title: "How to Keep Wasps Away from Your Garden and Outdoor Areas",
    excerpt: "You're grilling on a Saturday evening and a wasp starts…",
    img: IMG.blogWasp2,
  },
  {
    title: "How Rodents Can Damage Your Home and Electrical Wiring",
    excerpt: "A flickering light that an electrician can't explain. A breaker…",
    img: IMG.blogRodent,
  },
];

const FAQS = [
  {
    q: "What types of pests do you handle?",
    a: "We provide comprehensive pest control services for a wide range of pests, including cockroaches, rats, bed bugs, wasps, ants, spiders, termites, mosquitoes, and nuisance wildlife like raccoons and squirrels.",
  },
  {
    q: "Are your treatments safe for kids and pets?",
    a: "Yes. We use eco-friendly and family-safe products. All treatments are applied with precision and care to protect your loved ones while effectively eliminating pests.",
  },
  {
    q: "How do I know if I have a pest infestation?",
    a: "Common signs include droppings, scratch marks, property damage, foul odors, or seeing pests during the day. If you're unsure, we offer free inspections to help identify the issue.",
  },
  {
    q: "Do I need to leave my home during treatment?",
    a: "In most cases, you can stay at home during the service. For more intensive treatments, like bed bugs or fumigation, we may recommend temporary evacuation, with clear instructions before any treatment begins.",
  },
  {
    q: "How quickly can you come to my location?",
    a: "We offer same-day or next-day service in most areas we serve. Call us to schedule a fast and convenient appointment.",
  },
  {
    q: "Do you offer ongoing pest prevention plans?",
    a: "Yes. We offer customized maintenance plans to keep your home or business pest-free year-round, including routine inspections and preventive treatments.",
  },
];

const PHONE = "+1 (437) 329-4500";
const PHONE_HREF = "tel:+14373294500";
const EMAIL = "bspestcontrolca@gmail.com";
const ADDRESS = "Brampton, Ontario, Canada L6P 1Y7";

/* WhatsApp contact number in international format, no spaces/symbols, used for the wa.me link */
const WHATSAPP_NUMBER = "14373294500";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like to get a free quote for pest control."
)}`;

/* ---------------------------------------------------------------------- */
/* Scroll-reveal system                                                    */
/* ---------------------------------------------------------------------- */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Reveal({ children, className = "", delay = 0, as = "div", ...props }) {
  const [ref, inView] = useInView();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------- */

function Button({ children, variant = "accent", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 active:scale-95";
  const variants = {
    accent: "text-white hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg",
    outline: "border-2 hover:bg-white/10 hover:-translate-y-0.5",
    navy: "text-white hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg",
  };
  const style =
    variant === "accent"
      ? { backgroundColor: COLORS.accent }
      : variant === "navy"
      ? { backgroundColor: COLORS.primary }
      : { borderColor: "#ffffff", color: "#ffffff" };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} style={style} {...props}>
      {children}
    </button>
  );
}

function SectionEyebrow({ children }) {
  return (
    <p className="text-sm font-semibold tracking-wide mb-2" style={{ color: COLORS.secondary }}>
      {children}
    </p>
  );
}

/* Floating WhatsApp button — fixed bottom-right, opens a chat with the business number */
function WhatsAppFloatButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="whatsapp-float fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-xl"
      style={{ backgroundColor: "#25D366" }}
    >
      <span className="whatsapp-pulse" />
      <svg
        viewBox="0 0 448 512"
        width="28"
        height="28"
        fill="#ffffff"
        aria-hidden="true"
        style={{ position: "relative", zIndex: 1 }}
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
      </svg>
    </a>
  );
}

export default function BSPestControlSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [openZone, setOpenZone] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Trigger the hero's one-time entrance sequence shortly after mount.
    const t = setTimeout(() => setHeroLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleZone = useCallback((idx) => {
    setOpenZone((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <div style={{ backgroundColor: COLORS.bg, color: COLORS.neutral }} className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

        * { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        h1, h2, h3, h4, .font-display {
          font-family: 'Archivo', ui-sans-serif, system-ui, sans-serif;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
          will-change: opacity, transform;
        }
        .reveal-in { opacity: 1; transform: translateY(0); }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: scale(1.06); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateX(28px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes faqOpen {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes menuDrop {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes whatsappPulse {
          0% { transform: scale(1); opacity: 0.55; }
          70% { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .hero-bg { animation: heroFadeIn 1.4s cubic-bezier(.16,1,.3,1) both; }
        .hero-step { opacity: 0; animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) both; }
        .hero-card { opacity: 0; animation: cardSlideIn .9s cubic-bezier(.16,1,.3,1) both; }
        .faq-answer { animation: faqOpen .3s ease both; }
        .menu-drop { animation: menuDrop .25s ease both; }
        .float-badge { animation: floatY 3.5s ease-in-out infinite; }

        .nav-link { position: relative; }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0; bottom: -4px;
          width: 0%; height: 2px;
          background: ${COLORS.accent};
          transition: width .25s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .img-zoom { overflow: hidden; }
        .img-zoom img { transition: transform .5s cubic-bezier(.16,1,.3,1); }
        .img-zoom:hover img { transform: scale(1.08); }

        .lift-card { transition: transform .3s ease, box-shadow .3s ease; }
        .lift-card:hover { transform: translateY(-6px); box-shadow: 0 18px 30px -12px rgba(8,43,92,0.18); }

        .pest-tile { transition: transform .3s ease; }
        .pest-tile:hover { transform: translateY(-4px); }
        .pest-tile img, .pest-tile .pest-icon-wrap { transition: box-shadow .3s ease, transform .3s ease; }
        .pest-tile:hover img, .pest-tile:hover .pest-icon-wrap { box-shadow: 0 10px 22px -8px rgba(8,43,92,0.35); }

        /* Service zone accordion cards — expand on hover (mouse), expand on tap/click (touch) */
        .zone-card {
          border: 1px solid #e6e9ec;
          transition: border-color .3s ease, box-shadow .3s ease, transform .3s ease;
        }
        .zone-card:hover {
          box-shadow: 0 18px 32px -14px rgba(8,43,92,0.22);
          transform: translateY(-3px);
        }
        .zone-card.is-open { border-color: ${COLORS.secondary}; }
        .zone-details {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height .45s cubic-bezier(.16,1,.3,1), opacity .35s ease, margin-top .35s ease;
        }
        .zone-card.is-open .zone-details {
          max-height: 640px;
          opacity: 1;
          margin-top: 1rem;
        }
        @media (hover: hover) and (pointer: fine) {
          .zone-card:hover .zone-details {
            max-height: 640px;
            opacity: 1;
            margin-top: 1rem;
          }
        }
        .zone-toggle-icon { transition: transform .35s ease; }
        .zone-card.is-open .zone-toggle-icon { transform: rotate(45deg); }
        @media (hover: hover) and (pointer: fine) {
          .zone-card:hover .zone-toggle-icon { transform: rotate(45deg); }
        }
        .zone-chip {
          transition: background-color .2s ease, color .2s ease, transform .2s ease;
        }
        .zone-chip:hover {
          transform: translateY(-2px);
        }

        /* WhatsApp floating action button */
        .whatsapp-float {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .whatsapp-float:hover {
          transform: scale(1.08);
          box-shadow: 0 14px 26px -8px rgba(37,211,102,0.55);
        }
        .whatsapp-float:active { transform: scale(0.96); }
        .whatsapp-pulse {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background-color: #25D366;
          animation: whatsappPulse 2.2s ease-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .hero-bg, .hero-step, .hero-card, .faq-answer, .menu-drop, .float-badge, .whatsapp-pulse {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .zone-details { transition: none !important; }
        }
      `}</style>

      {/* Top bar */}
      <div style={{ backgroundColor: COLORS.primary }} className="text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <p className="hidden sm:block">Serving Homes & Businesses Across Ontario</p>
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
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "py-2" : "py-3"
          }`}
        >
          <a href="#home" className="flex items-center gap-2">
            <div
              className="w-25 h-20 rounded-md flex items-center justify-center text-white font-bold text-lg font-display"

            >
            <img
  src={logo}
  alt="Logo"
  className="h-15 w-auto object-contain sm:h-11 md:h-12 lg:h-19"
/>
            </div>
            <span className="font-bold text-lg font-display" style={{ color: COLORS.primary }}>
              PESTEXIT 
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: COLORS.primary }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="accent">
              Get a Free Quote <ArrowRight size={16} />
            </Button>
          </div>

          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X style={{ color: COLORS.primary }} /> : <Menu style={{ color: COLORS.primary }} />}
          </button>
        </div>

        {menuOpen && (
          <div className="menu-drop lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium"
                style={{ color: COLORS.primary }}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <Button variant="accent" className="w-full mt-2">
              Get a Free Quote
            </Button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 hero-bg">
          <img
            src={IMG.hero}
            alt="PESTEXIT  technician treating a home"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(110deg, ${COLORS.primary}f2 0%, ${COLORS.primary}e6 42%, ${COLORS.primary}99 68%, ${COLORS.primary}55 100%)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <p
              className="hero-step text-sm font-semibold mb-3"
              style={{ color: "#7fd9d8", animationDelay: heroLoaded ? "0.05s" : "999s" }}
            >
              Pest Control You Can Trust
            </p>
            <h1
              className="hero-step text-3xl md:text-5xl font-bold leading-tight mb-4"
              style={{ animationDelay: heroLoaded ? "0.15s" : "999s" }}
            >
              Reliable Pest Control for <span style={{ color: COLORS.accent }}>Homes &amp; Businesses</span>
            </h1>
            <p
              className="hero-step text-white/80 mb-6 max-w-md"
              style={{ animationDelay: heroLoaded ? "0.28s" : "999s" }}
            >
              Protecting your home, health, and peace of mind from pests is what we do best. We offer reliable,
              safe, and affordable pest control solutions designed for Canadian homes and businesses.
            </p>

            <div
              className="hero-step flex flex-wrap gap-6 mb-8"
              style={{ animationDelay: heroLoaded ? "0.4s" : "999s" }}
            >
              <div className="flex items-center gap-2">
                <Shield size={20} style={{ color: COLORS.accent }} />
                <span className="text-sm">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf size={20} style={{ color: COLORS.accent }} />
                <span className="text-sm">Eco-Friendly Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} style={{ color: COLORS.accent }} />
                <span className="text-sm">Fast &amp; Reliable Service</span>
              </div>
            </div>

            <div
              className="hero-step flex flex-wrap gap-4"
              style={{ animationDelay: heroLoaded ? "0.52s" : "999s" }}
            >
              <Button variant="accent">
                Get a Free Quote <ArrowRight size={16} />
              </Button>
              <a href={PHONE_HREF}>
                <Button variant="outline">
                  <Phone size={16} /> Call {PHONE}
                </Button>
              </a>
            </div>
          </div>

          {/* Quote form card */}
          <div
            className="hero-card bg-white rounded-xl shadow-2xl p-6 md:p-8 relative"
            style={{ animationDelay: heroLoaded ? "0.35s" : "999s" }}
          >
            <div
              className="float-badge absolute -top-4 -right-3 hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg"
              style={{ backgroundColor: COLORS.accent }}
            >
              <Clock size={12} /> Same-Day Service
            </div>
            <h3 className="font-bold text-xl mb-1" style={{ color: COLORS.primary }}>
              Request a Free Quote
            </h3>
            <p className="text-sm mb-5" style={{ color: COLORS.neutral }}>
              Fill out the form and our team will get back to you.
            </p>
            {submitted ? (
              <div className="rounded-md p-4 text-sm" style={{ backgroundColor: "#eaf5f5", color: COLORS.secondary }}>
                Thanks! Your request has been received — we'll be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="border rounded-md px-3 py-2 text-sm sm:col-span-2 focus:outline-none focus:ring-2 transition-shadow"
                  style={{ borderColor: "#d8dce0" }}
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-shadow"
                  style={{ borderColor: "#d8dce0" }}
                  required
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-shadow"
                  style={{ borderColor: "#d8dce0" }}
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 text-sm sm:col-span-2 text-slate-600 focus:outline-none focus:ring-2 transition-shadow"
                  style={{ borderColor: "#d8dce0" }}
                >
                  <option value="">Service Type *</option>
                  {SERVICES.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your Address / City *"
                  className="border rounded-md px-3 py-2 text-sm sm:col-span-2 focus:outline-none focus:ring-2 transition-shadow"
                  style={{ borderColor: "#d8dce0" }}
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your pest problem"
                  rows={3}
                  className="border rounded-md px-3 py-2 text-sm sm:col-span-2 focus:outline-none focus:ring-2 transition-shadow"
                  style={{ borderColor: "#d8dce0" }}
                />
                <button
                  type="submit"
                  className="sm:col-span-2 rounded-md py-3 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:-translate-y-0.5 active:scale-95"
                  style={{ backgroundColor: COLORS.accent }}
                >
                  Submit Request <ArrowRight size={16} />
                </button>
                <p className="sm:col-span-2 text-xs text-center" style={{ color: COLORS.neutral }}>
                  Your information is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Common pests */}
      <section id="pests" className="max-w-7xl mx-auto px-4 py-16 text-center">
        <Reveal>
          <SectionEyebrow>Common Pests We Handle</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: COLORS.primary }}>
            No Pest is <span style={{ color: COLORS.accent }}>Too Big or Too Small</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4">
          {COMMON_PESTS.map((pest, i) => {
            const Icon = pest.icon;
            return (
              <Reveal key={pest.name} delay={i * 60} className="pest-tile flex flex-col items-center gap-2">
                {pest.img ? (
                  <img
                    src={pest.img}
                    alt={pest.name}
                    className="w-16 h-16 lg:h-26 lg:w-26 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="pest-icon-wrap w-16 h-16 lg:h-26 lg:w-26 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#eef1f0" }}
                  >
                    <Icon size={26} style={{ color: COLORS.secondary }} />
                  </div>
                )}
                <span className="text-xs font-medium">{pest.name}</span>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ backgroundColor: "#ffffff" }} className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal className="relative">
            <div className="img-zoom rounded-xl h-80 shadow-lg">
              <img src={IMG.house} alt="A home protected by PESTEXIT " className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute -bottom-6 left-6 rounded-lg px-5 py-4 text-white shadow-lg"
              style={{ backgroundColor: COLORS.secondary }}
            >
              <p className="text-2xl font-bold leading-none">Trusted</p>
              <p className="text-xs mt-1">Local Pest Experts</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionEyebrow>About PESTEXIT </SectionEyebrow>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Your Local Pest Control Partner 
            </h2>
            <p className="mb-6 text-sm leading-relaxed">
              At PESTEXIT , we're committed to protecting your home and business from unwanted pests with
              safe, effective, and affordable solutions. With years of hands-on experience, we specialize in
              removing bed bugs, ants, mice, rats, silverfish, spiders, wasps, cockroaches, and more.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                "Licensed & Insured Technicians",
                "Customized Treatment Plans",
                "Safe for Families, Pets & the Environment",
                "Satisfaction Guaranteed",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={18} style={{ color: COLORS.secondary }} className="mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="navy">
              Learn More About Us <ArrowRight size={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <SectionEyebrow>Our Services</SectionEyebrow>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.primary }}>
                Comprehensive <span style={{ color: COLORS.accent }}>Pest Control Solutions</span>
              </h2>
              <p className="text-sm mt-2 max-w-xl">
                We provide customized pest management services for homes, businesses, and industrial properties.
              </p>
            </div>
            <Button variant="navy">View All Services</Button>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.name}
                delay={(i % 4) * 70}
                className="lift-card bg-white rounded-xl overflow-hidden shadow-sm"
              >
                {service.img ? (
                  <div className="img-zoom h-48">
                    <img src={service.img} alt={service.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ) : (
                  <div className="h-28 flex items-center justify-center" style={{ backgroundColor: "#eef1f0" }}>
                    <Bug size={30} style={{ color: COLORS.secondary }} className="opacity-60" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-bold mb-2 text-base" style={{ color: COLORS.primary }}>
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3">{service.blurb}</p>
                  <a
                    href="#contact"
                    className="text-xs font-semibold inline-flex items-center gap-1"
                    style={{ color: COLORS.accent }}
                  >
                    Learn More <ArrowRight size={12} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip — PLACEHOLDER figures, replace with real numbers */}
      <section style={{ backgroundColor: COLORS.primary }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { label: "Licensed & Insured", icon: ShieldCheck },
            { label: "Eco-Friendly Methods", icon: Leaf },
            { label: "Same-Day Service", icon: Clock },
            { label: "5-Star Client Reviews", icon: Star },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 90} className="flex flex-col items-center gap-2">
                <Icon size={26} style={{ color: COLORS.accent }} />
                <p className="text-sm font-medium">{stat.label}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal className="img-zoom rounded-xl h-80 shadow-lg">
            <img
              src={IMG.wildlife}
              alt="Humane wildlife removal by PESTEXIT "
              className="w-full h-full object-cover"
            />
          </Reveal>

          <Reveal delay={120}>
            <SectionEyebrow>Why Choose Us</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              We Aim for <span style={{ color: COLORS.accent }}>Pest-Free Perfection</span>
            </h2>
            <p className="text-sm mb-6 leading-relaxed">
              When it comes to protecting your home and family, you need more than just pest control — you need
              peace of mind. At PESTEXIT , we combine eco-conscious methods with expert service to deliver
              safe, reliable, and long-lasting solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_US.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#eef1f0" }}
                    >
                      <Icon size={18} style={{ color: COLORS.secondary }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-1" style={{ color: COLORS.primary }}>
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-16" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <SectionEyebrow>Our Process</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: COLORS.primary }}>
              A Simple &amp; Effective Process
            </h2>
            <p className="text-sm mb-12">From inspection to prevention, we make pest control easy and hassle-free.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.num} delay={i * 100} className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white font-bold transition-transform duration-300 hover:scale-110 hover:rotate-6"
                    style={{ backgroundColor: COLORS.secondary }}
                  >
                    <Icon size={26} />
                  </div>
                  <p className="text-xs font-semibold mb-1" style={{ color: COLORS.accent }}>
                    {step.num}
                  </p>
                  <h4 className="font-bold mb-1" style={{ color: COLORS.primary }}>
                    {step.title}
                  </h4>
                  <p className="text-sm max-w-[180px]">{step.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section id="areas" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow>Service Areas</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.primary }}>
              Proudly Serving <span style={{ color: COLORS.accent }}>Ontario, Zone by Zone</span>
            </h2>
            <p className="text-sm">
              From our home base in London to communities across Southwestern Ontario and beyond, PestExit
              brings the same reliable, eco-friendly service everywhere we go. Hover a zone below to see the
              full list of communities — on mobile, just tap.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {SERVICE_ZONES.map((zone, i) => (
              <Reveal key={zone.key} delay={i * 100}>
                <div
                  className={`zone-card ${openZone === i ? "is-open" : ""} bg-white rounded-xl p-6 cursor-pointer shadow-sm h-full`}
                  onClick={() => toggleZone(i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openZone === i}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleZone(i);
                    }
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "#eef1f0" }}
                      >
                        <Navigation size={18} style={{ color: COLORS.secondary }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wide" style={{ color: COLORS.accent }}>
                          {zone.label}
                        </p>
                        <h3 className="font-bold text-base leading-snug" style={{ color: COLORS.primary }}>
                          {zone.title}
                        </h3>
                      </div>
                    </div>
                    <span
                      className="zone-toggle-icon w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: COLORS.secondary }}
                    >
                      <Plus size={16} className="text-white" />
                    </span>
                  </div>

                  <p className="text-sm font-medium mt-4" style={{ color: COLORS.primary }}>
                    {zone.subtitle}
                  </p>
                  <p className="text-sm mt-1">{zone.text}</p>

                  <div className="zone-details">
                    <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: "#eef1f0" }}>
                      {zone.areas.map((area) => (
                        <span
                          key={area}
                          className="zone-chip text-xs font-medium rounded-full px-3 py-1.5 flex items-center gap-1"
                          style={{ backgroundColor: "#eef1f0", color: COLORS.primary }}
                        >
                          <MapPin size={11} style={{ color: COLORS.secondary }} />
                          {area}
                        </span>
                      ))}
                    </div>
                    {zone.note && (
                      <p className="text-xs mt-3 italic" style={{ color: COLORS.neutral }}>
                        {zone.note}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="flex justify-center mt-10">
            <Button variant="navy">
              Check If We Service Your Area <ArrowRight size={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Testimonials — PLACEHOLDER, replace with real client reviews */}
      <section className="py-16" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <SectionEyebrow>What Our Clients Say</SectionEyebrow>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.primary }}>
                Trusted by Homeowners &amp; Businesses
              </h2>
            </div>
            <Button variant="navy">View All Reviews</Button>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 100} className="lift-card bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} fill={COLORS.accent} style={{ color: COLORS.accent }} />
                  ))}
                </div>
                <p className="text-sm italic mb-4">
                  [Add a real customer review here — replace this placeholder before launch.]
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: COLORS.secondary }}
                  >
                    CN
                  </div>
                  <p className="text-sm font-semibold" style={{ color: COLORS.primary }}>
                    Client Name
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <SectionEyebrow>Our Blog</SectionEyebrow>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.primary }}>
                Tips, Guides &amp; <span style={{ color: COLORS.accent }}>Pest Control Advice</span>
              </h2>
              <p className="text-sm mt-2">Stay informed with expert tips and the latest updates.</p>
            </div>
            <Button variant="navy">View All Articles</Button>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.title} delay={i * 100} className="lift-card rounded-xl overflow-hidden shadow-sm">
                <div className="img-zoom h-40">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-base mb-2 leading-snug" style={{ color: COLORS.primary }}>
                    {post.title}
                  </h4>
                  <p className="text-sm mb-3">{post.excerpt}</p>
                  <a href="#" className="text-xs font-semibold inline-flex items-center gap-1" style={{ color: COLORS.accent }}>
                    Learn more <ArrowRight size={12} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <SectionEyebrow>FAQs</SectionEyebrow>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.primary }}>
                Got Questions? <span style={{ color: COLORS.accent }}>We've Got Answers.</span>
              </h2>
            </div>
            <Button variant="navy">View All FAQs</Button>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {FAQS.map((faq, idx) => (
              <Reveal key={faq.q} delay={(idx % 2) * 80} className="bg-white rounded-lg px-5 py-4 shadow-sm">
                <button
                  className="w-full flex items-center justify-between text-left gap-3"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span className="text-base font-semibold" style={{ color: COLORS.primary }}>
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    {openFaq === idx ? (
                      <ChevronUp size={18} style={{ color: COLORS.accent }} />
                    ) : (
                      <ChevronDown size={18} style={{ color: COLORS.accent }} />
                    )}
                  </span>
                </button>
                {openFaq === idx && <p className="faq-answer text-xs mt-3 leading-relaxed">{faq.a}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section style={{ backgroundColor: COLORS.primary }} className="py-12 relative overflow-hidden">
        <div
          className="absolute -right-16 -top-16 w-64 h-64 rounded-full float-badge"
          style={{ backgroundColor: `${COLORS.accent}22` }}
        />
        <div
          className="absolute -left-10 -bottom-20 w-52 h-52 rounded-full float-badge"
          style={{ backgroundColor: `${COLORS.secondary}33`, animationDelay: "1.2s" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-6">
          <Reveal className="text-white max-w-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Ready to Live Pest-Free — the Eco-Friendly Way?
            </h3>
            <p className="text-sm text-white/80">
              Whether you're dealing with unwanted pests or wildlife intrusions, our expert team is ready to help
              with safe, humane, and effective solutions. Don't wait for the problem to get worse.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-4">
            <Button variant="accent">
              Get a Free Quote <ArrowRight size={16} />
            </Button>
            <a href={PHONE_HREF}>
              <Button variant="outline">
                <Phone size={16} /> Call {PHONE}
              </Button>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-white" style={{ backgroundColor: "#061f43" }}>
        <div className="max-w-7xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-25 h-20 rounded-md flex items-center justify-center font-bold font-display"
               
              >
             <img
  src={logo}
  alt="PESTEXIT Logo"
  className="h-15 w-auto object-contain sm:h-11 md:h-12 lg:h-19"
/>
              </div>
              <span className="font-bold text-lg font-display">PESTEXIT </span>
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
                  <a href={link.href} className="hover:text-orange-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Our Services</h5>
            <ul className="space-y-2 text-sm text-white/70">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.name}>
                  <a href="#services" className="hover:text-orange-300 transition-colors">
                    {s.name}
                  </a>
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
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" /> {ADDRESS}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-5">
          <p className="text-xs text-center text-white/60">
            © {new Date().getFullYear()} PESTEXIT . All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp button — visible on every section */}
      <WhatsAppFloatButton />
    </div>
  );
}