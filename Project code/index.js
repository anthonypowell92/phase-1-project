function allOfTheCocktails(){
  fetch('http://localhost:3000/drinks')
  .then(res => res.json())
  .then(drinks => drinks.forEach(cocktail => renderOneCocktail(cocktail)))
}
allOfTheCocktails()

function searchBar(){
  allOfTheCocktails()
  document.querySelector("searchBar").addEventListener('search', (event) => {});
  onsearch = (event) => {};
}
searchBar()

function searchButton(){
  document.querySelector("searchButton").addEventListener('click', (event) => {});
}
searchButton()
