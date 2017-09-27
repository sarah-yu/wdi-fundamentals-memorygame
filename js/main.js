// array of selectable cards
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

// array of cards selected by user
var cardsInPlay = [];

// check for match between cards selected
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
	} else {
			alert("Sorry, try again");
	};
	cardsInPlay = [];
};

// flip the selected card and push it into cardsInPlay[]
var flipCard = function () {
	// check if card has already been selected
	if (this.getAttribute("src") !== "images/back.png") {
		alert("You already chose this card!");
	} else {
		var cardId = this.getAttribute("data-id");
		this.setAttribute("src", cards[cardId].cardImage);

		cardsInPlay.push(cards[cardId].rank);

		// if two cards have been selected, run checkForMatch()
		if (cardsInPlay.length === 2) {
			checkForMatch();
		};

		// console messages to check if everything is working 
		/* console.log("User flipped " + cards[cardId].rank + ".");
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit); */
	};
};

// create game board with selectable cards
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	};
};

// when user clicks button, reset game board
var resetButton = document.getElementsByTagName("button")[0];

var resetGame = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.getElementsByTagName("img")[i];
		cardElement.setAttribute("src", "images/back.png");
	};
	cardsInPlay = [];
};

resetButton.addEventListener("click", resetGame);

createBoard();