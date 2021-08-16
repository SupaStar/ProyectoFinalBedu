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
const searchButton = document.querySelector('#search-meal');
console.log(searchButton);
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
		["card-header-title", "title", "is-size-5-mobile", "is-size-3", "has-text-weight-medium"],
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
    containerCards.appendChild(mealCard);   // Ad Card in container
};

searchButton.addEventListener('click', () => createCard('Panquecos','https://bulma.io/images/placeholders/1280x960.png','hola'));

createCard('Test 1','https://bulma.io/images/placeholders/1280x960.png','hola');
createCard('Test 2','https://bulma.io/images/placeholders/1280x960.png','hola');
createCard('Test 3','https://bulma.io/images/placeholders/1280x960.png','hola');