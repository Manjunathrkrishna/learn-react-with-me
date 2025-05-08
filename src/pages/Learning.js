import React, { useState } from 'react';
import Accordion from '../components/Accordion';
import TitleUpdater from '../components/TitleUpdater';
import LiveClock from '../components/LiveClock';
import MouseTracker from '../components/MouseTracker';
import UserList from '../components/UserList'; // optional
import Header from '../components/Header';
import accordionData from '../components/accordionData'; // if you plan to externalize

function Learning() {
  const [searchTerm, setSearchTerm] = useState('');
  const normalizedSearch = searchTerm?.toLowerCase() || '';

  return (
    <div className="page-content" style={{ backgroundColor: '#0d1117', padding: '2rem', borderRadius: '12px' }}>

      <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '2rem' }}>📚 React Dev Manual</h2>

      {/* Example filter if using array:
        {accordionData
          .filter(item => item.title.toLowerCase().includes(normalizedSearch))
          .map((item, idx) => (
            <Accordion key={idx} title={item.title}>
              {item.content}
            </Accordion>
        ))} 
      */}


{accordionData
  .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  .map((item, idx) => (
    <Accordion key={idx} title={item.title}>
      {item.content}
    </Accordion>
))}

    </div>
  );
}

export default Learning;
