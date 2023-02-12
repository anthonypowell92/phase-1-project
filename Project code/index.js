function allOfTheCocktails(){
  fetch('http://localhost:3000/drinks')
  .then(res => res.json())
  .then(drinks => drinks.forEach(cocktail => renderOneCocktail(cocktail)))
}


