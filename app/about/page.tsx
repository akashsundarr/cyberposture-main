"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const LEADERSHIP = [
  {
    name: "Marcus Vance",
    role: "Chief Executive Officer",
    bio: "Former Director of Cyber Intelligence at global defense contractor. Pioneer in predictive threat modeling.",
    icon: "admin_panel_settings",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbvOo2iKHwsFUBr8bUbX5ccrHbm_LKv7-nIsoibUW8NgrTD8DuB6_8jt0cFu4zGLWXOmt51nq7Mf6kcsvB9sOP56hz6RKP25EwU-XPynHA7kNVcDS_ithbFOHdcpBTXT3OSTSlBCJoppzy3FiMEZm8GgG0R9LyUW8qCQCy_5IG5GBsHDhb3IRyV_kw-M_3_kNX0OngUnPnoBzybvmXbCA_lmZcXFkFBI4t5M_3pRiKOPT9j-sldbYB8rSFpu0dFp9JPzwl2Ski1Gsq",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    bio: "Ph.D. in Applied Cryptography. Architected the foundational consensus algorithms used in our core platform.",
    icon: "terminal",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtQOCZ5l_SLIsiZd1ls66nKfpiBIpll6ski7iIxx11BJHXO1dv0pf1NPhprZ9p1S6vTIovHsc96n_Cs3B0nK2FkYdKhEEDtcCrhUexUW0HJEqvBJN-2fZNVzeREbeshilgLPJQrwLQIiXVh17gFlXYdAIPlS2syclbqEZaxKN5cHor96K2FknEqrssi6zuxkhf6Kuv1Mf-PctfYzQg-LJ7LM5mDJll7EZTux3CQKahM6vuOsgvnBt_YWUU_JS2CvbcSLzE2mby8G7q",
  },
  {
    name: "Julian Sterling",
    role: "VP of Finance & Operations",
    bio: "Specialist in capital efficiency and strategic M&A for high-growth enterprise infrastructure entities.",
    icon: "account_balance",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAonoN54I_g-8CgzKJBseu7T6hxXqpKDt0Uc-qHcD8Nv4gQbbTbjq5cl6JL103U5QqMzkCe5yZK8dkwld8B2TVWP_uS15FLHNZKhGgD-nOVDbTVi0_qIsgwgz62gVgB4vmRNPDeyjPJjOrUrhS4zXdGT3rVjvqu21_zPQoDy92N94L9JULf_zA9Gm3Nynd3gg177vh6TZU6f6mBmJP9gejDKTOOuTAjD_-wXbMrDaYZ90xoPp734sUUhh4e3xVOkWCZL_bKh0_JmHL9",
  },
];

// Animation Variants

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};


export default function About() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background">
      <SiteHeader />
      
      <main className="flex flex-grow flex-col gap-12 pb-16 pt-20">
        {/* Hero */}
        <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden px-8 pb-24 pt-12">
          {/* Animated Background Image */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              alt="Abstract architectural cybersecurity space"
              className="h-full w-full object-cover mix-blend-luminosity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjJFmg7pFl2Q6z3qX6ewGpr0iKWYbL9sFFWVVjNm515rDZcVq468dX7yLQdBrvvcKjaoInjGDRnpVnTOqSSLrD7UT0SUnrgrK4ZKk-F8K1R-KTfCBjcfHWV_MZot8OaPxXDsVNE-zAxkgO5BLYVXLAuwrUaE4mh29o6wg89zrq-Te3E2AHGC_e5ZIqxmJKSDxbgX5HdA6RE4pUQ2RVuUlbTN8srwnbihJhpyTdcVXoCGfKuneQEbORjzp5011clbibQDLEK5YYpFhz"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 mx-auto flex max-w-4xl flex-col gap-6 text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl leading-tight tracking-tight text-on-surface md:text-6xl"
            >
              Architecting the Standard for Elite Cybersecurity.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-2xl text-on-surface-variant"
            >
              We operate at the nexus of intelligence and infrastructure, providing unyielding
              security posture management for the world's most critical enterprises.
            </motion.p>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="mx-auto w-full max-w-7xl px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-12"
          >
            {/* Mission */}
            <motion.div
              variants={scaleIn}
              className="glass-panel group relative col-span-1 flex flex-col gap-3 overflow-hidden rounded-xl p-8 md:col-span-7"
            >
              <div className="absolute right-0 top-0 p-6 opacity-10 transition-opacity duration-700 group-hover:opacity-20">
                <span className="material-symbols-outlined text-[120px] text-tertiary">
                  shield_locked
                </span>
              </div>
              <h2 className="font-display text-3xl text-tertiary md:text-4xl">
                Company Mission
              </h2>
              <div className="mb-4 h-[2px] w-12 bg-tertiary" />
              <p className="z-10 leading-relaxed text-on-surface/90">
                To eradicate cognitive overload in security operations by delivering pristine,
                high-fidelity intelligence. We engineer stability into the core of digital
                ecosystems, transforming raw threat data into decisive, authoritative action.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={scaleIn}
              className="glass-panel group relative col-span-1 flex flex-col gap-3 overflow-hidden rounded-xl p-8 md:col-span-5"
            >
              <div className="absolute bottom-0 right-0 translate-x-8 translate-y-8 p-6 opacity-10 transition-opacity duration-700 group-hover:opacity-20">
                <span className="material-symbols-outlined text-[120px] text-primary">
                  visibility
                </span>
              </div>
              <h2 className="font-display text-3xl text-primary md:text-4xl">
                Intelligence Vision
              </h2>
              <div className="mb-4 h-[2px] w-12 bg-primary" />
              <p className="z-10 leading-relaxed text-on-surface/90">
                A future where security telemetry is as intuitive as natural law. We foresee
                an era where elite consultancy meets automated precision, establishing a
                baseline of absolute trust.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Leadership */}
        <section className="mx-auto w-full max-w-7xl px-8 pt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 border-l-2 border-outline-variant/30 pl-6"
          >
            <h2 className="font-display text-3xl text-on-surface md:text-4xl">
              The Architects
            </h2>
            <p className="text-on-surface-variant">
              Our leadership combines decades of military-grade intelligence strategy with
              advanced cryptographic engineering.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {LEADERSHIP.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className="glass-panel group overflow-hidden rounded-xl"
              >
                <div className="relative h-80 w-full overflow-hidden bg-surface-container-highest">
                  <img
                    src={p.img}
                    alt={`${p.name} portrait`}
                    className="h-full w-full object-cover mix-blend-luminosity grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-90" />
                </div>
                <div className="relative flex flex-col gap-2 p-6">
                  <div className="absolute -top-6 right-6 rounded-full border border-white/10 bg-surface-container-lowest p-2 shadow-lg">
                    <span
                      className="material-symbols-outlined text-tertiary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {p.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-tertiary">{p.name}</h3>
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                    {p.role}
                  </p>
                  <p className="mt-2 text-sm text-on-surface/70">{p.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Trust indicators */}
        <section className="mx-auto w-full max-w-7xl px-8 pt-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-12 text-center md:grid-cols-4"
          >
            {[
              ["99.9%", "Uptime SLA", "primary"],
              ["150+", "Enterprise Clients", "tertiary"],
              ["Zero", "Critical Breaches", "primary"],
              ["$2B+", "Assets Secured", "tertiary"],
            ].map(([v, l, c]) => (
              <motion.div variants={fadeUp} key={l} className="flex flex-col gap-2">
                <span
                  className={`font-display text-4xl ${
                    c === "tertiary" ? "text-tertiary text-glow-gold" : "text-primary drop-shadow-[0_0_10px_rgba(177,204,197,0.4)]"
                  }`}
                >
                  {v}
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                  {l}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      
      <SiteFooter />
    </div>
  );
}