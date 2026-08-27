import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const capabilities = [
  {
    number: "01",
    title: "30-Second Core Gap Analysis",
    description:
      "Connect the technology stack and instantly identify missing policies, configuration gaps, and architectural weaknesses across your compliance scope.",
    metric: "30s",
    label: "Initial assessment",
  },
  {
    number: "02",
    title: "Tech-Stack Tailored Controls",
    description:
      "Generate controls, policies, and procedures from the systems you actually operate instead of starting with generic templates.",
    metric: "18",
    label: "Frameworks simultaneously",
  },
  {
    number: "03",
    title: "AI Risk Quantification",
    description:
      "Identify AI-related gaps and quantify how AI deployments increase your organization's inherent risk profile.",
    metric: "$VaR",
    label: "AI risk quantified",
  },
  {
    number: "04",
    title: "Internal Audit Readiness",
    description:
      "Validate both the design of controls and their operational effectiveness before entering formal audit workflows.",
    metric: "ToD",
    label: "+ ToE",
  },
];

const workflow = [
  {
    number: "01",
    title: "Connect",
    description:
      "Connect the systems that define your environment, including cloud infrastructure, identity, source control, and operational tooling.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "RAMP analyzes your actual technology stack and regulatory scope to identify the controls, policies, and procedures you need.",
  },
  {
    number: "03",
    title: "Generate",
    description:
      "Produce stack-specific control mappings, policies, procedures, and structured evidence instead of manually building them from templates.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Run Test of Design and Test of Effectiveness workflows to determine whether controls are structurally sound and operationally effective.",
  },
];

const frameworks = [
  "SOC 2",
  "ISO 27001",
  "HIPAA",
  "NIST AI RMF",
  "ISO/IEC 42001",
  "EU AI Act",
];

const auditModules = [
  {
    title: "Test of Design",
    short: "ToD",
    description:
      "Validate that tailored controls, policies, and procedures are structurally sound for the target regulations before operational monitoring begins.",
  },
  {
    title: "Test of Effectiveness",
    short: "ToE",
    description:
      "Evaluate whether controls are actually operating as intended and producing the required compliance outcomes.",
  },
  {
    title: "Internal Audit Plan",
    short: "Audit",
    description:
      "Generate a formal step-by-step audit plan covering ToD and ToE for internal evaluation and audit readiness.",
  },
];

const comparisonTraditional = [
  "Consultant-led discovery",
  "Manual spreadsheets",
  "Generic policy templates",
  "Weeks or months of preparation",
  "High upfront advisory costs",
];

const comparisonRamp = [
  "Technology-stack discovery",
  "Automated control mapping",
  "Stack-specific policies",
  "30-second initial assessment",
  "Ready-to-monitor outputs",
];

const benefits = [
  {
    title: "Eliminate the Cold Start",
    description:
      "RAMP creates the initial control and policy foundation required before continuous compliance platforms can become useful.",
  },
  {
    title: "Build From Reality",
    description:
      "Controls are generated from your actual infrastructure and operating model rather than assumptions about how your organization works.",
  },
  {
    title: "Reduce Advisory Dependency",
    description:
      "Automate the repetitive discovery, mapping, and documentation work that traditionally requires expensive consulting engagements.",
  },
  {
    title: "Ready for Downstream Platforms",
    description:
      "Produce structured, CCM-ready outputs that can feed downstream compliance and continuous-monitoring workflows.",
  },
];

export default function RampPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              R.A.M.P. · Readiness and Assessment Measurement Protocol
            </p>

            <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">
              Audit Readiness Built From Your Actual Tech Stack
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-on-surface-variant md:text-xl">
              An Assessment-as-a-Service engine that analyzes your environment,
              generates tailored controls and policies, quantifies AI risk, and
              prepares your organization for formal compliance workflows.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact/b2b"
                className="btn-gold rounded-xl px-8 py-4"
              >
                Request a Readiness Assessment
              </Link>

              <a
                href="#how-it-works"
                className="rounded-xl border border-outline-variant/30 px-8 py-4"
              >
                See How RAMP Works
              </a>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-outline-variant/20 p-7">
                <p className="font-display text-4xl">30s</p>
                <p className="mt-2 text-sm text-on-surface-variant">
                  Core gap analysis
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/20 p-7">
                <p className="font-display text-4xl">18</p>
                <p className="mt-2 text-sm text-on-surface-variant">
                  Frameworks assessed simultaneously
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/20 p-7">
                <p className="font-display text-4xl">$VaR</p>
                <p className="mt-2 text-sm text-on-surface-variant">
                  AI risk quantification
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  The Cold-Start Problem
                </p>

                <h2 className="mt-4 font-display text-4xl md:text-5xl">
                  Continuous monitoring is not enough if you are not ready.
                </h2>

                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                  Platforms built for continuous compliance work best once
                  policies, controls, evidence, and operational processes
                  already exist. RAMP solves the upstream problem: turning an
                  unprepared environment into a structured, ready-to-monitor
                  compliance program.
                </p>
              </div>

              <div className="rounded-3xl border border-tertiary/20 bg-tertiary/5 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  RAMP
                </p>

                <h3 className="mt-4 font-display text-3xl">
                  The bridge from chaos to compliance readiness.
                </h3>

                <div className="mt-8 space-y-3">
                  {[
                    "Discover the actual technology environment",
                    "Identify regulatory and control requirements",
                    "Generate stack-tailored policies",
                    "Validate control design",
                    "Prepare for operational monitoring",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-outline-variant/20 bg-background p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section id="how-it-works" className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                RAMP Engine
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                From Technology Stack to Audit Readiness
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
                RAMP connects what your organization actually runs to the
                controls and evidence required by your compliance objectives.
              </p>
            </div>

            <div className="mt-14 rounded-3xl border border-outline-variant/20 p-8 md:p-10">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["AWS", "Cloud infrastructure"],
                  ["GitHub", "Source control"],
                  ["Okta", "Identity & access"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-outline-variant/20 p-6 text-center"
                  >
                    <p className="text-xl font-semibold">{title}</p>
                    <p className="mt-2 text-sm text-on-surface-variant">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-8 text-center text-3xl text-tertiary">
                ↓
              </div>

              <div className="rounded-2xl border border-tertiary/20 bg-tertiary/5 p-8 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  RAMP Engine
                </p>

                <h3 className="mt-3 font-display text-3xl">
                  Analyze · Map · Generate · Validate
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">
                  Technology-stack analysis drives customized controls,
                  policies, procedures, AI risk assessment, and audit
                  preparation.
                </p>
              </div>

              <div className="my-8 text-center text-3xl text-tertiary">
                ↓
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  "Stack-Tailored Controls",
                  "Policies & Procedures",
                  "CCM-Ready Outputs",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-outline-variant/20 p-5 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Core Capabilities
            </p>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Five minutes of setup. Seconds of assessment.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-outline-variant/20 p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-sm font-bold text-tertiary">
                      {item.number}
                    </span>

                    <div className="text-right">
                      <p className="font-display text-3xl">{item.metric}</p>
                      <p className="text-xs text-on-surface-variant">
                        {item.label}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Workflow
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                One connected readiness workflow.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-outline-variant/20 p-7"
                >
                  <span className="text-sm font-bold text-tertiary">
                    {step.number}
                  </span>

                  <h3 className="mt-7 font-display text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Framework Coverage
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Prepare for the frameworks converging on your organization.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
                RAMP brings traditional security frameworks and emerging AI
                governance requirements into the same readiness workflow.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {frameworks.map((framework) => (
                <div
                  key={framework}
                  className="rounded-2xl border border-outline-variant/20 p-7 text-center"
                >
                  <p className="font-display text-2xl">{framework}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Audit */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  Internal Audit Module
                </p>

                <h2 className="mt-4 font-display text-4xl md:text-5xl">
                  Test the design. Test the operation.
                </h2>

                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                  Readiness is more than having a policy document. RAMP extends
                  into internal audit preparation with Test of Design and Test
                  of Effectiveness workflows.
                </p>
              </div>

              <div className="space-y-4">
                {auditModules.map((module) => (
                  <div
                    key={module.title}
                    className="rounded-2xl border border-outline-variant/20 p-7"
                  >
                    <div className="flex items-center justify-between gap-5">
                      <h3 className="text-xl font-semibold">
                        {module.title}
                      </h3>

                      <span className="rounded-full border border-tertiary/30 px-3 py-1 text-xs font-bold text-tertiary">
                        {module.short}
                      </span>
                    </div>

                    <p className="mt-4 leading-7 text-on-surface-variant">
                      {module.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                The Difference
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Traditional Audit Prep vs R.A.M.P.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-outline-variant/20 p-8">
                <h3 className="text-2xl font-semibold">
                  Traditional Approach
                </h3>

                <ul className="mt-7 space-y-4">
                  {comparisonTraditional.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-on-surface-variant"
                    >
                      <span>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-tertiary/20 bg-tertiary/5 p-8">
                <h3 className="text-2xl font-semibold">R.A.M.P.</h3>

                <ul className="mt-7 space-y-4">
                  {comparisonRamp.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-tertiary">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Business Value
            </p>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Why RAMP exists.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-outline-variant/20 p-8"
                >
                  <h3 className="text-2xl font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-8 text-on-surface-variant">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distribution / Downstream */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Ready-to-Monitor
            </p>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              The upstream layer for continuous compliance.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
              RAMP prepares organizations that are not yet mature enough for
              downstream continuous-monitoring platforms, creating a structured
              handoff into the compliance ecosystem.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {["Drata", "Vanta", "Secureframe"].map((platform) => (
                <div
                  key={platform}
                  className="rounded-xl border border-tertiary/20 bg-tertiary/5 p-6"
                >
                  <p className="text-xl font-semibold">{platform}</p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Downstream monitoring
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-28 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Get Started
            </p>

            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Go From Cold Start to Ready-to-Monitor.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
              Assess your environment, generate your controls, validate your
              readiness, and enter your formal compliance workflow with a
              foundation built for your actual technology stack.
            </p>

            <Link
              href="/contact/b2b"
              className="btn-gold mt-10 inline-flex rounded-xl px-8 py-4"
            >
              Request a Readiness Assessment
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
