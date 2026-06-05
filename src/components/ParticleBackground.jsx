import { useEffect, useRef } from 'react';
import { useTheme } from '../hooks';

class Particle {
  constructor(canvas, colors) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 2 + 2;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.opacity = Math.random() * 0.4 + 0.3;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const dx = this.x - centerX;
    const dy = this.y - centerY;
    this.orbitRadius = Math.sqrt(dx * dx + dy * dy);
    this.angle = Math.atan2(dy, dx);
    this.orbitSpeed = (Math.random() * 0.001 + 0.0003) * (Math.random() < 0.5 ? -1 : 1);
  }

  update(canvas, mouse) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    this.angle += this.orbitSpeed;
    const orbitX = centerX + Math.cos(this.angle) * this.orbitRadius;
    const orbitY = centerY + Math.sin(this.angle) * this.orbitRadius;

    this.vx += (orbitX - this.x) * 0.01;
    this.vy += (orbitY - this.y) * 0.01;

    if (mouse.x != null && mouse.y != null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150 && dist > 0) {
        const force = (150 - dist) / 150;
        const angle = Math.atan2(dy, dx);
        this.vx += Math.cos(angle) * force * 0.35;
        this.vy += Math.sin(angle) * force * 0.35;
      }
    }

    this.vx *= 0.88;
    this.vy *= 0.88;
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

export const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const getColors = () => {
      const s = getComputedStyle(document.documentElement);
      return [
        s.getPropertyValue('--color-primary').trim(),
        s.getPropertyValue('--color-secondary').trim(),
        s.getPropertyValue('--color-accent').trim(),
      ];
    };

    const count = window.innerWidth < 768 ? 20 : 40;
    particlesRef.current = Array.from({ length: count }, () => new Particle(canvas, getColors()));

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => { mouseRef.current = { x: null, y: null }; };

    // Listen on window so mouse moves anywhere on the page update particles
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(p => { p.update(canvas, mouseRef.current); p.draw(ctx); });
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
};
