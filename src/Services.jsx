import { useState } from "react"
import { services } from "./data"
import { useReveal } from "./useReveal"

export default function Services() {
  const reveal = useReveal()
  const [query, setQuery] = useState("")

  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Printing & Advertising Services</h2>
          <p className="section-subtitle">
            One stop shop for all your printing needs. Search or browse our complete service list.
          </p>
          <div className="search-box">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a service (e.g. flex, t-shirt, logo)..."
              aria-label="Search services"
            />
          </div>
        </div>

        <div ref={reveal.ref} className={`services-grid ${reveal.className}`}>
          {filtered.map((s) => (
            <article key={s.title} className="service-card">
              <span className="service-dot" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="no-results">No service matches “{query}”. Try another keyword.</p>
          )}
        </div>
      </div>
    </section>
  )
}
