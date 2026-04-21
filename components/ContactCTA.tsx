'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './ContactCTA.module.css';

export default function ContactCTA() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className={`section ${styles.section}`} id="contact" ref={ref}>
      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <div className="section-label reveal">Get Started</div>
            <h2 className={`heading-lg reveal`}>
              Ready to Build Your <span className="text-gradient">AI Future?</span>
            </h2>
            <p className={`${styles.desc} reveal`}>
              Book a free 30-minute strategy call. No pressure, no jargon — just real talk about how AI can 10x your business.
            </p>
            <div className={`${styles.perks} reveal`}>
              {['Free 30-min strategy call', 'Custom solution roadmap', 'No long-term contracts', 'Results or money back'].map(p => (
                <div key={p} className={styles.perk}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d9ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`${styles.formWrap} reveal glass-card`}>
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>🎉</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours. Check your inbox!</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Book a Free Call</h3>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" placeholder="Alex Johnson" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="alex@company.com" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="service">Service You Need</label>
                  <select id="service" required value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                    <option value="">Select a service…</option>
                    <option>Website Development</option>
                    <option>AI Automation</option>
                    <option>AI Agents</option>
                    <option>AI Chatbot</option>
                    <option>Voice AI Agent</option>
                    <option>Business Consultancy</option>
                    <option>Video / Thumbnail Editing</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Tell Us About Your Project</label>
                  <textarea id="message" rows={4} placeholder="Describe your goals, current challenges, and what you'd like to achieve…" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                  Send Message — It's Free
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
