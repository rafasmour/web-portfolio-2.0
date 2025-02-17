import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedY: number;
}

const BackgroundParticlesVertical: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const initializeParticles = () => {
        const newParticles: Particle[] = [];
        
        for(let i = 0; i < 40; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 15,
            speedY: Math.random() * 2,
          });
        }
        
        setParticles(newParticles);
    };
    initializeParticles();
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          
          if (particle.y + particle.speedY < 0){
            particle.y=window.innerHeight;
          }

          return {
            ...particle,
            y: particle.y - particle.speedY
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
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-light-accent dark:bg-dark-accent"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: `translate(-${particle.speedY}px)`,
            transition: 'transform 0.1s linear',
            opacity:0.8
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticlesVertical;