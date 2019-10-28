const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");

const Dom = require("./utils/Dom");

const userSection = document.querySelector(".hand-container-user");
const dealerSection = document.querySelector(".hand-container-dealer");

Dom.renderHands(singleDeckGame,userSection,dealerSection);

const hitButton = document.querySelector(".button-hit");
hitButton.addEventListener("click", () => {
  console.log("hit button clicked");
  newUserCard = Dom.hitButtonEvent(singleDeckGame,userSection,dealerSection);
  userSection.append(newUserCard);

})






