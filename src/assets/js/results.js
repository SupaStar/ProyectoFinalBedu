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

/* import "../css/results.css"; // LA BÚSQUEDA NO FUNCIONA POR EL IMPORT */
// Fetch for search and create cards
const searchInput = document.querySelector("#input-meal");
const searchButton = document.querySelector("#search-meal");

const containerCards = document.body.querySelector("#container-cards");
console.log(containerCards);
const auxEndpoint = (searchFor, request) => {
	switch (searchFor) {
		case "meal":
			if (request.length === 1)
				return `https://www.themealdb.com/api/json/v1/1/search.php?f=${request}`;
			return `https://www.themealdb.com/api/json/v1/1/search.php?s=${request}`;
		case "ingredient":
			return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${request}`;
		case "category":
			return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${request}`;
		case "area":
			return `https://www.themealdb.com/api/json/v1/1/filter.php?a=${request}`;
	}
};


function buscarMeal(event) {
	event.preventDefault();
	let search = searchInput.value.trim(); //El trim quita los espacios en blanco
	if (search) {
		//Si se escribió algo entra a este if
		fetch(auxEndpoint("meal", search))
			.then(response => response.json())
			.then(data => {
                
				if (data.meals) {
					containerCards.innerHTML = data.meals
						.map(
							meal => `<div class="column is-mobile is-half-tablet is-3-desktop m-auto card__image-background card__image-zoom">
                        <a class="card" href = "recipe.html?id=${meal.idMeal}" >
                            <div class="card-header">
                                <p class="card-header-title title is-size-5-mobile is-size-3 has-text-weight-medium">${meal.strMeal}</p>
                            </div>
                            <div class="card-image">
                                <span class="image">
                                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                                </span>
                            </div>
                        </a>
                    </div>`).join(""); // Junta todos los elementos
				} else showModal(); // Si no se tienen datos muestra modal
			});
		searchInput.value = "";
	}
}
searchButton.addEventListener("click", buscarMeal);
searchInput.addEventListener("keydown", function (e) {
	if (e.key === "Enter") buscarMeal(e);
});
// dropdowns
const categoryDropdown = document.querySelector("#drop-category");
const categoryDropButton = categoryDropdown.querySelector(
	"#drop-category__button"
);
const buttonGetCategory = document.querySelector("#search-for-category");
let categoryVal = "";

const areaDropdown = document.querySelector("#drop-area");
const areaDropButton = areaDropdown.querySelector("#drop-area__button");
const searchForArea = document.querySelector("#search-for-area");
let area = "";

categoryDropButton.addEventListener("click", () => {
	categoryDropdown.classList.toggle("is-active");
	const optionsDropdown = categoryDropdown.querySelectorAll(".dropdown-item");
	optionsDropdown.forEach(item => {
		item.addEventListener("click", () => {
			categoryDropButton.childNodes[1].textContent = item.textContent;
			categoryDropdown.classList.remove("is-active");
		});
	});
});
areaDropButton.addEventListener("click", () => {
	areaDropdown.classList.toggle("is-active");
	const optionsDropdown = areaDropdown.querySelectorAll(".dropdown-item");
	optionsDropdown.forEach(item => {
		item.addEventListener("click", () => {
			areaDropButton.childNodes[1].textContent = item.textContent;
			areaDropdown.classList.remove("is-active");
		});
	});
});

// //
// buttonGetCategory.addEventListener("click", function () {
// 	categoryVal = categoryDropButton.childNodes[1].textContent;
// });

// modal
function showModal() {
	const modalContainer = document.querySelector(".modal");
	modalContainer.classList.add("is-active");
	setTimeout(() => {
		modalContainer.classList.remove("is-active");
	}, 1800);
}

let categorias = document.querySelector(
	"#dropdown-menu3 .dropdown-content"
).children;
let areas = document.querySelector(
	"#dropdown-menu4 .dropdown-content"
).children;
Array.from(categorias).forEach(categoria => {
	categoria.addEventListener("click", function () {
		busquedaCategorias(categoria);
	});
});
Array.from(areas).forEach(area => {
	area.addEventListener("click", function () {
		busquedaAreas(area);
	});
});
const busquedaCategorias = categoria => {
	containerCards.innerHTML = "";
	fetch(auxEndpoint("category", categoria.textContent))
		.then(response => response.json())
		.then(response => {
			response.meals.forEach(meal => {
				let $card = document.createElement("div");
				$card.className =
					"column is-mobile is-half-tablet is-3-desktop m-auto card__image-zoom";
				$card.innerHTML = `
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
                `;
				containerCards.appendChild($card);
			});
		});
};
const busquedaAreas = area => {
	containerCards.innerHTML = "";
	fetch(auxEndpoint("area", area.textContent))
		.then(response => response.json())
		.then(response => {
			response.meals.forEach(meal => {
				let $card = document.createElement("div");
				$card.className =
					"column is-mobile is-half-tablet is-3-desktop m-auto card__image-zoom";
				$card.innerHTML = `
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
                `;
				containerCards.appendChild($card);
			});
		});
};
const urlParam = window.location.search.substring(1);
if (urlParam !== "") {
	const platillo = urlParam.split("=")[1];
	fetch(auxEndpoint("meal", platillo))
		.then(response => response.json())
		.then(response => {
            if(response.meals){
			response.meals.forEach(meal => {
				let $card = document.createElement("div");
				$card.className =
					"column is-mobile is-half-tablet is-3-desktop m-auto card__image-zoom";
				$card.innerHTML = `
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
                `;
				containerCards.appendChild($card);
			});
        } else showModal();
    });
}
