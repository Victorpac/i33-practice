"use strict";

const openMenuButton = document.querySelector('#openMenuButton');
const searchForm = document.querySelector("#navigationSearchForm")

openMenuButton.addEventListener("click", openMenu);

function openMenu(event) {
  const headerEl = document.querySelector("#header");
  let isOpenMenuButtonActive = openMenuButton.getAttribute("data-is-active") === "true";
  searchForm.setAttribute("data-is-active", !isOpenMenuButtonActive);
  openMenuButton.setAttribute("data-is-active", !isOpenMenuButtonActive);
  headerEl.setAttribute("data-is-active", !isOpenMenuButtonActive);
}
