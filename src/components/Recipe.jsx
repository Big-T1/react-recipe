import React from 'react'
import img from '../assets/image/image-omelette.jpeg'
import '../css/style.css'


function Recipe() {
  return (
    <>
    <main className='tee'>
      
            <div className='image'>
                <img src={img} alt="" />
            </div>
            <div className='div'>
                <h1>Simple Omelette Recipe</h1>
                <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
  to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            </div>
            <div className='prep'>
                <h3 className='prep2'>Preparation time</h3>
                <ul className='time'>
                    <li>Total: Approximately 10 minutes</li>
                    <li> Preparation: 5 minutes</li>
                    <li>Cooking: 5 minutes</li>
                </ul>
                 </div>

                 <div className='ing'>
                    <h3>Ingredients</h3>
                    <ul className='next'>
                        <li>2-3 large eggs</li>
                        <li>Salt, to taste</li>
                        <li>Pepper, to taste</li>
                        <li> 1 tablespoon of butter or oil</li>
                        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                 </div>
                 <div className='ins'>
                    <h3 className='instruct'>Instructions</h3>
                    <ol className='note'>
                        <li><p className='pan'>Beat the eggs:<span className='toe'>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.You can add a tablespoon of water or milk for a fluffier texture.</span></p></li>
                        <li><p className='pan1'>Heat the pan:<span className='toe1'>Place a non-stick frying pan over medium heat and add butter or oil</span> </p></li>
                        <li><p className='pan2'>Cook the omelette:<span className='toe2'>Place a non-stick frying pan over medium heat and add butter or oil.</span></p></li>
                        <li><p className='pan3'>Add fillings (optional):<span className='toe3'>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></p></li>
                        <li><p className='pan4'>Fold and serve:<span className='toe4'>As  the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></p></li>
                        <li><p className='pan5'>Enjoy:<span className='toe5'>Serve hot, with additional salt and pepper if needed.</span></p></li>
                    </ol>
                 </div>
                 <div className='tab'>
                 <h2 className='nut'>Nutrition</h2>
                 <p className='show'>The table below shows nutritional values per serving without the additional fillings.</p>

             </div>

             <table>
                <tr>
                 <td className='price'>Calories</td>
                <td className="amount">277kcal</td>
                </tr>
                <tr>
                <td className='price'>Carbs</td>
                 <td className="amount">0g</td>
                 </tr>
                 <tr>
                <td className='price'>Protein</td>
               <td className="amount">20g</td>
                </tr>
              <tr>
              <td className='price'>Fat</td>
             <td className="amount">22g</td>
             </tr>
              </table>
        
    </main>
    </>
  )
}

export default Recipe