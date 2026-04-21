'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#casestudies' },
  { label: 'Process',  href: '#process' },
  { label: 'About',    href: '#about' },
  { label: 'FAQ',      href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={headerRef} className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L26 8.5V19.5L14 26L2 19.5V8.5L14 2Z" fill="url(#lg)" stroke="none"/>
              <text x="7" y="19" fontSize="11" fontWeight="800" fill="#0a0e27" fontFamily="Space Grotesk">B</text>
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00d9ff"/>
                  <stop offset="100%" stopColor="#0066ff"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={styles.logoText}>
            <span className="text-gradient">Broke</span>.AI
          </span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className={styles.navLink}>{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
          Book a Demo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>

        {/* Mobile burger */}
        <button
          className={`${styles.burger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className={styles.drawerLink} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
          Book a Demo
        </a>
      </div>
    </header>
  );
}
