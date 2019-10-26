
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
  }

}