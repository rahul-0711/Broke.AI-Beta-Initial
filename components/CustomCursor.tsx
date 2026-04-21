'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current!;
    const dot = dotRef.current!;
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let mouseX = 0, mouseY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      dotX  = lerp(dotX,  mouseX, 0.28);
      dotY  = lerp(dotY,  mouseY, 0.28);
      ring.style.left = `${ringX}px`;
      ring.style.top  = `${ringY}px`;
      dot.style.left  = `${dotX}px`;
      dot.style.top   = `${dotY}px`;
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => document.body.classList.add('cursor-hover');
    const onLeave = () => document.body.classList.remove('cursor-hover');

    const interactives = document.querySelectorAll(
      'a, button, [data-cursor], input, textarea, select, label'
    );
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor-ring" ref={ringRef} />
      <div id="cursor-dot"  ref={dotRef} />
    </>
  );
}
