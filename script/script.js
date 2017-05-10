var body = document.querySelector("body");
var green = document.querySelector(".green-toggle");
var purple = document.querySelector(".purple-toggle");
var brown = document.querySelector(".brown-toggle");
var catalogLink = document.querySelector(".catalog-menu");
var catalogPopup = document.querySelector(".catalog-popup");
var searchLink = document.querySelector(".user-search");
var searchPopup = document.querySelector(".search-popup");
var enterLink = document.querySelector(".user-enter");
var eneterPopup = document.querySelector(".enter-popup");
var cartLink = document.querySelector(".user-cart");
var cartPopup = document.querySelector(".cart-popup");
var link = document.querySelector(".link");
var formPopup = document.querySelector(".form-popup");
var formClose = formPopup.querySelector(".form-popup-close");
var overlay = document.querySelector(".overlay");

green.addEventListener("click", function (event) {
	event.preventDefault();
	body.classList.add("green-bg");
	green.classList.add("active-toggle");
	body.classList.remove("purple-bg");
	body.classList.remove("brown-bg");
	purple.classList.remove("active-toggle");
	brown.classList.remove("active-toggle");
});

purple.addEventListener("click", function (event) {
	event.preventDefault();
	body.classList.add("purple-bg");
	purple.classList.add("active-toggle");
	body.classList.remove("green-bg");
	body.classList.remove("brown-bg");
	green.classList.remove("active-toggle");
	brown.classList.remove("active-toggle");
});

brown.addEventListener("click", function (event) {
	event.preventDefault();
	body.classList.add("brown-bg");
	brown.classList.add("active-toggle");
	body.classList.remove("purple-bg");
	body.classList.remove("green-bg");
	purple.classList.remove("active-toggle");
	green.classList.remove("active-toggle");
});

catalogLink.addEventListener("click", function (event) {
	event.preventDefault();
	catalogPopup.classList.toggle("catalog-popup-show");
	catalogLink.classList.toggle("active-item-menu");
});

searchLink.addEventListener("click", function (event) {
	event.preventDefault();
	searchPopup.classList.toggle("search-popup-show");
	searchLink.classList.toggle("user-active");
});

enterLink.addEventListener("click", function (event) {
	event.preventDefault();
	eneterPopup.classList.toggle("search-popup-show");
	enterLink.classList.toggle("user-active");
});

cartLink.addEventListener("click", function (event) {
	event.preventDefault();
	cartPopup.classList.toggle("cart-popup-show");
	cartLink.classList.toggle("user-active");
});

link.addEventListener("click", function (event) {
	event.preventDefault();
	formPopup.classList.add("form-popup-show");
	overlay.classList.add("overlay-show");
});

formClose.addEventListener("click", function (event) {
	event.preventDefault();
	formPopup.classList.remove("form-popup-show");
	overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (formPopup.classList.contains("form-popup-show")) {
			formPopup.classList.remove("form-popup-show");
			overlay.classList.remove("overlay-show");
		}
	}
})
