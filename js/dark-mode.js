let card = document.querySelectorAll(".card");
let body = document.body;
let moon = document.getElementById("moon");

console.log(body);
moon.onclick = function () {
  body.classList.toggle("dark-mode");
  for (i = 0; i < card.length; ++i) {
    card[i].classList.toggle("dark-mode-card");
  }
};
