export const fetchCocktailsByName = async (name) => {
  if (name == "") {
    return;
  }
  let response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  let dataArr = await response.json();
  let drinks = dataArr["drinks"];
  return drinks;
};

export const fetchCocktailsByID = async (id) => {
  let response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let dataArr = await response.json();
  let drinks = dataArr["drinks"];
  let drink = drinks[0];
  return drink;
};

//import a drink and return ingredients array in key value pairs
export const gatherIngredients = (drink) => {
  console.log("gather ingredients runs");
  let ingredientsAndMeasuresMap = {};
  let ingredientPattern = "strIngredient";
  let measurePattern = "strMeasure";

  for (const property in drink) {
    let propertyID = property.toString().slice(-1);

    if (property.toString().includes(ingredientPattern)) {
      let ingredient = drink[property];
      let measure = drink[`${measurePattern}${propertyID}`];
      if (ingredient) {
        ingredientsAndMeasuresMap[ingredient] = measure;
      }
    }
  }
  let ingredientsArr = [];

  for (const key in ingredientsAndMeasuresMap) {
    let pair = {
      ingredient: key,
      measure: ingredientsAndMeasuresMap[key],
    };
    ingredientsArr.push(pair);
  }

  return ingredientsArr;
};
