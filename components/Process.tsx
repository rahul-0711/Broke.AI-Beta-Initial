'use client';
import { useEffect, useRef } from 'react';
import styles from './Process.module.css';

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We deep-dive into your business, goals, and audience. A tailored roadmap is crafted before a single line of code is written.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Design & Architecture',
    desc: 'UI mockups, system architecture, and data flows are designed for both beauty and scalability.',
    icon: '✏️',
  },
  {
    num: '03',
    title: 'Build & Integrate',
    desc: 'Development sprints with weekly check-ins. We integrate your tools, APIs, and AI models seamlessly.',
    icon: '⚙️',
  },
  {
    num: '04',
    title: 'Launch & Optimise',
    desc: 'Deploy to production, monitor performance, and continuously improve based on real-world data.',
    icon: '🚀',
  },
];

export default function Process() {
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
    <section className={`section ${styles.section}`} id="process" ref={ref}>
      <div className="container">
        <div className="section-label reveal">Our Process</div>
        <h2 className={`heading-lg reveal`}>
          From Idea to <span className="text-gradient">Living System</span>
        </h2>
        <p className={`${styles.subtitle} reveal`}>
          A proven 4-step process that takes your vision from napkin sketch to live, revenue-generating system.
        </p>

        <div className={styles.timeline}>
          <div className={styles.line} />
          {steps.map((step, i) => (
            <div key={step.num} className={`${styles.step} ${i % 2 === 1 ? styles.right : ''} reveal`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={styles.stepNode}>
                <span className={styles.stepNum}>{step.num}</span>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
