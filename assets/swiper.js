var swiper = new Swiper(".mySwiper", {
	cssMode: true,
	breakpoints: {
		600: {
			slidesPerView: 2,
		},
	},
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	mousewheel: true,
	keyboard: true,
});
