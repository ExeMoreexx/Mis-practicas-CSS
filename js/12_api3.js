var divResults = document.querySelector("#Resultado");

const verFotos = async () => {
    let albums = parseInt(document.querySelector("#album").value);
const repuesta = await fetch("https://jsonplaceholder.typicode.com/photos");
  const json = await repuesta.json();
  divResults.innerHTML = "";
  json.map(foto => {
    if (albums == parseInt(foto.albumId)) {
      let divFoto = document.createElement("div");
      divFoto.className="foto";
      divFoto.innerHTML=`
      <img src="${foto.url}" width="100%" heigth="">
      <p>${foto.title}</p>
      <h2>${foto.id}</h2>
      `;
    divResults.appendChild(divFoto);
    }
  });
};

const cleaar = async () => {
  divResults.innerHTML = "";
};
