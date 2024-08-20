import React, { useState, useEffect, useRef } from 'react';

import { categories } from '../utils/Name';
import { categoryData } from '../utils/Name';





const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            let currentCategory = selectedCategory;

            sectionsRef.current.forEach((section, index) => {
                if (section.offsetTop <= scrollPos + 100 && section.offsetTop + section.offsetHeight > scrollPos + 100) {
                    currentCategory = categories[index].name;
                }
            });

            if (currentCategory !== selectedCategory) {
                setSelectedCategory(currentCategory);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [selectedCategory]);

    const handleCategoryClick = (category, index) => {
        setSelectedCategory(category);
        sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div
                className="category-container"
                style={{
                    zIndex: 1000,
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    paddingBottom: "20px",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "white",
                }}
            >
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryClick(category.name, index)}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: category.name === selectedCategory ? 'black' : 'grey',
                            color: category.name === selectedCategory ? 'white' : 'black',
                            marginRight: "10px",
                            padding: "10px 20px",
                            border: 'none',
                            borderRadius: '22px',
                            display: "inline-block", 
                        }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div>
                {Object.entries(categoryData).map(([categoryName, items], idx) => (
                    <div key={idx} ref={el => sectionsRef.current[idx] = el} style={{ margin: '20px 0', paddingTop: '20px' }}>
                        <h2>{categoryName}</h2>
                        {items.map((item, index) => (
                            <div key={index} style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0' }}>
                                <h3>{item.name}</h3>
                                <p>{item.duration}</p>
                                <p>{item.price}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
