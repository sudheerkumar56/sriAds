import { company } from "./data"
import { useReveal } from "./useReveal"

export default function About() {
  const reveal = useReveal()

  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div ref={reveal.ref} className={`about-media ${reveal.className}`}>
          <img src={company.banner || "/placeholder.svg"} alt={`${company.name} banner`} />
        </div>

        <div className="about-copy">
          <span className="eyebrow">About Us</span>
          <h2 className="section-title">{company.name}</h2>
          <p className="about-text">
            We are a full-service printing & advertising agency offering{" "}
            <strong>indoor and outdoor digital printing solutions</strong>. From concept to
            finished product, our motto is simple — <em>{company.tagline}</em>.
          </p>

          <ul className="about-list">
            {company.highlights.map((h) => (
              <li key={h}>
                <span className="check">✓</span>
                {h}
              </li>
            ))}
          </ul>

          <div className="about-pills">
            {company.pills.map((p) => (
              <span key={p} className="pill pill-dark">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
