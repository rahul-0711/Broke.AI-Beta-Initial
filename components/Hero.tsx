'use client';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

/* ── Hero-specific particle canvas (unchanged) ── */
function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', resize);

    const NUM = 90;
    type P = {
      x: number; y: number; vx: number; vy: number;
      r: number; alpha: number; phase: number;
      color: string;
    };

    const COLORS = [
      'rgba(0,217,255,',
      'rgba(0,102,255,',
      'rgba(255,0,255,',
    ];

    const particles: P[] = Array.from({ length: NUM }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: Math.random() * 2 + 1.2,
      alpha: Math.random() * 0.5 + 0.25,
      phase: Math.random() * Math.PI * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let t = 0;
    let raf: number;

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,217,255,${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        const a = p.alpha * (0.65 + 0.35 * Math.sin(t + p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${a * 0.15})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${a})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.heroCanvas} />;
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current!;
    const onScroll = () => {
      const y = window.scrollY;
      const sub = hero.querySelector(`.${styles.subtitle}`) as HTMLElement;
      const btns = hero.querySelector(`.${styles.buttons}`) as HTMLElement;
      if (sub)  sub.style.transform  = `translateY(${y * 0.1}px)`;
      if (btns) btns.style.transform = `translateY(${y * 0.07}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} id="hero">
      <HeroParticles />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.orb3} aria-hidden="true" />

      <div className={`container ${styles.content}`}>

        {/* ── MASSIVE headline matching reference style ── */}
        <h1 className={styles.headline}>
          <span className={styles.line1}>
            Build with AI.
          </span>
          <span className={styles.line2}>
            Grow Without Limits.
          </span>
        </h1>

        <p className={styles.subtitle}>
          Premium AI solutions, custom automations, voice agents &amp; websites that drive
          measurable results. Trusted by businesses ready to scale.
        </p>

        <div className={styles.buttons}>
          <a href="#contact" className="btn btn-primary">
            Book Your Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#services" className="btn btn-outline">
            View Services
          </a>
        </div>

        {/* Stats row */}
        <div className={styles.stats}>
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '10x', label: 'Avg ROI Growth' },
            { value: '24/7', label: 'AI Uptime' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollCue}>
        <span className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
