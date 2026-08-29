export type HeroJobIcon =
  | "send"
  | "search"
  | "follow-up"
  | "deal"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  workCopy: string;
  result: string;
  userMessage: string;
  botMessage: string;
};

export const HERO_JOBS = [
  {
    name: "Sales Outbound",
    icon: "send",
    account: "Account selected by the seller",
    signal: "Approved account priority and approved product context",
    workCopy:
      "Checking approved context and preparing an outreach draft for seller review.",
    result: "Outbound draft ready for review",
    userMessage:
      "Prepare outreach around Serve Better and Run Simpler using only the approved account and product context.",
    botMessage:
      "Draft ready. I marked the open context as gaps and held the send for your approval.",
  },
  {
    name: "Account Research",
    icon: "search",
    account: "Account selected by the seller",
    signal: "Meeting preparation requested",
    workCopy:
      "Separating approved account context from dated public sources for a reviewable brief.",
    result: "Sourced account brief ready",
    userMessage:
      "Prepare a sourced account brief and keep public information separate from approved account context.",
    botMessage:
      "Brief ready. Sources and open questions are labeled for your review.",
  },
  {
    name: "Call Follow-up",
    icon: "follow-up",
    account: "Account selected by the seller",
    signal: "Approved call notes include an open product question",
    workCopy:
      "Checking approved call notes and product language before preparing the follow-up draft.",
    result: "Follow-up draft ready for review",
    userMessage:
      "Draft a follow-up using approved language for Equinix Fabric and interconnection, and hold anything unsupported.",
    botMessage:
      "Draft ready. Unsupported points are open items, and the send is held for your approval.",
  },
  {
    name: "Deal Desk",
    icon: "deal",
    account: "Account selected by the seller",
    signal: "Seller requests a review of approved deal context",
    workCopy:
      "Organizing approved deal context, decisions, and open items into a review artifact.",
    result: "Deal review artifact ready",
    userMessage:
      "Organize the approved deal context, decisions, and gaps into a review artifact.",
    botMessage:
      "Review ready. Unresolved items are called out for your decision.",
  },
  {
    name: "Pipeline Health",
    icon: "pipeline",
    account: "Account selected by the seller",
    signal: "Seller requests an approved opportunity review",
    workCopy:
      "Reviewing approved opportunity context and drafting questions for seller review.",
    result: "Opportunity review ready",
    userMessage:
      "Review the approved opportunity context and draft the next questions without inventing activity or outcomes.",
    botMessage:
      "Review ready. Next questions and context gaps are labeled for your approval.",
  },
  {
    name: "Renewal Risk",
    icon: "renewal",
    account: "Account selected by the seller",
    signal: "Approved account context calls for a renewal review",
    workCopy:
      "Preparing a renewal review from approved context and clearly labeling open questions.",
    result: "Renewal review artifact ready",
    userMessage:
      "Prepare a renewal review using approved context and frame relevant questions around Serve Better and Run Simpler.",
    botMessage:
      "Review ready. Every open question is labeled for the seller.",
  },
  {
    name: "Competitive Intel",
    icon: "competitive",
    account: "Account selected by the seller",
    signal: "Seller requests a sourced comparison",
    workCopy:
      "Separating approved product evidence, public sources, and hypotheses in a comparison draft.",
    result: "Sourced comparison draft ready",
    userMessage:
      "Build a comparison from approved product sources and dated public sources, keeping evidence separate from hypotheses.",
    botMessage:
      "Comparison ready. Evidence and hypotheses are clearly separated.",
  },
  {
    name: "Sales Chief of Staff",
    icon: "chief-of-staff",
    account: "Account selected by the seller",
    signal: "Seller requests a plan for approved priorities",
    workCopy:
      "Turning approved priorities into a review plan and holding unsupported product fit as gaps.",
    result: "Priority plan ready for review",
    userMessage:
      "Turn the approved priorities into a review plan covering the portal, SCE, and Distributed AI Hub only where supported.",
    botMessage:
      "Plan ready. Unsupported product fit remains labeled as a gap.",
  },
] as const satisfies readonly HeroJob[];
