// App.js
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Services from './Services';

const App = () => {
  const [currentSection, setCurrentSection] = useState('Service 1');

  const onSectionInView = (inView, entry, section) => {
    if (inView) {
      setCurrentSection(section);
    }
  };

  return (
    <div>
      <h1>Current Section: {currentSection}</h1>
      <div>
        <Services />
      </div>
    </div>
  );
};

export default App;
