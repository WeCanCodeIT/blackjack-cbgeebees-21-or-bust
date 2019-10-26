const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");

const Dom = require("./utils/Dom");

singleDeckGame.deal();

var userCardsArray = singleDeckGame.getUserHand().getCards();
var dealerCardsArray = singleDeckGame.getDealerHand().getCards();


Dom.generateCard(userCardsArray[0]);
Dom.generateCard(userCardsArray[1]);

//generateCard(userHand.getCards()[1]);


