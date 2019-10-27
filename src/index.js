const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");

const Dom = require("./utils/Dom");

singleDeckGame.deal();

let userChips = 200;
let answer = prompt("How much would you like to bet?\nYour current chip count is "+userChips);

let userCardsArray = singleDeckGame.getUserHand().getCards();
let dealerCardsArray = singleDeckGame.getDealerHand().getCards();

const userSection = document.querySelector(".hand-container-user");
const dealerSection = document.querySelector(".hand-container-dealer");

playingCardUser1 = Dom.generateCard(userCardsArray[0]);
playingCardUser2 = Dom.generateCard(userCardsArray[1]);
userSection.append(playingCardUser1);
userSection.append(playingCardUser2);

playingCardDealer1 = Dom.generateCard(dealerCardsArray[0]);
playingCardDealer2 = Dom.generateCard(dealerCardsArray[1]);
dealerSection.append(playingCardDealer1);

const hitButton = document.querySelector(".button-hit");
hitButton.addEventListener("click", () => {
  console.log ("hit button clicked");
  newUserCard = Dom.hitButtonEvent(singleDeckGame);
  userSection.append(newUserCard);
  // if (singleDeckGame.isUserBust() {
  //   //end game and user loses
  // }
  
})






