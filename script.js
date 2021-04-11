const slider = document.querySelector(".slider");
const sliderDotContainer = document.querySelector(".slider__dot");
const dots = Array.from(sliderDotContainer.children);

dots.forEach((dot, idx) => {
  dot.addEventListener("click", function () {
    slider.style.transform = `translateX(${idx * -25}%)`;
    sliderDotContainer.querySelector(".active").classList.remove("active");
    dot.classList.add("active");
  });
});
