
export class Animation {
  constructor() {
    this.headerElement = document.querySelector("#header");
    this.searchFormButton = document.querySelector("#searchFormButton");
    this.searchForm = document.querySelector("#navigationSearchForm")
    this.openMenuButton = document.querySelector("#openMenuButton");

    this.currentActiveBreakepoints = new Set();
    this.animationBreakpoints = [];
  }

  openNavigationMenu(event) {
    let isOpenMenuButtonActive = this.openMenuButton.getAttribute("data-is-active") === "true";
    this.searchForm.setAttribute("data-is-active", String(!isOpenMenuButtonActive));
    this.openMenuButton.setAttribute("data-is-active", String(!isOpenMenuButtonActive));
    this.headerElement.setAttribute("data-is-active", String(!isOpenMenuButtonActive));
  }

  closeOpenSearchField(event) {
    const isFormActive = this.searchForm.getAttribute("data-is-active") === "true";

    if (isFormActive) {
      this.searchForm.submit();
    }else {
      this.searchForm.setAttribute("data-is-active", String(!isFormActive));
      // document.addEventListener("click", (e) => searchForm.setAttribute("data-is-active", "false"));
    }
  }

  getComputedElementHeight(animatedElement) {
    const animatedElementComputedStyles = getComputedStyle(animatedElement);
    const animatedElementPaddingTop = parseInt(animatedElementComputedStyles.paddingBlockEnd);
    const animatedElementPaddingBottom = parseInt(animatedElementComputedStyles.paddingBlockStart);

    const animatedElementPadding = animatedElementPaddingTop + animatedElementPaddingBottom;

    return animatedElement.offsetHeight - animatedElementPadding;
  }

  textPrinting(animatedElement) {
    const animatedElementText = animatedElement.innerText.replaceAll("\\n", "\n");

    const animatedElementHeight = this.getComputedElementHeight(animatedElement);

    animatedElement.style.height = `${animatedElementHeight}px`;

    let letterIndex = 0;
    let intervalId = setInterval(() => {
      animatedElement.innerText = animatedElementText.slice(0, letterIndex);
      letterIndex++;
    }, 20);

    function waitForIntervalComplete() {
      if (letterIndex >= animatedElementText.length - 1) {
        animatedElement.style.height = '';
        clearInterval(intervalId);
      }else {
        setTimeout(waitForIntervalComplete,5000);
      }
    }

    setTimeout(waitForIntervalComplete, 5000);
  }

  stickyHeader() {
    if (window.scrollY > this.headerElement.offsetHeight) {
      this.headerElement.style.background = "rgb(0, 0, 0, 0.7)";
    }else {
      this.headerElement.style.background = "";
    }
  }

  initAnimations() {
    const animatedElements = document.querySelectorAll('._anim-item');

    animatedElements.forEach(item => this.animationBreakpoints.push(item.offsetTop));

    this.handleScrollAnimations(animatedElements);

    window.addEventListener('scroll', () => this.handleScrollAnimations(animatedElements));
  }

  handleScrollAnimations(animatedElements) {
    this.stickyHeader();

    const scrollPosition = window.scrollY;

    for (const key in this.animationBreakpoints) {
      if (scrollPosition + window.innerHeight * 0.7 >= this.animationBreakpoints[key]) {
        if (animatedElements[key].classList.contains("_anim-item")) {
          const animatedText = animatedElements[key].querySelectorAll('._anim-text');

          for (const el of animatedText) {
            this.textPrinting(el);
          }

          animatedElements[key].classList.remove("_anim-item");
        }
      }
      // else {
      //   if (!animatedElements[key].classList.contains("_anim-item")) {
      //     animatedElements[key].classList.add("_anim-item");
      //   }
      // }
    }
  }

  getElementOffset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}
