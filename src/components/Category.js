import React from 'react'
import { categories } from '../utils/Name'
import { useState } from 'react';

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    console.log(categories)
    return (
        <div>
            <div>

                {categories.map((Category)=>(
                  
                    <button>
                        <span>{Category.name}</span>
                    </button>
                ))}
                {/* <div>
                 
                 
                 <h1>Natural Hairstyling</h1>
                 <p>Flexi Rod Set

3 hrs

$125</p>
                 </div>
                <div><button>HairCutting</button></div>
                <div><button>Styling</button></div>
                <div><button>
                    Extension, Installs and Wigs</button></div>
                <div><button>Color Services</button></div>
                <div><button>Natural Hairstyling</button></div>
                <div><button>
                    Relaxer/ Texturizer/ Keratin</button></div>
                <div><button>Treatments</button></div> */}
                </div>
        </div>
    )
}

export default Category