"use strict";

// Hero Slider
const slides = document.querySelectorAll(".slide");
const slideBtnleft = document.querySelector(".slider-btn-left");
const slideBtnRight = document.querySelector(".slider-btn-right");
const dotsContainer = document.querySelector(".dots");
const headingHero = document.querySelectorAll(".hero-heading");
const btnHero = document.querySelectorAll(".btn-primary");
const textHero = document.querySelectorAll(".hero-info-small");

const header = document.querySelector(".header");

/////////////////////////////////////////////////////////////
//HERO SLIDER WITH ANIMATIONS
/////////////////////////////////////////////////////////////
let currentSlide = 0;
const maxSlide = slides.length;

//go to slide with index  and translate
const goToSlide = function (slideNo) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slideNo) * 100}%)`;
    setTimeout(() => {
      s.style.opacity = 1;
    }, 1000);
  });
};

const createDot = function () {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activeDotFinder = function (slides) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slides}"]`)
    .classList.add("dots__dot--active");
};

// Animate the heading
const animateHeroHeadingBounce = function (slideNo) {
  headingHero.forEach((heading) => {
    heading.classList.remove(
      "animate__animated",
      "animate__fadeInDown",
      "animate__delay-1.5s"
    );
  });
  document
    .querySelector(`.heading-${slideNo + 1}`)
    .classList.add(
      "animate__animated",
      "animate__fadeInDown",
      "animate__delay-1.5s"
    );
};
// Animate the text
const animateHeroText = function (slideNo) {
  textHero.forEach((txt) =>
    txt.classList.remove(
      "animate__animated",
      "animate__shakeX",
      "animate__delay-1.5s"
    )
  );
  document
    .querySelector(`.txt-hero-${slideNo + 1}`)
    .classList.add(
      "animate__animated",
      "animate__shakeX",
      "animate__delay-1.5s"
    );
};
// Animate the Btn
const animateHeroBtn = function (slideNo) {
  btnHero.forEach((btn) =>
    btn.classList.remove(
      "animate__animated",
      "animate__slideInUp",
      "animate__delay-1.5s"
    )
  );
  document
    .querySelector(`.hero-btn-${slideNo + 1}`)
    .classList.add(
      "animate__animated",
      "animate__slideInUp",
      "animate__delay-1.5s"
    );
};

const initSlider = function () {
  goToSlide(0);
  createDot();
  activeDotFinder(0);
  animateHeroHeadingBounce(currentSlide);
  animateHeroText(currentSlide);
  animateHeroBtn(currentSlide);
};
initSlider();
const nextSlide = function () {
  if (currentSlide < maxSlide - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  goToSlide(currentSlide);
  activeDotFinder(currentSlide);
  animateHeroHeadingBounce(currentSlide);
  animateHeroText(currentSlide);
  animateHeroBtn(currentSlide);
};

const prevSlide = function () {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = 0;
  }
  goToSlide(currentSlide);
  activeDotFinder(currentSlide);
  animateHeroHeadingBounce(currentSlide);
  animateHeroText(currentSlide);
  animateHeroBtn(currentSlide);
};

// Event Listeners
dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const currentDotSlide = e.target.dataset.slide;
    goToSlide(currentDotSlide);
    activeDotFinder(currentDotSlide);
    // animateHeroBtn(currentDotSlide);
  }
});

slideBtnRight.addEventListener("click", nextSlide);
slideBtnleft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

/////////////////////////////////////////////////////////////
//FEATURED IN OWl CAUROSEL
/////////////////////////////////////////////////////////////
$(".owl-carousel").owlCarousel({
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  loop: true,
  responsive: {
    0: {
      items: 2,
    },
    500: {
      items: 3,
    },
    700: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});

/////////////////////////////////////////////////////////////
//STICKY NAVBAR
/////////////////////////////////////////////////////////////
