'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'How long does it take to build an AI-powered solution?',
    a: 'Most AI chatbot and automation projects are delivered in 1–2 weeks. Full AI agent builds or complete websites typically take 3–4 weeks. We provide a detailed timeline during our discovery call.',
  },
  {
    q: 'Do I need technical knowledge to use your services?',
    a: 'Not at all. We handle everything end-to-end — from strategy and design to development and deployment. You just share your goals and we make it happen.',
  },
  {
    q: 'What platforms do your AI voice agents work with?',
    a: 'Our voice agents integrate with Twilio, VAPI, ElevenLabs, and can connect to your CRM, calendar, and booking systems. They work on inbound and outbound calls.',
  },
  {
    q: 'How do you handle cases the AI can\'t resolve?',
    a: 'Every system we build includes intelligent escalation logic. When the AI cannot resolve an issue, it seamlessly hands off to a human agent with full context and transcript.',
  },
  {
    q: 'What\'s included in the Business Development Consultancy?',
    a: 'It includes a full growth strategy, digital transformation roadmap, competitive analysis, process optimization recommendations, and monthly advisory calls with dedicated support.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. We offer monthly retainer plans that include monitoring, improvements, model updates, and priority support. We grow with you long-term.',
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.active : ''}`}>
      <button className={styles.question} onClick={() => setOpen(v => !v)}>
        <span>{faq.q}</span>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div className={styles.answer}>
        <p>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.section}`} id="faq" ref={ref}>
      <div className="container">
        <div className={styles.inner}>
          <div className="section-label reveal">FAQ</div>
          <h2 className={`heading-lg reveal`}>
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className={`${styles.subtitle} reveal`}>
            Everything you need to know before getting started.
          </p>
          <div className={styles.list}>
            {faqs.map((f, i) => (
              <div key={f.q} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <FAQItem faq={f} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
