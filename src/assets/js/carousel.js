import {logo, mainImage} from ".";

const images = [mainImage, logo, mainImage, mainImage, mainImage, mainImage];

const renderCarousel = images => {

    let carousel = document.querySelector('.carousel');

    images.forEach(image => {
        let slide = document.createElement('div');
        slide.className = 'slide fade';

        let element = document.createElement('img');
        element.src = image;

        slide.appendChild(element);
        carousel.appendChild(slide);
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
renderCarousel(images);
showSlides(slideIndex);
// console.log(window.location)

// const getRandomRecipes = async n => {
//     let results = [];
//     for (let i = 0; i < n; i++) {
//         // const recipe = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
//         // result.push(results);
//         fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//         .then(response => response.json())
//         .then(response => results.push(response));
//     }
//     console.log(results);
//     return results;
// }

// getRandomRecipes();

// const file = window.location.pathname;
// if (file === '/index.html' || file === '/'){ // Render home carousel

// } else if(file === '/recipe.html'){ // Render recipe carousel

// }

