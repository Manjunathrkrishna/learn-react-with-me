import React, { useState, useRef, useEffect } from 'react';
import '../styles/Accordion.css'; // create this file

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        className="accordion-content"
        style={{ height: `${height}px` }}
        ref={contentRef}
      >
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
