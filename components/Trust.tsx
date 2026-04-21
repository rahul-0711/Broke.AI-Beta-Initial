'use client';
import { useEffect, useRef } from 'react';
import styles from './Trust.module.css';

const items = [
  {
    icon: '⚡',
    title: 'Blazing Fast Delivery',
    desc: 'We move at startup speed. Most projects ship in under 2 weeks without sacrificing quality.',
  },
  {
    icon: '🔒',
    title: 'Enterprise-Grade Security',
    desc: 'Every solution is built with security-first architecture, data encryption, and compliance in mind.',
  },
  {
    icon: '🎯',
    title: 'Outcome-Driven',
    desc: 'We measure success by your ROI, not by hours billed. Real results, real accountability.',
  },
  {
    icon: '🔄',
    title: '24/7 AI Uptime',
    desc: 'Your AI systems never sleep. Automated monitoring and instant alerts keep everything running.',
  },
];

export default function Trust() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.section}`} ref={ref} id="about">
      <div className="container">
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={item.title} className={`${styles.item} reveal`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className={styles.iconWrap}>
                <span className={styles.iconEmoji}>{item.icon}</span>
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
