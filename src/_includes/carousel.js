const carousel = document.getElementById("carousel");
const images = Array.from(carousel.children);

images.forEach(img => {
	carousel.appendChild(img.cloneNode(true));
});

let index = 0;
const imgCount = images.length;
const imgWidth = carousel.clientWidth;

function autoScroll() {
	index++;
	carousel.scrollTo({
	left: imgWidth * index,
	behavior: "smooth"
	});

	if (index === imgCount) {
		setTimeout(() => {
			carousel.style.scrollBehavior = "auto";
			carousel.scrollLeft = 0;
			index = 0;
			carousel.style.scrollBehavior = "smooth";
		}, 600);
	}
}

setInterval(autoScroll, 5000);

window.addEventListener("resize", () => {
	carousel.scrollLeft = imgWidth * index;
});
