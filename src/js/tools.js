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
  const title = document.getElementById("user_title");
  const name = URL.filter((i) => i[0] == "Nombre")[0][1];
  title.innerText = `Mucha suerte, ${Capitalize(name)}`;
};

//Número secreto
export const SecretNumber = () => Math.floor(Math.random() * 100) + 1;
