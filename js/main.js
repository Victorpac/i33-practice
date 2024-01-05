"use strict";

const openMenuButton = document.querySelector("#openMenuButton");
const searchForm = document.querySelector("#navigationSearchForm")
const searchFormButton = document.querySelector("#searchFormButton");

openMenuButton.addEventListener("click", openMenu);
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  openSearchField(e);
});
// searchFormButton.addEventListener("click", openSearchField);

function openMenu(event) {
  const headerEl = document.querySelector("#header");
  let isOpenMenuButtonActive = openMenuButton.getAttribute("data-is-active") === "true";
  openSearchField();
  openMenuButton.setAttribute("data-is-active", String(!isOpenMenuButtonActive));
  headerEl.setAttribute("data-is-active", String(!isOpenMenuButtonActive));
}

function openSearchField(event) {
  const isFormActive = searchForm.getAttribute("data-is-active") === "true";
  if (isFormActive) {
    searchForm.submit();
  }else {
    searchForm.setAttribute("data-is-active", String(!isFormActive));
    // document.addEventListener("click", (e) => searchForm.setAttribute("data-is-active", "false"));
  }
}
