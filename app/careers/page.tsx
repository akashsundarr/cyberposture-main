"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const roles = [
  {
    title: "Security Architect",
    type: "Senior platform role",
    focus:
      "Design privacy-preserving telemetry pipelines, SCIM/SSO integrations, and hooks for EDR, DLP, and email security gateways.",
    tags: ["Zero Trust", "Okta / Azure AD", "Telemetry"],
  },
  {
    title: "Security Analyst Interns",
    type: "Research and GRC support",
    focus:
      "Analyze behavioral anomalies, policy-bypass patterns, micro-simulation prompts, and GRC mapping scenarios.",
    tags: ["Threat intel", "Human factors", "GRC"],
  },
  {
    title: "Security Program Manager",
    type: "Enterprise delivery",
    focus:
      "Run pilot deployments, coordinate CISO and SOC stakeholders, and scale onboarding for HVI and R.A.M.P. programs.",
    tags: ["Pilots", "Onboarding", "Risk programs"],
  },
] as const;

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow px-6 pb-24 pt-32 md:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Careers
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-on-surface md:text-7xl">
              Build the human-centric security layer.
            </h1>
            <p className="mt-6 text-base leading-8 text-on-surface-variant md:text-lg">
              HVI is hiring builders, analysts, and operators who can
              turn human risk signals into privacy-safe, enterprise-ready
              security products.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {roles.map((role, index) => (
              <motion.article
                key={role.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-outline-variant/25 bg-surface-container-low p-6 shadow-[0_18px_70px_rgba(0,0,0,0.2)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  {role.type}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-on-surface">
                  {role.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {role.focus}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-outline-variant/30 px-3 py-1 text-xs text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-12 rounded-[2rem] border border-outline-variant/30 bg-[radial-gradient(circle_at_85%_0%,rgba(231,193,133,0.16),transparent_34%),linear-gradient(135deg,rgba(29,32,31,0.96),rgba(2,26,22,0.88))] p-8 md:p-10"
          >
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-3xl text-on-surface md:text-4xl">
                  Interested in the mission?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-on-surface-variant md:text-base">
                  Reach out with the role you are interested in and the kind of
                  security work you want to build.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-gold inline-flex w-full justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
              >
                Contact Team
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <SiteFooter />
    </div>
  );
}
