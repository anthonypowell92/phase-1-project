let img = document.querySelector('img')
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', () => {
    img.src = 'images/1.jpeg';
})
btn2.addEventListener('click', () => {
  img.src = 'images/0.jpeg';
})

let form = document.querySelector("#create-task-form")

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", newTask);
  });

