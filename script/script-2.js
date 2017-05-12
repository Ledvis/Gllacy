var catalogLink = document.querySelector(".catalog-menu");
var catalogPopup = document.querySelector(".catalog-popup");
var searchLink = document.querySelector(".user-search");
var searchPopup = document.querySelector(".search-popup");
var enterLink = document.querySelector(".user-enter");
var enterPopup = document.querySelector(".enter-popup");
var cartLink = document.querySelector(".user-cart");
var cartPopup = document.querySelector(".cart-popup");


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
