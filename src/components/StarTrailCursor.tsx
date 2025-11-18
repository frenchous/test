import React, { useState, useEffect, useRef } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
}

const StarTrailCursor: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const lastId = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Ограничиваем создание звёзд — не чаще 80 мс (примерно 12 звёзд/сек)
      if (now - lastTime.current < 80) return;
      lastTime.current = now;

      const newStar: Star = {
        id: lastId.current++,
        x: e.clientX,
        y: e.clientY,
      };

      setStars((prev) => [...prev, newStar]);

      // Удаляем звезду через 2 секунды
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Скрыть стандартный курсор */}
      <style>
        {`
          * {
            cursor: none !important;
          }
          @keyframes starFade {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.5); }
          }
        `}
      </style>

      {/* След из звёзд */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'fixed',
            left: star.x - 6,
            top: star.y - 6,
            width: 12,
            height: 12,
            background: 'radial-gradient(circle, #ffffff, #a0a0ff)',
            clipPath:
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            pointerEvents: 'none',
            zIndex: 9999,
            animation: 'starFade 2s forwards',
          }}
        />
      ))}
    </>
  );
};

export default StarTrailCursor;