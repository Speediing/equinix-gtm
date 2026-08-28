import type { ClipId, JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gong"
  | "sfdc-account"
  | "sfdc-opp"
  | "sheets"
  | "gmail"
  | "slack"
  | "gdoc"
  | "linkedin"
  | "research"
  | "page"
  | "clip";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  clip?: ClipId;
  tabs: ChromeTab[];
};

const approvedContext = {
  id: "approved-context",
  host: "approved-context.internal",
  label: "Approved context",
};
const productSources = {
  id: "product-sources",
  host: "docs.google.com",
  label: "Approved product sources",
};
const publicSources = {
  id: "public-sources",
  host: "public-sources.example",
  label: "Public sources",
};
const gmail = {
  id: "gmail",
  host: "mail.google.com",
  label: "Gmail",
};

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "account-brief": {
    m1: {
      pill: "Opening approved account context",
      host: "approved-context.internal",
      path: "/accounts/current",
      title: "Approved account context",
      site: "gdoc",
      tabs: [approvedContext, productSources, publicSources],
    },
    m2: {
      pill: "Checking approved product and public sources",
      host: "docs.google.com",
      path: "/document/d/approved-product-sources",
      title: "Approved product sources",
      site: "gdoc",
      tabs: [approvedContext, productSources, publicSources],
    },
    m3: {
      pill: "Preparing the meeting brief",
      host: "docs.google.com",
      path: "/document/d/pre-meeting-account-brief",
      title: "Pre-meeting account brief",
      site: "gdoc",
      tabs: [approvedContext, productSources, publicSources],
    },
  },
  "product-follow-up": {
    m1: {
      pill: "Opening approved call notes",
      host: "approved-context.internal",
      path: "/call-notes/product-question",
      title: "Approved call notes",
      site: "gdoc",
      tabs: [approvedContext, productSources, gmail],
    },
    m2: {
      pill: "Checking approved product sources",
      host: "docs.google.com",
      path: "/document/d/approved-product-sources",
      title: "Approved product sources",
      site: "gdoc",
      tabs: [approvedContext, productSources, gmail],
    },
    m3: {
      pill: "Drafting the supported answer, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Product follow-up draft",
      site: "gmail",
      tabs: [approvedContext, productSources, gmail],
    },
  },
  "public-signal": {
    m1: {
      pill: "Opening public sources",
      host: "public-sources.example",
      path: "/account",
      title: "Public sources",
      site: "gdoc",
      tabs: [publicSources, productSources],
    },
    m2: {
      pill: "Separating evidence from hypothesis",
      host: "docs.google.com",
      path: "/document/d/public-signal-hypothesis",
      title: "Public signal hypothesis",
      site: "gdoc",
      tabs: [publicSources, productSources],
    },
    m3: {
      pill: "Preparing the point of view, not sent",
      host: "docs.google.com",
      path: "/document/d/public-signal-point-of-view",
      title: "Public signal point of view",
      site: "gdoc",
      tabs: [publicSources, productSources],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
