let boton = document.getElementById("buscar");
boton.addEventListener('click', function () {
    let busqueda = document.getElementById('busqueda').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busqueda}`)
        .then(response => response.json())
        .then(data => console.log(data));
});

