var body = document.querySelector("body");
var green = document.querySelector(".green-toggle");
var purple = document.querySelector(".purple-toggle");
var brown = document.querySelector(".brown-toggle");
var catalogLink = document.querySelector(".catalog-menu");
var catalogPopup = document.querySelector(".catalog-popup");
var searchLink = document.querySelector(".user-search");
var searchPopup = document.querySelector(".search-popup");
var enterLink = document.querySelector(".user-enter");
var enterPopup = document.querySelector(".enter-popup");
var cartLink = document.querySelector(".user-cart");
var cartPopup = document.querySelector(".cart-popup");
var link = document.querySelector(".link");
var formPopup = document.querySelector(".form-popup");
var formClose = formPopup.querySelector(".form-popup-close");
var overlay = document.querySelector(".overlay");
var login = formPopup.querySelector("[name=name]");
var password = formPopup.querySelector("[name=email]");
var form = formPopup.querySelector("form");
var storage = localStorage.getItem("login");

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
	if (catalogPopup.classList.contains("catalog-popup-show")) {
		catalogPopup.classList.remove("catalog-popup-show");
		catalogLink.classList.remove("active-item-popup");
	} else {
		catalogPopup.classList.add("catalog-popup-show");
		catalogLink.classList.add("active-item-popup");
		searchPopup.classList.remove("search-popup-show");
		searchLink.classList.remove("active-item-popup");
		enterPopup.classList.remove("enter-popup-show");
		enterLink.classList.remove("active-item-popup");
		cartPopup.classList.remove("cart-popup-show");
		cartLink.classList.remove("active-item-popup");
	}
});

searchLink.addEventListener("click", function (event) {
	event.preventDefault();
	if (searchPopup.classList.contains("search-popup-show")) {
		searchPopup.classList.remove("search-popup-show");
		searchLink.classList.remove("active-item-popup");
	} else {
		searchPopup.classList.add("search-popup-show");
		searchLink.classList.add("active-item-popup");
		catalogPopup.classList.remove("catalog-popup-show");
		catalogLink.classList.remove("active-item-popup");
		enterPopup.classList.remove("enter-popup-show");
		enterLink.classList.remove("active-item-popup");
		cartPopup.classList.remove("cart-popup-show");
		cartLink.classList.remove("active-item-popup");
	}
});

enterLink.addEventListener("click", function (event) {
	event.preventDefault();
	if (enterPopup.classList.contains("enter-popup-show")) {
		enterPopup.classList.remove("enter-popup-show");
		enterLink.classList.remove("active-item-popup");
	} else {
		enterPopup.classList.add("enter-popup-show");
		enterLink.classList.add("active-item-popup");
		catalogPopup.classList.remove("catalog-popup-show");
		catalogLink.classList.remove("active-item-popup");
		searchPopup.classList.remove("search-popup-show");
		searchLink.classList.remove("active-item-popup");
		cartPopup.classList.remove("cart-popup-show");
		cartLink.classList.remove("active-item-popup");
	}
});

cartLink.addEventListener("click", function (event) {
	if (cartPopup.classList.contains("cart-popup-show")) {
		cartPopup.classList.remove("cart-popup-show");
		cartLink.classList.remove("active-item-popup");
	} else {
		cartPopup.classList.add("cart-popup-show");
		cartLink.classList.add("active-item-popup");
		catalogPopup.classList.remove("catalog-popup-show");
		catalogLink.classList.remove("active-item-popup");
		enterPopup.classList.remove("enter-popup-show");
		enterLink.classList.remove("active-item-popup");
		searchPopup.classList.remove("search-popup-show");
		searchLink.classList.remove("active-item-popup");
	}
});

link.addEventListener("click", function (event) {
	event.preventDefault();
	formPopup.classList.add("form-popup-show");
	overlay.classList.add("overlay-show");
	if (storage) {
		storage = login.value;
		login.focus();
	} else {
		password.focus();
	}
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

form.addEventListener("submit", function (event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		formPopup.classList.add("form-popup-error");
	} else {
		localStorage.setItem("login", login.value);
	}
})
