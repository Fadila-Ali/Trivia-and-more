const char_URL = `https://hp-api.herokuapp.com/api/characters`;

// toDo: Query Select all my elements
const section = document.querySelector(".section");
const nav = document.querySelector(".navbar");
const char = document.querySelector(".char");
const charH3 = document.querySelector(".char h3");
const trivia = document.querySelector(".trivia");
const triviaH3 = document.querySelector(".trivia h3");
const spells = document.querySelector(".spells");
const spellsH3 = document.querySelector(".spells h3");
const books = document.querySelector(".books");
const booksH3 = document.querySelector(".books h3");
const quotes = document.querySelector(".quotes");
const quotesH3 = document.querySelector(".quotes h3");
const about = document.querySelector(".about");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const middle = document.querySelector(".middle");
//! new elements
const quit = document.createElement("p");

// console.log(charH3);

charH3.addEventListener("click", () => {
  fetch(char_URL)
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson);

      char.style.display = "none";
      trivia.style.display = "none";
      spells.style.display = "none";
      books.style.display = "none";
      quotes.style.display = "none";
      about.style.display = "none";

      const navImg = document.createElement("img");
      navImg.setAttribute("src", `./wizard-hat.png`);
      navImg.setAttribute("alt", "Wizard hat");
      navImg.style.height = "200px";
      navImg.style.width = "200px";
      navImg.style.borderRadius = "40px";
      navImg.style.marginTop = "-50px";
      nav.append(navImg);

      const score = document.createElement("h4");
      score.innerHTML = `<strong>Score: </strong>`;
      nav.append(score);

      //! to go back to the main menu
      quit.innerHTML = `<span>Quit</span>`;
      quit.style.fontSize = 700;
      quit.style.background = "black";
      quit.style.padding = "1rem 2rem";
      quit.style.borderRadius = "30px";
      nav.append(quit);

      const middle = document.querySelector(".middle");
      middle.innerHTML = "";
    })
    .catch((err) => console.log(err));
});
