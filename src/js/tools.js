//Guarda los parametros de la url en un array.
export const URL = () =>
  window.location.search
    .replace("?", "")
    .split("&")
    .map((param) => param.split("="));

//Coloca mayuscula a la primera letra.
const Capitalize = (param) => param.charAt(0).toUpperCase() + param.slice(1);

//Asigna el nombre de usuario al titulo.
export const UserTitle = (URL) => {
  const title = document.getElementById("userTitle");
  const name = URL.filter((i) => i[0] == "Nombre")[0][1];
  title.innerText = `¡Mucha suerte, ${
    isNaN(name) ? Capitalize(name) : `N°${name}`
  }!`;
};

//Número secreto
export const SecretNumber = () => Math.floor(Math.random() * 100) + 1;

//ColdHotBurn
export const ColdHotBurn = (secret, inputNumber) => {
  const secretNumber = secret;
  const myNumber = parseInt(inputNumber);
  let diferencia = secretNumber - myNumber;

  if (
    (diferencia <= 5 && diferencia >= 1) ||
    (diferencia >= -5 && diferencia <= -1)
  ) {
    return "Me quemo!!";
  }

  if (
    (diferencia <= 15 && diferencia >= 6) ||
    (diferencia >= -15 && diferencia <= -6)
  ) {
    return "Caliente!!";
  }

  if (
    (diferencia <= 25 && diferencia >= 16) ||
    (diferencia >= -25 && diferencia <= -16)
  ) {
    return "Tibio!!";
  }

  if (diferencia >= 26 || diferencia <= -26) {
    return "Frio!!";
  }
};
