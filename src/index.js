import main from "./js/main"
// const {
//   default: { singleDeckGame }
// } = require("blackjack-dealer-logic");

alert("HELLO!");

const buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {

  button.addEventListener("click", () => {

    const paragraph = document.createElement("p");

    paragraph.classList.add("newParagraph");

    paragraph.textContent = "My silly paragraph!";

    document.body.append(paragraph);

  });

  // backgroundButton.addEventListener("click", () => {
  //   const paragraph = document.querySelector(".newParagraph");

  //   paragraph.classList.add("redBackground");
  //   paragraph.classList.remove("newParagraph");
  // });

  main()