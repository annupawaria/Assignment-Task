import React, { useState, useEffect, useRef } from 'react';
import { categories } from '../utils/Name';



  const categoryData = {
"Featured":[
        { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
        { name: "Deep Condition (Standard)", duration: "15 mins", price: "$20" },
        { name: "Blow Dry/Silk Press", duration: "15 mins", price: "$20" },    
        { name: "Deep Condition (Standard)", duration: "15 mins", price: "$20" },
        { name: "Root Touch-Up (Single Process", duration: "1 hr ", price: "$120" },
       ],


        "Natural Hairstyling": [
            { name: "Flexi Rod Set", duration: "3 hrs", price: "$125" },
            { name: "Wash & Go - Curly Style", duration: "1 hr, 25 mins", price: "$60" },
            { name: "Braid-Out", duration: "1 hr, 50 mins", price: "$125" },
        ],
        "HairCutting":[
            { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
            { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
            { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
            { name: "Haircut", duration: "2 hrs 45mins", price: "$350" }, 
        ],
    
        "FRelaxer/ Texturizer/ Keratin": [
            { name: "Keratin Treatment", duration: "2 hrs 45mins", price: "$350" },
            { name: "Texturizer for Curls", duration: "1 hr, 30 mins", price: "$220" },
            {name:"Texturizer and Cut", duration:"1 hr, 50 mins", price:"$190"},
            {name:"Halo and Haircut", duration:"1 hr", price:"$140"},
            {name:"Virgin Relaxer and Hair Cut", duration:"2 hr, 15 mins", price:"$200"}
        ],
       
      
        "Styling":[
            { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
            { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
            { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
            { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
    ],
  
    "Extension, Installs and Wigs":[
        { name: "Install Removal", duration: "1 hr 5 mins", price: "$100" },
        { name: "Deep Condition (Standard)", duration: "25 mins", price: "$30" },
        { name: "Deep Condition (Standard)", duration: "25 mins", price: "$30" },
    ,],
    "Color Services":[
        { name: "Install Removal", duration: "1 hr 5 mins", price: "$100" },
        { name: "Deep Condition (Standard)", duration: "25 mins", price: "$30" },
        { name: "Deep Condition (Standard)", duration: "25 mins", price: "$30" },
        { name: "Deep Condition (Standard)", duration: "25 mins", price: "$30" },
    
    
    ],  "Treatments":[
        { name: "Detox Shampoo", duration: "20 mins", price: "$30" },
        { name: "Weave Take Out (Prior to Weave Install Only)", duration: "25 mins", price: "$40" },
        { name: "Deep Condition (Standard)", duration: "25 mins", price: "$30" },
    ],
    
    
    };
    



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
            <div className="category-container" style={{ zIndex: 1000, overflowX: "auto", paddingBottom: "20px", position: "sticky", top: 0, backgroundColor: "white" }}>
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
                            borderRadius: '5px',
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
