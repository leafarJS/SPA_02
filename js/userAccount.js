"use strict";
const d = document;

export default function userAcounters(user, userBtn, closeUser) {
  let _user = d.querySelector(user);
  d.addEventListener("click", (e) => {
    if (e.target.matches(userBtn)) {
      _user.style.right = 0;
    }

    if (e.target.matches(closeUser)) {
      _user.style.right = "-100%";
    }
  });
}
