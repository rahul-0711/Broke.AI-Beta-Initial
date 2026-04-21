'use client';
import { useEffect, useRef } from 'react';
import styles from './CaseStudies.module.css';

const cases = [
  {
    tag: 'AI Automation',
    title: 'E-Commerce Brand Automates 90% of Support',
    desc: 'Deployed an AI customer service bot + voice agent that handles returns, order tracking, and FAQs round-the-clock — escalating only the 10% that need humans.',
    results: [
      { value: '90%', label: 'Support Tickets Automated' },
      { value: '3.2x', label: 'Customer Satisfaction' },
      { value: '68%', label: 'Cost Reduction' },
      { value: '24/7', label: 'Uptime Achieved' },
    ],
    gradient: 'linear-gradient(135deg,#00d9ff22,#0066ff22)',
    accent: '#00d9ff',
  },
  {
    tag: 'Website + Video',
    title: 'SaaS Startup Grew Organic Traffic by 400%',
    desc: 'Rebuilt their website with an SEO-first architecture and produced a library of short-form content that exploded their social reach and drove inbound leads.',
    results: [
      { value: '400%', label: 'Organic Traffic Growth' },
      { value: '12x', label: 'Lead Generation' },
      { value: '2.1M', label: 'Video Views Earned' },
      { value: '89%', label: 'Bounce Rate Drop' },
    ],
    gradient: 'linear-gradient(135deg,#ff00ff22,#0066ff22)',
    accent: '#ff00ff',
  },
  {
    tag: 'AI Agents',
    title: 'Real Estate Agency Books 5x More Viewings',
    desc: 'Custom AI voice agents call leads, qualify prospects, and book property viewings automatically — freeing agents to focus on closings.',
    results: [
      { value: '5x', label: 'Viewings Booked' },
      { value: '82%', label: 'Lead Response Rate' },
      { value: '40h', label: 'Weekly Hours Saved' },
      { value: '3.7x', label: 'Revenue Growth' },
    ],
    gradient: 'linear-gradient(135deg,#00d9ff22,#7c3aed22)',
    accent: '#00d9ff',
  },
  {
    tag: 'Consultancy',
    title: 'Retail Chain Scales with AI Strategy',
    desc: 'Conducted a full digital transformation roadmap — implementing AI-powered inventory management, demand forecasting, and automated reordering workflows.',
    results: [
      { value: '35%', label: 'Inventory Cost Savings' },
      { value: '99.2%', label: 'Stock Accuracy' },
      { value: '2.8x', label: 'Operational Efficiency' },
      { value: '6mo', label: 'Full ROI Payback' },
    ],
    gradient: 'linear-gradient(135deg,#ff00ff22,#00d9ff22)',
    accent: '#ff00ff',
  },
];

export default function CaseStudies() {
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
    <section className={`section ${styles.section}`} id="casestudies" ref={ref}>
      <div className="container">
        <div className="section-label reveal">Case Studies</div>
        <h2 className={`heading-lg reveal`}>
          Real Results, <span className="text-gradient-2">Real Impact</span>
        </h2>
        <p className={`${styles.subtitle} reveal`}>
          Numbers don't lie. Here's what we've achieved for our clients.
        </p>

        <div className={styles.grid}>
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.1}s`, background: c.gradient } as React.CSSProperties}
            >
              <div className={styles.cardHeader}>
                <span className={styles.tag} style={{ color: c.accent, borderColor: c.accent + '44', background: c.accent + '11' }}>
                  {c.tag}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
              <div className={styles.results}>
                {c.results.map(r => (
                  <div key={r.label} className={styles.result}>
                    <span className={styles.resultVal} style={{ color: c.accent }}>{r.value}</span>
                    <span className={styles.resultLabel}>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
