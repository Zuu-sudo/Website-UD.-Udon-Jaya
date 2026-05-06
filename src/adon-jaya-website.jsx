import { useState, useEffect, useRef } from "react";

// WhatsApp contact constant - change here to update all WhatsApp links at once
const WHATSAPP_NUMBER = "6285100488424";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsInView(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, isInView];
};

/* ── SVG Icons ── */
const EggIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="32"
      cy="36"
      rx="18"
      ry="24"
      fill="currentColor"
      opacity="0.15"
    />
    <ellipse
      cx="32"
      cy="36"
      rx="18"
      ry="24"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <ellipse cx="32" cy="32" rx="8" ry="10" fill="currentColor" opacity="0.3" />
  </svg>
);

const FireIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22c4.97 0 8-3.582 8-8 0-6-8-14-8-14S4 8 4 14c0 4.418 3.03 8 8 8z" />
    <path
      d="M12 22c2.21 0 4-1.79 4-4 0-3-4-7-4-7s-4 4-4 7c0 2.21 1.79 4 4 4z"
      opacity="0.5"
    />
  </svg>
);

const StarIcon = ({ className, filled }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const QuoteIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    opacity="0.15"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const DuckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="currentColor">
    <ellipse cx="32" cy="44" rx="20" ry="14" opacity="0.9" />
    <circle cx="26" cy="28" r="12" />
    <ellipse cx="20" cy="26" rx="2" ry="2.5" fill="#1a1a1a" />
    <ellipse cx="30" cy="30" rx="6" ry="3" fill="#E8A317" opacity="0.9" />
    <path
      d="M12 44 Q6 50 14 54"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      opacity="0.5"
    />
  </svg>
);

/* ── Floating Particles ── */
const FloatingEggs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-float"
        style={{
          left: `${10 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
          animationDelay: `${i * 1.2}s`,
          animationDuration: `${5 + i}s`,
        }}
      >
        <div className="w-4 h-5 rounded-full bg-amber-400/10 border border-amber-400/20" />
      </div>
    ))}
  </div>
);

/* ── Product Card ── */
const ProductCard = ({ name, price, desc, icon, delay }) => {
  const [ref, inView] = useInView();
  const productMessage = `Halo UD. Adon Jaya! Saya ingin memesan ${name}. Mohon informasinya ya.`;
  const whatsappLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(productMessage)}`;

  return (
    <div
      ref={ref}
      className={`group relative bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-6 border border-amber-900/30 hover:border-amber-500/50 transition-all duration-700 hover:shadow-xl hover:shadow-amber-900/20 hover:-translate-y-2 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all duration-500" />
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
          {icon}
        </div>
        <h3
          className="text-lg font-semibold text-amber-50 mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {name}
        </h3>
        <p className="text-stone-400 text-sm mb-4 leading-relaxed">{desc}</p>
        <div className="flex items-center justify-between">
          <span
            className="text-2xl font-bold text-amber-400"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {price}
          </span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg text-sm font-medium hover:bg-green-600/30 transition-colors border border-green-600/30 hover:border-green-500/50 flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Pesan
          </a>
        </div>
      </div>
    </div>
  );
};

/* ── Testimonial Card ── */
const TestimonialCard = ({ text, delay }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`relative bg-stone-900/60 backdrop-blur rounded-2xl p-6 border border-stone-700/50 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <QuoteIcon className="absolute top-4 left-4 w-10 h-10 text-amber-400" />
      <p
        className="relative text-stone-300 italic leading-relaxed text-sm pt-4"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        "{text}"
      </p>
      <div className="flex gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 text-amber-400" filled />
        ))}
      </div>
    </div>
  );
};

/* ── Stat Counter ── */
const StatCounter = ({ label, value, suffix = "" }) => {
  const [ref, inView] = useInView();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseFloat(value);
    const step = end / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start * 10) / 10);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center">
      <div
        className="text-3xl md:text-4xl font-bold text-amber-400"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {typeof count === "number" && count % 1 !== 0
          ? count.toFixed(1)
          : count}
        {suffix}
      </div>
      <div className="text-stone-400 text-sm mt-1">{label}</div>
    </div>
  );
};

/* ── Main Component ── */
export default function AdonJayaWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroLoaded] = useState(true);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("adonjaya-reviews");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Calculate aggregate rating from reviews
  const totalReviews = reviews.length + 71; // 71 existing reviews
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0) + 4.5 * 71;
  const averageRating =
    totalReviews > 0 ? (totalRating / totalReviews).toFixed(1) : "4.5";

  const submitRating = () => {
    if (rating === 0) return;

    const newReview = {
      rating,
      comment,
      date: new Date().toISOString(),
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("adonjaya-reviews", JSON.stringify(updatedReviews));

    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);

    // Reset form
    setRating(0);
    setComment("");
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const products = [
    {
      name: "Telur Asin Oven",
      price: "Rp 3.800",
      desc: "Dipanggang sempurna dengan suhu terkontrol, menghasilkan tekstur masir yang khas.",
      icon: <EggIcon className="w-7 h-7 text-amber-400" />,
    },
    {
      name: "Telur Asin Original",
      price: "Rp 3.600",
      desc: "Resep turun-temurun dengan proses pengasinan tradisional yang terjaga kualitasnya.",
      icon: <EggIcon className="w-7 h-7 text-amber-400" />,
    },
    {
      name: "Telur Asin Bakar",
      price: "Rp 4.000",
      desc: "Aroma bakar yang menggugah selera dengan kuning telur yang lembut dan berminyak.",
      icon: <FireIcon className="w-7 h-7 text-amber-400" />,
    },
    {
      name: "Telur Asin Goreng",
      price: "Rp 3.800",
      desc: "Digoreng hingga kecokelatan, renyah di luar dan lembut masir di dalam.",
      icon: <FireIcon className="w-7 h-7 text-amber-400" />,
    },
  ];

  const testimonials = [
    "Telor asin mantap dan murah cocok untuk buah tangan dari Sidoarjo",
    "Kalau mau beli oleh-oleh telur asin bisa disini, area kampung bebek",
    "Anak-anak suka, padahal biasanya gak doyan telur asin. Sukses Adon Jaya!",
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-stone-950 text-stone-100 overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .shimmer { background: linear-gradient(90deg, transparent, rgba(245,158,11,0.08), transparent); background-size: 200% 100%; animation: shimmer 3s ease-in-out infinite; }
        @keyframes grain { 0%,100% { transform: translate(0,0) } 10% { transform: translate(-5%,-10%) } 30% { transform: translate(3%,-15%) } 50% { transform: translate(12%,9%) } 70% { transform: translate(9%,4%) } 90% { transform: translate(-1%,7%) } }
        .grain::before { content:''; position:absolute; inset:-50%; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); animation: grain 8s steps(10) infinite; pointer-events:none; z-index:0; }
        .text-gradient { background: linear-gradient(135deg, #f59e0b, #d97706, #b45309); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }
        * { scrollbar-width: thin; scrollbar-color: #78350f #1c1917; }
      `}</style>

      {/* ── Navigation ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-stone-950/95 backdrop-blur-2xl shadow-2xl shadow-black/30 border-b border-stone-800/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-2.5 lg:gap-3 group flex-shrink-0"
            >
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
                <DuckIcon className="w-5 h-5 lg:w-6 lg:h-6 text-stone-950" />
              </div>
              <div className="hidden xs:block">
                <span
                  className="block text-base lg:text-lg font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <span className="text-amber-400">Adon</span>{" "}
                  <span className="text-stone-200">Jaya</span>
                </span>
                <span className="hidden sm:block text-[9px] lg:text-[10px] text-stone-500 uppercase tracking-widest">
                  Telur Asin Premium
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-0.5">
              {[
                { label: "Produk", id: "produk" },
                { label: "Tentang", id: "tentang" },
                { label: "Testimoni", id: "testimoni" },
                { label: "Rating", id: "rating" },
                { label: "Kontak", id: "kontak" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-stone-400 hover:text-amber-400 hover:bg-amber-500/5 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden xl:flex items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-green-900/20 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Pesan via WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-stone-800/50 hover:bg-stone-800 transition-colors duration-300 active:bg-stone-700"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className={`block w-5 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 py-3 bg-stone-950/98 backdrop-blur-2xl border-t border-stone-800/40">
            <div className="flex flex-col gap-1">
              {[
                { label: "Produk", id: "produk" },
                { label: "Tentang", id: "tentang" },
                { label: "Testimoni", id: "testimoni" },
                { label: "Rating", id: "rating" },
                { label: "Kontak", id: "kontak" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-stone-300 hover:text-amber-400 text-left py-2.5 px-3 text-sm font-medium rounded-lg hover:bg-amber-500/5 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 mt-2 border-t border-stone-800/40">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 rounded-lg text-sm font-semibold w-full"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center grain overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-600/8 rounded-full blur-3xl" />
        <FloatingEggs />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1
            className={`transition-all duration-1000 delay-500 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span
              className="block text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-stone-100">Telur Asin</span>
            </span>
            <span
              className="block text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-gradient mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Adon Jaya
            </span>
          </h1>

          <p
            className={`max-w-xl mx-auto text-stone-400 text-lg md:text-xl mt-8 leading-relaxed transition-all duration-1000 delay-700 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Peternak bebek & produsen telur asin berkualitas premium dari
            Kampung Bebek, Sidoarjo. Cita rasa autentik dalam setiap butir.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-1000 delay-1000 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <button
              onClick={() => scrollTo("produk")}
              className="group relative px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 overflow-hidden"
            >
              <span className="relative z-10">Lihat Produk Kami</span>
              <div className="absolute inset-0 shimmer" />
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 border border-stone-600 hover:border-amber-500/50 text-stone-300 hover:text-amber-400 rounded-xl font-medium text-sm transition-all duration-300"
            >
              <WhatsAppIcon className="w-4 h-4" /> Pesan Sekarang
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollTo("produk")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-500 animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* ── Stats Band ── */}
      <section className="relative border-y border-stone-800/50 bg-stone-900/40">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter label="Rating Google" value={4.5} suffix="★" />
          <StatCounter label="Ulasan" value={71} suffix="+" />
          <StatCounter label="Varian Produk" value={4} />
          <StatCounter label="Tahun Pengalaman" value={10} suffix="+" />
        </div>
      </section>

      {/* ── Products ── */}
      <section id="produk" className="relative py-24 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6">
          <SectionHeader
            tag="Produk Kami"
            title="Varian Telur Asin"
            subtitle="Setiap varian dibuat dengan proses khusus untuk menghasilkan cita rasa yang berbeda dan istimewa."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {products.map((p, i) => (
              <ProductCard key={i} {...p} delay={i * 150} />
            ))}
          </div>
          <p className="text-center text-stone-500 text-sm mt-8">
            * Harga per butir. Tersedia pemesanan partai besar.
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <section id="tentang" className="relative py-24 md:py-32 bg-stone-900/30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AboutVisual />
          <AboutText />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimoni" className="relative py-24 md:py-32">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6">
          <SectionHeader
            tag="Testimoni"
            title="Kata Mereka"
            subtitle="Ulasan langsung dari pelanggan setia kami di Google Maps."
          />
          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} text={t} delay={i * 150} />
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="inline-flex items-center gap-1 text-amber-400 text-sm">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4" filled />
              ))}
              <span className="ml-2 text-stone-400">
                {averageRating} dari {totalReviews} ulasan
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* ── Rating Section ── */}
      <section id="rating" className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/50 to-stone-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <StarIcon className="w-4 h-4 text-amber-400" filled />
              <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
                Beri Rating
              </span>
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bagaimana Pelayanan Kami?
            </h2>
            <p className="text-stone-400 mt-3 text-sm">
              Masukan Anda sangat berarti untuk meningkatkan kualitas kami
            </p>
          </div>

          {/* Rating Card */}
          <div className="relative bg-gradient-to-br from-stone-800/80 to-stone-900/80 backdrop-blur-xl rounded-3xl p-8 border border-stone-700/30 shadow-2xl shadow-black/30">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-500/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-500/20 rounded-br-3xl" />

            {/* Star Rating */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex gap-3 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`relative transition-all duration-300 ${hoverRating >= star || rating >= star ? "scale-110" : "scale-100"}`}
                    aria-label={`Beri ${star} bintang`}
                  >
                    {/* Glow Ring */}
                    <div
                      className={`absolute inset-0 rounded-full bg-amber-500/20 blur-md transition-all duration-300 ${hoverRating >= star || rating >= star ? "opacity-100 scale-150" : "opacity-0 scale-100"}`}
                    />
                    {/* Star */}
                    <div className="relative">
                      <StarIcon
                        className="w-12 h-12 transition-all duration-300"
                        filled={star <= (hoverRating || rating)}
                        style={{
                          color:
                            star <= (hoverRating || rating)
                              ? "#f59e0b"
                              : "transparent",
                          stroke:
                            star <= (hoverRating || rating)
                              ? "#f59e0b"
                              : "#57534e",
                          filter:
                            star <= (hoverRating || rating)
                              ? "drop-shadow(0 0 12px rgba(245, 158, 11, 0.6))"
                              : "none",
                          transform:
                            hoverRating >= star || rating >= star
                              ? "scale(1.1)"
                              : "scale(1)",
                        }}
                      />
                    </div>
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <div className="text-center animate-[fadeIn_0.3s_ease-out]">
                  <p className="text-amber-400 font-semibold text-base mb-1 tracking-wide">
                    {rating === 5 && "Luar Biasa!"}
                    {rating === 4 && "Sangat Memuaskan!"}
                    {rating === 3 && "Baik"}
                    {rating === 2 && "Ok"}
                    {rating === 1 && "Perlu Improve"}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <p className="text-stone-500 text-xs">
                      {rating} dari 5 bintang dipilih
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Comment Input */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <label className="text-stone-300 text-sm font-medium">
                  Ulasan Anda
                </label>
              </div>
              <textarea
                id="rating-comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ceritakan pengalaman Anda dengan telur asin Adon Jaya..."
                className="w-full px-4 py-3 bg-stone-900/50 border border-stone-700/50 rounded-xl text-stone-200 placeholder-stone-600 text-sm resize-none focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 transition-all duration-300"
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={submitRating}
              disabled={rating === 0 || submitSuccess}
              className={`group relative w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden ${
                rating > 0 && !submitSuccess
                  ? "bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 shadow-lg shadow-amber-500/30"
                  : submitSuccess
                    ? "bg-green-500 text-white"
                    : "bg-stone-700 text-stone-500 cursor-not-allowed"
              }`}
            >
              {rating > 0 && !submitSuccess && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              )}
              {submitSuccess ? (
                <>
                  <svg
                    className="w-5 h-5 relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="relative z-10">Tersimpan!</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="relative z-10">Kirim Rating</span>
                </>
              )}
            </button>

            {rating === 0 && (
              <p className="text-center text-stone-600 text-xs mt-4">
                Klik bintang untuk memberikan rating
              </p>
            )}
          </div>

          {/* Average Rating Display */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 bg-stone-800/50 rounded-full px-6 py-3">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-amber-400">
                  {averageRating}
                </span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className="w-4 h-4"
                      filled={star <= Math.round(parseFloat(averageRating))}
                      style={{
                        color:
                          star <= Math.round(parseFloat(averageRating))
                            ? "#f59e0b"
                            : "transparent",
                        stroke:
                          star <= Math.round(parseFloat(averageRating))
                            ? "#f59e0b"
                            : "#57534e",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="h-8 w-px bg-stone-700" />
              <span className="text-stone-400 text-sm">
                {totalReviews} rating
              </span>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ── Contact ── */}
      <section id="kontak" className="relative py-24 md:py-32 bg-stone-900/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/3 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6">
          <SectionHeader
            tag="Hubungi Kami"
            title="Pesan Sekarang"
            subtitle="Siap melayani pesanan eceran maupun partai besar. Hubungi kami untuk informasi lebih lanjut."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            <ContactCard
              icon={<MapPinIcon className="w-5 h-5 text-amber-400" />}
              title="Alamat"
              lines={[
                "Jl. Bima, RT.05/RW.01",
                "Somban, Kebonsari",
                "Kec. Candi, Sidoarjo",
                "Jawa Timur 61271",
              ]}
              href="https://maps.google.com/?q=Jl.+Bima+RT.05+RW.01+Somban+Kebonsari+Candi+Sidoarjo"
            />
            <ContactCard
              icon={<PhoneIcon className="w-5 h-5 text-amber-400" />}
              title="Telepon"
              lines={["0851-0048-8424", "Siap melayani panggilan"]}
            />
            <ContactCard
              icon={<ClockIcon className="w-5 h-5 text-amber-400" />}
              title="Jam Buka"
              lines={["Setiap hari", "08.00 - 22.00 WIB"]}
            />
          </div>
          <div className="text-center mt-12">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" /> Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-stone-800/50 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <DuckIcon className="w-6 h-6 text-amber-500" />
            <span
              className="font-bold text-sm"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-amber-400">UD. Adon</span>{" "}
              <span className="text-stone-400">Jaya</span>
            </span>
          </div>
          <p className="text-stone-600 text-xs text-center">
            © 2026 UD. Adon Jaya — Telur Asin Premium dari Sidoarjo
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-green-400 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-900/40 transition-all duration-500 hover:scale-110 ${scrollY > 400 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  );
}

/* ── Sub-components ── */
function SectionHeader({ tag, title, subtitle }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`text-center max-w-2xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">
        {tag}
      </span>
      <h2
        className="text-3xl md:text-5xl font-bold mt-3 text-stone-100"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      <p className="text-stone-400 mt-4 leading-relaxed">{subtitle}</p>
    </div>
  );
}

function AboutVisual() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-900/30 to-stone-800 border border-amber-900/20">
        <img
          src="https://i.imgur.com/Wj1d0Fj.jpeg"
          alt="Peternakan Bebek UD. Adon Jaya di Kampung Bebek, Sidoarjo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-stone-950/80 backdrop-blur rounded-xl p-4 border border-stone-700/50">
            <div className="flex items-center gap-2 mb-1">
              <MapPinIcon className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-xs font-semibold">
                Kampung Bebek, Sidoarjo
              </span>
            </div>
            <p className="text-stone-400 text-xs">
              Area peternakan bebek terbesar di Jawa Timur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutText() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
    >
      <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">
        Tentang Kami
      </span>
      <h2
        className="text-3xl md:text-4xl font-bold mt-3 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Tradisi & Kualitas
        <br />
        <span className="text-gradient">Dari Sidoarjo</span>
      </h2>
      <p className="text-stone-400 mt-6 leading-relaxed">
        UD. Adon Jaya merupakan peternak bebek dan produsen telur asin yang
        berlokasi di Kampung Bebek, Kabupaten Sidoarjo — pusat peternakan bebek
        di Jawa Timur.
      </p>
      <p className="text-stone-400 mt-4 leading-relaxed">
        Dengan pengalaman bertahun-tahun, kami mengolah telur asin dengan resep
        turun-temurun yang menghasilkan cita rasa khas: kuning telur masir dan
        berminyak sempurna, putih telur yang gurih dan tidak terlalu asin.
      </p>
      <div className="flex flex-wrap gap-3 mt-8">
        {[
          "100% Telur Bebek Segar",
          "Proses Tradisional",
          "Tanpa Pengawet",
          "Oleh-oleh Khas Sidoarjo",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactCard({ icon, title, lines = [], href }) {
  const [ref, inView] = useInView();
  const content = (
    <div
      ref={ref}
      className={`h-full group bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-5 border border-stone-700/50 hover:border-amber-500/30 transition-all duration-700 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-1 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3 group-hover:bg-amber-500/20 transition-colors">
        {icon}
      </div>
      <h3
        className="text-sm font-semibold text-amber-50 mb-2 uppercase tracking-wide"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <div className="space-y-0.5">
        {lines.map((line, index) => (
          <p key={index} className="text-stone-400 text-xs leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {content}
    </a>
  ) : (
    content
  );
}
