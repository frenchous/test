import React, { useState, useEffect } from 'react';

const StarCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // чтобы не мешать кликам
        zIndex: 9999,
      }}
    >
      {/* Основной курсор — звезда */}
      <div
        style={{
          position: 'absolute',
          left: position.x - 12,
          top: position.y - 12,
          width: 24,
          height: 24,
          background: 'radial-gradient(circle, #fff, #a0a0ff)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          transform: 'rotate(0deg)',
          animation: 'rotateStar 4s linear infinite, pulseStar 2s infinite',
        }}
      />

      {/* Анимированные "следы" звёзд (опционально) */}
      <div
        style={{
          position: 'absolute',
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          background: 'transparent',
          border: '1px solid rgba(173, 216, 230, 0.5)',
          borderRadius: '50%',
          animation: 'expandGlow 1.5s infinite',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

// Глобальные стили для скрытия курсора
const GlobalCursorStyle = () => (
  <style>
    {`
      body, html {
        cursor: none !important;
        margin: 0;
        overflow-x: hidden;
      }
      @keyframes rotateStar {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes pulseStar {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      @keyframes expandGlow {
        0% { transform: scale(0.5); opacity: 0.8; }
        100% { transform: scale(2); opacity: 0; }
      }
    `}
  </style>
);

// Обёртка для удобства
const StarCursorWithStyle: React.FC = () => {
  return (
    <>
      <GlobalCursorStyle />
      <StarCursor />
    </>
  );
};

export default StarCursorWithStyle;