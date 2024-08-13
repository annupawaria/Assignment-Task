import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

const App = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const sectionRefs = useRef([]);

  const handleScroll = () => {
    const sectionOffsets = sectionRefs.current.map(ref => ref.offsetTop);
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const activeIndex = sectionOffsets.findIndex((offset, index) => {
      return scrollPosition >= offset && (index === sectionOffsets.length - 1 || scrollPosition < sectionRefs.current[index + 1].offsetTop);
    });

    setActiveCategory(categories[activeIndex]);
  };

  const handleClick = (category) => {
    const index = categories.indexOf(category);
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => handleClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <div className="sections">
        {categories.map((category, index) => (
          <section
            key={index}
            ref={el => sectionRefs.current[index] = el}
            id={category}
          >
            <h2>{category}</h2>
            <p>Content for {category}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default App;
