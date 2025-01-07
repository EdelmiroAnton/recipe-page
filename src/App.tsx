import omelette from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <>
      <main className="max-w-[375px] w-full mx-auto">
        <img src={omelette} alt="omelette image" className="" />
        <div className="w-[312px] mx-auto">
          <h1 className="font-YoungSerif mt-8 mb-8">
            <span className="leading-none font-normal text-[2.3125rem] text-stone-900 ">
              Simple Omelette Recipe
            </span>
          </h1>
          <p className="text-stone-600 font-Outfit font-medium text-[1rem]">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <section
            aria-label="preparation time"
            className="bg-rose-50 font-Outfit mt-8 mb-8 rounded-lg"
          >
            <p className="text-rose-900 text-[1.125rem] font-medium pt-[15px] pl-[25px]">
              Preparation time
            </p>
            <ul className="list-none w-[275px] ">
              <li
                className="relative pl-[15px] ml-[33px] mt-[7px] text-[18px] text-stone-700
               before:content-['\2022']
               before:absolute 
               before:left-0 
               before:top-[50%] 
               before:-translate-y-1/2"
              >
                <p className="text-[1rem] ml-[13px]">
                  <span className="text-stone-700 font-semibold">Total: </span>
                  <span className="text-stone-600">
                    Approximately 10 minutes
                  </span>
                </p>
              </li>
              <li> Preparation: 5 minutes</li>
              <li>Cooking: 5 minutes</li>
            </ul>
          </section>
          Ingredients 2-3 large eggs Salt, to taste Pepper, to taste 1
          tablespoon of butter or oil Optional fillings: cheese, diced
          vegetables, cooked meats, herbs Instructions Beat the eggs: In a bowl,
          beat the eggs with a pinch of salt and pepper until they are well
          mixed. You can add a tablespoon of water or milk for a fluffier
          texture. Heat the pan: Place a non-stick frying pan over medium heat
          and add butter or oil. Cook the omelette: Once the butter is melted
          and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
          coat the surface. Add fillings (optional): When the eggs begin to set
          at the edges but are still slightly runny in the middle, sprinkle your
          chosen fillings over one half of the omelette. Fold and serve: As the
          omelette continues to cook, carefully lift one edge and fold it over
          the fillings. Let it cook for another minute, then slide it onto a
          plate. Enjoy: Serve hot, with additional salt and pepper if needed.
          Nutrition The table below shows nutritional values per serving without
          the additional fillings. Calories 277kcal Carbs 0g Protein 20g Fat 22g
        </div>
      </main>
    </>
  );
}

export default App;
