import React, { useState } from 'react';
import { categories } from '../utils/Name';

const categoryData = {
    "Natural Hairstyling": {
        title: "Natural Hairstyling",
        description: "Flexi Rod Set - 3 hrs - $125"
    },
    "HairCutting": {
        title: "HairCutting",
        description: "Precision haircut tailored to your style."
    },"Featured":{
        title:"Featured",
        description:"Haircut 1 hr,30 mins - 2 hr from $90 We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival."
    }

    // Add more categories with their corresponding data
};

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    console.log("Selected Category:", selectedCategory);
    console.log("Category Data:", categoryData[selectedCategory]);

    return (
        <div>
            <div>
                {categories.map((category, index) => (
                    <button 
                        key={index} 
                        onClick={() => {
                            console.log("Clicked Category:", category.name);
                            setSelectedCategory(category.name);
                        }}
                        style={{
                            background: category.name === selectedCategory ? "grey" : "white",
                            color: "black"
                        }}
                    >
                        <span>{category.name}</span>
                    </button>
                ))}
            </div>

            {/* Conditionally render data for the selected category */}
            <div>
                {selectedCategory && categoryData[selectedCategory] ? (
                    <div className='hp'>
                        <h1>{categoryData[selectedCategory].title}</h1>
                        <p>{categoryData[selectedCategory].description}</p>
                    </div>
                ) : (
                    <p>Please select a category to see the details.</p>
                )}
            </div>
        </div>
    );
}

export default Category;
