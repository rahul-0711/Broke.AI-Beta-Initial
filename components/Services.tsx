'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './Services.module.css';

const services = [
  {
    icon: '🌐',
    title: 'Website Development',
    summary: 'High-performance, stunning websites that convert visitors into clients.',
    features: ['Custom Design & Development', 'SEO-First Architecture', 'Lightning Fast Performance', 'Mobile-First Responsive', 'CMS Integration', 'Analytics & Tracking'],
    color: '#00d9ff',
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    summary: 'Eliminate repetitive workflows with intelligent process automation.',
    features: ['Workflow Automation', 'Data Processing Pipelines', 'API Integrations', 'Scheduled Task Bots', 'Error Handling & Alerts', 'ROI Tracking Dashboard'],
    color: '#0066ff',
  },
  {
    icon: '🧠',
    title: 'AI Agents',
    summary: 'Autonomous agents that handle complex tasks end-to-end.',
    features: ['Multi-Step Task Completion', 'Tool & API Usage', 'Memory & Context Retention', 'Decision Making Logic', 'Human-in-Loop Fallback', 'Custom Agent Training'],
    color: '#7c3aed',
  },
  {
    icon: '💬',
    title: 'AI Chatbots',
    summary: 'Smart chatbots trained on your business data and brand voice.',
    features: ['Custom LLM Fine-Tuning', 'Knowledge Base Integration', 'Multi-Language Support', 'Omnichannel Deployment', 'Lead Qualification', 'Conversation Analytics'],
    color: '#00d9ff',
  },
  {
    icon: '🎧',
    title: 'Customer Service AI',
    summary: '24/7 AI-powered support that escalates to humans seamlessly.',
    features: ['Ticket Resolution Automation', 'Sentiment Analysis', 'Smart Escalation Rules', 'CRM Integration', 'Multi-Channel Support', 'SLA Monitoring'],
    color: '#ff00ff',
  },
  {
    icon: '📞',
    title: 'Voice AI Agents',
    summary: 'Intelligent calling agents for bookings, orders, and issue resolution.',
    features: ['Natural Voice Conversations', 'Appointment Booking', 'Order Management', 'Issue Resolution', 'Human Escalation', 'Call Transcription & Logs'],
    color: '#0066ff',
  },
  {
    icon: '📊',
    title: 'Business Consultancy',
    summary: 'Strategic guidance to accelerate your growth and digital transformation.',
    features: ['Growth Strategy Planning', 'Digital Transformation', 'Process Optimization', 'Competitive Analysis', 'Revenue Modeling', 'Monthly Advisory Calls'],
    color: '#00d9ff',
  },
  {
    icon: '🎬',
    title: 'Video & Thumbnail Editing',
    summary: 'Cinematic video production and scroll-stopping thumbnail design.',
    features: ['Short-Form Content (Reels/Shorts)', 'Long-Form YouTube Videos', 'Brand Story Videos', 'Thumbnail A/B Testing', 'Caption & Subtitle Files', 'Fast 48h Turnaround'],
    color: '#ff00ff',
  },
];

function ServiceCard({ svc }: { svc: typeof services[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${styles.card} ${open ? styles.open : ''}`}
      style={{ '--accent': svc.color } as React.CSSProperties}
      onClick={() => setOpen(v => !v)}
    >
      <div className={styles.cardTop}>
        <div className={styles.iconBox}>
          <span className={styles.iconEmoji}>{svc.icon}</span>
        </div>
        <div className={styles.meta}>
          <h3 className={styles.cardTitle}>{svc.title}</h3>
          <p className={styles.cardSummary}>{svc.summary}</p>
        </div>
        <div className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
      <div className={styles.serviceContent}>
        <ul className={styles.featureList}>
          {svc.features.map(f => (
            <li key={f} className={styles.featureItem}>
              <svg className={styles.check} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem', fontSize: '0.875rem', padding: '0.6rem 1.4rem' }} onClick={e => e.stopPropagation()}>
          Get Started
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.section}`} id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">Our Services</div>
        <h2 className={`heading-lg reveal`} style={{ animationDelay: '0.1s' }}>
          Everything Your Business Needs to{' '}
          <span className="text-gradient">Scale with AI</span>
        </h2>
        <p className={`${styles.subtitle} reveal`} style={{ animationDelay: '0.2s' }}>
          From intelligent automation to cinematic content — we deliver end-to-end solutions that drive real results.
        </p>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <div key={svc.title} className="reveal" style={{ animationDelay: `${0.1 * i}s` }}>
              <ServiceCard svc={svc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
