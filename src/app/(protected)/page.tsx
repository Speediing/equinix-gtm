import { CompareTable } from "@/components/CompareTable";
import { HeroDemo } from "@/components/HeroDemo";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
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
            <HeroDemo />
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
        <QuoteWall />
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
