import React from 'react'
import "./components.css"
export default function Ingredient() {
  return (
    <section className='ingredients'>
    <h1 className="ingredientsHeader">Our Ingredients</h1>
    <div className="ingredient flour">
      <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Flour</h3>
       <p className="ingredientPara">We have our high percentage of protein suited to chewy, crusty breads and other yeast-risen products and Less protein best for pie crusts, cakes, cookies, and biscuits.</p>
       </div>
    </div>
    <div className="ingredient egg">
    <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Egg</h3>
       <p className="ingredientPara">We use room-temperature eggs because they bind and emulsify better than cold ones. Additionally, room-temperature egg whites whip up better than the colder ones.</p>
       </div>
    </div>
    <div className="ingredient milk">
    <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Milk</h3>
       <p className="ingredientPara"> We use milk that has high protein content,fat, sugar and overall creaminess of whole milk which is ideal for creating delicious baked goods.</p>
       </div>
    </div>
    <div className="ingredient butter">
      <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Butter</h3>
       <p className="ingredientPara"> We use unsalted butter so we can better control the amount of salt that goes into the recipe.</p>
       </div>
    </div>
    <div className="ingredient oil">
    <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Oil</h3>
       <p className="ingredientPara">
        For oil we Choose vegetable oil which is the best option for baking moist,delicious baked goods and doesn't add a strong flavor.
        </p>
       </div>
    </div>
    <div className="ingredient honey">
    <div className="hiddenDescription">
       <h3 className=" ingredientHeader">Honey</h3>
       <p className="ingredientPara"> For honey we choose Wildflower honey which is more beneficial than regular processed sugar and it makes your cake or pastry moister.</p>
       </div>
    </div>
  </section>
  )
}
