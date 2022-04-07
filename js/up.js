let up = document.getElementById("up");

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// console.log(window.scrollY)
window.onscroll = function () {
  // console.log(window.scrollY)
  if (window.scrollY >= 500) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};
