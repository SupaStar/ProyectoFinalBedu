let buttonSearch = document.getElementById('buscar');
buttonSearch.addEventListener('click', (e) => {
    e.preventDefault();
    let platillo=document.getElementById('platillo').value;
    window.location=`/results.html?busqueda=${platillo}`;
})
