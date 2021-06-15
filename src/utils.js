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
