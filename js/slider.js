const corousel = document.querySelector(".carousel-slider");
const firstSlide = document.querySelector(".fist-slide");
const secondSlide = document.querySelector(".second-slide");
const thirdSlide = document.querySelector(".third-slide");
const firstText = document.querySelector(".slider-item-first");
const secondText = document.querySelector(".slider-item-second");
const thirdText = document.querySelector(".slider-item-third");

firstSlide.addEventListener("click", function () {
	firstSlide.classList.add("current");
	secondSlide.classList.remove("current");
	thirdSlide.classList.remove("current");

	corousel.classList.add("slider-image-1");
	corousel.classList.remove("slider-image-2");
	corousel.classList.remove("slider-image-3");

	firstText.classList.add("slide-current");
	secondText.classList.remove("slide-current");
	thirdText.classList.remove("slide-current");

	corousel.classList.remove("animation-slider");
	corousel.offsetWidth = corousel.offsetWidth;
	corousel.classList.add("animation-slider");
});

secondSlide.addEventListener("click", function () {
	firstSlide.classList.remove("current");
	secondSlide.classList.add("current");
	thirdSlide.classList.remove("current");

	corousel.classList.remove("slider-image-1");
	corousel.classList.add("slider-image-2");
	corousel.classList.remove("slider-image-3");

	firstText.classList.remove("slide-current");
	secondText.classList.add("slide-current");
	thirdText.classList.remove("slide-current");

	corousel.classList.remove("animation-slider");
	corousel.offsetWidth = corousel.offsetWidth;
	corousel.classList.add("animation-slider");
});

thirdSlide.addEventListener("click", function () {
	firstSlide.classList.remove("current");
	secondSlide.classList.remove("current");
	thirdSlide.classList.add("current");

	corousel.classList.remove("slider-image-1");
	corousel.classList.remove("slider-image-2");
	corousel.classList.add("slider-image-3");

	firstText.classList.remove("slide-current");
	secondText.classList.remove("slide-current");
	thirdText.classList.add("slide-current");

	corousel.classList.remove("animation-slider");
	corousel.offsetWidth = corousel.offsetWidth;
	corousel.classList.add("animation-slider");
});