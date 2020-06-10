import { UserTitle, URL, SecretNumber } from "./tools.js";

UserTitle(URL());

const btn = document.getElementById("btn_number");
let theSecretNumber = SecretNumber();

let roundNumber = 10;
let numberTries = 0;

//Event Click

btn.onclick = () => {
  if (roundNumber !== 0) {
    //Inputs forms
    let number = document.getElementById("input_number");
    let list = document.getElementById("list_number");
    //Message
    let message = document.getElementById("message");
    let round = document.getElementById("round");

    if (roundNumber !== 0 && number.value !== "" && !isNaN(number.value)) {
      if (number.value == theSecretNumber) {
        message.innerText = `¡Lo lograste! ${
          numberTries == 0 ? "En primer vuelta. Felicitaciones." : ""
        }`;
      } else {
        if (number.value < theSecretNumber) {
          message.innerText = "El número secreto es mas grande.";
        } else {
          message.innerText = "El número secreto es mas chico.";
        }
        roundNumber--;
        numberTries++;
      }
      list.innerText += ` ${number.value}`;
    }
    round.innerText = `Te quedan ${roundNumber} intentos.`;
    number.value = "";
  }

  if (roundNumber == 0) {
    message.innerText = "Perdiste, marico.";
  }
};
