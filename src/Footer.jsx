import { company } from "./data"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={company.logo || "/placeholder.svg"} alt={`${company.name} logo`} />
          <p>{company.subTagline}</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          {company.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
          ))}
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} {company.name}. {company.tagline}.</p>
        </div>
      </div>

      <a
        className="wa-float"
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span>WhatsApp</span>
      </a>
    </footer>
  )
}
