function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.btn__icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-btn--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;