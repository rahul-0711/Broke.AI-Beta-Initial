'use client';
import { useState } from 'react';
import styles from './Footer.module.css';

const services = ['Website Development', 'AI Automation', 'AI Agents', 'AI Chatbots', 'Voice Agents', 'Video Editing'];
const company  = ['About', 'Case Studies', 'Process', 'FAQ', 'Blog'];
const social = [
  { label: 'X / Twitter', href: '#', icon: '𝕏' },
  { label: 'LinkedIn',    href: '#', icon: 'in' },
  { label: 'Instagram',   href: '#', icon: '⬡' },
  { label: 'YouTube',     href: '#', icon: '▶' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sub, setSub] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        {/* Top grid */}
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L26 8.5V19.5L14 26L2 19.5V8.5L14 2Z" fill="url(#flg)" />
                <text x="7" y="19" fontSize="11" fontWeight="800" fill="#0a0e27" fontFamily="Space Grotesk">B</text>
                <defs>
                  <linearGradient id="flg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00d9ff"/>
                    <stop offset="100%" stopColor="#0066ff"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className={styles.logoText}><span className="text-gradient">Broke</span>.AI</span>
            </div>
            <p className={styles.tagline}>
              Building intelligent AI systems and digital experiences that transform businesses.
            </p>
            <div className={styles.socials}>
              {social.map(s => (
                <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            {services.map(s => <a key={s} href="#services" className={styles.link}>{s}</a>)}
          </div>

          {/* Company */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            {company.map(c => <a key={c} href={`#${c.toLowerCase().replace(' ', '')}`} className={styles.link}>{c}</a>)}
          </div>

          {/* Newsletter */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Stay in the Loop</h4>
            <p className={styles.newsDesc}>Get weekly AI insights & business growth tips. No spam.</p>
            {sub ? (
              <p className={styles.subDone}>✓ You're subscribed!</p>
            ) : (
              <form className={styles.newsForm} onSubmit={e => { e.preventDefault(); setSub(true); }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className={styles.newsInput}
                />
                <button type="submit" className={`btn btn-primary ${styles.newsBtn}`}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} Broke.AI — All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.link}>Privacy Policy</a>
            <a href="#" className={styles.link}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
