import React, { useState, useEffect } from 'react';

function MouseTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);

    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      🐭 Mouse Position: X = {pos.x}, Y = {pos.y}
    </div>
  );
}

export default MouseTracker;
