import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle animate-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${8 + Math.random() * 4}s`;
      
      // Random colors
      const colors = ['#06B6D4', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      container.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 12000);
    };

    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createParticle(), i * 500);
    }

    // Continue creating particles
    const interval = setInterval(() => {
      createParticle();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
