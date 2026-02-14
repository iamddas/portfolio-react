import { useEffect, useRef } from 'react';
import { useTheme } from '../hooks';

// Particle class with physics and rendering
class Particle {
    constructor(canvas, colors) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Reduced base velocity for slower random drift
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.4 + 0.3;

        // Orbital motion properties
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const dx = this.x - centerX;
        const dy = this.y - centerY;
        this.orbitRadius = Math.sqrt(dx * dx + dy * dy);
        this.angle = Math.atan2(dy, dx);
        // Slightly slower orbit speed
        this.orbitSpeed = (Math.random() * 0.001 + 0.0003) * (Math.random() < 0.5 ? -1 : 1);
    }

    update(canvas, mouse) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // --- Orbital motion (global revolving) ---
      this.angle += this.orbitSpeed;
      const orbitX = centerX + Math.cos(this.angle) * this.orbitRadius;
      const orbitY = centerY + Math.sin(this.angle) * this.orbitRadius;

      // Gently pull particle toward its orbital position (weaker for slower effect)
      const orbitPullStrength = 0.01;
      this.vx += (orbitX - this.x) * orbitPullStrength;
      this.vy += (orbitY - this.y) * orbitPullStrength;

      // --- Mouse repulsion (on hover) ---
      if (mouse && mouse.x != null && mouse.y != null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          const repulsionStrength = 0.35; // slightly toned down
          this.vx += Math.cos(angle) * force * repulsionStrength;
          this.vy += Math.sin(angle) * force * repulsionStrength;
        }
      }

      // --- Velocity damping for smoothness (stronger damping => slower motion) ---
      this.vx *= 0.88;
      this.vy *= 0.88;

      // --- Update position ---
      this.x += this.vx;
      this.y += this.vy;

      // --- Wrap around edges ---
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
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      return () => window.removeEventListener('resize', resizeCanvas);
    }

    // Get theme colors from CSS variables
    const getColors = () => {
      const styles = getComputedStyle(document.documentElement);
      return [
        styles.getPropertyValue('--color-primary').trim(),
        styles.getPropertyValue('--color-secondary').trim(),
        styles.getPropertyValue('--color-accent').trim(),
      ];
    };

    // Determine particle count based on device
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 20 : 40;

    // Initialize particles
    const colors = getColors();
    particlesRef.current = Array.from(
      { length: particleCount },
      () => new Particle(canvas, colors)
    );

    // Mouse move handler (canvas-relative coordinates)
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        particle.update(canvas, mouseRef.current);
        particle.draw(ctx);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]); // Re-initialize when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50"
      style={{ pointerEvents: 'auto' }}
      aria-hidden="true"
    />
  );
};
