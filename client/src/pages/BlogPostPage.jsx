import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  ArrowRight,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import { BLOG_POSTS, getBlogBySlug } from "../data/blogData";
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

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!post) return <Navigate to="/" replace />;

  // Related posts: everything except the current one (max 2)
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div style={{ backgroundColor: COLORS.bg, color: COLORS.neutral }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: COLORS.primary }}>
        <div className="absolute inset-0 opacity-25">
          <img src={post.hero} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-white">
          <div className="text-xs mb-4 text-white/70">
            <Link to="/" className="hover:text-orange-300">Home</Link> &nbsp;/&nbsp;{" "}
            <Link to="/#blog" className="hover:text-orange-300">Blog</Link> &nbsp;/&nbsp;{" "}
            <span>{post.category}</span>
          </div>

          <div
            className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1 mb-4"
            style={{ backgroundColor: COLORS.accent }}
          >
            <Tag size={11} /> {post.category}
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold leading-tight mb-5"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Hero image (full post) */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10 h-72 md:h-96">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Intro paragraph — larger lead text */}
        <p
          className="text-lg leading-relaxed mb-10 pb-8 border-b"
          style={{ color: COLORS.primary, borderColor: "#e6e9ec" }}
        >
          {post.intro}
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {post.sections.map((section, i) => (
            <div key={i}>
              <h2
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}
              >
                {section.heading}
              </h2>
              <p className="text-base leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Prevention checklist */}
        {post.prevention && (
          <div
            className="rounded-xl p-6 md:p-8 mt-12"
            style={{ backgroundColor: "#ffffff", border: "1px solid #e6e9ec" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#eef1f0" }}
              >
                <ShieldCheck size={20} style={{ color: COLORS.secondary }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}>
                Prevention Checklist
              </h3>
            </div>
            <ul className="space-y-3">
              {post.prevention.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} style={{ color: COLORS.secondary }} className="mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Conclusion */}
        {post.conclusion && (
          <div
            className="mt-10 rounded-xl p-6 md:p-8"
            style={{ backgroundColor: `${COLORS.secondary}10`, borderLeft: `4px solid ${COLORS.secondary}` }}
          >
            <p className="text-base leading-relaxed italic" style={{ color: COLORS.primary }}>
              {post.conclusion}
            </p>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-12 rounded-xl p-6 md:p-8 text-white"
          style={{ backgroundColor: COLORS.primary }}
        >
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="max-w-md">
              <h4 className="text-lg md:text-xl font-bold mb-2" style={{ fontFamily: "Archivo, sans-serif" }}>
                Need help with {post.category.toLowerCase()}?
              </h4>
              <p className="text-sm text-white/80">
                PESTEXIT offers safe, fast, and eco-friendly pest control across Southwestern and Southern Ontario.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold text-sm text-white hover:opacity-90 transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: COLORS.accent }}
              >
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold text-sm border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: COLORS.accent }}
          >
            <ArrowLeft size={14} /> Back to all articles
          </Link>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-white py-14">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm font-semibold tracking-wide mb-2" style={{ color: COLORS.secondary }}>
              Keep Reading
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: COLORS.primary, fontFamily: "Archivo, sans-serif" }}
            >
              Related Articles
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="lift-card rounded-xl overflow-hidden shadow-sm bg-white"
                  style={{ border: "1px solid #e6e9ec" }}
                >
                  <div className="img-zoom h-44">
                    <img src={r.img} alt={r.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-2.5 py-1 mb-2"
                      style={{ backgroundColor: "#eef1f0", color: COLORS.secondary }}
                    >
                      <Tag size={10} /> {r.category}
                    </div>
                    <h4
                      className="font-bold text-base mb-2 leading-snug"
                      style={{ color: COLORS.primary }}
                    >
                      {r.title}
                    </h4>
                    <p className="text-sm mb-3 line-clamp-2">{r.excerpt}</p>
                    <span
                      className="text-xs font-semibold inline-flex items-center gap-1"
                      style={{ color: COLORS.accent }}
                    >
                      Read Article <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}