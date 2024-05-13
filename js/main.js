"use strict";

import { Animation }  from "./animations.js";

const searchForm = document.querySelector("#navigationSearchForm")
const openMenuButton = document.querySelector("#openMenuButton");

let animations = new Animation();

openMenuButton.addEventListener("click", animations.openNavigationMenu);
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  animations.closeOpenSearchField(e);
});
// searchFormButton.addEventListener("click", openSearchField);

animations.initAnimations();


// window.addEventListener("scroll", scrollOperator);

// disableScroll();
//
// let startScrollPosition = window.scrollY;
// let isAnimation = false;
// let currentAnimItem = 0;
// function scrollOperator(event) {
//   preventScroll(event);
//   if (isAnimation) return false;
//
//   console.log(event);
//   isAnimation = true;
//
//   const scrollDirection = startScrollPosition < window.scrollY ? "up" : "down";
//   console.log(scrollDirection);
//
//   if ((scrollDirection === "up") && (currentAnimItem > 0)) {
//     currentAnimItem -= 1;
//   }else if ( (scrollDirection === "down") && (currentAnimItem < animItems.length) ) {
//     currentAnimItem += 1;
//   }
//
//   console.log(currentAnimItem);
//
//   window.scrollTo(0, animItems[currentAnimItem].offsetTop);
//
//   window.addEventListener("scrollend", (e) => {
//     // enableScroll();
//     startScrollPosition = window.scrollY;
//     isAnimation = false;
//   });
//
//   return false;
// }
//
//
// function scrollAnimationInit(event) {
//
// }
//
// function preventScroll(e){
//   e.preventDefault();
//   e.stopPropagation();
//
//   return false;
// }
//
// function disableScroll() {
//   window.addEventListener('DOMMouseScroll', scrollOperator, {passive: false}); // older FF
//   window.addEventListener("wheel", scrollOperator, {passive: false}); // modern desktop
//   window.addEventListener('touchmove', scrollOperator, {passive: false}); // mobile
// }

// function enableScroll() {
//   window.removeEventListener('DOMMouseScroll', preventScroll, {passive: false}); // older FF
//   window.removeEventListener("wheel", preventScroll, {passive: false}); // modern desktop
//   window.removeEventListener('touchmove', preventScroll, {passive: false}); // mobile
//   window.removeEventListener('wheel', preventScroll, {passive: false});
// }


// const breakpoints = [];
// animItems.forEach(item => breakpoints.push(item.offsetTop));
//
// // Function to handle scroll event
// function handleScroll() {
//   const scrollPosition = window.scrollY;
//
//   // Loop through breakpoints and check if scroll position has reached them
//   for (const key in breakpoints) {
//     if (scrollPosition >= breakpoints[key]) {
//       console.log('Reached breakpoint ' + key);
//       // Here you can trigger any action you want
//       // For example, you could animate an element, load more content, etc.
//     }
//   }
// }
//
// // Listen for scroll events




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
