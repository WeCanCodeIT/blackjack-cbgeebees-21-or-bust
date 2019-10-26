const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");

singleDeckGame.deal();

var userHandStr = singleDeckGame.getUserHandValue();

var userCardsArr = userHandStr.split(",")
// for each card in userCardsArr {}
  generateCard(userCardsArr[0]);
  generateCard(userCardsArr[1]);
//}
//generateCard(userHand.getCards()[1]);

function generateCard(card) {
  const playingCard = document.createElement("section");
  playingCard.classList.add("playing-card");

  const valueContainer = document.createElement("section");
  valueContainer.classList.add("value-container");

  const value = document.createElement("span");
  value.classList.add("value");
  value.textContent = card;

  valueContainer.append(value);
  playingCard.append(valueContainer);

  const table = document.querySelector(".table");
  table.append(playingCard);
}
