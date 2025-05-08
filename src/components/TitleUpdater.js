import React, { useState, useEffect } from 'react';

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default TitleUpdater;
