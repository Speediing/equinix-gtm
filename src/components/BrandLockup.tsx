"use client";

import Image from "next/image";
import { useState } from "react";

const EQUINIX_WORDMARK =
  "https://cdn.equinix.com/microfrontends/console/static/images/logos/eqx-brand-horizontal.svg";

export function BrandLockup({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  const [wordmarkFailed, setWordmarkFailed] = useState(false);

  return (
    <div
      className={`brand-lockup brand-lockup-${size}`}
      aria-label="Equinix and SpaceXAI"
    >
      {wordmarkFailed ? (
        <span className="brand-equinix-fallback" aria-hidden>
          EQUINIX
        </span>
      ) : (
        <Image
          src={EQUINIX_WORDMARK}
          alt=""
          className="brand-equinix"
          width={92}
          height={16}
          unoptimized
          onError={() => setWordmarkFailed(true)}
        />
      )}
      <span className="brand-times" aria-hidden>
        ×
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/spacexai.svg" alt="SpaceXAI" className="brand-sxai" />
    </div>
  );
}
