import 'bulma/css/bulma.css'

let boton = document.getElementById("buscar");
boton.addEventListener('click', function () {
    let busqueda = document.getElementById('busqueda').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busqueda}`)
        .then(response => response.json())
        .then(data => crearElementos(data))
        .catch(exception => console.log(exception));
});
const crearElementos = (resultados) => {
    if (resultados.meals != null) {
        let $resultados = document.querySelector('#resultados');
        $resultados.innerHTML = ``;
        resultados.meals.forEach(function (nuevo) {
            let $cardDiv = document.createElement('div');
            $cardDiv.className = 'card column';
            $cardDiv.innerHTML = `
<header class="card-header">
    <p class="card-header-title">
      ${nuevo.strMeal}
    </p>
  </header>
<div class="card-image">
    <figure class="image is-128x128">
      <img src="${nuevo.strMealThumb}" alt="${nuevo.strMeal}">
    </figure>
  </div>
<div class="card-content">
<a href="meal.html?id=${nuevo.idMeal}">Ver mas</a>
</div>`;

            $resultados.appendChild($cardDiv);
        });
    } else {
        alert("Sin resultados");
    }
}
