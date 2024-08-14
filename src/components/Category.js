import React, { useState } from 'react';
import { categories } from '../utils/Name';

const categoryData = {
    "Natural Hairstyling": [
        { name: "Flexi Rod Set", duration: "3 hrs", price: "$125" },
        { name: "Wash & Go - Curly Style", duration: "1 hr, 25 mins", price: "$60" },
        { name: "Braid-Out", duration: "1 hr, 50 mins", price: "$125" },
    ],
    "Relaxer/ Texturizer/ Keratin": [
        { name: "Keratin Treatment", duration: "2 hrs", price: "$150" },
        { name: "Texturizer", duration: "1 hr, 30 mins", price: "$90" },
    ],
    // Add more categories and their items as needed
};

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name); // Default to the first category

    return (
        <div>
            {/* Category Buttons */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                {categories.map((category, index) => (
                    <button className=''
                        key={index}
                        onClick={() => setSelectedCategory(category.name)}
                        style={{
                            padding: '10px 20px',
                            cursor: 'pointer',
                            backgroundColor: category.name === selectedCategory ? 'black' : 'grey',
                            color: category.name === selectedCategory ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '5px',
                        }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Display Items for Selected Category */}
            <div>
                {categoryData[selectedCategory] && categoryData[selectedCategory].map((item, idx) => (
                    <div key={idx} style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0' }}>
                        <h3>{item.name}</h3>
                        <p>{item.duration}</p>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
