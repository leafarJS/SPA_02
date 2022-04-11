"use strict";

import accordion from "./accordion.js";
import cartShopping from "./cart.js";
import hamburgerMenu from "./menu.js";
import orders from "./orders.js";
import slider from "./slider.js";
import userAcounters from "./userAccount.js";

const d = document;
const w = window;

w.addEventListener("scroll", (e) => {
  let _navBar = d.querySelector(".navbar");
  _navBar.classList.remove("active");
});

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".navbar", "#menu-btn");
  userAcounters(".user-account", "#user-btn", "#close-account span");
  orders("#order-btn", ".my-orders", "#close-orders span");
  cartShopping("#cart-btn", ".cart", "#close-cart span");
  slider(".slide", ".fa-angle-left", ".fa-angle-right");
  accordion(".accordion");
});
