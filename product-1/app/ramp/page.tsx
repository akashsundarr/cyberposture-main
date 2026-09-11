import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const pillars = [
  {
    number: "01",
    title: "Assess",
    description:
      "Assess the controls and requirements that matter to your organization and establish a measurable starting point.",
  },
  {
    number: "02",
    title: "Understand AI Risk",
    description:
      "Assess AI systems and identify gaps that can change your organization's risk profile.",
  },
  {
    number: "03",
    title: "Quantify",
    description:
      "Use a FAIR-based Value-at-Risk approach to express selected risks as financial scenarios.",
  },
  {
    number: "04",
    title: "Remediate",
    description:
      "Turn findings into tracked risk and remediation actions, then re-test as work is completed.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Assess",
    description:
      "Establish your control posture across the business, AI, risk, and audit workflows that apply to your organization.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "Surface control gaps, AI posture gaps, and areas where evidence or risk quantification is incomplete.",
  },
  {
    number: "03",
    title: "Act",
    description:
      "Connect findings to risk and remediation actions with owners, status, and target dates.",
  },
  {
    number: "04",
    title: "Prove",
    description:
      "Re-test controls and bring the resulting evidence together for management, audit, and downstream workflows.",
  },
];

const readinessPillars = [
  {
    value: "25%",
    title: "Design Controls",
    description:
      "Design-level control assessment across the scoped Governance workflow.",
  },
  {
    value: "25%",
    title: "AI Posture",
    description:
      "Assessed and cleared registered AI assets within the defined scope.",
  },
  {
    value: "25%",
    title: "Risk Quantification",
    description:
      "Risks and AI assets with a FAIR-based VaR scenario attached.",
  },
  {
    value: "25%",
    title: "Test of Effectiveness",
    description:
      "Control pass rate against the effectiveness test.",
  },
];

const auditModules = [
  {
    title: "Test of Design",
    short: "ToD",
    description:
      "Validate whether controls, policies, and procedures are structurally appropriate for the target requirements.",
  },
  {
    title: "Test of Effectiveness",
    short: "ToE",
    description:
      "Evaluate whether controls are operating as intended and producing the required compliance outcomes.",
  },
  {
    title: "Audit File",
    short: "Evidence",
    description:
      "Bring findings, assessments, remediation, and supporting evidence together for audit preparation and handoff.",
  },
];

const audiences = [
  {
    title: "Security & Risk Leaders",
    description:
      "See where risk sits, what needs attention, and how readiness is changing.",
  },
  {
    title: "GRC & Compliance Teams",
    description:
      "Connect controls, assessments, policies, remediation, and evidence.",
  },
  {
    title: "Internal Audit",
    description:
      "Test both control design and operational effectiveness before formal audit activity.",
  },
  {
    title: "Executives & Boards",
    description:
      "Turn complex security and AI risk into a concise, decision-ready view.",
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
              RAMP by CyberPosture · Audit Readiness Platform
            </p>

            <h1 className="mx-auto mt-6 max-w-5xl font-display text-5xl leading-[0.95] md:text-7xl">
              From cyber risk to audit readiness — in one continuous workflow.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-on-surface-variant md:text-xl">
              RAMP connects control assessment, AI posture, risk
              quantification, remediation, and audit evidence so your team can
              understand risk, act on it, and prove progress.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact/b2b"
                className="btn-gold rounded-xl px-8 py-4"
              >
                Request a RAMP Demo
              </Link>

              <a
                href="#readiness-cycle"
                className="rounded-xl border border-outline-variant/30 px-8 py-4"
              >
                Explore the Readiness Cycle
              </a>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-outline-variant/20 p-7">
                <p className="font-display text-4xl">Assess</p>
                <p className="mt-2 text-sm text-on-surface-variant">
                  Controls & AI posture
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/20 p-7">
                <p className="font-display text-4xl">Quantify</p>
                <p className="mt-2 text-sm text-on-surface-variant">
                  Risk in financial scenarios
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/20 p-7">
                <p className="font-display text-4xl">Prove</p>
                <p className="mt-2 text-sm text-on-surface-variant">
                  Audit-ready evidence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  The Problem
                </p>

                <h2 className="mt-4 font-display text-4xl md:text-5xl">
                  Risk is scattered. Readiness should not be.
                </h2>

                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                  Controls, AI systems, risk registers, remediation, policies,
                  testing, and audit evidence often live in separate
                  workflows. RAMP brings those activities into one connected
                  readiness process.
                </p>
              </div>

              <div className="rounded-3xl border border-tertiary/20 bg-tertiary/5 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  RAMP
                </p>

                <h3 className="mt-4 font-display text-3xl">
                  Connect the work from assessment to proof.
                </h3>

                <div className="mt-8 space-y-3">
                  {[
                    "Assess controls and AI posture",
                    "Identify gaps and risk",
                    "Quantify selected exposure",
                    "Create and track remediation",
                    "Re-test and prepare evidence",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-xl border border-outline-variant/20 bg-background p-4"
                    >
                      <span className="text-sm font-bold text-tertiary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Readiness cycle */}
        <section
          id="readiness-cycle"
          className="px-6 py-24 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                The RAMP Readiness Cycle
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Assess. Understand. Act. Prove.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
                A continuous workflow that connects security posture,
                AI-related risk, remediation, and audit readiness.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-2xl border border-outline-variant/20 p-7"
                >
                  <span className="text-sm font-bold text-tertiary">
                    {pillar.number}
                  </span>

                  <h3 className="mt-7 font-display text-3xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 leading-7 text-on-surface-variant">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product experience */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Inside RAMP
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                One system. Multiple views of readiness.
              </h2>

              <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                Show the product through the decisions it helps teams make,
                rather than through a collection of disconnected dashboard
                screens.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-outline-variant/20 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-tertiary">
                  01 · Readiness
                </p>
                <h3 className="mt-5 text-2xl font-semibold">
                  Know where you stand.
                </h3>
                <p className="mt-4 leading-7 text-on-surface-variant">
                  A consolidated readiness view brings the core assessment
                  pillars together instead of forcing teams to interpret
                  separate module scores.
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/20 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-tertiary">
                  02 · AI Risk
                </p>
                <h3 className="mt-5 text-2xl font-semibold">
                  Put AI risk into business terms.
                </h3>
                <p className="mt-4 leading-7 text-on-surface-variant">
                  FAIR-based Value-at-Risk scenarios can translate selected AI
                  risks into financial ranges that can support business
                  decisions.
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/20 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-tertiary">
                  03 · Audit
                </p>
                <h3 className="mt-5 text-2xl font-semibold">
                  Know what still needs proof.
                </h3>
                <p className="mt-4 leading-7 text-on-surface-variant">
                  Track design and effectiveness testing, remediation, and
                  supporting evidence as you move toward audit readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gap to action */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  Gap → Risk → Action
                </p>

                <h2 className="mt-4 font-display text-4xl md:text-5xl">
                  Don't just identify gaps. Move them toward closure.
                </h2>

                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                  When a control fails a design or effectiveness test, the
                  finding can feed the risk and remediation workflows. As work
                  is completed, controls can be re-tested and readiness can
                  reflect the result.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  ["01", "Gap identified", "A control or AI posture gap is found."],
                  ["02", "Risk captured", "The issue is connected to a tracked risk."],
                  ["03", "Remediation assigned", "An action can be given an owner and target date."],
                  ["04", "Re-test & score", "Completed work can be verified and reflected in readiness."],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-outline-variant/20 p-6"
                  >
                    <div className="flex gap-5">
                      <span className="text-sm font-bold text-tertiary">
                        {number}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="mt-2 leading-7 text-on-surface-variant">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI risk */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl border border-tertiary/20 bg-tertiary/5 p-8 md:p-12">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                    AI Risk Quantification
                  </p>

                  <h2 className="mt-4 font-display text-4xl md:text-5xl">
                    AI risk, expressed in business terms.
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                    RAMP uses a FAIR-based Value-at-Risk approach to model
                    selected scenarios using risk-specific inputs. The goal is
                    to move beyond a simple red/amber/green label and give
                    decision-makers a financial view of exposure.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-on-surface-variant">
                    Example scenarios should be clearly labelled as
                    illustrative unless they represent verified customer data.
                  </p>
                </div>

                <div className="rounded-2xl border border-outline-variant/20 bg-background p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-tertiary">
                    Illustrative scenario
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="font-display text-3xl">$118K</p>
                      <p className="mt-2 text-xs text-on-surface-variant">
                        Best case
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-3xl">$412K</p>
                      <p className="mt-2 text-xs text-on-surface-variant">
                        Likely case
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-3xl">$1.9M</p>
                      <p className="mt-2 text-xs text-on-surface-variant">
                        Worst case
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-outline-variant/20 pt-6">
                    <p className="text-sm font-semibold">Scenario inputs</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-on-surface-variant">
                      <span>Autonomy</span>
                      <span>Access</span>
                      <span>Threat actor</span>
                      <span>Data sensitivity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Readiness scoring */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Readiness Scoring
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                A readiness score you can explain.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
                The RAMP model uses four equally weighted pillars. Each pillar
                contributes 25% to the overall readiness score.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {readinessPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-outline-variant/20 p-7"
                >
                  <p className="font-display text-3xl text-tertiary">
                    {pillar.value}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-7 text-on-surface-variant">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit readiness */}
        <section className="border-y border-outline-variant/10 px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  Audit Readiness
                </p>

                <h2 className="mt-4 font-display text-4xl md:text-5xl">
                  Test the design. Test the operation. Prepare the evidence.
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
                      <h3 className="text-xl font-semibold">{module.title}</h3>
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

        {/* Audience */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Built for the people responsible for proving security
              </p>

              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                One view of readiness. Different decisions for every team.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {audiences.map((audience) => (
                <div
                  key={audience.title}
                  className="rounded-2xl border border-outline-variant/20 p-7"
                >
                  <h3 className="text-xl font-semibold">{audience.title}</h3>
                  <p className="mt-4 leading-7 text-on-surface-variant">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks */}
        <section className="border-y border-outline-variant/10 px-6 py-20 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Frameworks & Requirements
            </p>

            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Bring the requirements that matter to your readiness workflow.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-on-surface-variant">
              Display only the frameworks and regulatory requirements that are
              currently supported and verified for the RAMP product.
            </p>

            <div className="mt-10 rounded-2xl border border-outline-variant/20 p-7">
              <p className="text-sm text-on-surface-variant">
                Add verified framework logos and coverage details here.
                Avoid implying support until each integration or mapping has
                been confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-28 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              RAMP by CyberPosture
            </p>

            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Make your next audit easier to prove.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
              Understand your posture, prioritize risk, drive remediation, and
              build a stronger evidence trail before the audit begins.
            </p>

            <Link
              href="/contact/b2b"
              className="btn-gold mt-10 inline-flex rounded-xl px-8 py-4"
            >
              Request a RAMP Demo
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
