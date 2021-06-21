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
    `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let dataArr = await response.json();
  let drinks = dataArr["drinks"];
  let drink = drinks[0];
  return drink;
};
