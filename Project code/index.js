let img = document.querySelector('#img')
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function ChangePic(){
btn1.addEventListener('click', () => {
    img.src = 'images/1.jpeg';
})
btn2.addEventListener('click', () => {
  img.src = 'images/0.jpeg';
})
return ChangePic;
}

let form = document.querySelector("#create-task-form")

function VigSubmit() {
document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", newTask);
  });
  return VigSubmit;
}

  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'

    document.addEventListener("DOMContentLoaded", () => {

      const hearts = document.querySelectorAll("span.like-glyph")

      hearts.forEach(hearts => hearts.addEventListener("click", callB))

      function callB(hearts) {
        mimicServerCall()
        .then( () => {
          if (hearts.target.innerText === EMPTY_HEART) {
            hearts.target.classList.add('activated-heart')
            hearts.target.innerText = FULL_HEART
          }
          else {
            hearts.target.classList.remove('activated-heart')
              hearts.target.innerText = EMPTY_HEART
          }
          return hearts.target;
        })
      }}
    )
