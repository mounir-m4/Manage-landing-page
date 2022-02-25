// swiper js for testimonials
const swiper = new Swiper('.mySwiper', {
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 40,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
	},
});

//validate input email
const form = document.querySelector('.form-group');
const input = document.querySelector('.form-control');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (validateEmail(input.value)) {
		input.parentElement.classList.remove('error');
	} else {
		input.parentElement.classList.add('error');
	}
});

//fuctions to validate inputs
const validateEmail = (email) => {
	const regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
};

// hamburger menu
const menu = document.querySelector('.hamburger');
const btn = document.querySelector('.hamburger-btn');
const list = document.querySelector('.nav-links');
let menuOpen = false;
menu.addEventListener('click', () => {
	if (!menuOpen) {
		btn.classList.add('open');
		list.classList.remove('nav-links');
		list.classList.add('menu-mobile');
		menuOpen = true;
	} else {
		btn.classList.remove('open');
		list.classList.add('nav-links');
		list.classList.remove('menu-mobile');
		menuOpen = false;
	}
});
