const [navLinkLang, navLinkFrame, navLinkTools] = document.querySelectorAll(
	".sidebar a"
);
const navLinks = document.querySelectorAll(".sidebar a");

const allCards = document.querySelectorAll(".card");

const reactCard = document.querySelector(".react");
const vueCard = document.querySelector(".vue");
const gitCard = document.querySelector(".git");
const gitlabCard = document.querySelector(".gitlab");
const jsCard = document.querySelector(".js");
const nodeCard = document.querySelector(".node");
const vscodeCard = document.querySelector(".vscode");
const pythonCard = document.querySelector(".python");
const htmlCard = document.querySelector(".html");
const cssCard = document.querySelector(".css");
const netlifyCard = document.querySelector(".netlify");

/*
TODO

-create blog style page for each of the cards with side bar
-create filter functionality to main page, sort by category
		*if element's class is != selection, display none

*/
const cardsContainer = document.querySelector(".cards-container");

const createCard = cardObj => {
	const card = document.createElement("div");
	const cardSvg = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"svg"
	);
	const svgPath = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"path"
	);

	cardSvg.setAttribute("xmlns", cardObj.svg.xmlns);
	cardSvg.setAttribute("width", cardObj.svg.width);
	cardSvg.setAttribute("height", cardObj.svg.height);
	cardSvg.setAttribute("viewBox", cardObj.svg.viewBox);

	svgPath.setAttribute("d", cardObj.svg.path.d);
	svgPath.setAttribute("transform", cardObj.svg.path.transform);
	svgPath.setAttribute("fill", cardObj.svg.path.fill);
	svgPath.setAttribute("stroke", cardObj.svg.path.stroke);
	svgPath.setAttribute("stroke-width", cardObj.svg.path["stroke-width"]);

	card.classList.add("card", "overlay", cardObj.name, cardObj.type);
	cardSvg.appendChild(svgPath);
	card.appendChild(cardSvg);

	return card;
};

cardsData.forEach(card => cardsContainer.appendChild(createCard(card)));

const addEventListeners = (element, eventsArray, callback) => {
	return eventsArray.forEach(event => {
		element.addEventListener(event, callback);
	});
};

addEventListeners(navLinkLang, ["click", "selected", "focus", "active"], () => {
	navLinkLang.style.backgroundColor = "red";
});
