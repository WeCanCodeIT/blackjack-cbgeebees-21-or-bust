
module.exports = {

  generateCard(card) {
    const playingCard = document.createElement("section");
    playingCard.classList.add("playing-card");

    const valueContainer = document.createElement("section");
    valueContainer.classList.add("value-container");

    const value = document.createElement("span");
    value.classList.add("value");
    value.textContent = card.getValue() + card.getSuit();

    valueContainer.append(value);
    playingCard.append(valueContainer);

    return playingCard;
  },

  hitButtonEvent(singleDeckGame, userSection, dealerSection) {
    singleDeckGame.hitUser();
    let userCardsArray = singleDeckGame.getUserHand().getCards();
    playingCardUser = this.generateCard(userCardsArray[userCardsArray.length - 1]);
    // evaluate if user is bust, if so, user loses
    if (singleDeckGame.evaluateUser() > 21) {
      console.log("user busted");
      result = singleDeckGame.outcome();
      console.log(result);
      this.renderHands(singleDeckGame,userSection,dealerSection);
      return playingCardUser;
    }
    return playingCardUser;
  },

  renderHands(singleDeckGame,userSection,dealerSection) {

    singleDeckGame.resetPlayers();
    singleDeckGame.resetAnte();

    singleDeckGame.deal();
    userSection.valueContainer = "<span></span>";
    //dealerSection
    let userChips = document.querySelector(".chips").innerHTML;
    let userAnte = prompt(
      "How much would you like to bet?\nYour current chip count is "
      + userChips);
    userChips -= userAnte;
    document.querySelector(".ante").innerHTML = userAnte;
    document.querySelector(".chips").innerHTML = userChips;

    let userCardsArray = singleDeckGame.getUserHand().getCards();
    let dealerCardsArray = singleDeckGame.getDealerHand().getCards();

    playingCardUser1 = this.generateCard(userCardsArray[0]);
    playingCardUser2 = this.generateCard(userCardsArray[1]);
    userSection.append(playingCardUser1);
    userSection.append(playingCardUser2);

    playingCardDealer1 = this.generateCard(dealerCardsArray[0]);
    playingCardDealer2 = this.generateCard(dealerCardsArray[1]);
    dealerSection.append(playingCardDealer1);
  }

}