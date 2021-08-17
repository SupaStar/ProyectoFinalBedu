const urlParam = window.location.search.substring(1);
import './carousel';
if (urlParam === "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(meal => mostrarReceta(meal))
        .catch(exception => mostrarError(exception));
} else {
    const id = urlParam.split('=')[1];
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(meal => mostrarReceta(meal))
        .catch(exception => mostrarError(exception));
}

const mostrarReceta = (meal) => {
    let comida = meal.meals[0];
    document.getElementById('recipeName').innerText = comida.strMeal;
    document.getElementById('recipeArea').innerText = comida.strArea;
    document.getElementById('recipeTags').innerText = comida.strTags;
    document.getElementById('recipeImg').src = comida.strMealThumb;
    document.getElementById('instructions').innerText = comida.strInstructions;
    var images = [];
    for (let i = 1; i <= 20; i++) {
        let key = "strIngredient" + i;
        let keyMeasure = "strMeasure" + i;
        let $divIngredientes = document.getElementById('ingredients');
        if (comida[key] !== "") {
            let $ingrediente = document.createElement('li');
            $ingrediente.innerHTML = `${comida[key]} <b>${comida[keyMeasure]}</b>`;
            $divIngredientes.appendChild($ingrediente);
            images.push(comida[key]);
        }
    }
}
const mostrarError = (error) => {
    let notificacion = document.querySelector('.notification');
    notificacion.textContent = error;
    notificacion.classList.remove('is-hidden');
}