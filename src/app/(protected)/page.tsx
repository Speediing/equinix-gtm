import { CompareTable } from "@/components/CompareTable";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/equinix-watercolor-header.png"
          alt=""
        />
        <SiteNav />
      </div>

      <div className="report">
        <div className="report-hero">
          <HeroTelemetry />
          <section className="hero">
            <div>
              <p className="eyebrow">A proactive agent for every Equinix seller</p>
              <h1>The agents that work while your sellers sell.</h1>
              <p className="hero-intro">
                Grok Bot starts from approved sales signals, works in the
                background, and prepares drafts for seller review. Nothing
                sends without the seller.
              </p>
            </div>
          </section>

          <RosterChart />

          <section className="usecase-framing">
            <p className="eyebrow">Three sample use cases</p>
            <h2>
              See the signal, the agent at work, and the artifact ready for
              review.
            </h2>
            <p>
              These are illustrative workflows built from approved Equinix
              context and public sources.
            </p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/equinix-watercolor-header.png" alt="" />
      </div>

      <div className="report">
        <CompareTable />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Equinix x SpaceXAI</p>
          <p>Grok Bot for Equinix sales</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor contact</p>
          <strong>Tyler Pickler</strong>
          <a href="mailto:tyler.pickler@cursor.com">
            tyler.pickler@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
