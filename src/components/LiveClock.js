import React, { useState, useEffect } from 'react';

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // 🧼 Cleanup on unmount
  }, []);

  return (
    <div style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '2rem' }}>
      ⏰ Current Time: {time.toLocaleTimeString()}
    </div>
  );
}

export default LiveClock;
