"use strict";

// Suggestions Slider
document.addEventListener("DOMContentLoaded", () => {
  function initializeSlider(sliderContainer) {
    let currentSlide = 0;
    const slidesToShow = 3;
    const track = sliderContainer.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const progressBar = sliderContainer.querySelector(".progress-bar");
    const prevButton = sliderContainer.querySelector(".prevButton");
    const nextButton = sliderContainer.querySelector(".nextButton");

    const moveToSlide = (targetSlide) => {
      const amountToMove = (targetSlide * 100) / slidesToShow;
      track.style.transform = `translateX(-${amountToMove}%)`;

      let indicatorWidth;
      if (targetSlide === 1) {
        indicatorWidth = 66.6666; // Highlight second third
      } else if (targetSlide >= 2) {
        indicatorWidth = 100; // Highlight final third
      } else {
        indicatorWidth = 33.3333; // Highlight first third
      }

      progressBar.style.width = `${indicatorWidth}%`;

      currentSlide = targetSlide;
    };

    prevButton.addEventListener("click", () => {
      if (currentSlide > 0) {
        moveToSlide(currentSlide - 1);
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentSlide < slides.length - slidesToShow) {
        moveToSlide(currentSlide + 1);
      }
    });

    moveToSlide(currentSlide); // Initialize position
  }

  const sliders = document.querySelectorAll(".slider-container");
  sliders.forEach((slider) => {
    initializeSlider(slider);
  });
});
