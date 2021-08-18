// import {logo, mainImage} from ".";

// const images = [mainImage, logo, mainImage, mainImage, mainImage, mainImage];

const renderCarousel = objects => {

    let carousel = document.querySelector('.carousel');

    objects.forEach(obj => {
        let link = document.createElement('a');
        link.href = `recipe.html?id=${obj.idMeal}`

        let slide = document.createElement('div');
        slide.className = 'slide fade';

        let element = document.createElement('img');
        element.src = obj.strMealThumb;

        slide.appendChild(element);
        link.appendChild(slide);
        carousel.appendChild(link);

        // console.log(obj.strMealThumb)
    });

    let nextSlide = document.querySelector('.nextSlide');
    let prevSlide = document.querySelector('.prevSlide');

    nextSlide.addEventListener('click', () => goToSlide(-1));
    prevSlide.addEventListener('click', () => goToSlide(1))
}


// Next/previous controls
const goToSlide = (n) => {
    showSlides(slideIndex += n);
}

// Render carousel
const showSlides = (n) => {
    var slides = document.querySelectorAll(".slide");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var slideIndex = 0;
// renderCarousel(randomRecipes(5));

// showSlides(slideIndex);

const file = window.location.pathname;
if (file === '/' || file === '/index.html') {
    let recipes = [];
    let promises = [];
    for (let i = 0; i <= 5; i++) { // Retrieving 5 random meals
        promises.push(fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(data => data.json().then(data => {
                recipes.push(data.meals[0]);
            })).catch(error => console.error(error)));
    }

    Promise.all(promises).then(data => { // And appending them to the carousel when we have all
        renderCarousel(recipes);
        goToSlide(1);
    })
}

export {renderCarousel, goToSlide};
