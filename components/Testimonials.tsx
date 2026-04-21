'use client';
import { useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Founder, NovaMart',
    initials: 'PS',
    grad: 'linear-gradient(135deg,#00d9ff,#0066ff)',
    quote: 'Broke.AI transformed our customer support overnight. 90% of queries now resolved instantly by their AI — our team finally breathes!',
    stars: 5,
  },
  {
    name: 'James O\'Brien',
    role: 'CEO, LaunchStack',
    initials: 'JO',
    grad: 'linear-gradient(135deg,#ff00ff,#0066ff)',
    quote: 'The website they built is the best investment we\'ve made. Organic traffic quadrupled in 3 months. The AI agent follows up leads while I sleep.',
    stars: 5,
    offset: true,
  },
  {
    name: 'Aisha Rahman',
    role: 'Operations Head, KeyProperties',
    initials: 'AR',
    grad: 'linear-gradient(135deg,#00d9ff,#7c3aed)',
    quote: 'Our voice booking agent books more viewings in a day than our team did in a week. The ROI was obvious within the first month.',
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
    <section className={`section ${styles.section}`} ref={ref}>
      <div className="container">
        <div className="section-label reveal">Testimonials</div>
        <h2 className={`heading-lg reveal`}>
          What Our <span className="text-gradient">Clients Say</span>
        </h2>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`${styles.card} ${t.offset ? styles.offset : ''} reveal`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <Stars count={t.stars} />
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: t.grad }}>
                  {t.initials}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
