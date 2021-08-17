let buttonSearch = document.getElementById('buscar');
buttonSearch.addEventListener('click', () => {
    let platillo=document.getElementById('platillo').value;
    window.location=`/results.html?busqueda=${platillo}`;
})
