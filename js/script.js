// Navbar function
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
	navbar.classList.toggle("active");
});
window.onscroll = () => {
	navbar.classList.remove("active");
};
// Title function
let title = document.title;
let i = 0;
function writeTitle() {
	document.title = title.substring(0, i);
	if (i == title.length) {
		i = 0;
		setTimeout("writeTitle()", 3000);
	} else {
		i++;
		setTimeout("writeTitle()", 200);
	}
}
writeTitle();
