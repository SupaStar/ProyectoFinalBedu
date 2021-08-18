let buttonSearch = document.getElementById('buscar');
let inputSearch = document.getElementById('platillo');
buttonSearch.addEventListener('click', (e) => {
    e.preventDefault();
    redireccionar();
})
inputSearch.addEventListener('keydown', (event) => {
    event.preventDefault();
    var keycode = event.key;
    if (keycode === 'Enter') {
        redireccionar();
    }
});
const redireccionar=()=>{
    let platillo = inputSearch.value;
    window.location = `/results.html?busqueda=${platillo}`;
}
