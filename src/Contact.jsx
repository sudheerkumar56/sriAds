import { useState } from "react"
import { company } from "./data"

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const text = `Hi ${company.name}!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`
    window.open(`https://wa.me/${company.whatsapp}?text=${text}`, "_blank")
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="eyebrow eyebrow-light">Get In Touch</span>
          <h2 className="section-title light">Let&apos;s Print Something Great</h2>
          <p className="contact-lead">
            Tell us about your project and we&apos;ll get back to you with a quote.
          </p>

          <ul className="contact-details">
            <li>
              <span className="ci">📍</span>
              <div>
                <strong>Visit Us</strong>
                <p>{company.address.line1}<br />{company.address.line2}</p>
              </div>
            </li>
            <li>
              <span className="ci">📞</span>
              <div>
                <strong>Call Us</strong>
                <p>
                  {company.phones.map((p, i) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>
                      {p}{i < company.phones.length - 1 ? ", " : ""}
                    </a>
                  ))}
                </p>
              </div>
            </li>
            <li>
              <span className="ci">✉️</span>
              <div>
                <strong>Email Us</strong>
                <p>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <h3>Request a Quote</h3>
          <div className="field">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" value={form.name} onChange={update} required placeholder="John Doe" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" value={form.phone} onChange={update} required placeholder="98765 43210" />
          </div>
          <div className="field">
            <label htmlFor="service">Service Needed</label>
            <input id="service" name="service" value={form.service} onChange={update} placeholder="e.g. Flex Printing, Business Cards" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="3" value={form.message} onChange={update} placeholder="Describe your requirement..." />
          </div>
          <button type="submit" className="btn btn-primary full">
            Send via WhatsApp
          </button>
          {sent && <p className="form-note">Opening WhatsApp… we&apos;ll reply shortly!</p>}
        </form>
      </div>
    </section>
  )
}
