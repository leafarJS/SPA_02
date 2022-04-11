"use strict";
const d = document;

export default function hamburgerMenu(navBar, menuBar) {
  let _navBar = d.querySelector(navBar);
  d.addEventListener("click", (e) => {
    if (e.target.matches(menuBar)) {
      _navBar.classList.toggle("active");
    }
  });
}
