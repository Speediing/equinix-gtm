# Equinix x SpaceXAI

Passworded GTM leave-behind for Equinix.

## What it is

Three illustrative seller workflows on one page. Each workflow moves from
an approved signal to agent work and a final artifact. Interactive demos show
the Grok Bot chat beside the agent computer.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default password is
`land2expand`. Override it with `SITE_PASSWORD`.

## Deploy

Deploy under the `jasonwiker` Vercel team with project name `equinix-grokbot`.
Set `SITE_PASSWORD=land2expand`.
