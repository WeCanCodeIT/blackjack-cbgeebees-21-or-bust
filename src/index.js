const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");

const Dom = require("./utils/Dom");

singleDeckGame.resetPlayers();
singleDeckGame.resetAnte();

singleDeckGame.deal();

let userChips = document.querySelector(".chips").innerHTML;
let userAnte = prompt(
  "How much would you like to bet?\nYour current chip count is "
  + userChips);
userChips -= userAnte;
document.querySelector(".ante").innerHTML = userAnte;
document.querySelector(".chips").innerHTML = userChips;

const userSection = document.querySelector(".hand-container-user");
const dealerSection = document.querySelector(".hand-container-dealer");

let userCardsArray = singleDeckGame.getUserHand().getCards();
let dealerCardsArray = singleDeckGame.getDealerHand().getCards();

playingCardUser1 = Dom.generateCard(userCardsArray[0]);
playingCardUser2 = Dom.generateCard(userCardsArray[1]);
userSection.append(playingCardUser1);
userSection.append(playingCardUser2);

playingCardDealer1 = Dom.generateCard(dealerCardsArray[0]);
playingCardDealer2 = Dom.generateCard(dealerCardsArray[1]);
dealerSection.append(playingCardDealer1);

const hitButton = document.querySelector(".button-hit");
hitButton.addEventListener("click", () => {
  console.log("hit button clicked");
  newUserCard = Dom.hitButtonEvent(singleDeckGame);
  userSection.append(newUserCard);
})






