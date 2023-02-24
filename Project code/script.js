const drinkCardTemplate = document.querySelector("[data-user-template]")
const drinkCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const searchB = document.querySelector("searchButton")

let drinks = []

//filter event listener, filters through names of cocktails/cards when typing into searchbar
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
     drinks.forEach(drink => {
  const isVisible =
     drink.name.toLowerCase().includes(value) ||
     drink.category.toLowerCase().includes(value)
   drink.element.classList.toggle("hide", !isVisible)
  })
})

const selection= ""
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${selection}`)
  .then(res => res.json())
  .then(data => {
   drinks = data['drinks'].map(drink => {
      const card = drinkCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const body2 = card.querySelector("[data-body2]")
      const body3 = card.querySelector("[data-body3]")
      const body4 = card.querySelector("[data-body4]")
      header.textContent = drink.strDrink
      body.textContent = drink.strCategory
      body2.textContent = drink.strIBA
      body3.textContent = drink.strAlcoholic
      body4.textContent = drink.strGlass
      drinkCardContainer.append(card)
      console.log(card)
   return {name: drink.strDrink, category: drink.strCategory,
      IBA: drink.strIBA, Alcoholic: drink.strAlcoholic, Glass: drink.strGlass, element: card}
  })
})


document.getElementById("title").addEventListener("mouseover", mouseOver);
document.getElementById("title").addEventListener("mouseout", mouseOut);


//mouse over event, makes header turn to blue when hovered over to match background color
function mouseOver() {
  document.getElementById("title").style.color = "lightblue";
}

function mouseOut() {
  document.getElementById("title").style.color = "black";
}

//focus event, turns search bar blue to match background when clicked into
document.getElementById("search").addEventListener("focus", myFunction);

function myFunction() {
  document.getElementById("search").style.backgroundColor = "lightblue";
}
