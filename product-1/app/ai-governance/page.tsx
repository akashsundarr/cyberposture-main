import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const workflow = [
  {
    number: "01",
    title: "Register",
    audience: "Business head · ~5 minutes",
    description:
      "Capture the AI agent's autonomy, access scope, and public exposure. VALORA AI creates the initial AI profile without requiring an engineering ticket.",
  },
  {
    number: "02",
    title: "Value",
    audience: "System · seconds",
    description:
      "FAIR-derived valuation calculates projected Value-at-Risk in dollars, showing both inherent exposure and residual exposure after controls.",
  },
  {
    number: "03",
    title: "Gate",
    audience: "CISO · one screen",
    description:
      "Review the dollar exposure and missing NIST AI RMF / ISO 42001 controls. Approve the deployment or return it for rework with a documented reason.",
  },
  {
    number: "04",
    title: "Ledger",
    audience: "Continuous",
    description:
      "Monitor live configuration for drift and maintain an immutable evidence record for the board, underwriters, and regulators.",
  },
];

const capabilities = [
  {
    title: "Dollar-Based AI Risk",
    description:
      "Replace subjective risk heatmaps with a quantified exposure your board can understand.",
    metric: "$1.4M",
    label: "Projected VaR",
  },
  {
    title: "Economic Veto Authority",
    description:
      "Approve or block AI deployments before they ship, with every decision documented and owned.",
    metric: "GATE",
    label: "Before production",
  },
  {
    title: "Continuous Assurance",
    description:
      "Detect configuration drift and continuously recompute AI posture as your environment changes.",
    metric: "24/7",
    label: "Continuous posture",
  },
];

const approvalFields = [
  ["AI agent", "Credit Scoring Agent v2.3"],
  ["Business process", "Loan decisioning · Fintech BU"],
  ["Autonomy", "L2 — semi-autonomous"],
  ["Access", "write-execute · production"],
  ["Public exposure", "Yes"],
];

const evidence = [
  {
    audience: "Board",
    artifact: "Executive Board Briefing",
    description:
      "Total $ VaR versus risk appetite, top exposures, and priced remediation priorities.",
  },
  {
    audience: "Underwriter",
    artifact: "Carrier Evidence Package",
    description:
      "Per-agent manifests, red-team records, kill-switch tests, incident response runbooks, and signed evidence.",
  },
  {
    audience: "Regulator",
    artifact: "Audit-Ready Compliance Bundle",
    description:
      "NIST AI RMF, ISO 42001, EU AI Act posture, compliance matrices, and maturity evidence.",
  },
];

const security = [
  "PostgreSQL Row-Level Security for tenant isolation",
  "Server-side FAIR-derived scoring",
  "SHA-256 signed verification artifacts",
  "RBAC with admin, assessor, auditor, and viewer roles",
  "Read-only audit logs",
  "Multi-tenant SaaS with single-tenant / VPC deployment options",
];

export default function AIGovernancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              VALORA AI · AI Governance
            </p>

            <h1 className="mx-auto mt-6 max-w-5xl font-display text-5xl leading-[1.05] md:text-7xl">
              Put a Dollar Value on Every AI Deployment
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-on-surface-variant md:text-xl">
              Quantify AI risk before it ships, approve or block deployments
              with economic authority, and continuously prove your posture to
              the board, underwriters, and regulators.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="btn-gold rounded-xl px-8 py-4"
              >
                Book a 14-Day Trial
              </Link>

              <Link
                href="#workflow"
                className="rounded-xl border border-outline-variant/30 px-8 py-4"
              >
                See How It Works
              </Link>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl gap-4 text-left md:grid-cols-3">
              {[
                ["$1.4M", "Example projected AI VaR"],
                ["3 controls", "Required before approval"],
                ["$340K", "Example residual exposure"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-outline-variant/20 p-6"
                >
                  <p className="font-display text-3xl">{value}</p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Claim */}
        <section className="border-y border-outline-variant/10 px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                The Shift
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Governance needs economic language.
              </h2>

              <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                Engineering is deploying AI faster than traditional governance
                can evaluate it. VALORA AI turns AI governance into a measurable
                decision: how much risk does this deployment carry, how much
                does each control buy down, and should it be allowed to ship?
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-outline-variant/20 p-7"
                >
                  <p className="font-display text-4xl">{item.metric}</p>

                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-tertiary">
                    {item.label}
                  </p>

                  <h3 className="mt-8 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                The Workflow
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Register → Value → Gate → Ledger
              </h2>

              <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                One continuous workflow from AI intent to quantified approval,
                followed by continuous assurance after deployment.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-outline-variant/20 p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-tertiary">
                      {step.number}
                    </span>

                    <span className="text-xs text-on-surface-variant">
                      {step.audience}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-3xl">
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

        {/* Approval Gate */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                The Approval Gate
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Your approval becomes the control point.
              </h2>

              <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                An AI deployment cannot proceed without an authorization token
                tied to quantified exposure. The decision is documented, dated,
                owned, and preserved on the ledger.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Approve → Assessment",
                  "Deny → Rework",
                  "Quantify the delta as controls are added",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-outline-variant/20 px-5 py-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Approval Card */}
            <div className="rounded-3xl border border-outline-variant/20 p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-tertiary">
                    AI Deployment Review
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    Credit Scoring Agent v2.3
                  </h3>
                </div>

                <span className="rounded-full border border-tertiary/30 px-3 py-1 text-xs">
                  Pending
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {approvalFields.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-6 border-b border-outline-variant/10 pb-4"
                  >
                    <span className="text-sm text-on-surface-variant">
                      {label}
                    </span>

                    <span className="text-right text-sm font-medium">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-tertiary/20 bg-tertiary/5 p-6">
                <p className="text-xs uppercase tracking-wider text-tertiary">
                  Projected Value-at-Risk
                </p>

                <p className="mt-2 font-display text-5xl">$1.4M</p>

                <p className="mt-2 text-sm text-on-surface-variant">
                  FAIR-derived · server-side
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl border border-outline-variant/20 px-5 py-4">
                <span className="text-sm">Missing controls</span>

                <span className="font-semibold">
                  3 NIST · 2 ISO 42001
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  Defensible Math
                </p>

                <h2 className="mt-4 font-display text-4xl md:text-5xl">
                  A number that survives scrutiny.
                </h2>

                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                  VALORA AI uses FAIR-derived valuation to distinguish inherent
                  exposure from residual exposure after controls.
                </p>
              </div>

              <div className="rounded-3xl border border-outline-variant/20 p-8">
                <p className="text-xs uppercase tracking-wider text-tertiary">
                  FAIR-derived AI valuation
                </p>

                <div className="mt-6 overflow-x-auto rounded-2xl bg-surface-variant/30 p-6">
                  <code className="whitespace-nowrap text-sm md:text-base">
                    VaR = TEF × (1 − Control Strength) × Loss Magnitude ×
                    (Autonomy × Access × Exposure)
                  </code>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Transparent", "Published inputs and multipliers"],
                    ["Server-side", "Scoring cannot be manipulated client-side"],
                    ["Evidence-linked", "Controls are tied to attestation"],
                    ["Reproducible", "Same profile, same context, same number"],
                  ].map(([title, description]) => (
                    <div key={title}>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continuous Posture */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Continuous Posture
            </p>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              The ledger never sleeps.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "01",
                  "Drift Detection",
                  "Live cloud configuration is checked against the registered AI profile.",
                ],
                [
                  "02",
                  "Evidence Vault",
                  "Documents are OCR-parsed, SHA-256 signed, and appended to the ledger.",
                ],
                [
                  "03",
                  "Maturity Recompute",
                  "NIST AI RMF and ISO 42001 maturity scores are recalculated as posture changes.",
                ],
                [
                  "04",
                  "CISO Roll-Up",
                  "Enterprise VaR is refreshed from department to process to AI agent.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-outline-variant/20 p-7"
                >
                  <span className="text-sm font-bold text-tertiary">
                    {number}
                  </span>

                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>

                  <p className="mt-3 leading-7 text-on-surface-variant">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-tertiary/20 bg-tertiary/5 p-7">
              <p className="text-lg font-medium">
                One source of truth for the quarterly board meeting, annual
                renewal, and regulatory inspection.
              </p>
            </div>
          </div>
        </section>

        {/* Evidence */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Board-Ready Evidence
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                One click. Three audiences. Same data.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {evidence.map((item) => (
                <div
                  key={item.audience}
                  className="rounded-2xl border border-outline-variant/20 p-7"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-tertiary">
                    {item.audience}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold">
                    {item.artifact}
                  </h3>

                  <p className="mt-4 leading-7 text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  Governance & Compliance
                </p>

                <h2 className="mt-4 font-display text-4xl md:text-5xl">
                  Compliance evidence built into the workflow.
                </h2>

                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                  VALORA AI connects deployment decisions with NIST AI RMF,
                  ISO/IEC 42001, and EU AI Act alignment so compliance is not a
                  separate dashboard beside the process.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  ["NIST AI RMF", "Operational"],
                  ["ISO/IEC 42001", "Crosswalk"],
                  ["SOC 2 Type II", "In audit"],
                  ["EU AI Act Article 50", "Q4 2026"],
                  ["ISO 27001 · DORA", "Q1 2027"],
                ].map(([framework, status]) => (
                  <div
                    key={framework}
                    className="flex items-center justify-between rounded-xl border border-outline-variant/20 p-5"
                  >
                    <span className="font-medium">{framework}</span>

                    <span className="text-sm text-on-surface-variant">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Security & Architecture
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                We price risk. We don't add to it.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {security.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-outline-variant/20 p-5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Getting Started
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Start small. Prove fast.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
                A focused 14-day trial takes you from your highest-risk AI use
                case to a board-ready risk view.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                [
                  "01",
                  "Sandbox in 30 minutes",
                  "Company size, industry, and your highest-risk AI use case produce a projected $ VaR.",
                ],
                [
                  "02",
                  "Register 3 live agents",
                  "Capture autonomy, access, and exposure to generate per-agent risk and compliance evidence.",
                ],
                [
                  "03",
                  "Walk into the board meeting",
                  "Generate the Board Brief, Evidence Package, and documented AI control posture.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-outline-variant/20 p-7"
                >
                  <span className="text-sm font-bold text-tertiary">
                    {number}
                  </span>

                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>

                  <p className="mt-3 leading-7 text-on-surface-variant">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-28 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              VALORA AI
            </p>

            <h2 className="mt-5 font-display text-5xl md:text-6xl">
              Approve or Block AI in Dollars
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
              Give security the economic language to govern AI at the speed
              your business is deploying it.
            </p>

            <Link
              href="/contact"
              className="btn-gold mt-10 inline-flex rounded-xl px-8 py-4"
            >
              Book a 14-Day Trial
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
