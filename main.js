// WRAPPING FUNCTIONS

const navbar = document.querySelector(".navbar")
const wrapper = document.querySelector(".wrapper");
const barsIcon = document.querySelector("#bars");
const closeIcon = document.querySelector(".icon-close");

function openWrapper() {
	wrapper.style.display = "flex";
	closeIcon.style.display = "flex";
	barsIcon.style.display = "none";
	navbar.style.zIndex = "3";
}

function closeWrapper() {
	wrapper.style.display = "none"
	closeIcon.style.display = "none"
	barsIcon.style.display = "flex"
}

// WRAPPER WINDOW RESIZE

function resizeWindow() {
	wrapper.style.display = "none"
	closeIcon.style.display = "none"
	barsIcon.style.display = "flex"
	const windowWidth = window.innerWidth;
    if (windowWidth >= 992) {
        barsIcon.style.display = 'none';
    } else {
        barsIcon.style.display = 'flex';
    }
}

window.addEventListener('resize', resizeWindow)
