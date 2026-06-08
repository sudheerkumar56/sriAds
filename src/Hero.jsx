import { company, stats } from "./data"

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">{company.subTagline}</span>
          <h1 className="hero-title">
            {company.tagline.split(",")[0]}
            <span className="hl"> Our Print.</span>
          </h1>
          <p className="hero-text">
            {company.name} delivers complete indoor & outdoor digital printing solutions —
            from business cards and brochures to flex banners, LED boards and full branding.
          </p>

          <div className="hero-pills">
            {company.pills.map((p) => (
              <span key={p} className="pill">
                {p}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start Your Project
            </a>
            <a href="#work" className="btn btn-outline">
              View Our Work
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="logo-card">
            <img src={company.logo || "/placeholder.svg"} alt={`${company.name} logo`} />
          </div>
          <div className="float-tag tag-1">Flex & Offset</div>
          <div className="float-tag tag-2">LED Boards</div>
          <div className="float-tag tag-3">Digital Marketing</div>
        </div>
      </div>

      <div className="container">
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
