import {goToSlide, renderCarousel} from "./carousel";
import '../css/recipe.css';

const urlParam = window.location.search.substring(1); //Se obtienen los parametros en la url
import './carousel';

if (urlParam === "") {//Si no se reciben parametros, se mostrara una receta random
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(meal => mostrarReceta(meal))//Llama a la funcion mostrar receta mediante el endpoint random
        .catch(exception => mostrarError(exception));
} else {
    const id = urlParam.split('=')[1];//Se obtiene el valor del id mandado por url
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(meal => mostrarReceta(meal))//Llama a la funcion mostrar receta mediante el endpoint con id
        .catch(exception => mostrarError(exception));
}

const mostrarReceta = (meal) => {
    let comida = meal.meals[0];
    document.getElementById('recipeName').innerText = comida.strMeal;//Se agregan los datos mediante una busqueda del div por Id
    document.getElementById('recipeArea').innerText = comida.strArea;
    document.getElementById('recipeTags').innerText = comida.strTags;
    document.getElementById('recipeImg').src = comida.strMealThumb;
    document.getElementById('instructions').innerText = comida.strInstructions;
    for (let i = 1; i <= 20; i++) {//for para recorrer el numero maximo de ingredientes que se reciben
        let key = "strIngredient" + i;//Se concatena la key con el indice para ingredientes
        let keyMeasure = "strMeasure" + i;//Se concatena la key con el indice para cantidades
        let $divIngredientes = document.getElementById('ingredients');//Se obtiene el div donde se pondran los ingredientes
        if (comida[key] !== "") {//Si el contenido es vacio, significa que no hay mas ingredientes
            let $ingrediente = document.createElement('li');//Se crea el elemento de la lista de ingredientes
            $ingrediente.innerHTML = `${comida[key]} <b>${comida[keyMeasure]}</b>`;//Se agrega el ingrediente y su cantidad
            $divIngredientes.appendChild($ingrediente);//Se inserta el elemento en la lista
        }
    }
    recetasCarrusel(comida.strArea);//Se llama a la funcion con el area
}
const recetasCarrusel = (area)=> {//Funcion para llenar el carrusel con recetas del misma area
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`).then(response=>response.json())
        .then(recetas=>{
            let parecidas=recetas.meals.sort(() => 0.5 - Math.random()).slice(0,5);//Se ordenan aleatoriamente y se obtienen 5 recetas
            renderCarousel(parecidas);
            goToSlide(1);
        }).catch(exception => mostrarError(exception));
}
const mostrarError = (error) => {
    let notificacion = document.querySelector('.notification');//Se obtiene el div con la clase de notificacion
    notificacion.textContent = error;//Se le ingresa el texto de error cachado
    notificacion.classList.remove('is-hidden');//Se elimina la clase hidden para que se muestre
}
