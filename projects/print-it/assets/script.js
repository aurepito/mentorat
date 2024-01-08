const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

const dots = document.querySelector('.dots');

let currentIndex = 0;

arrowLeft.addEventListener('click', function() {
	updateBanner(currentIndex - 1);
});

arrowRight.addEventListener('click', function() {
	updateBanner(currentIndex + 1);
});

function updateBanner(index) {
	currentIndex = parseInt(index);
	if(currentIndex < 0){ currentIndex = slides.length - 1; }
	if(currentIndex > (slides.length - 1)){ currentIndex = 0; }

	bannerImg.src = `assets/images/slideshow/${slides[currentIndex].image}`;
	bannerText.innerHTML = slides[currentIndex].tagLine;
	setCurrentDot(currentIndex);
}

function setCurrentDot(index) {
	let dot_selected = document.querySelector('.dot_selected');
	if(dot_selected){
		dot_selected.classList.remove('dot_selected');
	}

	let dots = document.querySelectorAll(`.dot`);
	let dot = dots[index];
	dot.classList.add('dot_selected');
}

// Init Dots
for(let i = 0; i < slides.length; i++) {
	let dot = document.createElement('a');
	dot.classList.add('dot');
	dot.dataset.index = i;

	dot.addEventListener('click', function(e){
		updateBanner(e.target.dataset.index);
	});
	dots.appendChild(dot);
}

setCurrentDot(0);