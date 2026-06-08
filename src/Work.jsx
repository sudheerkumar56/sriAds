import { useMemo, useState } from "react"
import { works } from "./data"
import { useReveal } from "./useReveal"

export default function Work() {
  const reveal = useReveal()
  const [filter, setFilter] = useState("All")

  const filters = useMemo(() => {
    return ["All", "Images", "Videos"]
  }, [])

  const items = works.filter((w) => {
    if (filter === "Images") return w.type === "image"
    if (filter === "Videos") return w.type === "video"
    return true
  })

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">Recent Work</h2>
          <p className="section-subtitle">
            A glimpse of projects we&apos;ve printed and delivered for our clients.
          </p>

          <div className="filter-tabs">
            {filters.map((f) => (
              <button
                key={f}
                className={`tab ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div ref={reveal.ref} className={`work-grid ${reveal.className}`}>
          {items.map((w, i) => (
            <article key={i} className={`work-card ${w.type === "video" ? "is-video" : ""}`}>
              {w.type === "image" ? (
                <img src={w.src || "/placeholder.svg"} alt={w.title} loading="lazy" />
              ) : (
                <video src={w.src} controls preload="metadata" playsInline />
              )}
              <div className="work-meta">
                <span className="work-cat">{w.category}</span>
                <h3>{w.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
