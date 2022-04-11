"use strict";
const d = document;

export default function cartShopping(cartBtn, cartMenu, closeCart) {
  let _cartMenu = d.querySelector(cartMenu);
  d.addEventListener("click", (e) => {
    if (e.target.matches(cartBtn)) {
      _cartMenu.style.right = 0;
    }
    if (e.target.matches(closeCart)) {
      _cartMenu.style.right = "-110%";
    }
  });
}
