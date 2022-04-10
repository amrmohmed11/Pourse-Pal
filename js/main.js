let nav_link = document.querySelectorAll("#nav-link");

function removeClass() {
  for (i = 0; i < nav_link.length; ++i) {
    nav_link[i].classList.remove("nav-ac");
  }
}

for (x = 0; x < nav_link.length; ++x) {
  //   console.log(nav_link[x])
  nav_link[x].onclick = function () {
    removeClass();
    this.classList.add("nav-ac");
    console.log(this)
  };
}
