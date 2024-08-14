import React, { useState } from 'react';
import { categories } from '../utils/Name';

const categoryData = {
    "Natural Hairstyling": [
        { name: "Flexi Rod Set", duration: "3 hrs", price: "$125" },
        { name: "Wash & Go - Curly Style", duration: "1 hr, 25 mins", price: "$60" },
        { name: "Braid-Out", duration: "1 hr, 50 mins", price: "$125" },
    ],

    "FRelaxer/ Texturizer/ Keratin": [
        { name: "Keratin Treatment", duration: "2 hrs 45mins", price: "$350" },
        { name: "Texturizer for Curls", duration: "1 hr, 30 mins", price: "$220" },
        {name:"Texturizer and Cut", duration:"1 hr, 50 mins", price:"$190"},
        {name:"Halo and Haircut", duration:"1 hr", price:"$140"},
        {name:"Virgin Relaxer and Hair Cut", duration:"2 hr, 15 mins", price:"$200"}
    ],
   "Featured":[
    { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
    { name: "Deep Condition (Standard)", duration: "15 mins", price: "$20" },
    { name: "Blow Dry/Silk Press", duration: "15 mins", price: "$20" },    
    { name: "Deep Condition (Standard)", duration: "15 mins", price: "$20" },
    { name: "Root Touch-Up (Single Process", duration: "1 hr ", price: "$120" },
   ],
   "HairCutting":[
    { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
    { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
    { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
    { name: "Haircut", duration: "2 hrs 45mins", price: "$350" }, 
],
    "Styling":[
        { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
        { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
        { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
        { name: "Haircut", duration: "2 hrs 45mins", price: "$350" },
],
"Treatments":[
    { name: "Detox Shampoo", duration: "20 mins", price: "$30" },
    { name: "Weave Take Out (Prior to Weave Install Only)", duration: "25 mins", price: "$40" },
    { name: "Deep Condition (Standard)", duration: "25 mins", price: "$30" },
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


]


};

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name); 
    return (
        <div>
            
            <div style={{   marginBottom: '20px',
                display: 'flex',
                gap: '10px',
                overflowX: 'auto', // Enables horizontal scrolling
                whiteSpace: 'nowrap', // Keeps items in a single line
                paddingBottom: '10px', }}>
                {categories.map((category, index) => (
                    <button                        key={index}
                        onClick={() => setSelectedCategory(category.name)}
                        style={{
                            position:"sticky",
                            cursor: 'pointer',
                            backgroundColor: category.name === selectedCategory ? 'black' : 'grey',
                            color: category.name === selectedCategory ? 'white' : 'black',
                            
                        }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

           
            <div>
                {Object.entries(categoryData).map(([categoryName, items], idx) => (
                    <div key={idx} style={{ margin: '20px 0' }}>
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
}

export default Category;
