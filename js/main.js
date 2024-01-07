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
  searchForm.setAttribute("data-is-active", String(!isOpenMenuButtonActive));
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

const animItems = document.querySelectorAll('._anim-item');

// window.addEventListener("scroll", scrollOperator);


let isAnimation = false;
let currentAnimItem = 0;
function scrollOperator(event) {
  console.log("start", isAnimation);
  if (isAnimation) return;

  disableScroll();
  isAnimation = true;

  window.scrollTo(0, animItems[currentAnimItem+1].offsetTop);

  window.addEventListener("scrollend", (e) => {
    console.log("Scroll end");
    enableScroll();
    isAnimation = false;
  });
  console.log("ed", isAnimation);
}


function scrollAnimationInit(event) {

}

function preventScroll(e){
  e.preventDefault();
  e.stopPropagation();

  return false;
}

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventScroll, {passive: false}); // older FF
  window.addEventListener("wheel", preventScroll, {passive: false}); // modern desktop
  window.addEventListener('touchmove', preventScroll, {passive: false}); // mobile
  window.addEventListener('wheel', preventScroll, {passive: false});
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventScroll, {passive: false}); // older FF
  window.removeEventListener("wheel", preventScroll, {passive: false}); // modern desktop
  window.removeEventListener('touchmove', preventScroll, {passive: false}); // mobile
  window.removeEventListener('wheel', preventScroll, {passive: false});
}

//
// const animItem__facts	= document.querySelector('#facts');
//
//
// animItem__facts.addEventListener('facts__is_visited', () => {
//   const animElments = animItem__facts.querySelectorAll('.facts__item>div>p');
//   const animDuration = 2000; // ms; Duration of animation
//
//   if (!animItem__facts.classList.contains('_animated')) {
//     for (let i = 0; i < animElments.length; i++) {
//       let el = animElments[i];
//       let finalTargetElText = el.innerText;
//       let aDur = (animDuration/finalTargetElText)*(Math.random()*2);
//
//       factsSectionAnimation(el, 0, finalTargetElText, aDur);
//     }
//     animItem__facts.classList.add('_animated');
//   }
// });
//
// function animOnScroll () {
//   animHeader();
//
//   for (let index = 0; index< animItems.length; index++) {
//     const animItem = animItems[index];
//     const animItemHeight = animItem.offsetHeight;
//     const animItemOffset = offset(animItem).top;
//     const animStart = 2;
//
//     let animItemPoint = window.innerHeight - animItemHeight / animStart;
//
//     if (animItemHeight > window.innerHeight) {
//       animItemPoint = window.innerHeight - window.innerHeight / animStart;
//     }
//
//     if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
//       animItem.classList.add('_active');
//       let vEvent = new Event(`${animItem.classList[0]}__is_visited`);
//       animItem.dispatchEvent(vEvent);
//     }
//   }
//
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//   }
//
//   function animHeader () {
//     let header = document.querySelector('.header');
//
//     if (window.pageYOffset > 1) {
//       header.style.background = 'rgb(0 0 0 / 50%)';
//     }else {
//       header.style.background = "transparent"
//     }
//   }
// }
