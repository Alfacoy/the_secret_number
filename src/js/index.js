import { UserTitle, URL, SecretNumber, ColdHotBurn } from "./tools.js";
UserTitle(URL());

let theSecretNumber = SecretNumber();
let roundNumber = 10;
let numberTries = 0;
let areYouWin = false;
//Input Buttons
const btn = document.querySelector("#btn_number");
const tryAgain = document.querySelector("#reset");
//Game
const game = document.querySelector("#mainGame");
const btnTryAgain = document.querySelector("#btn_reset");
const list = document.querySelector("#list_number");
//Message
const message = document.querySelector("#message");
const round = document.querySelector("#round");
const winOrLose = document.querySelector("#winOrLose");
const secretNumber = document.querySelector("#secretNumber");
//Image Results
const gifResult = document.querySelector("#gifResults");
//Input Number
const number = document.querySelector("#input_number");

//Event Click
btn.onclick = () => {
  if (roundNumber !== 0) {
    if (
      roundNumber !== 0 &&
      number.value !== "" &&
      !isNaN(number.value) &&
      number.value <= 100
    ) {
      if (number.value == theSecretNumber) {
        message.innerText = `¡Lo lograste! ${
          numberTries == 0 ? "En primer vuelta. Felicitaciones." : null
        }`;
        areYouWin = true;
      } else {
        message.innerText = ColdHotBurn(theSecretNumber, number.value);

        roundNumber--;
        numberTries++;
      }

      list.innerText += ` ${number.value}`;
    }

    round.innerText =
      roundNumber > 0
        ? `Te quedan ${roundNumber} intentos.`
        : `No te quedan más intentos.`;
    number.value = "";
  }

  areYouWin
    ? (winOrLose.innerText = "Ganaste")
    : (winOrLose.innerText = "Perdiste");

  areYouWin
    ? (secretNumber.innerText = theSecretNumber)
    : (secretNumber.innerText = theSecretNumber);

  areYouWin ? null : gifResult.setAttribute("src", "../img/gif/rata.gif");

  roundNumber == 0 || areYouWin ? Hide() : null;
};

//Reset Game
btnTryAgain.onclick = () => Reset();

//Functions
function Reset() {
  roundNumber = 10;
  areYouWin = false;
  tryAgain.classList.add("hide");
  game.classList.remove("hide");
  list.innerText = "";
  message.innerText = "";
  round.innerText = `Te quedan ${roundNumber} intentos.`;
}

function Hide() {
  game.classList.add("hide");
  tryAgain.classList.remove("hide");
}
