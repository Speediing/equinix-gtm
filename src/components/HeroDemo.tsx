"use client";

import { useState } from "react";
import { HERO_JOBS, type HeroJobIcon } from "@/data/hero-jobs";

function JobIcon({ icon }: { icon: HeroJobIcon }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      {icon === "send" ? (
        <>
          <path d="m3.5 11.2 16.8-7-5.7 16.1-3.1-6-8-3.1Z" {...common} />
          <path d="m11.5 14.3 8.8-10.1" {...common} />
        </>
      ) : null}
      {icon === "search" ? (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" {...common} />
          <path d="m15.3 15.3 4.7 4.7" {...common} />
        </>
      ) : null}
      {icon === "follow-up" ? (
        <>
          <path d="M4 5.5h16v10.8H9l-5 3.2v-14Z" {...common} />
          <path d="M9 9h6m-3-2.5L15 9l-3 2.5" {...common} />
        </>
      ) : null}
      {icon === "deal" ? (
        <>
          <path d="M6 3.5h9l3 3v14H6v-17Z" {...common} />
          <path d="M15 3.5v3h3M9 12l2 2 4-4" {...common} />
        </>
      ) : null}
      {icon === "pipeline" ? (
        <>
          <path d="M4 19.5V13h4v6.5H4Zm6 0V8h4v11.5h-4Zm6 0V4.5h4v15h-4Z" {...common} />
          <path d="M3 19.5h18" {...common} />
        </>
      ) : null}
      {icon === "renewal" ? (
        <>
          <path d="M19.2 8.2A8 8 0 1 0 20 14" {...common} />
          <path d="M15.5 8.2h3.7V4.5" {...common} />
          <path d="M9 12.2 11.2 14l3.8-4" {...common} />
        </>
      ) : null}
      {icon === "competitive" ? (
        <>
          <path d="M5 6.5h5v12H5v-12Zm9-2h5v14h-5v-14Z" {...common} />
          <path d="M7.5 10h0M16.5 8h0M3.5 18.5h17" {...common} />
        </>
      ) : null}
      {icon === "chief-of-staff" ? (
        <>
          <path d="M7 4.5h10v16H7v-16Z" {...common} />
          <path d="M10 4.5v-1h4v1M10 9h4m-4 4h4m-4 4h3" {...common} />
          <path d="m4 9 .8 1L6.5 8" {...common} />
        </>
      ) : null}
    </svg>
  );
}

function DesktopIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="3"
        y="4.5"
        width="18"
        height="12"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 20h8M12 16.5V20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="m14.5 6-6 6 6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="9"
        y="3.5"
        width="6"
        height="10"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v3.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function HeroDemo() {
  const [selected, setSelected] = useState(0);
  const job = HERO_JOBS[selected];

  return (
    <>
      <div className="hero-copy">
        <p className="eyebrow">A proactive agent for every Equinix seller</p>
        <h1>The agents that work while your sellers sell.</h1>
        <p className="hero-intro">
          Grok Bot starts from approved sales signals, works in the background,
          and prepares drafts for seller review. Nothing is sent until the
          seller approves it.
        </p>

        <div className="hero-phone-jobs" aria-label="Choose a Grok Bot job">
          {HERO_JOBS.map((item, index) => {
            const active = selected === index;

            return (
              <button
                key={item.name}
                type="button"
                className={active ? "is-active" : undefined}
                aria-pressed={active}
                onClick={() => setSelected(index)}
              >
                {active ? (
                  <span aria-hidden="true">
                    <JobIcon icon={item.icon} />
                  </span>
                ) : null}
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      <aside className="hero-bot-demo" aria-label="Live Grok Bot phone demo">
        <p className="sr-only" aria-live="polite">
          {job.name} Agent selected.
        </p>
        <div className="hero-phone">
          <div className="hero-phone-notch" aria-hidden="true" />

          <header className="hero-phone-header">
            <span className="hero-phone-back" aria-hidden="true">
              <BackIcon />
            </span>
            <span className="hero-phone-agent" aria-hidden="true">
              <JobIcon icon={job.icon} />
            </span>
            <p>
              <strong>{job.name} Agent</strong>
              <small>
                <span aria-hidden="true" />
                Working in the cloud
              </small>
            </p>
            <span className="hero-phone-desktop" aria-hidden="true">
              <DesktopIcon />
            </span>
          </header>

          <div
            key={job.name}
            className="hero-phone-thread"
            aria-label={`${job.name} Agent thread`}
          >
            <article className="hero-phone-work">
              <p className="hero-phone-work-label">
                <span aria-hidden="true" />
                New approved signal
              </p>
              <p className="hero-phone-work-meta">
                <span>Account</span>
                {job.account}
              </p>
              <p className="hero-phone-work-meta">
                <span>Signal</span>
                {job.signal}
              </p>
              <p className="hero-phone-work-copy">{job.workCopy}</p>
              <strong>{job.result}</strong>
            </article>

            <p className="hero-phone-message is-user">{job.userMessage}</p>
            <p className="hero-phone-message is-bot">{job.botMessage}</p>
          </div>

          <footer className="hero-phone-composer">
            <span aria-hidden="true">
              <PlusIcon />
            </span>
            <p>Message {job.name} Agent</p>
            <span aria-hidden="true">
              <MicrophoneIcon />
            </span>
          </footer>
        </div>
      </aside>
    </>
  );
}
