import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "seller",
    name: "Every Equinix seller",
    blurb: "The seller stays in control while the fleet prepares work for review.",
    color: "#E8E8ED",
    mark: "AE",
    seat: true,
  },
  {
    id: "account-brief",
    name: "Account brief agent",
    blurb: "Prepares account context from approved and public sources.",
    jobId: "account-brief",
    color: "#ED1C24",
  },
  {
    id: "product-follow-up",
    name: "Product follow-up agent",
    blurb: "Checks approved sources and holds unsupported answers.",
    jobId: "product-follow-up",
    color: "#C71920",
  },
  {
    id: "public-signal",
    name: "Public signal agent",
    blurb: "Separates public facts from a labeled hypothesis.",
    jobId: "public-signal",
    color: "#9F151B",
  },
  {
    id: "outbound",
    name: "Outbound agent",
    blurb: "Prepares an unsent point of view for seller review.",
    color: "#2C2E2B",
  },
  {
    id: "deal-desk",
    name: "Deal desk agent",
    blurb: "Collects open product questions and approved answers.",
    color: "#444742",
  },
  {
    id: "pipeline",
    name: "Pipeline agent",
    blurb: "Finds missing owners and next steps in approved records.",
    color: "#5D615B",
  },
  {
    id: "renewal",
    name: "Renewal agent",
    blurb: "Summarizes approved account changes for review.",
    color: "#777B74",
  },
  {
    id: "chief",
    name: "Chief of staff agent",
    blurb: "Collects open decisions into a short review agenda.",
    color: "#8F948C",
  },
];
