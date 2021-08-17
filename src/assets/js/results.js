/* <div class="column is-mobile is-half-tablet is-3-desktop m-auto card__image-zoom">
	<a class="card">
		<div class="card-header">
			<p class="card-header-title title is-size-5-mobile is-size-3 has-text-weight-medium">Image name</p>
		</div>
		<div class="card-image">
			<span class="image">
				<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
			</span>
		</div>
	</a>
</div> */

// Create cards
const searchInput = document.querySelector("#input-meal");
const searchButton = document.querySelector("#search-meal");

const containerCards = document.body.querySelector("#container-cards");

const auxEndpoint = (request) => {
    // Function to set different endpoint for search
    let endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?';
    request.length === 1 ? endPoint+='f='+request : endPoint+='s='+request
	return endPoint;
};

const containerMatch = document.querySelectorAll(".field.has-addons");
let searchType = '';
// Addons
function searchMatch(addons) {
	const optionButtons = addons.querySelectorAll("button");
	optionButtons.forEach(myButton => {
		myButton.addEventListener("click", () => {
			optionButtons.forEach(btn => btn.classList.remove("is-focused"));
			myButton.classList.add("is-focused");
			searchType = myButton.dataset.target; // Opción de búsqueda o total de elementos de búsqueda
		});
	});
}
function buscarMeal(event) {
	event.preventDefault();
	let search = searchInput.value.trim(); //El trim quita los espacios en blanco
	if (search) {
		//Si se escribió algo entra a este if y ejecuta fetch y llenado de cards
		fetch(auxEndpoint(search))
        .then(response => response.json())
        .then(data => {
            if(data.meals){
				containerCards.innerHTML = data.meals
					.map(meal =>`<div class="column is-mobile is-half-tablet is-3-desktop m-auto card__image-zoom">
                        <a class="card">
                            <div class="card-header">
                                <p class="card-header-title title is-size-5-mobile is-size-3 has-text-weight-medium">${meal.strMeal}</p>
                            </div>
                            <div class="card-image">
                                <span class="image">
                                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                                </span>
                            </div>
                        </a>
                    </div>`
					)
					.join(""); // Junta todos los elementos
			} else showModal(); // Si no se tienen datos muestra modal
        });
		searchInput.value = "";
	}
};
searchButton.addEventListener("click", buscarMeal);
searchInput.addEventListener("keydown", function (e) {
	if (e.key === "Enter") buscarMeal(e);
});

// dropdowns
const categoryDropdown = document.querySelector("#drop-category");
const categoryDropButton = categoryDropdown.querySelector("#drop-category__button");
const buttonGetCategory = document.querySelector("#search-for-category");
let categoryVal = '';

const areaDropdown = document.querySelector("#drop-area");
const areaDropButton = areaDropdown.querySelector("#drop-area__button");
const searchForArea = document.querySelector("#search-for-area");
let area = '';

categoryDropButton.addEventListener("click", () => {
    categoryDropdown.classList.toggle("is-active");
    const optionsDropdown = categoryDropdown.querySelectorAll(".dropdown-item");
    optionsDropdown.forEach(item => {
        item.addEventListener("click", () => {
            categoryDropButton.childNodes[1].textContent = item.textContent
            categoryDropdown.classList.remove("is-active")
        })
    })
})
areaDropButton.addEventListener("click", () => {
    areaDropdown.classList.toggle("is-active");
    const optionsDropdown = areaDropdown.querySelectorAll(".dropdown-item");
    optionsDropdown.forEach(item => {
        item.addEventListener("click", () => {
            areaDropButton.childNodes[1].textContent = item.textContent
            areaDropdown.classList.remove("is-active")
        })
    })
})
// 
buttonGetCategory.addEventListener("click", function() { 
    categoryVal = categoryDropButton.childNodes[1].textContent 
});


// modal
function showModal(){
    const modalContainer = document.querySelector(".modal");
    modalContainer.classList.add('is-active')
    setTimeout(() => {
        modalContainer.classList.remove('is-active')
    }, 2000);
}