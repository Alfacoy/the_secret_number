import { UserTitle, URL, SecretNumber, ColdHotBurn } from "./tools.js";
UserTitle(URL());

//VARIABLES
let theSecretNumber = SecretNumber();
let roundNumber = 10;
let areYouWin = false;
//MAINGAME_INPUTS
const game = document.querySelector("#mainGame");
const number = document.querySelector("#inputNumber");
const btnNumber = document.querySelector("#btnNumber");
//MAINGAME_MESSAGE
const hearts = document.querySelectorAll(".hearts");
const coldHotBurnMessage = document.querySelector("#coldHotBurnMessage");
const listNumber = document.querySelector("#listNumber");
//MAINGAME_RESULTS
const winOrLose = document.querySelector("#winOrLose");
const secretNumber = document.querySelector("#secretNumber");
const gifResult = document.querySelector("#gifResults");
//MAINGAME_RESET
const tryAgain = document.querySelector("#tryAgain");
const btnTryAgain = document.querySelector("#btnReset");
btnNumber.onclick = () => {
  const regex = /[0-9]*/;
  let valor = number.value.match(regex);

  //NUMBER_VALIDATION
  if (roundNumber !== 0 && valor[0] && number.value <= 100) {
    if (number.value == theSecretNumber) {
      areYouWin = true;
    } else {
      coldHotBurnMessage.innerText = ColdHotBurn(theSecretNumber, number.value);
      roundNumber--;
      hearts[roundNumber].classList.add("hide");
      AddNumberToTheList(number.value);
      AddColorToTheNumber(coldHotBurnMessage);
    }
  }

  number.value = "";

  areYouWin
    ? (winOrLose.innerText = "Ganaste")
    : (winOrLose.innerText = "Perdiste");

  areYouWin
    ? (secretNumber.innerText = theSecretNumber)
    : (secretNumber.innerText = theSecretNumber);

  areYouWin
    ? gifResult.setAttribute("src", "../img/gif/bruja.gif")
    : gifResult.setAttribute("src", "../img/gif/rata.gif");

  roundNumber == 0 || areYouWin ? TryAgain() : null;
};

//Reset Game
btnTryAgain.onclick = () => Reset();

//Functions
function Reset() {
  roundNumber = 10;
  areYouWin = false;
  theSecretNumber = SecretNumber();
  listNumber.innerText = "";
  coldHotBurnMessage.innerText = "";
  tryAgain.classList.add("hide");
  game.classList.remove("hide");
  gifResult.setAttribute("src", "");
  hearts.forEach((item) => item.classList.remove("hide"));
}

function TryAgain() {
  game.classList.add("hide");
  tryAgain.classList.remove("hide");
}

function AddNumberToTheList(whatIsTheNumber) {
  const li = document.createElement("li");
  const content = document.createTextNode(whatIsTheNumber);
  li.appendChild(content);
  li.setAttribute("name", "numberList");
  listNumber.appendChild(li);
}

function AddColorToTheNumber(message) {
  const listNumberItems = document.getElementsByName("numberList");
  const arrayList = Array.from(listNumberItems);

  arrayList
    .filter((items) => items.className == "")
    .map((color) => {
      if (message.textContent == "Frio!!") {
        color.classList.add("cold");
      }
      if (message.textContent == "Tibio!!") {
        color.classList.add("warm");
      }
      if (message.textContent == "Caliente!!") {
        color.classList.add("hot");
      }
      if (message.textContent == "Me quemo!!") {
        color.classList.add("burn");
      }
    });
}
