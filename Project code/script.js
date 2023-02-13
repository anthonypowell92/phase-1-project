const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
     user.strDrink.toLowerCase().includes(value) ||
     user.strCategory.toLowerCase().includes(value)
  user.element.classList.toggle("hide", !isVisible)
  })
})

fetch('http://localhost:3000/drinks')
  .then(res => res.json())
  .then(data => {
   users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-header]")
      header.textContent = user.strDrink
      body.textContent = user.strCategory
      userCardContainer.append(card)
      return {name: user.strDrink, category: user.strCategory, element: card}
  })
})
