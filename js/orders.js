"use strict";

const d = document;

export default function orders(orderBtn, order, closeOrder) {
  let _order = d.querySelector(order);
  d.addEventListener("click", (e) => {
    if (e.target.matches(orderBtn)) {
      _order.style.right = 0;
    }
    if (e.target.matches(closeOrder)) {
      _order.style.right = "-100%";
    }
  });
}
