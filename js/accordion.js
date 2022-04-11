"use strict";
const d = document;

export default function accordion(accordion) {
  let _accordion = d.querySelectorAll(accordion);
  _accordion.forEach((acco) => {
    acco.addEventListener("click", () => {
      _accordion.forEach((element) => element.classList.remove("active"));
      acco.classList.add("active");
    });
  });
}
