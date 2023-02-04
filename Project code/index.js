function changeImage(fileName) {
  let img = document.querySelector("#tony-pic5");
  img.setAttribute("src", fileName);
}



  document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("#create-task-form")
    form.addEventListener("submit", newTask)
  });
