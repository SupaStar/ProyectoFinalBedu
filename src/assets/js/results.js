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

// Elements
const searchInput = document.querySelector("#input-meal");
const searchButton = document.querySelector("#search-meal");

const containerCards = document.body.querySelector("#container-cards");


const createCard = (recipeName, imageSrc, placeHolder) => {
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
};

const auxEndpoint = (searchFor, request) => {
	switch (searchFor) {
		case "meal":
			if (request.length === 1)
				return `https://www.themealdb.com/api/json/v1/1/search.php?f=${request}`;
			return `https://www.themealdb.com/api/json/v1/1/search.php?s=${request}`;
		case "ingredient":
			return `www.themealdb.com/api/json/v1/1/filter.php?i=${request}`;
		case "category":
			return `www.themealdb.com/api/json/v1/1/filter.php?c=${request}`;
		case "area":
			return `www.themealdb.com/api/json/v1/1/filter.php?a=${request}`;
	}
};

const buscarMeal = event => {
	event.preventDefault();
	let search = searchInput.value.trim(); //El trim quita los espacios en blanco
	if (search) {
		//Si se escribió algo entra a este if
		fetch(auxEndpoint('meal',search))
			.then(response => response.json())
			.then(data => {
				containerCards.innerHTML = data.meals
					.map(
						meal =>
							`<div class="column is-mobile is-half-tablet is-3-desktop m-auto card__image-zoom">
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
                    </div>`
					)
					.join(""); //Junta todos los elementos
			});
		searchInput.value = "";
		
	}
};
searchButton.addEventListener("click", buscarMeal);

// const changeMatch = () => {
//     const containerMatch = document.querySelector("#matching");
//     const matchArr = containerMatch.querySelectorAll("button");
//     const  = containerMatch.querySelector(".is-focused");

//     matchArr.forEach(myButton => {
//         if(myButton)
//     })
// }