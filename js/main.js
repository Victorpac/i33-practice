"use strict";

const openMenuButton = document.querySelector('#openMenuButton');

openMenuButton.addEventListener("click", openMenu);

function openMenu(event) {
  const headerEl = document.querySelector("#header");
  let isOpenMenuButtonActive = openMenuButton.getAttribute("data-is-active") === "true";
  openMenuButton.setAttribute("data-is-active", !isOpenMenuButtonActive);
  headerEl.setAttribute("data-is-active", !isOpenMenuButtonActive);
}
