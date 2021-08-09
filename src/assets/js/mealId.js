import 'bulma/css/bulma.css'

const urlParam = window.location.search.substring(1);
const id = urlParam.split('=')[1];
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(meal => mostrarReceta(meal))
    .catch(exception => console.log(exception));

const mostrarReceta = (meal) => {
    let comida = meal.meals[0];
    let $divIngredientes = document.getElementById('ingredients');
    let $divInstrucciones = document.getElementById('instruction');
    $divInstrucciones.appendChild(document.createTextNode(comida.strInstructions))
    for (let i = 1; i <= 20; i++) {
        let key = "strIngredient" + i;
        let keyMeasure = "strMeasure" + i;
        if (comida[key] !== "") {
            let $divP = document.createElement('div');
            $divP.className = 'level box';
            let $divImagen = document.createElement('div');
            $divImagen.className = 'level-left';
            let $figure = document.createElement('figure');
            $figure.className = 'image is-48x48';
            let $imagen = document.createElement('img');
            $imagen.src = `https://www.themealdb.com/images/ingredients/${comida[key]}.png`;
            $imagen.alt = `${comida[key]}`;
            $figure.appendChild($imagen);
            let $nombreIngrediente = document.createElement('span');
            $nombreIngrediente.textContent = comida[keyMeasure];
            $nombreIngrediente.className = "level-right";
            $divImagen.appendChild($figure);
            $divImagen.appendChild($nombreIngrediente);
            $divP.appendChild($divImagen);
            $divIngredientes.appendChild($divP);
        }
    }
}
