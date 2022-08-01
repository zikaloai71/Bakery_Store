import React from 'react'
import "./components.css"
import title from "../images/title.png";
import milk from "../images/milk.png";
import butter from "../images/butter.png";
import honey from "../images/honey.png";
export default function Ingredient() {
  return (
    <section className='ingredients'>
    <h1 className="ingredientsHeader">Our Ingredients</h1>
     <div className='titleBar'><img src={title} className="titleBarPng" alt="" /></div>
    <div className="ingredient ">
      <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Flour<i className="ingredientsIcons fa-solid fa-jar-wheat "></i></h3>
       <p className="ingredientPara">We have our high percentage of protein suited to chewy, crusty breads and other yeast-risen products and Less protein best for pie crusts, cakes, cookies, and biscuits.</p>
       </div>
    </div>
    <div className="ingredient">
    <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Egg<i className="ingredientsIcons fa-solid fa-egg"></i></h3>
       
       <p className="ingredientPara">We use room-temperature eggs because they bind and emulsify better than cold ones. Additionally, room-temperature egg whites whip up better than the colder ones.</p>
       </div>
    </div>
    <div className="ingredient">
    <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Milk <img src={milk} className="ingredientsIcons" alt="" /></h3>
       
       <p className="ingredientPara"> We use milk that has high protein content,fat, sugar and overall creaminess of whole milk which is ideal for creating delicious baked goods.</p>
       </div>
    </div>
    <div className="ingredient ">
      <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Butter  <img src={butter}  className="ingredientsIcons" alt="" /></h3>
       <p className="ingredientPara"> We use unsalted butter so we can better control the amount of salt that goes into the recipe.</p>
       </div>
    </div>
    <div className="ingredient">
    <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Oil <i className=" ingredientsIcons fa-solid fa-bottle-droplet "></i></h3>
       
       <p className="ingredientPara">
        For oil we Choose vegetable oil which is the best option for baking moist,delicious baked goods and doesn't add a strong flavor.
        </p>
       </div>
    </div>
    <div className="ingredient ">
    <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Honey <img src={honey} className="ingredientsIcons" alt="" /></h3>
       
       <p className="ingredientPara"> For honey we choose Wildflower honey which is more beneficial than regular processed sugar and it makes your cake or pastry moister.</p>
       </div>
    </div>
  </section>
  )
}
