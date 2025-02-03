import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
}

const BackgroundParticleHorizontal: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const initializeParticles = () => {
        const newParticles: Particle[] = [];
        
        for(let i = 0; i < 100; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 15,
            speedX: (Math.random() - 0.5) * 2 + 10,
          });
        }
        
        setParticles(newParticles);
    };
    initializeParticles();
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          
          if (particle.x + particle.speedX > window.innerWidth){
            particle.x=0;
          }

          return {
            ...particle,
            x: particle.x + particle.speedX
          };
        })
      );
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-light-secondary dark:bg-dark-secondary "
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: `translate(${particle.speedX}px)`,
            transition: 'transform 0.1s linear',
            opacity:0.8
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticleHorizontal;