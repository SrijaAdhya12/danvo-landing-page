var toggle_btn;
var big_wrapper;
var hamburger_menu;
let dark = false;
const main = document.querySelector("main");

function declare() {
	toggle_btn = document.querySelector(".toggle-btn");
	big_wrapper = document.querySelector(".big-wrapper");
	toggle_btn.addEventListener("click", toggleAnimation);
	hamburger_menu = document.querySelector(".hamburger-menu");
	hamburger_menu.addEventListener("click", () => {
		big_wrapper.classList.toggle("active");
	});
}

declare();

function toggleAnimation() {
	dark = !dark;
	let clone = big_wrapper.cloneNode(true);
	if (dark) {
		clone.classList.remove("light");
		clone.classList.add("dark");
	} else {
		clone.classList.remove("dark");
		clone.classList.add("light");
	}
	clone.classList.add("copy");
	main.appendChild(clone);

	clone.addEventListener("animationend", () => {
		big_wrapper.remove();
		clone.classList.remove("copy");
		declare();
	});
}
