const drinkCardTemplate = document.querySelector("[data-user-template]")
const drinkCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const searchB = document.querySelector("searchButton")

let drinks = []

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
      header.textContent = drink.strDrink
      body.textContent = drink.strCategory
      drinkCardContainer.append(card)
      console.log(card)
      return {name: drink.strDrink, category: drink.strCategory, element: card}
  })
})
