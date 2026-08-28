import type { Artifact, CroJob } from "./types";

const ACCOUNT_BRIEF: Extract<Artifact, { kind: "one-pager" }> = {
  kind: "one-pager",
  title: "Pre-meeting account brief",
  eyebrow: "Approved sources only",
  sections: [
    {
      heading: "Approved account context",
      body: "Review the approved account priorities and open questions. Confirm that the context is current before the meeting.",
    },
    {
      heading: "Approved product context",
      body: "Equinix Fabric supports the interconnection discussion. Use the portal and SCE only where the approved product sources support the meeting topic.",
    },
    {
      heading: "Public context",
      body: "List each relevant public source with its date. Keep public information separate from approved account context.",
    },
    {
      heading: "Meeting plan",
      body: "Use Serve Better and Run Simpler as the framing. Ask which priorities matter, and hold any unsupported point as a gap.",
    },
  ],
};

const PRODUCT_FOLLOW_UP: Extract<Artifact, { kind: "gmail" }> = {
  kind: "gmail",
  title: "Product follow-up draft",
  to: "Account contact",
  subject: "Follow-up on Equinix Fabric and interconnection",
  body: "Hi,\n\nI reviewed our approved call notes and product sources. Equinix Fabric is the approved topic for interconnection. The approved sources also cover the portal and SCE.\n\nThe notes do not give enough context to confirm whether Distributed AI Hub fits this question. I left that as an open item and will confirm it before sending a final answer.\n\nBest,\nSeller",
};

const PUBLIC_SIGNAL_POV: Extract<Artifact, { kind: "one-pager" }> = {
  kind: "one-pager",
  title: "Public signal point of view",
  eyebrow: "Hypothesis from public sources. Draft only.",
  sections: [
    {
      heading: "Public signals",
      body: "Use dated public sources only. Do not present a public signal as approved account context.",
    },
    {
      heading: "Hypothesis",
      body: "The account may be reviewing how interconnection can help it Serve Better and Run Simpler. This is a hypothesis, not an approved customer discovery.",
    },
    {
      heading: "Point of view",
      body: "Equinix Fabric may be relevant to an interconnection discussion. Include the portal, SCE, or Distributed AI Hub only when approved product sources support the topic.",
    },
    {
      heading: "Seller review",
      body: "Check every source and gap. Validate the hypothesis with the account. Keep this draft unsent until the Seller approves it.",
    },
  ],
};

export const JOBS: CroJob[] = [
  {
    id: "account-brief",
    number: 1,
    title: "Prepare the account before the meeting",
    trigger: "A meeting needs account preparation",
    backgroundAction:
      "Reviewing approved account context, approved product sources, and public sources",
    problem:
      "Meeting preparation takes longer when account context, product guidance, and public information are in separate places.",
    botJob:
      "The Account Brief Agent checks each approved source, keeps public information separate, and drafts a simple meeting brief with gaps called out.",
    storyboard: [
      {
        when: "Input",
        label:
          "The Seller starts with approved account context, approved product sources, and public sources.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Account",
          sources: [
            "Approved account context",
            "Approved product sources",
            "Public sources",
          ],
          signal: "Meeting preparation requested",
        },
      },
      {
        when: "Agent working",
        label:
          "The agent checks the sources, separates public context, and holds unsupported points as gaps.",
        scene: "notes",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Approved account context", answer: "Context reviewed" },
            { name: "Approved product sources", answer: "Terms checked" },
            { name: "Public sources", answer: "Dates and sources listed" },
          ],
          status: "Supported points ready; gaps held",
        },
      },
      {
        when: "Final artifact",
        label: "A sourced account brief is ready for the Seller to review.",
        scene: "send",
        artifact: ACCOUNT_BRIEF,
      },
    ],
    unlock:
      "Approved context, approved product guidance, public sources, and open gaps in one reviewable brief.",
    outcome:
      "The Seller enters the meeting with a sourced account brief and a clear meeting plan.",
    clips: [],
    demo: {
      title: "Account preparation",
      subtitle: "Approved context to meeting brief",
      participants: [
        { id: "seller", name: "Seller", role: "you" },
        {
          id: "account-brief-agent",
          name: "Account Brief Agent",
          role: "bot",
          persona:
            "Prepares a sourced account brief and keeps unsupported points as gaps",
          color: "#34C759",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "seller",
          kind: "text",
          body: "Prepare this account for the meeting. Use approved account context, approved product sources, and public sources.",
        },
        {
          id: "m2",
          from: "account-brief-agent",
          kind: "routine",
          body: "I checked each source, kept public context separate, and held unsupported points as gaps. The brief is ready for review.",
        },
        {
          id: "m3",
          from: "account-brief-agent",
          kind: "draft",
          draftLabel: "Pre-meeting account brief",
          artifact: ACCOUNT_BRIEF,
        },
      ],
    },
  },
  {
    id: "product-follow-up",
    number: 2,
    title: "Answer a product question from approved call notes",
    trigger: "Approved call notes contain a product question",
    backgroundAction:
      "Checking approved product sources and holding unsupported points as gaps",
    problem:
      "A product follow-up can become unclear when a draft mixes approved answers with assumptions.",
    botJob:
      "The Product Follow-up Agent reads the approved call notes, checks approved product sources, and drafts only the supported answer.",
    storyboard: [
      {
        when: "Input",
        label:
          "The Seller selects a product question from the approved call notes.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Account",
          sources: ["Approved call notes"],
          signal: "Product question marked for follow-up",
        },
      },
      {
        when: "Agent working",
        label:
          "The agent checks approved product sources and holds anything they do not support.",
        scene: "notes",
        visual: {
          kind: "answers-found",
          sources: [
            {
              name: "Equinix Fabric",
              answer: "Approved interconnection language found",
            },
            { name: "The portal and SCE", answer: "Approved sources found" },
            {
              name: "Distributed AI Hub",
              answer: "Fit not established; held as a gap",
            },
          ],
          status: "Sources checked; unsupported points held",
        },
      },
      {
        when: "Final artifact",
        label:
          "A supported product follow-up is ready in Gmail and remains unsent.",
        scene: "send",
        artifact: PRODUCT_FOLLOW_UP,
      },
    ],
    unlock:
      "A simple product answer with approved support and visible gaps.",
    outcome:
      "The Seller gets a product follow-up draft without turning an open gap into a claim.",
    clips: [],
    demo: {
      title: "Product follow-up",
      subtitle: "Approved call notes to supported answer",
      participants: [
        { id: "seller", name: "Seller", role: "you" },
        {
          id: "product-follow-up-agent",
          name: "Product Follow-up Agent",
          role: "bot",
          persona:
            "Checks approved product sources and holds unsupported points",
          color: "#007AFF",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "seller",
          kind: "text",
          body: "Prepare an answer to the product question in the approved call notes. Use approved product sources and hold any gap.",
        },
        {
          id: "m2",
          from: "product-follow-up-agent",
          kind: "routine",
          body: "I found approved support for Equinix Fabric, interconnection, the portal, and SCE. Distributed AI Hub is still a gap for this question.",
        },
        {
          id: "m3",
          from: "product-follow-up-agent",
          kind: "draft",
          draftLabel: "Gmail follow-up. Not sent.",
          artifact: PRODUCT_FOLLOW_UP,
        },
      ],
    },
  },
  {
    id: "public-signal",
    number: 3,
    title: "Turn public signals into a clear hypothesis",
    trigger: "The Seller requests a point of view from public sources",
    backgroundAction:
      "Reviewing public sources and separating evidence from hypothesis",
    problem:
      "Public information is easy to overstate when evidence, assumptions, and product language are mixed together.",
    botJob:
      "The Public Signal Agent lists the public sources, labels the hypothesis, checks approved product sources, and drafts an unsent point of view.",
    storyboard: [
      {
        when: "Input",
        label: "The Seller selects public sources for account research.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Account",
          sources: [
            "Public strategy",
            "Public newsroom",
            "Public role postings",
          ],
          signal: "Public sources ready for review",
        },
      },
      {
        when: "Agent working",
        label:
          "The agent separates source facts from a clearly labeled hypothesis.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Evidence", answer: "Dated public sources only" },
            { label: "Hypothesis", answer: "Clearly labeled" },
            { label: "Control", answer: "Draft remains unsent" },
          ],
        },
      },
      {
        when: "Final artifact",
        label:
          "An unsent point-of-view draft is ready with the hypothesis labeled.",
        scene: "send",
        artifact: PUBLIC_SIGNAL_POV,
      },
    ],
    unlock:
      "Public evidence, a labeled hypothesis, approved product language, and an unsent draft.",
    outcome:
      "The Seller gets a point of view that can start a conversation without presenting a hypothesis as customer discovery.",
    clips: [],
    demo: {
      title: "Public signal point of view",
      subtitle: "Public sources to labeled hypothesis",
      participants: [
        { id: "seller", name: "Seller", role: "you" },
        {
          id: "public-signal-agent",
          name: "Public Signal Agent",
          role: "bot",
          persona:
            "Turns public sources into a labeled hypothesis and an unsent point of view",
          color: "#FF9500",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "seller",
          kind: "text",
          body: "Build a point of view from these public sources. Label the hypothesis and keep the draft unsent.",
        },
        {
          id: "m2",
          from: "public-signal-agent",
          kind: "routine",
          body: "I separated the public evidence from the hypothesis and checked the product language. No public signal is presented as customer discovery.",
        },
        {
          id: "m3",
          from: "public-signal-agent",
          kind: "draft",
          draftLabel: "Point-of-view draft. Not sent.",
          artifact: PUBLIC_SIGNAL_POV,
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
