const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobile-menu');
const closer = document.querySelector('.mobile-menu__closer');
const menuElems = document.getElementsByClassName('mobile-menu__elem');

function handleNav() {
	closeMenu();
}

function addManyEventListener(arrElems) {
	for (let i = 0; i < arrElems.length; i++) {
		arrElems[i].addEventListener('click', handleNav);
	}
}
addManyEventListener(menuElems);

burger.addEventListener('click', handleMenu);
closer.addEventListener('click', handleMenu);

function openMenu() {
	mobileMenu.style.display = 'block';
	mobileMenu.classList.remove('mobile-menu_closen');
	mobileMenu.classList.add('mobile-menu_active');
}

function closeMenu() {
	mobileMenu.classList.add('mobile-menu_closen');
	mobileMenu.classList.remove('mobile-menu_active');
	setTimeout(() => {
		mobileMenu.style.display = 'none';
	}, 500);
}

function menuIsOpen() {
	return mobileMenu.style.display == 'block';
}

function handleMenu() {
	if (menuIsOpen()) {
		closeMenu();
	} else {
		openMenu();
	}
}
