"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const ease = [0.25, 0.1, 0.25, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const portalCards = [
  {
    audience: "B2C",
    icon: "family_restroom",
    title: "Protect Yourself & Your Family",
    copy: "Start with a personal Human Vulnerability Index assessment that turns everyday online habits into a clear risk score and practical next steps.",
    href: "/products#b2c",
    cta: "View B2C HVI",
  },
  {
    audience: "B2B",
    icon: "corporate_fare",
    title: "Secure Your Organization",
    copy: "Route security leaders into the corporate assessment path for department-level risk, passive telemetry, and pilot planning.",
    href: "/products#b2b",
    cta: "View B2B HVI",
  },
] as const;

const trustSignals = [
  ["70-80%", "organizational breaches originate inside the human perimeter"],
  ["No HR data", "privacy-safe architecture avoids personnel records"],
  ["Live risk map", "department-level visibility for security leaders"],
] as const;

const journeySteps = [
  {
    step: "01",
    title: "Experience the threat",
    copy: "A short simulation creates immediate context before asking visitors to commit.",
  },
  {
    step: "02",
    title: "Choose a path",
    copy: "Individuals move to personal HVI scoring; organizations move toward corporate risk mapping.",
  },
  {
    step: "03",
    title: "Act on the score",
    copy: "Each audience receives a clear next step: personal protection or enterprise discovery.",
  },
] as const;

const threatScenarios = [
  {
    title: "Phishing link",
    prompt: "An urgent account email asks you to verify your login before the end of the day.",
    choices: [
      {
        id: "risky",
        label: "Click Verify account",
        consequence:
          "Real-time consequence: opening the link can send credentials to a lookalike login page.",
      },
      {
        id: "safe",
        label: "Open the bank app directly",
        consequence:
          "Real-time consequence: opening the bank app directly avoids the attacker-controlled link and verifies the alert through a trusted channel.",
      },
    ],
  },
  {
    title: "Deepfake voice prompt",
    prompt: "A familiar executive voice asks for a one-time code while traveling.",
    choices: [
      {
        id: "risky",
        label: "Send the 6-digit code in chat",
        consequence:
          "Real-time consequence: sharing the code can complete account takeover even when MFA is enabled.",
      },
      {
        id: "safe",
        label: "Hang up and call the saved work number",
        consequence:
          "Real-time consequence: calling back on a known number breaks the impersonation attempt.",
      },
    ],
  },
  {
    title: "Social engineering branch",
    prompt: "A shared document asks you to approve broad permissions before you can view it.",
    choices: [
      {
        id: "risky",
        label: "Approve the permissions",
        consequence:
          "Real-time consequence: malicious OAuth approval can expose mail, files, and contacts without a password.",
      },
      {
        id: "safe",
        label: "Inspect sender and permissions",
        consequence:
          "Real-time consequence: checking the sender and permission scope catches the suspicious access request.",
      },
    ],
  },
] as const;

const osintLines = [
  "$ hvi osint scan --target public-profile --mode passive",
  "[dns] discovered public domain references: 12",
  "[social] exposed family and travel clues: review",
  "[identity] breached email reference: sanitized match",
  "[cloud] shared document permission prompt detected",
  "[credential] password reuse risk pattern: elevated",
  "[hvi] correlating phishing, exposure, and privilege signals",
  "[summary] preview score: 74 / high attention",
] as const;

function AppSimulation() {
  const [visibleLines, setVisibleLines] = useState(4);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleLines((current) =>
        current >= osintLines.length ? 4 : current + 1
      );
    }, 1100);

    return () => window.clearInterval(interval);
  }, []);

  const progress = Math.round((visibleLines / osintLines.length) * 100);

  return (
    <motion.div
      id="simulation"
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-6xl"
    >
      <div className="absolute -inset-5 rounded-[2rem] bg-tertiary/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.6rem] border border-outline-variant/30 bg-surface-container-lowest shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 border-b border-outline-variant/25 bg-surface-container-low px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-error" />
          <span className="h-3 w-3 rounded-full bg-tertiary" />
          <span className="h-3 w-3 rounded-full bg-primary" />
          <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-full border border-outline-variant/25 bg-background/65 px-3 py-1.5">
            <span className="material-symbols-outlined text-sm text-primary">
              travel_explore
            </span>
            <span className="truncate font-mono text-[10px] text-on-surface-variant">
              hvi://passive-osint/public-profile
            </span>
          </div>
        </div>

        <div className="grid min-h-[520px] bg-[linear-gradient(135deg,rgba(17,20,19,0.96),rgba(11,15,14,1))] md:grid-cols-[135px_1fr]">
          <aside className="hidden border-r border-outline-variant/20 bg-background/35 p-4 md:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-tertiary">
              HVI Scan
            </p>
            <div className="mt-5 space-y-2">
              {["OSINT", "Identity", "Credentials", "Exposure"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2 text-[11px] ${
                    index === 0
                      ? "bg-tertiary/10 text-tertiary"
                      : "text-on-surface-variant"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="flex flex-col p-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["74", "HVI preview"],
                ["12", "public signals"],
                ["3", "priority fixes"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-outline-variant/25 bg-background/55 p-3"
                >
                  <p className="font-display text-2xl leading-none text-tertiary">
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-1 flex-col rounded-xl border border-outline-variant/25 bg-background/80">
              <div className="flex items-center justify-between border-b border-outline-variant/20 px-4 py-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                    Passive OSINT terminal
                  </p>
                  <p className="mt-1 text-xs text-on-surface-variant">
                    sanitized demo output
                  </p>
                </div>
                <span className="rounded-full border border-primary/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                  running
                </span>
              </div>

              <pre className="min-h-[250px] flex-1 overflow-hidden p-4 font-mono text-[11px] leading-6 text-primary sm:text-xs">
                {osintLines.slice(0, visibleLines).join("\n")}
                <span className="animate-pulse">_</span>
              </pre>

              <div className="border-t border-outline-variant/20 p-4">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
                  <span>Scan progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-container-highest">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="h-full rounded-full bg-tertiary"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-tertiary/25 bg-tertiary/10 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-tertiary">
                Real-time finding
              </p>
              <p className="mt-2 text-xs leading-6 text-on-surface-variant">
                Public signals suggest phishing exposure, credential reuse, and
                document permission risk. Take the full assessment to convert
                findings into action steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MailPhishingEmail({
  selectedChoice,
  onChoice,
}: {
  selectedChoice: string | null;
  onChoice: (choiceId: string) => void;
}) {
  const scenario = threatScenarios[0];
  const selected = scenario.choices.find((choice) => choice.id === selectedChoice);

  return (
    <div className="mt-5">
      <div className="mb-4 rounded-xl border border-outline-variant/25 bg-background/65 p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
          Scenario 1 of 3
        </p>
        <p className="mt-2 text-base leading-7 text-on-surface">
          {scenario.prompt}
        </p>
        <p className="mt-3 text-sm font-semibold text-tertiary">
          Click one option below the email to continue.
        </p>
      </div>

    <div className="overflow-hidden rounded-xl border border-[#dadce0] bg-white text-[#202124] shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between border-b border-[#e8eaed] bg-[#f6f8fc] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a73e8] text-white">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <span className="text-sm font-semibold">Mail</span>
        </div>
        <div className="flex items-center gap-3 text-[#5f6368]">
          <span className="material-symbols-outlined text-lg">search</span>
          <span className="material-symbols-outlined text-lg">settings</span>
        </div>
      </div>

      <div className="grid min-h-[300px] md:grid-cols-[132px_1fr]">
        <aside className="hidden border-r border-[#e8eaed] bg-[#f6f8fc] px-3 py-4 md:block">
          {["Inbox", "Starred", "Sent", "Spam"].map((item, index) => (
            <div
              key={item}
              className={`rounded-r-full px-3 py-2 text-xs ${
                index === 0
                  ? "bg-[#fce8e6] font-semibold text-[#d93025]"
                  : "text-[#5f6368]"
              }`}
            >
              {item}
            </div>
          ))}
        </aside>

        <div className="p-4">
          <div className="flex items-center gap-2 border-b border-[#e8eaed] pb-3 text-[#5f6368]">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span className="material-symbols-outlined text-lg">archive</span>
            <span className="material-symbols-outlined text-lg">report</span>
            <span className="material-symbols-outlined text-lg">delete</span>
          </div>

          <h4 className="mt-4 text-xl font-normal text-[#202124]">
            Urgent: account verification required today
          </h4>
          <div className="mt-4 flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d93025] text-sm font-bold text-white">
              FN
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-sm font-semibold">
                  First National Bank Security
                </p>
                <span className="shrink-0 text-xs text-[#5f6368]">9:42 AM</span>
              </div>
              <p className="mt-0.5 text-xs text-[#5f6368]">
                security-alert@firstnational-secure.com
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-[#fbbc04] bg-[#fef7e0] p-4 text-sm leading-6">
            We detected unusual access to your account. To prevent lockout,
            verify your login within 10 minutes using the secure button below.
          </div>

          <button
            type="button"
            className="mt-5 rounded bg-[#1a73e8] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Verify account
          </button>

          <div className="mt-5 rounded-lg border border-[#e8eaed] bg-[#f8fafd] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5f6368]">
              What would you do?
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {scenario.choices.map((choice) => (
                <button
                  key={choice.id}
                  type="button"
                  onClick={() => onChoice(choice.id)}
                  disabled={selectedChoice !== null}
                  className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    selectedChoice === choice.id
                      ? "border-[#1a73e8] bg-[#e8f0fe] text-[#174ea6]"
                      : "border-[#dadce0] bg-white text-[#202124] hover:bg-[#f6f8fc] disabled:opacity-50"
                  }`}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </div>

          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-lg border border-[#fce8e6] bg-[#fce8e6] p-4"
            >
              <p className="text-sm leading-6 text-[#5f6368]">
                {selected.consequence}
              </p>
              <p className="mt-2 text-xs font-semibold text-[#d93025]">
                Saving choice and loading the next simulation...
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

function DeepfakeVoicePrompt({
  selectedChoice,
  onChoice,
}: {
  selectedChoice: string | null;
  onChoice: (choiceId: string) => void;
}) {
  const scenario = threatScenarios[1];
  const selected = scenario.choices.find((choice) => choice.id === selectedChoice);
  const waveform = [34, 58, 42, 72, 46, 64, 38, 82, 52, 68, 44, 60, 36, 76, 48, 56];

  return (
    <div className="mt-5 rounded-xl border border-outline-variant/25 bg-background/65 p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
        Scenario 2 of {threatScenarios.length}
      </p>
      <p className="mt-3 text-base leading-7 text-on-surface">
        {scenario.prompt}
      </p>
      <p className="mt-3 text-sm font-semibold text-tertiary">
        Listen to the voice message, read the transcript, then choose one response.
      </p>

      <div className="mt-5 overflow-hidden rounded-2xl border border-outline-variant/25 bg-surface-container-low">
        <div className="flex items-center justify-between border-b border-outline-variant/20 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-primary">
              <span className="material-symbols-outlined">record_voice_over</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface">Maya Chen</p>
              <p className="text-xs text-on-surface-variant">Voice message - 0:14</p>
            </div>
          </div>
          <span className="rounded-full border border-tertiary/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-tertiary">
            Playing
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tertiary text-on-tertiary"
              aria-label="Playing voice message"
            >
              <span className="material-symbols-outlined">pause</span>
            </button>
            <div className="flex h-16 flex-1 items-center gap-1.5">
              {waveform.map((height, index) => (
                <motion.span
                  key={`${height}-${index}`}
                  initial={{ height: "20%" }}
                  animate={{ height: `${height}%` }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.035,
                  }}
                  className="w-full rounded-full bg-primary"
                />
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-outline-variant/20 bg-background/70 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface-variant">
              Transcript
            </p>
            <p className="mt-2 text-sm leading-7 text-on-surface-variant">
              "Hey, it's Maya. I'm boarding now and locked out of the approval
              portal. Send me the six-digit code you just received so I can
              close this vendor payment before the cutoff."
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {scenario.choices.map((choice) => (
          <button
            key={choice.id}
            type="button"
            onClick={() => onChoice(choice.id)}
            disabled={selectedChoice !== null}
            className={`rounded-lg border p-4 text-left text-sm font-semibold transition-colors disabled:cursor-default ${
              selectedChoice === choice.id
                ? "border-tertiary bg-tertiary/10 text-tertiary"
                : "border-outline-variant/25 bg-surface-container-low text-on-surface hover:border-tertiary/50 disabled:opacity-50"
            }`}
          >
            {choice.label}
          </button>
        ))}
      </div>

      {selected && (
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 rounded-lg border border-tertiary/25 bg-tertiary/10 p-4"
        >
          <p className="text-sm leading-7 text-on-surface-variant">
            {selected.consequence}
          </p>
          <p className="mt-2 text-xs font-semibold text-tertiary">
            Saving choice and loading the next simulation...
          </p>
        </motion.div>
      )}
    </div>
  );
}

function SharedDocumentPrompt({
  selectedChoice,
  onChoice,
}: {
  selectedChoice: string | null;
  onChoice: (choiceId: string) => void;
}) {
  const scenario = threatScenarios[2];
  const selected = scenario.choices.find((choice) => choice.id === selectedChoice);

  return (
    <div className="mt-5 rounded-xl border border-outline-variant/25 bg-background/65 p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
        Scenario 3 of {threatScenarios.length}
      </p>
      <p className="mt-3 text-base leading-7 text-on-surface">
        {scenario.prompt}
      </p>
      <p className="mt-3 text-sm font-semibold text-tertiary">
        Review the shared document prompt, then choose one response.
      </p>

      <div className="mt-5 overflow-hidden rounded-2xl border border-[#dadce0] bg-white text-[#202124] shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between border-b border-[#e8eaed] bg-[#f8fafd] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[#1a73e8] text-white">
              <span className="material-symbols-outlined text-xl">description</span>
            </div>
            <div>
              <p className="text-sm font-semibold">Docs</p>
              <p className="text-xs text-[#5f6368]">Shared with you</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#5f6368]">
            <span className="material-symbols-outlined text-lg">star</span>
            <span className="material-symbols-outlined text-lg">more_vert</span>
          </div>
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-[1fr_210px]">
          <div className="rounded-lg border border-[#e8eaed] bg-[#f8fafd] p-4">
            <div className="mb-4 flex items-center justify-between border-b border-[#e8eaed] pb-3">
              <div>
                <h4 className="text-base font-semibold">Q4 Vendor Payment List</h4>
                <p className="mt-1 text-xs text-[#5f6368]">
                  Shared by finance-ops@secure-workspace.co
                </p>
              </div>
              <span className="rounded-full bg-[#e8f0fe] px-3 py-1 text-xs font-semibold text-[#174ea6]">
                External
              </span>
            </div>

            <div className="space-y-3">
              <div className="h-3 w-3/4 rounded bg-[#dadce0]" />
              <div className="h-3 w-full rounded bg-[#dadce0]" />
              <div className="h-3 w-5/6 rounded bg-[#dadce0]" />
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="h-9 rounded border border-[#e8eaed] bg-white" />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[#fbbc04] bg-[#fef7e0] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5f6368]">
              Permission request
            </p>
            <p className="mt-3 text-sm leading-6">
              This document wants permission to view your email address, contacts,
              and files shared with you.
            </p>
            <div className="mt-4 space-y-2 text-xs text-[#5f6368]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#d93025]">mail</span>
                Read basic email profile
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#d93025]">folder_open</span>
                View shared drive files
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#d93025]">contacts</span>
                Access contacts
              </div>
            </div>
            <button
              type="button"
              className="mt-5 w-full rounded bg-[#1a73e8] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Allow permissions
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {scenario.choices.map((choice) => (
          <button
            key={choice.id}
            type="button"
            onClick={() => onChoice(choice.id)}
            disabled={selectedChoice !== null}
            className={`rounded-lg border p-4 text-left text-sm font-semibold transition-colors disabled:cursor-default ${
              selectedChoice === choice.id
                ? "border-tertiary bg-tertiary/10 text-tertiary"
                : "border-outline-variant/25 bg-surface-container-low text-on-surface hover:border-tertiary/50 disabled:opacity-50"
            }`}
          >
            {choice.label}
          </button>
        ))}
      </div>

      {selected && (
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 rounded-lg border border-tertiary/25 bg-tertiary/10 p-4"
        >
          <p className="text-sm leading-7 text-on-surface-variant">
            {selected.consequence}
          </p>
          <p className="mt-2 text-xs font-semibold text-tertiary">
            Choice saved.
          </p>
        </motion.div>
      )}
    </div>
  );
}

function ThreatMicroSimulation() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [choices, setChoices] = useState<Array<string | null>>(
    Array(threatScenarios.length).fill(null)
  );
  const [phase, setPhase] = useState<"playing" | "calculating" | "complete">(
    "playing"
  );
  const [displayScore, setDisplayScore] = useState(0);
  const scenario = threatScenarios[activeScenario];
  const selectedChoice = choices[activeScenario];
  const selected = scenario.choices.find((choice) => choice.id === selectedChoice);
  const finalScore = Math.max(
    0,
    Math.min(
      100,
      44 +
        choices.reduce((total, choice) => {
          if (choice === "risky") return total + 17;
          if (choice === "safe") return total - 8;
          return total;
        }, 0)
    )
  );

  useEffect(() => {
    if (phase !== "calculating") return;

    setDisplayScore(0);
    const interval = window.setInterval(() => {
      setDisplayScore((current) => {
        const next = Math.min(finalScore, current + 4);
        if (next >= finalScore) {
          window.clearInterval(interval);
          window.setTimeout(() => setPhase("complete"), 450);
        }
        return next;
      });
    }, 45);

    return () => window.clearInterval(interval);
  }, [finalScore, phase]);

  function runScenario(index: number) {
    if (phase !== "playing") return;
    setActiveScenario(index);
  }

  function saveChoice(choiceId: string) {
    if (choices[activeScenario]) return;

    setChoices((current) => {
      const next = [...current];
      next[activeScenario] = choiceId;
      return next;
    });
    setCompleted((current) =>
      current.includes(activeScenario) ? current : [...current, activeScenario]
    );

    window.setTimeout(() => {
      if (activeScenario < threatScenarios.length - 1) {
        setActiveScenario((current) => current + 1);
      } else {
        setPhase("calculating");
      }
    }, 1200);
  }

  return (
    <section id="threat-simulation" className="px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Interactive preview
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-on-surface md:text-6xl">
            Want to try HVI before the pitch?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-on-surface-variant">
            Make three quick decisions inside realistic threat scenarios and see
            how your HVI preview score reacts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-xl border border-outline-variant/25 bg-surface-container-low p-5 shadow-[0_22px_70px_rgba(0,0,0,0.25)] md:p-6"
        >
          <div className="flex items-center justify-between gap-4 border-b border-outline-variant/25 pb-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-tertiary">
                Threat simulator
              </p>
              <h3 className="mt-1 text-xl font-semibold text-on-surface">
                3-click exposure preview
              </h3>
              <p className="mt-2 text-sm text-on-surface-variant">
                Read each scenario, click one of the two choices, and watch HVI
                calculate your preview score after the third answer.
              </p>
            </div>
            <div className="rounded-lg border border-outline-variant/25 bg-background/60 px-3 py-2 text-right">
              <p className="text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
                Steps
              </p>
              <p className="font-display text-2xl leading-none text-tertiary">
                {completed.length}/3
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {threatScenarios.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => runScenario(index)}
                className={`rounded-lg border p-4 text-left transition-colors ${
                  activeScenario === index
                    ? "border-tertiary bg-tertiary/10"
                    : "border-outline-variant/25 bg-background/45 hover:border-tertiary/45"
                }`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                  Scenario {index + 1}
                </p>
                <h4 className="mt-3 text-sm font-semibold text-on-surface">
                  {item.title}
                </h4>
                {choices[index] && (
                  <p className="mt-2 text-[11px] font-semibold text-tertiary">
                    Choice saved
                  </p>
                )}
              </button>
            ))}
          </div>

          {phase === "calculating" || phase === "complete" ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-xl border border-tertiary/25 bg-background/65 p-8 text-center"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                {phase === "calculating" ? "Calculating HVI score" : "HVI preview complete"}
              </p>
              <div className="mx-auto mt-6 flex h-40 w-40 items-center justify-center rounded-full border border-tertiary/25 bg-tertiary/10">
                <motion.span
                  key={displayScore}
                  className="font-display text-6xl text-tertiary"
                >
                  {displayScore}
                </motion.span>
              </div>
              <div className="mx-auto mt-6 h-2 max-w-xl overflow-hidden rounded-full bg-surface-container-highest">
                <motion.div
                  animate={{ width: phase === "complete" ? "100%" : "72%" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="h-full rounded-full bg-tertiary"
                />
              </div>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-on-surface-variant">
                {phase === "calculating"
                  ? "HVI is correlating your phishing, deepfake voice, and document-permission decisions."
                  : "This is a preview only. To unlock the full HVI score and remediation plan, choose the path that fits you."}
              </p>
              {phase === "complete" && (
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/products#b2c"
                    className="btn-gold inline-flex rounded-lg px-6 py-3 text-[11px] font-bold uppercase tracking-[0.08em]"
                  >
                    B2C: View Personal Path
                  </Link>
                  <Link
                    href="/products#b2b"
                    className="btn-ghost-gold inline-flex rounded-lg px-6 py-3 text-[11px] font-bold uppercase tracking-[0.08em]"
                  >
                    B2B: View Enterprise Path
                  </Link>
                </div>
              )}
            </motion.div>
          ) : activeScenario === 0 ? (
              <MailPhishingEmail
                selectedChoice={selectedChoice}
                onChoice={saveChoice}
              />
          ) : activeScenario === 1 ? (
              <DeepfakeVoicePrompt
                selectedChoice={selectedChoice}
                onChoice={saveChoice}
              />
          ) : activeScenario === 2 ? (
              <SharedDocumentPrompt
                selectedChoice={selectedChoice}
                onChoice={saveChoice}
              />
          ) : (
            <div className="mt-5 rounded-xl border border-outline-variant/25 bg-background/65 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                Scenario {activeScenario + 1} of {threatScenarios.length}
              </p>
              <p className="mt-3 text-base leading-7 text-on-surface">
                {scenario.prompt}
              </p>
              <p className="mt-3 text-sm font-semibold text-tertiary">
                Click one option to save your response and move to the next simulation.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {scenario.choices.map((choice) => (
                  <button
                    key={choice.id}
                    type="button"
                    onClick={() => saveChoice(choice.id)}
                    disabled={selectedChoice !== null}
                    className={`rounded-lg border p-4 text-left text-sm font-semibold transition-colors disabled:cursor-default ${
                      selectedChoice === choice.id
                        ? "border-tertiary bg-tertiary/10 text-tertiary"
                        : "border-outline-variant/25 bg-surface-container-low text-on-surface hover:border-tertiary/50 disabled:opacity-50"
                    }`}
                  >
                    {choice.label}
                  </button>
                ))}
              </div>
              {selected && (
                <motion.div
                  key={`${activeScenario}-${selected.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-lg border border-tertiary/25 bg-tertiary/10 p-4"
                >
                  <p className="text-sm leading-7 text-on-surface-variant">
                    {selected.consequence}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-tertiary">
                    Saving choice and loading the next simulation...
                  </p>
                </motion.div>
              )}
              {activeScenario === threatScenarios.length - 1 && completed.length === threatScenarios.length && (
                <p className="mt-4 text-sm font-semibold text-primary">
                  All three choices saved.
                </p>
              )}
            </div>
          )}

          {phase === "playing" && (
          <div className="mt-5 rounded-xl border border-primary/20 bg-primary-container/35 p-5">
            <p className="text-sm leading-7 text-on-surface-variant">
              See how you or your team stack up against this threat. Take the
              full assessment below.
            </p>
            <Link
              href="/products#b2c"
              className="btn-gold mt-4 inline-flex rounded-lg px-5 py-3 text-[11px] font-bold uppercase tracking-[0.08em]"
            >
              View the Personal HVI Path
            </Link>
          </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow overflow-hidden pb-16 pt-20 md:pt-24">
        <section className="relative px-6 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(2,26,22,0.95),transparent_40%),linear-gradient(180deg,rgba(29,32,31,0.35),rgba(17,20,19,0)_52%)]" />

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex max-w-5xl flex-col items-center text-center"
            >
              <motion.p
                variants={itemVariants}
                className="rounded-full border border-outline-variant/30 bg-surface-container-low/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-tertiary"
              >
                Human-centric cybersecurity platform
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="mt-6 max-w-5xl font-display text-5xl leading-[1.05] text-on-surface sm:text-6xl md:text-7xl"
              >
                Reduce the human risk factor before attackers exploit it.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-3xl text-base leading-8 text-on-surface-variant md:text-xl"
              >
                HVI turns behavior, exposure, and passive security signals into
                clear action paths for individuals, families, and enterprise
                security teams.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
              >
                <Link
                  href="#threat-simulation"
                  className="btn-gold inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-center text-[12px] font-bold uppercase tracking-[0.08em] shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 active:scale-95"
                >
                  Experience the Simulation
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <Link
                  href="#choose-path"
                  className="rounded-lg border border-white/20 px-7 py-4 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface transition-colors hover:bg-white/5"
                >
                  Choose Your Path
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mt-16 w-full scroll-mt-24 md:mt-20"
            >
              <AppSimulation />
            </motion.div>
          </div>
        </section>

        <ThreatMicroSimulation />

        <section
          id="choose-path"
          className="border-y border-outline-variant/20 bg-surface-container-low/55 px-6 py-14 md:px-8 md:py-16"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto max-w-7xl"
          >
            <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Dual audience portal
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-on-surface md:text-5xl">
                Two entry points, one human-risk platform.
              </h2>
            </motion.div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {portalCards.map((card) => (
                <motion.article
                  key={card.audience}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="rounded-xl border border-outline-variant/25 bg-background/45 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] md:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        {card.audience}
                      </p>
                      <h3 className="mt-4 font-display text-3xl leading-tight text-on-surface md:text-4xl">
                        {card.title}
                      </h3>
                    </div>
                    <span className="material-symbols-outlined rounded-lg border border-outline-variant/30 bg-surface-container-low p-3 text-3xl text-tertiary">
                      {card.icon}
                    </span>
                  </div>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-on-surface-variant md:text-base">
                    {card.copy}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-7 inline-flex rounded-lg border border-tertiary/35 px-5 py-3 text-sm font-bold text-tertiary transition-colors hover:bg-tertiary/10"
                  >
                    {card.cta}
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Why it matters
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-on-surface md:text-5xl">
                Visitors should know what HVI does in five seconds.
              </h2>
              <p className="mt-5 text-base leading-8 text-on-surface-variant">
                The homepage now routes people immediately: personal users go
                toward their own score, while security leaders move toward an
                enterprise risk assessment.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {trustSignals.map(([value, label]) => (
                <motion.div
                  key={value}
                  variants={itemVariants}
                  className="rounded-lg border border-outline-variant/25 bg-surface-container-low p-5"
                >
                  <div className="font-display text-3xl text-tertiary">{value}</div>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-8 md:pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3"
          >
            {journeySteps.map((step) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="rounded-lg border border-outline-variant/25 bg-surface-container-low p-6"
              >
                <p className="font-display text-3xl text-primary">{step.step}</p>
                <h3 className="mt-4 text-xl font-semibold text-on-surface">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  {step.copy}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
