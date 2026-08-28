import type { ComputerBeat } from "@/data/screens";
import type { Artifact, DemoMessage } from "@/data/types";
import { ArtifactCard } from "./ArtifactCard";

function asGmail(artifact: Artifact | undefined) {
  return artifact?.kind === "gmail" ? artifact : undefined;
}

function SourceScreen({
  beat,
  account,
}: {
  beat: ComputerBeat;
  account: string;
}) {
  return (
    <div className="site site-gdoc">
      <header>
        <span className="site-mark">S</span>
        <p>
          <strong>{beat.title}</strong>
          <small>{account}</small>
        </p>
      </header>
      <p className="site-time">Approved source workspace</p>
      <ul className="site-source-list">
        <li>
          <span>Source</span>
          Approved context is kept separate from public context.
        </li>
        <li>
          <span>Check</span>
          Unsupported points remain open gaps.
        </li>
        <li>
          <span>Control</span>
          Drafts stay unsent until the seller approves.
        </li>
      </ul>
    </div>
  );
}

function DocumentScreen({
  beat,
  account,
  artifact,
}: {
  beat: ComputerBeat;
  account: string;
  artifact: Artifact | undefined;
}) {
  return (
    <div className="site site-gdoc">
      <header>
        <span className="site-mark">D</span>
        <p>
          <strong>{beat.title}</strong>
          <small>{account}</small>
        </p>
      </header>
      <p className="site-time">Working from approved sources</p>
      {artifact ? (
        <ArtifactCard artifact={artifact} />
      ) : (
        <ul className="site-source-list">
          <li>
            <span>Review</span>
            Read the approved context.
          </li>
          <li>
            <span>Separate</span>
            Keep facts, public sources, and hypotheses distinct.
          </li>
          <li>
            <span>Prepare</span>
            Build the seller artifact and hold every gap.
          </li>
        </ul>
      )}
    </div>
  );
}

function GmailScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: Extract<Artifact, { kind: "gmail" }> | undefined;
  sent: boolean;
}) {
  return (
    <div className="site site-gmail">
      <header>
        <span className="site-mark">M</span>
        <p>
          <strong>{sent ? "Sent" : "Draft"}</strong>
          <small>{account}</small>
        </p>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || "Account contact"}
      </p>
      <p>
        <span>Subject</span>
        {artifact?.subject || `${account} follow-up`}
      </p>
      <div>{artifact?.body || "Draft parked until the seller approves."}</div>
    </div>
  );
}

export function SiteScreen({
  beat,
  message,
  account,
  sent,
}: {
  beat: ComputerBeat;
  message: DemoMessage | undefined;
  account: string;
  sent: boolean;
}) {
  const artifact = message?.artifact;

  if (beat.site === "gmail") {
    return (
      <GmailScreen
        account={account}
        artifact={asGmail(artifact)}
        sent={sent}
      />
    );
  }

  if (beat.site === "gdoc") {
    return (
      <DocumentScreen
        beat={beat}
        account={account}
        artifact={artifact}
      />
    );
  }

  return <SourceScreen beat={beat} account={account} />;
}
