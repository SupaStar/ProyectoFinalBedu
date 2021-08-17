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
import '../css/results.css';
// Create cards
const searchInput = document.querySelector("#input-meal");
const searchButton = document.querySelector("#search-meal");
const notificacion = document.querySelector('.notification');
const containerCards = document.body.querySelector("#container-cards");

/* const createCard = (recipeName, imageSrc, placeHolder) => {
	// Create a node with several classes and children
	const createNodeClassChild = (tagNode, classArr, childrenArr) => {
		const element = document.createElement(tagNode);
		for (const classValue of classArr) {
			element.classList.add(classValue);
		}
		if (childrenArr !== null) {
			for (const child of childrenArr) {
				element.appendChild(child);
			}
		}
		return element;
	};
	// Image Content
	const image = new Image();
	image.src = imageSrc;
	image.alt = placeHolder;
	const spanImage = createNodeClassChild("span", ["image"], [image]);
	const cardImage = createNodeClassChild("div", ["card-image"], [spanImage]);
	// Card Header
	const pHeader = createNodeClassChild(
		"p",
		[
			"card-header-title",
			"title",
			"is-size-5-mobile",
			"is-size-3",
			"has-text-weight-medium",
		],
		null
	);
	pHeader.textContent = recipeName;
	const cardHeader = createNodeClassChild("div", ["card-header"], [pHeader]);
	// Wrap anchor in final div and append to container
	const aCard = createNodeClassChild("a", ["card"], [cardHeader, cardImage]);
	const mealCard = createNodeClassChild(
		"div",
		[
			"column",
			"is-mobile",
			"is-half-tablet",
			"is-3-desktop",
			"m-auto",
			"card__image-zoom",
		],
		[aCard]
	);
	containerCards.appendChild(mealCard); // Ad Card in container
}; */

const auxEndpoint = (searchFor, request) => {
    switch (searchFor) {
        case "meal":
            if (request.length === 1) return `https://www.themealdb.com/api/json/v1/1/search.php?f=${request}`;
            return `https://www.themealdb.com/api/json/v1/1/search.php?s=${request}`;
        case "ingredient":
            return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${request}`;
        case "category":
            return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${request}`;
        case "area":
            return `https://www.themealdb.com/api/json/v1/1/filter.php?a=${request}`;
    }
};

const containerMatch = document.querySelectorAll(".field.has-addons");
searchMatch(containerMatch[0])
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
        //Si se escribió algo entra a este if
        fetch(auxEndpoint('meal', search))
            .then(response => response.json())
            .then(data => {
                notificacion.classList.add('is-hidden')
                containerCards.innerHTML = data.meals
                    .map(
                        meal =>
                            `<div class="column is-mobile is-half-tablet is-3-desktop m-auto card__image-zoom">
                        <a class="card" href="recipe.html?id=${meal.idMeal}" >
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
                    .join(""); //Junta todos los elementos
            }).catch(error => {
            notificacion.classList.remove('is-hidden')
        });
        searchInput.value = "";

    }
}
;
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
buttonGetCategory.addEventListener("click", function () {
    categoryVal = categoryDropButton.childNodes[1].textContent
});

// Función general para los dropDown, no funciona correcto

// categoryDropButton.addEventListener("click", selectDropdown(categoryDropdown, categoryDropButton));
// areaDropButton.addEventListener("click", selectDropdown(areaDropdown, areaDropButton));
function selectDropdown(dropDown, buttonClicked) {
    dropDown.classList.toggle("is-active");
    const optionsDropdown = dropDown.querySelectorAll(".dropdown-item");
    optionsDropdown.forEach(item => {
        item.addEventListener("click", () => {
            buttonClicked.childNodes[1].textContent = item.textContent
            dropDown.classList.remove("is-active")
        })
    })
}

let categorias = document.querySelector('#dropdown-menu3 .dropdown-content').children;
let areas = document.querySelector('#dropdown-menu4 .dropdown-content').children;
Array.from(categorias).forEach(categoria => {
    categoria.addEventListener('click', function () {
        busquedaCategorias(categoria);
    });
})
Array.from(areas).forEach(area => {
    area.addEventListener('click', function () {
        busquedaAreas(area);
    });
})
const busquedaCategorias = (categoria) => {
    containerCards.innerHTML = "";
    fetch(auxEndpoint('category', categoria.textContent))
        .then(response => response.json())
        .then(response => {
            response.meals.forEach(meal => {
                let $card = document.createElement('div');
                $card.className = 'column is-mobile is-half-tablet is-3-desktop m-auto card__image-zoom';
                $card.innerHTML = `
                        <a class="card" href="recipe.html?id=${meal.idMeal}">
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
            })
        })
}
const busquedaAreas = (area) => {
    containerCards.innerHTML = "";
    fetch(auxEndpoint('area', area.textContent))
        .then(response => response.json())
        .then(response => {
            response.meals.forEach(meal => {
                let $card = document.createElement('div');
                $card.className = 'column is-mobile is-half-tablet is-3-desktop m-auto card__image-zoom';
                $card.innerHTML = `
                        <a class="card" href="recipe.html?id=${meal.idMeal}">
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
            })
        })
}
const urlParam = window.location.search.substring(1);
if (urlParam !== "") {
    const platillo = urlParam.split('=')[1];
    fetch(auxEndpoint('meal', platillo)).then(response => response.json())
        .then(response => {
            response.meals.forEach(meal => {
                let $card = document.createElement('div');
                $card.className = 'column is-mobile is-half-tablet is-3-desktop m-auto card__image-zoom';
                $card.innerHTML = `
                        <a class="card" href="recipe.html?id=${meal.idMeal}">
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
            })
        }).catch(error => {
        notificacion.classList.remove('is-hidden');
    })
}
